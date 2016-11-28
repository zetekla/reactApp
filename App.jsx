import React from 'react';
import ReactDOM from 'react-dom';
// import PropsValidation from './PropsValidation.jsx';

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
		  data: 0
		}

		this.setNewNumber = this.setNewNumber.bind(this)
	}

	setNewNumber() {
      this.setState({data: this.state.data + 1})
  }

  render() {
    return (
			<div>
			  <button onClick   = {this.setNewNumber}>INCREMENT</button>
			  <Content myNumber = {this.state.data}></Content>
			</div>
    );
  }
}

class Content extends React.Component {
	constructor(props){
		super(props);

		this.state = {
		  value: 0
		}
	}

   componentWillMount() {
   		this.state.value++;
      console.log('Component WILL MOUNT!', this.state.value)
   }

   componentDidMount() {
   		this.state.value++;
      console.log('Component DID MOUNT!', this.state.value)
   }

   componentWillReceiveProps(newProps) {
   		this.state.value++;
      console.log('Component WILL RECIEVE PROPS!', this.state.value)
   }

   shouldComponentUpdate(newProps, newState) {
   		this.state.value++;
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
   		this.state.value++;
 			console.log('Component WILL UPDATE!', this.state.value);
   }

   componentDidUpdate(prevProps, prevState) {
   		this.state.value++;
      console.log('Component DID UPDATE!', this.state.value)
   }

   componentWillUnmount() {
   		this.state.value++;
      console.log('Component WILL UNMOUNT! gone by 8-secs', this.state.value)
   }

   render() {
			var Green = {
			  fontSize: 50,
			  color: 'Green'
			}
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
            <h3 style={Green}>{this.state.value}</h3>
         </div>
      );
   }
}
