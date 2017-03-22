import React from 'react';

export default class DomainListing extends React.Component {
	render() {
	  return (
	     <div>
          <div>{this.props.domain.id}</div>
	     		<div>{this.props.domain.domain}</div>
	     		<div>{this.props.domain.price}</div>
	     </div>
	  );
	}
}