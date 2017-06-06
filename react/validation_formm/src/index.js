import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	state = { 
    name: 'Keith',
    isFormSubmitted: false
    // description: ''
  	}


/////////////////////
	handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
    	[name]: value
    	});
  	}

  	handleSubmit = (event) => {
    	event.preventDefault();
    	console.log('You submitted: ', this.state)
  	}

//////////////////////////////

	render(){

			{ console.log ("name " + this.state.name + " h i ") } 
			{ console.log ("formsubmitted " + this.state.isFormSubmitted + " h i ") } 

			if (!this.state.isFormSubmitted){
				return (

				<div>
					<h1>Submit Form</h1>
					<NameForm name ={ this.state.name } />	
				</div>
			)

			} else {
				return (
					<div>
						<h1>Validated</h1>
						<NameReply name= { this.state.name } />

					</div>


				)
			}
		}
}


const NameForm = (props) => {
// class NameForm extends React.Component {
	const myName = props.name;  //this.props.name??
								//this.state.name

			{ console.log ("name " + myName + " NameForm ") } 
			// { console.log ("formsubmitted " + this.state.isFormSubmitted + " h i ") } 


	return (


			<form onSubmit={this.handleSubmit}>
				<label>
					Name: <input onChange={this.handleChange} type="text" value={ props.name }  />
				
				</label>
				<input type='submit'/>
			</form>
		)
	
}

const NameReply = (props) => {
	const myName = props.name

	return (
		<div>
			Your name is { myName } 
		</div>

		)
}

ReactDOM.render(<App />, document.getElementById('root'));
