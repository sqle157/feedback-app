// strict mode: add additonal checks and warnings within our application
import React from 'react';
import ReactDOM from 'react-dom'; // allow use to interact with DOM in the browser
import './index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
