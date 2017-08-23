import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/style.css';

export default class Animation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['Item 1...', 'Item 2...', 'Item 3...', 'Item 4...']
    };

    this.handleAdd = this.handleAdd.bind(this);
  };

  handleAdd() {
    let newItems = this.state.items.concat([prompt('Create New Item')]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    let items = this.state.items.map(function (item, i) {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );

    }.bind(this));

    return (
      <div className="container">
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example"
                                 transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {items}
        </ReactCSSTransitionGroup>
        {this.props.children}
      </div>
    )
  }
}