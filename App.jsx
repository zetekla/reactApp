import React from 'react';
import ReactDOM from 'react-dom';
// import PropsValidation from './PropsValidation.jsx';

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
		  data: []
		}

    this.setStateHandler 		= this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
	}

	setStateHandler() {
	  var item = "setState..."
	  var myArray = this.state.data;
	  myArray.push(item)
	  this.setState({data: myArray})
	};

	forceUpdateHandler() {
	  this.forceUpdate();
	};

	findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'green';
  }

  render() {
    return (
       <div>
          <button onClick = {this.setStateHandler}>SET STATE</button>
          <h4>State Array: {this.state.data}</h4>
					<br/>
          <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
          <h4>Random number: {Math.random()}</h4>
					<br/>
					<button onClick = {this.findDomNodeHandler}>FIND DOM NODE</button>
          <div id = "myDiv">NODE</div>
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
