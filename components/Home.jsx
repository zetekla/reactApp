import React from 'react';
import Content    from './Content';
import $          from 'jquery';
import DomainListing          from './DomainListing';

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
       domains: [],
       invincible: this.props.route.immutableData,
       getName: function () {
       		return 'Pristine';
       }
    }
	}

  componentDidMount() {
    $.getJSON("../assets/domains.json")
    .then(json =>this.setState({domains: json.domains, name: json.name}))
    .catch(error =>this.setState({error: json.error}))
  }

	render() {
	  return (
	     <div>
	        <h1>Home...</h1>

          <div>{this.state.name}</div>
          <br/>

	        <div>
					 {this.state.data.map((dynamicComponent, i) => <Content
					    key = {i} componentData = {dynamicComponent}/>)}
					</div>

          <br/>
          <br/>

          <div>
           {this.state.domains.map((domain, i) => <DomainListing
              key = {i} domain = {domain}/>)}
          </div>

					<div>
						<h5>greeting from {this.state.getName()}!</h5>
						<span style={{color:'Red'}}>{this.state.invincible}</span>
					</div>
	     </div>
	  )
	}
}