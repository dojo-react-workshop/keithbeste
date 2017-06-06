import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	state = { isFormSubmitted: false}


	render(){
			if (!this.state.isFormSubmitted){
				return (

				<div>
					<h1>Submit Form</h1>
					<NameForm />	
				</div>
			)

			} else {
				return (
					<div>
						<h1>Validated</h1>
						<NameReply />
					</div>
				)
			}
		}
}


const NameForm = () => {
	return (
			// <form onSubmit={this.handleSubmit}>
			<form>
				<label>
					Name: <input type='text' value='Keith' />
				</label>
				<input type='submit'/>
			</form>
		)
}

const NameReply = () => {
	return (
		<div>
			Your name is Keith
		</div>

		)
}

ReactDOM.render(<App />, document.getElementById('root'));
