import React  from 'react';
import 'whatwg-fetch';
import _      from 'lodash';

const uri = 'https://api.myjson.com/bins/7ahq1';

export default class Sample1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      models: []
    }
  }

  componentDidMount(){
    fetch(uri)
      .then(response=>{
        console.log(response, response.json().then(data=>console.log('myData', data)));
        let models = [];
        response.json().data.modelNameDTOs.forEach(model=>{
          models.push(_.pick(model,['label', 'modelImages[1].imageUrl', 'startMsrp']))
        });
        console.log(models);
        return response.json();
      })
      .catch(error =>this.setState({ error }))
  }

  render() {
    return (
      <div>
        <h1>Sample1...</h1>
        <select>
          {this.state.models.map((model, i) =>
            <option key={i}>{model.label}</option>)
          }
        </select>
      </div>
    )
  }
}