import React from 'react';
import ReactDOM from 'react-dom';

class App2 extends React.Component {
  constructor(){
     super();

   this.state={
      data:[],
      data1:0

   }
   this.setStateHandler = this.setStateHandler.bind(this);
   this.forceUpdHandler=this.forceUpdHandler.bind(this);
   this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   this.setNewNumber=this.setNewNumber.bind(this)
};
  setStateHandler() {
     var item = "ABCD>>>"
     var myArray =this.state.data;
     myArray.push(item)
     this.setState({data:myArray})

  };


  forceUpdHandler(){
   this.forceUpdate();

  };

  findDomNodeHandler() {
   var myDiv = document.getElementById('myDiv');
   ReactDOM.findDOMNode(myDiv).style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  setNewNumber(){
    this.setState({data1:this.state.data1+1})
  }

 render() {


    return (
       <div>
         <h3>Array: {this.props.propArray} </h3>
         <h3>Bool: {this.props.propBool ? "True" : "False"} </h3>
         <h3>Func: {this.props.propFunc(3)} </h3>
         <h3>Number: {this.props.propNumber} </h3>
         <h3>String: {this.props.propString} </h3>
         <h3>Object: {this.props.propObject.objectName1} </h3>
         <h3>Object: {this.props.propObject.objectName2} </h3>
         <h3>Object: {this.props.propObject.objectName3} </h3>

         <button onClick = {this.setStateHandler}> SET SATE </button>
         <h4> State Array:{this.state.data}</h4>
         <button onClick= {this.forceUpdHandler}> FORCE UPDATE</button>
         <h4> Random Number:{Math.round(Math.random()*1000)}</h4>
         <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
         <div id = "myDiv">NODE</div>
         <button onClick={this.setNewNumber}>Bonus</button>
         <Content1 myNumber= {this.state.data1}></Content1>

       </div>
    );
  }
}





App2.propTypes = {
    propArray:  React.PropTypes.array.isRequired ,
    propBool:   React.PropTypes.bool,
    propFunc:   React.PropTypes.func,
    propNumber: React.PropTypes.number,
    propString: React.PropTypes.string,
    propObject: React.PropTypes.object
}

App2.defaultProps = {
    propArray: [1,2,3,4],
    propFunc: function (e) {return e},
    propNumber: 1,
    propString: "String value...",

    propObject : {
        objectName1: "objectValue1"
        ,objectName2: "objectValue2"
        ,objectName3: "objectValue3"
    }
};

class Content1 extends React.Component {
   constructor(props){
    super(props);

    this.state = {
      value: 0
    }
  }


   componentWillMount() {
    this.state.value++;
      console.log('Component WILL MOUNT!',this.state.value)
   }

   componentDidMount() {
    this.state.value++;
      console.log('Component DID MOUNT!',this.state.value)
   }

   componentWillReceiveProps(newProps) {
    this.state.value++;
      console.log('Component WILL RECIEVE PROPS!',this.state.value)
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
    this.state.value++;
      console.log('Component WILL UPDATE!',this.state.value);
   }

   componentDidUpdate(prevProps, prevState) {
    this.state.value++;
      console.log('Component DID UPDATE!',this.state.value)
   }

   componentWillUnmount() {
    this.state.value++;
      console.log('Component WILL UNMOUNT!',this.state.value)
   }

   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}
export default App2;
