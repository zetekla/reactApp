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
                     <Link to="/" role="presentation">Main</Link>
                  </li>
                  <li>
                     <Link to="home" role="presentation" activeClassName="active btn btn-primary">Demo</Link>
                  </li>
                  <li>
                     <Link to="about" role="presentation" activeClassName="active btn btn-primary">About</Link>
                  </li>
                  <li>
                     <Link to="contact" role="presentation" activeClassName="active btn btn-primary">Contact</Link>
                  </li>
               </ul>
            </div>
            <div className="row">
              {this.props.children}
            </div>
            <div className="wrapper">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, natus quas? Animi aut consequuntur delectus dolorem eligendi esse exercitationem impedit in incidunt magni maiores, pariatur quo saepe, sed sunt suscipit?</p>
            </div>
         </div>
      )
   }
}