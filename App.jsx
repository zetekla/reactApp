<<<<<<< Updated upstream
import React      from 'react';
import ReactDOM   from 'react-dom';
import Content    from './components/Content';
=======
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Content from './components/Content';
>>>>>>> Stashed changes
// import PropsValidation from './PropsValidation.jsx';

export default class App extends React.Component {
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
         getName: function() { return 'Pristine'},
         invincible: this.props.immutableData
      }
   }

   render() {
      return (
         <div>
            <div>my name is {this.state.getName()}</div>
            <div id="#AppComponentId">
               {this.state.data.map((dynamicComponent, i) => <Content
                  key = {i} componentData = {dynamicComponent}/>)}
            </div>
            <div id="HomeComponent">
               <Home />
            </div>
         </div>
      );
   }
}