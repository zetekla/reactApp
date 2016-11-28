import React from 'react';
import ReactDOM from 'react-dom';
// import PropsValidation from './PropsValidation.jsx';

export default class App extends React.Component {
	constructor(props) {
      super(props);

      this.state = {
         data: 'Initial data...',
         invincible: this.props.immutableData
      }

      this.updateState  	= this.updateState.bind(this);
      this.onClickEvent 	= this.onClickEvent.bind(this);
      this.ClickFromChild = this.ClickFromChild.bind(this);
      this.clearInput 		= this.clearInput.bind(this);

   };

   updateState(e) {
      this.setState({data: e.target.value})
   }

   onClickEvent(e){
   	this.setState({data: 'Data updated @ mainAppComponent'})
   }

   ClickFromChild(e){
   	this.setState({data: 'Data updated <= a Child Component!'})
   }

   clearInput() {
      this.setState({data: ''});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }

   render() {
      return (
         <div>
            <input type = "text" value = {this.state.data}
               onChange = {this.updateState} ref = "myInput"/>
            <button onClick = {this.onClickEvent}>CLICK</button>
            <button onClick = {this.clearInput}>CLEAR</button>
            <h4>{this.state.data}</h4>
            <span style={{color:'Red'}}>{this.state.invincible}</span>
            <br/>
            <Content myDataProp = {this.state.data}
               updateStateProp = {this.updateState} ClickFromChild = {this.ClickFromChild}></Content>
         </div>
      );
   }
}

class Content extends React.Component {
	render() {
	  return (
	     <div>
	     		<br/>
	     		<span style={{color:'olive'}}>FROM the Content Component</span>
	        <input type = "text" value = {this.props.myDataProp}
	           onChange = {this.props.updateStateProp} />
          <button onClick = {this.props.ClickFromChild}>CLICK</button>
	        <h3>{this.props.myDataProp}</h3>
	     </div>
	  );
	}
}