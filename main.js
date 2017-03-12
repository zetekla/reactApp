import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2.jsx';
import App3 from './App3.jsx';

ReactDOM.render(<App3

								/>, document.getElementById('app'));

setTimeout(()=> {
ReactDOM.unmountComponentAtNode(document.getElementById('app'));	},1000000)
