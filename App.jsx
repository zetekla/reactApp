import React from 'react';

class App extends React.Component {
	constructor(){
		super();

		this.state = {
			data:
			[
        {
           "id":1,
           "name":"Foo",
           "age":"20"
        },

        {
           "id":2,
           "name":"Bar",
           "age":"30"
        },

        {
           "id":3,
           "name":"Baz",
           "age":"40"
        }
      ]
		}
	}

  render() {
   		var int = 1;

   		var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }

      return (

         <div>
						<span>{int == 1 ? 'True!' : 'False'}</span>
						<h1 style = {myStyle}>Main page</h1>
						<table>
							<tbody>
                {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
             	</tbody>
           </table>
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

export default App;