import React from 'react';

const DomainView = (props) => {
  return (
    <div>
    	<div className="form-group">
			  <label className="control-label col-md-3" for="DomainName">Domain name</label>
			  <div className="col-md-9">
					<input type="text" className="form-control" id="DomainName" name="DomainName" placeholder="Enter domain name" value={props.domain.domain}>
				</div>
			</div>
			<div className="form-group">
			  <label className="control-label col-md-3" for="RegistranEmail">Registran Email</label>
			  <div className="col-md-9">
					<input type="text" className="form-control" id="RegistranEmail" name="RegistranEmail" placeholder="Enter registran email" value={props.domain.email}>
				</div>
			</div>
			<div className="form-group">
			  <label className="control-label col-md-3" for="Price">Price</label>
			  <div className="col-md-9">
					<input type="text" className="form-control" id="Price" name="Price" placeholder="Enter price" value={props.domain.price}>
				</div>
			</div>
    </div>
  );
};

export default DomainView