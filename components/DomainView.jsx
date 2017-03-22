import React from 'react';
import Filter from './Filter';

const DomainView = (props) => {
  return (
  	<form onSubmit={props.handleSubmit} className="form-horizontal">
    	<div>
    		<div className="form-group">
				  <label className="control-label col-sm-3" htmlFor="DomainName"><b>Domain name</b></label>
				  <div className="col-sm-7">
						<input type="text" className="form-control" id="DomainName" name="DomainName" placeholder="Enter domain name" value={props.domain.domain} readOnly></input>
					</div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-3" htmlFor="RegistranEmail"><b>Registran Email</b></label>
				  <div className="col-sm-7">
						<input type="text" className="form-control" id="RegistranEmail" name="RegistranEmail" placeholder="Enter registran email" value={props.domain.email} readOnly></input>
					</div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-3" htmlFor="Price"><b>Price</b></label>
				  <div className="col-sm-7">
						<input type="text" className="form-control" id="Price" name="Price" placeholder="Enter price" value={Filter(props.domain.price)} readOnly></input>
					</div>
				</div>
    	</div>
    </form>
  );
};

export default DomainView