import React from 'react';

export default class App extends React.Component {
  constructor (props) {
   super(props);

   this.state= {
     data:'Initial data...'
  }
   this.updateState = this.updateState.bind (this);

 };

   updateState(e) {
    this.setState({data: e.target.value});

  }

  render() {
    return (
      <div>
        <Content type = "text" abc = {this.state.data}
          updateXYZ = {this.updateState}></Content>
      </div>
   );
  }

}

class Content extends React.Component{
  render(){
    return (
      <div>
        <input type = "text" value = {this.props.abc}
          onChange = {this.props.updateXYZ} />
        <h4> {this.props.abc} </h4>
      </div>
    );
  }
}


