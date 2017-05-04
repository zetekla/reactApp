import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem.jsx'

export default class TodoList extends Component {
   render() {
      return (
         <ul>
            {this.props.todos.map(todo =>
               <TodoItem
               key = {todo.id}
               {...todo}
               />
            )}
         </ul>
      )
   }
}