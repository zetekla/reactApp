import React      from 'react';
import {Link}     from 'react-router';
import Home       from './components/Home';
import About      from './components/About';
import Todo       from './components/Todo';
import Contact    from './components/Contact';
import Nav        from './components/Nav';

export default class App extends React.Component {


  render() {
    return(
      <div>
				<Nav />
				{this.props.children}
      </div>
    )
  }
}

export {Home, About, Todo, Contact}