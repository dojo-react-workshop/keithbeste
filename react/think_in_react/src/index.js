import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ProductCategoryRow extends React.Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}

ProductCategoryRow.propTypes = {
	category: PropTypes.string.isRequired
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

ProductRow.propTypes = {
	product: PropTypes.object.isRequired
}

class ProductTable extends React.Component {

  render() {

  	console.log(this.props.showInStock)
  	console.log(this.props.searchString)

    var rows = [];
    var lastCategory = null;

    this.props.products.forEach((product) => {

      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      if (this.props.showInStock && product.stocked) { //checked so only show instock
      	if (product.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1 ) {  // and search text is found
      		rows.push(<ProductRow product={product} key={product.name} />);
      	}
      } else if (!this.props.showInStock) {           // not checked so show everything
      	if (product.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1 ) {  //and search text is found
      		rows.push(<ProductRow product={product} key={product.name} />);
      	}
      }
      lastCategory = product.category;

    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  
	inStockClick = (e) => {
		this.props.filterClick(e.currentTarget.checked)
	}

	searchText = (e) => {
		this.props.searchInput(e.currentTarget.value)
	}

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." onKeyUp={this.searchText}/>
        <p>
          <input type="checkbox" onClick={this.inStockClick}/>
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inStockOnly: false,
      searchString: ''
    };
  }

  productInStockClick = (value) => {
  	this.setState({inStockOnly: value})
  }

  searchText = (value) => {
  	this.setState({searchString: value})
  }


  render() {
    return (
      <div>
        <SearchBar filterClick={this.productInStockClick} searchInput={this.searchText}/>
        <ProductTable products={this.props.products} showInStock={this.state.inStockOnly} searchString={this.state.searchString} />
      </div>
    );
  }
}


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);