import React, { Component } from 'react';

export default class App3 extends Component {
	constructor(props) {
		super(props);
	  this.state= {
	  	data:
	  	[
		  	{
		  		component: 'First',
		  		id:1
		  	},

	  	  {
		  		component: 'Second',
		  		id:2
		  	},
	  	  {
		  		component: 'Third',
		  		id:3
		  	}

	  	]
	  }

	}
	render() {
		return (
			<div>
				<h2>{this.state.data.map ((value,i)=> <Content
					key= {i} Dataa= {value}/>)} </h2>
			</div>
		);
	}
}

class Content extends React.Component {
	render () {
		return (
		<div>
		    <h1> {this.props.Dataa.component}														{this.props.Dataa.id} </h1>

		</div>
		);
	}
}
