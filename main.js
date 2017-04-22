import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.jsx';
import {Home,About,Todo,Contact} from './App.jsx';

import todoApp from './reducers/reducers'

let store = createStore(todoApp);

ReactDOM.render((
	<div>
 		<Router history = {browserHistory}>
      <Route path = "/" component ={App}>
				<IndexRoute component ={Home} immutableData ="look, I am a props and I am invincible!"/>
				<Route path = "home" component = {Home} />
				<Route path = "about" component = {About} />
				<Route path = "todo" component = {Todo} />
				<Route path = "contact" component = {Contact} />
      </Route>
    </Router>

    <Provider store = {store}>
      <Todo />
    </Provider>
	</div>
), document.getElementById('app'))