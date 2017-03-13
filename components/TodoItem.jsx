import React, { Component, PropTypes } from 'react'

export default class TodoItem extends Component {
   render() {
      return (
         <li>
            {this.props.text}
         </li>
      )
   }
}