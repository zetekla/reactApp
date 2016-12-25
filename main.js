import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import App from './App.jsx';
// import Routes from 'Routes.jsx';
// import PropsValidation from './PropsValidation.jsx';

ReactDOM.render(<App immutableData ="look, I'm a props and I'm invincible!"/>, document.getElementById('app'));

// ReactDOM.render(<Route Routes={Routes} history={browserHistory}/>,document.getElementById('app'));