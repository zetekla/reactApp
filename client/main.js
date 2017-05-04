import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import App from './App.jsx';

import Home       	from './components/Home';
import About      	from './components/About';
import TodoUI       from './components/TodoUI';
import Contact    	from './components/Contact';
import Animation 		from './components/Animation';
import Sample1 			from './components/Sample1';
import Sample2 			from './components/Sample2';
import Card 			from './components/Card';

ReactDOM.render((
	<div>
 		<Router history = {browserHistory}>
      <Route path = "/" component ={App}>
				<IndexRoute component ={Home} immutableData ="look, I am a props and I am invincible!"/>
				<Route path = "home" component = {Home} immutableData ="look, I am a props and I am invincible!"/>
				<Route path = "about" component = {About} />
				<Route path = "store" component = {TodoUI} />
				<Route path = "contact" component = {Contact} />
				<Route path = "animation" component = {Animation} />
				<Route path = "sample1" component = {Sample1} />
				<Route path = "sample2" component = {Sample2} />
				<Route path = "card" component = {Card} />
      </Route>
    </Router>
	</div>
), document.getElementById('app'));