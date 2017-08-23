import React        from 'react';

import Nav        from './components/Nav';

export default class App extends React.Component {
  render() {
    return(
      <div className="container">
				<Nav />
				{this.props.children}
      </div>
    )
  }
}
