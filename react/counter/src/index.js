import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import styles from './index.css';

class App extends React.Component {
    state = { count: 1}
    render() {
        return (
            <div>
                <button className="addButton" onClick={() => this.setState({ count: this.state.count + 1 })}>Add Counter</button>
               <CounterList numCounters={this.state.count}/>
            </div>
        )
    }
}

onClick={()=>{this.setState({count: this.state.count + 1})


const CounterList = (props) => {
    const numOfCounters = props.numCounters;
    const countersToAdd = [];
    
    for(let i = 0; i < numOfCounters; i++){
        countersToAdd.push(<Counter key={i}/>)
    }
    return (
        <div className="counterList">
            {countersToAdd}
        </div>
    )
}

class Counter extends React.Component {
    state = { count:0 }
    render() {
        return (
            <div className="counter">
                <h4>{this.state.count}</h4>
                <button className="countButton" onClick={() => this.setState({ count: this.state.count + 1 })} >Increment</button>
                <button className="countButton" onClick={() => this.setState({ count: this.state.count - 1 })}>Decrement</button>
            </div>
        )
    }
}

ReactDOM.render(<App data={data.library} />, document.getElementById('root'));