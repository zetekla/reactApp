import React from 'react';

export default class DomainListing extends React.Component {
	render() {
	  return (
      <tr>
          <td style={{color:'green'}}>
          	<a href={this.props.domain.id}>
          		{this.props.domain.domain}
          	</a>
          </td>
          <td><input type="checkbox" name="selected"></input></td>
          <td>{this.props.domain.price}</td>
      </tr>
	  );
	}
}