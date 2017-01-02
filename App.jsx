import React      from 'react';
import {Link} from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

export default class App extends React.Component {
  render() {
    return(
      <div>
      <ul>
         <li>
            <Link to="/">Main</Link>
         </li>
         <li>
            <Link to="home">Home</Link>
         </li>
         <li>
            <Link to="about">About</Link>
         </li>
         <li>
            <Link to="contact">Contact</Link>
         </li>
      </ul>

      {this.props.children}
      </div>
    )
  }
}

export {Home, About, Contact}