import React from 'react';
// import PropsValidation from './PropsValidation.jsx';

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
       header: "Header from props...",
       "content": "Content from props..."
    }
	}


  render() {
   		var int = 1;

   		var myStyle = {
         fontSize: 17,
         color: '#FF0000'
      }

      var Olive = {
         fontSize: 22,
         color: 'Olive'
      }

      return (

         <div>
						<span>{int == 1 ? 'True!' : 'False'}</span>
						<h1 style = {Olive}>Main page</h1>
						<h1 style = {myStyle}>{this.props.immutableData}</h1>
						<Header headerProp = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
         </div>

      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.contentProp}</h2>
         </div>
      );
   }
}
