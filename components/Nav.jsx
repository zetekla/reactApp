import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <ul className="nav navbar-nav">
                  <li>
                     <Link to="/">Main</Link>
                  </li>
                  <li>
                     <Link to="home">Demo</Link>
                  </li>
                  <li>
                     <Link to="about">About</Link>
                  </li>
                  <li>
                     <Link to="contact">Contact</Link>
                  </li>
               </ul>
            </div>
            <div className="row">
              {this.props.children}
            </div>
         </div>
      )
   }
}