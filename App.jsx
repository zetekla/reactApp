import React from 'react';

class App extends React.Component {
  constructor(){
   super();
   this.firstname="Bo";
   this.lastname="Tran";
   this.phone="123";
   this.redstyle = {fontsize:100, color:'red'}
   this.bluestyle = {fontsize:100, color:'blue'}
   this.toggle=false;
  };

  render() {
    return (
       <div>
         <Header/>
         <Content/>
         <Acc/>

          <h1>{this.firstname}</h1>
          <h2>{this.props.invincibleProp}</h2>

          <h2 style={this.toggle ? this.redstyle : this.bluestyle}>SAMPLE TEXT!!</h2>

       </div>
    );
  }
}

App.defaultProps = {
    invincibleProp: 'I am the invincible Magneto!'
  , i2Prop: 'I am the invincible Cyclop'
  , i3Prop: 'I am the invincible Cyclop'
  , i4Prop: 'I am the invincible Cyclop'
};



class Header extends React.Component {
  render () {
    return (
     <div>
       <h1> ABC </h1>
        </div>
        );
  }
}


class Content extends React.Component {
  render () {
    return (
      <div>
        <h2> DEF </h2>
        <p> ABCDEFG </p>
            </div>
        );
      }
  }

class Acc extends React.Component {
  constructor () {
    super();
    var students = [
        {
          "id":1,
          "name": "Foo",
          "age": "20"
        },

        {
          "id":2,
          "name":"Bar",
          "age": "30"
        },
        {
        "id": "3",
        "name": "Baz",
        "age" : "40"
        },
        {
        "id": "4",
        "name": "Jerry",
        "age" : "26"
        }
      ];

    this.state= {
      data: students,
      header: "Hader ..",
      content: 'Cotent'
    }
  }
  render (){
   return (
     <div>
      <h1>{this.state.header}</h1>
      <h2>{this.state.content}</h2>
       <table>
          <tbody>
            {
              this.state.data.map(
                  (person,i)  => <TableRow key={i}  val ={i} data= {person} />
              )
            }
           </tbody>
        </table>
      </div>
    );
  }
}

class TableRow extends React.Component {
  render () {
    return (
      <tr>
        <td> {this.props.data.id}</td>
        <td> {this.props.data.name}</td>
        <td> {this.props.data.age}</td>
        <td> {this.props.val}</td>


      </tr>
      );
  }
}





export default App;


