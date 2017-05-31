import React  from 'react';
import axios  from 'axios';
import _      from 'lodash';

const uri = 'https://api.myjson.com/bins/7ahq1';

const Item = (props) => <li>{props.label}</li>;

export default class Sample1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      models: []
    }
  }

  componentDidMount(){
    axios.get(uri)
      .then(response=>{
        let models = [];
        response.data.modelNameDTOs.forEach(model=>{
          models.push(_.pick(model,['label', 'modelImages[1].imageUrl', 'startMsrp']))
        });
        this.setState({models});
      })
      .catch(error=>this.setState({ error }))
  }

  render() {
    return (
      <div>
        <h1>Sample1 - Listing...</h1>
        <h3>Listing by dropdown</h3>
        <select>
          {this.state.models.map((model, i) =>
            <option key={i}>{model.label}</option>)
          }
        </select>

        <h3>Unordered listing</h3>
        <ul>{this.state.models.map((model,i) =>
          <Item key={i} label={model.label}/>)
        }</ul>


      </div>
    )
  }
}