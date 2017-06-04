import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import styles from './index.css';
 

const App = (props) => {
	return (
		<div>
			<Square color='blue' fontColor='white' />
			<Square color='red' fontColor='blue' />
			<Square color='pink' fontColor='green'/>
		</div>
		// <Square />
		)
}

// class Square extends React.Component {
const Square = (props) => {
	const squareColor = props.color;
	const fontColor = props.fontColor;
	const style = {
		display: 'inline-block',
		width: '150px',
		height: '150px',
		verticalAlign: 'top',
		backgroundColor: squareColor,
		color: fontColor
	}

	const text = fontColor + ' on ' + squareColor;
	// console.log (text);

	return(
		// <div style={style} className='squareDiv'>{squareColor + fontColor}</div>
		<div style={style} className='squareDiv'>{text}</div>
		)
}		


ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
