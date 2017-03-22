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
       error: null,
       invincible: this.props.route.immutableData,
       getName: function () {
       		return 'Pristine';
       }
    }
	}

  componentDidMount() {
    $.getJSON("../assets/domains.json")
    .then(json =>{
      json.domains.forEach((v,k)=>{
        v.domainId = k+1;
        v.email = '';
      })
      this.setState({domains: json.domains})
    })
    .catch(error =>this.setState({ error }))
  }

  handleDomainClick(domain){
    console.log(domain.domainId);
    $.getJSON(`../assets/${domain.domainId}.json`)
    .then(json =>{
      domain.email = json.registrant_email;
      console.log(domain.email);
      this.setState({domain});
    })
    .catch(error =>this.setState({ error }))

    this.setState({ domainId: domain.domainId, domain: domain });
  }

  handleButtonClick(){
    this.setState({ domainId: null, domain: null });
  }

  renderDomains(){
    return (
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
    )
  }

  renderDetail(){
    return (
      <div className="row">
        <div>
          { this.state.domain ?
            <DomainView domain = {this.state.domain} onSubmit={this.handleSubmit}/>
            : null
          }
        </div>
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-9">
            <button onClick={() => this.handleButtonClick()}>Save changes</button>
          </div>
        </div>
      </div>
    )
  }

	render() {
	  return (
	     <div>
          { this.state.error ? <span className="alert alert-danger">{this.state.error}</span> : null }
          <br/>
          <br/>
          <h1>Home...</h1>

          <div>
           {this.state.data.map((dynamicComponent, i) => <Content
              key = {i} componentData = {dynamicComponent}/>)}
          </div>
          <br/>
          <br/>

          {
            this.state.domainId ? this.renderDetail() : this.renderDomains()
          }
					<div>
						<h5>greeting from {this.state.getName()}!</h5>
						<span style={{color:'Red'}}>{this.state.invincible}</span>
					</div>
	     </div>
	  )
	}
}