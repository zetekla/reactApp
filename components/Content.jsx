import React from 'react';

export default class Content extends React.Component {
	render() {
	  return (
	     <div>
	     		<div>{this.props.componentData.component}</div>
            <div>{this.props.componentData.id}</div>
	     </div>
	  );
	}
}