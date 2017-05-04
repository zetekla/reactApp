import React from 'react';
import {Link} from 'react-router';
import '../styles/style.css';

export default class Nav extends React.Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <ul className="nav nav-pills">
                  <li>
                     <Link to="/" role="presentation">☰</Link>
                  </li>
                  <li>
                     <Link to="home" role="presentation" activeClassName="active btn btn-primary">Home</Link>
                  </li>
                  <li>
                     <Link to="about" role="presentation" activeClassName="active btn btn-primary">About</Link>
                  </li>
                  <li>
                     <Link to="store" role="presentation" activeClassName="active btn btn-primary">Store</Link>
                  </li>
                  <li>
                     <Link to="contact" role="presentation" activeClassName="active btn btn-primary">Contact</Link>
                  </li>
                  <li>
                     <Link to="animation" role="presentation" activeClassName="active btn btn-primary">Animation</Link>
                  </li>
                  <li>
                     <Link to="sample1" role="presentation" activeClassName="active btn btn-primary">Sample1</Link>
                  </li>
                  <li>
                     <Link to="sample2" role="presentation" activeClassName="active btn btn-primary">Sample2</Link>
                  </li>
                  <li>
                     <Link to="card" role="presentation" activeClassName="active btn btn-primary">Card</Link>
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