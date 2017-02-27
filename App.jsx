import React from 'react';

export default class App extends React.Component {
   constructor(){
      super();
      this.firstname = "Will";
      this.lastname = "Smith";
      this.email = "wills@gmail.com";
      this.redStyle= {fontsize:100, color:'red'};
      this.blueStyle= {fontsize:100, color:'blue'};

      // boolean variable
      this.toggle = false;
   }

   render() {
      return (
         <div>
            <h1>It is {this.firstname}</h1>
            <h2 style={this.toggle ? this.redStyle : this.blueStyle}>
               It is {this.lastname}
            </h2>
            <h3>It is {this.email}</h3>
            <p data-myattribute = "somevalue">This is the content!!!</p>
         </div>
      );
   }
}
