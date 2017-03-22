import React from 'react';

const DomainView = (props) => {
  return (
  	<form onSubmit={props.handleSubmit}>
	    <div>
	    	<div className="form-group">
				  <label className="control-label col-md-3" htmlFor="DomainName">Domain name</label>
				  <div className="col-md-9">
						<input type="text" className="form-control" id="DomainName" name="DomainName" placeholder="Enter domain name" value={props.domain.domain} readOnly></input>
					</div>
				</div>
				<div className="form-group">
				  <label className="control-label col-md-3" htmlFor="RegistranEmail">Registran Email</label>
				  <div className="col-md-9">
						<input type="text" className="form-control" id="RegistranEmail" name="RegistranEmail" placeholder="Enter registran email" value={props.domain.email} readOnly></input>
					</div>
				</div>
				<div className="form-group">
				  <label className="control-label col-md-3" htmlFor="Price">Price</label>
				  <div className="col-md-9">
						<input type="text" className="form-control" id="Price" name="Price" placeholder="Enter price" value={props.domain.price} readOnly></input>
					</div>
				</div>
	    </div>
    </form>
  );
};

export default DomainView