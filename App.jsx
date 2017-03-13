import React from 'react';
import {Link} from 'react-router';


export default class App extends React.Component {
  render() {
    return(
      <div>
      <ul>
      <li><Link to="home">Home</Link></li>
      <li><Link to="about">About</Link></li>
      <li><Link to="contact">Contact</Link></li>
      </ul>

      {this.props.children}
      </div>
    )
  }
}


export class Home extends React.Component {
  render() {
    return (
      <h1>Home...</h1>
    )
  }
}


export class About extends React.Component {
  render() {
    return (
      <h1>About...</h1>
    )
  }
}


export class Contact extends React.Component {
  render()  {
    return (
      <h1>Contact...</h1>
    )
  }
}