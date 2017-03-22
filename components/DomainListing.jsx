import React from 'react';

export default class DomainListing extends React.Component {
	render() {
	  return (
      <tr>
          <td style={{color:'green'}}>{this.props.domain.domain}</td>
          <td><input type="checkbox" name="selected"></input></td>
          <td>{this.props.domain.price}</td>
      </tr>
	  );
	}
}