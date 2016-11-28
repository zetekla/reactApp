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

      this.updateState = this.updateState.bind(this);

   };

   updateState(e) {
      this.setState({data: e.target.value});
   }

   render() {
      return (
         <div>
            <input type = "text" value = {this.state.data}
               onChange = {this.updateState} />
            <h4>{this.state.data}</h4>
            <span style={{color:'Red'}}>{this.state.invincible}</span>
            <br/>
            <Content myDataProp = {this.state.data}
               updateStateProp = {this.updateState}></Content>
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
	        <h3>{this.props.myDataProp}</h3>
	     </div>
	  );
	}
}