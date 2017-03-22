import React              from 'react';
import Content            from './Content';
import $                  from 'jquery';
import DomainListing      from './DomainListing';
import DomainView         from './DomainView';

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
       domainId: null,
       domain: null,
       invincible: this.props.route.immutableData,
       getName: function () {
       		return 'Pristine';
       }
    }
	}

  componentDidMount() {
    $.getJSON("../assets/domains.json")
    .then(json =>{
      json.domains.forEach((v,k)=>v.domainId = k+1)
      this.setState({domains: json.domains})
    })
    .catch(error =>this.setState({ error }))
  }

  handleDomainClick(domain){
    console.log(domain);
    this.setState({ domainId: domain.domainId, domain: domain });
  }

  handleButtonClick(){
    this.setState({ domainId: null, domain: null });
  }

	render() {
	  return (
	     <div>
	        <h1>Home...</h1>
          <br/>

	        <div>
					 {this.state.data.map((dynamicComponent, i) => <Content
					    key = {i} componentData = {dynamicComponent}/>)}
					</div>

          <br/>
          <br/>

          <div>
            <table className="table table-striped">
              <thead>
                  <tr>
                      <th>Domain name</th>
                      <th>Uniregistry</th>
                      <th>Price</th>
                  </tr>
              </thead>
              <tbody>
               {this.state.domains.map((domain, i) =>
                  <DomainListing
                    selected={domain.id===this.state.domainId}
                    key = {domain.domainId}
                    domain = {domain}
                    onClick = { () => {this.handleDomainClick(domain)} }
                  />)
                }
              </tbody>
            </table>
          </div>

          <div>
          { this.state.domain ?
            <DomainView domain = {this.state.domain} onSubmit={this.handleSubmit}/>
            : null
          }
          </div>
          <button onClick={() => this.handleButtonClick()}>Save changes</button>

					<div>
						<h5>greeting from {this.state.getName()}!</h5>
						<span style={{color:'Red'}}>{this.state.invincible}</span>
					</div>
	     </div>
	  )
	}
}