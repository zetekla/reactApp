import React from 'react';

export default class ButtonLineUp extends React.Component {
   render() {
      return (
         <div>
            <h1>Buttons sampling...</h1>
            <Buttons>
               <button value="A">A</button>
               <button value="B">B</button>
               <button value="C">C</button>
            </Buttons>
         </div>
      )
   }
}

class Buttons extends React.Component {
  constructor(){
    super();
    this.state = {selected: 'None'}
  }

  selectItem(selected){
    this.setState({selected})
  }

  render(){
    let fn = child => React.cloneElement(child, {onClick: this.selectItem.bind(this, child.props.value)});

    let items = React.Children.map(this.props.children, fn);
    return(
      <div>
        <h2>You have selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}