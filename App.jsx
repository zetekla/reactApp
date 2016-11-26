import React from 'react';

export default class App extends React.Component {
	constructor(){
		super();

		this.state = {
       header: "Header from state...",
       "content": "Content from state..."
    }
	}


  render() {
   		var int = 1;

   		var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }

      var Olive = {
         fontSize: 100,
         color: 'Olive'
      }

      return (

         <div>
						<span>{int == 1 ? 'True!' : 'False'}</span>
						<h1 style = {Olive}>Main page</h1>
						<h1 style = {myStyle}>{this.props.immutableData}</h1>
						<h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
         </div>

      );
   }
}

class TableRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
	}
}