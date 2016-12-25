import React from 'react';

export default class Content extends React.Component {
<<<<<<< Updated upstream
	render() {
	  return (
	     <div>
	     		<div>{this.props.componentData.component}</div>
            <div>{this.props.componentData.id}</div>
	     </div>
	  );
	}
=======
   render() {
     return (
        <div id="ContentId">
            <div id="#cid2">{this.props.componentData.id}</div>
            <div id="#cid1">{this.props.componentData.component}</div>
        </div>
     );
   }
>>>>>>> Stashed changes
}