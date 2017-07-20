import React from 'react';
import PropTypes from 'prop-types';


function CompanyItem(props) {
  const { name, earnings } = props;
  console.log(props);
  return (
    <li>
      <div>
        <h2>Company name: {name}</h2>
        <p>Earnings: {earnings}</p>
      </div>
    </li>
  );
}

CompanyItem.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.number,
    companyName: PropTypes.string,
    earnings: PropTypes.number,
})};

export default CompanyItem;

