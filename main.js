import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import App from './App.jsx';
import {Home,About,Contact} from './App.jsx';

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
				<IndexRoute component = {Home} />
				<Route path = "home" component = {Home} />
				<Route path = "about" component = {About} />
				<Route path = "contact" component = {Contact} />
      </Route>
   </Router>

), document.getElementById('app'))