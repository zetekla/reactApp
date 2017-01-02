import React from 'react';
import Content    from './Content';

export default class Home extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
       data:
       [
          {
             component: 'First...',
             id: 1
          },

          {
             component: 'Second...',
             id: 2
          },

          {
             component: 'Third...',
             id: 3
          }
       ],
       invincible: this.props.route.immutableData,
       getName: function () {
       		return 'Pristine';
       }
    }
	}

	render() {
	  return (
	     <div>
	        <h1>Home...</h1>

	        <div>
					 {this.state.data.map((dynamicComponent, i) => <Content
					    key = {i} componentData = {dynamicComponent}/>)}
					</div>
					<div>
						<h5>greeting from {this.state.getName()}!</h5>
						<span style={{color:'Red'}}>{this.state.invincible}</span>
					</div>
	     </div>
	  )
	}
}