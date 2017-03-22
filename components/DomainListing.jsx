import React from 'react';
import Filter from './Filter';

const DomainListing = props => {
  const classes = props.selected ? 'bold' : '';
  const isChecked = /\.cars|\.lol/.test(props.domain.domain)

  return (
    <tr>
        <td style={{color:'green'}} onClick={ props.onClick } className={classes}>
      		{props.domain.domain}
        </td>
        <td>
          <div>
            {isChecked &&
              <input type="checkbox" name="selected" checked={isChecked} readOnly></input>
            }
          </div>
        </td>
        <td>{Filter(props.domain.price)}</td>
    </tr>
  );
}

export default DomainListing