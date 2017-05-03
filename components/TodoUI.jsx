import React, { Component, PropTypes } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todoApp from '../reducers/reducers'

import Todo       from './Todo'

let store = createStore(todoApp);

export default class TodoUI extends Component {
  render() {
    return (
      <div>
        <Provider store = {store}>
          <Todo />
        </Provider>
      </div>
    )
  }
}