import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// import PropsValidation from './PropsValidation.jsx';

ReactDOM.render(<App immutableData ="look, I'm a props and I'm invincible!"/>, document.getElementById('app'));

setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 8000);