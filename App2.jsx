import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor (props) {
   super(props);

   this.state= {
     data:'Initial data...'
  }
   this.updateState = this.updateState.bind (this);
   this.clearInput=this.clearInput.bind(this)

 };

   updateState(e) {
    this.setState({data: e.target.value});

  }
   clearInput(r) {
    this.setState ({data: r.target.value})
    console.log(this.refs.myContent);
    ReactDOM.findDOMNode(this.refs.myContent.refs.myInput).focus();
   }

  render() {
    return (
      <div>
        <Content type = "text" abc = {this.state.data}
          updateXYZ = {this.updateState}
          clearInput= {this.clearInput} ref="myContent"></Content>

      </div>
   );
  }

}

class Content extends React.Component{
  render(){
    return (
      <div>
        <input type = "text" value = {this.props.abc}
          onChange = {this.props.updateXYZ} ref="myInput"/>
        <button onClick= {this.props.clearInput} > CLEAR </button>
        <h4> {this.props.abc} </h4>
      </div>
    );
  }
}


