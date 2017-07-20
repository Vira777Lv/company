import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import CompanyItem from '../companyItem/CompanyItem';

class CompaniesList extends Component {
  render() {
    return (
      <ol>
        {this.props.companies.map((company) => (
          <CompanyItem
            key={company.id}
            name={company.companyName}
            earnings={company.earnings}
          />
        ))}
      </ol>
    );
  }
}

// export default CompaniesList;

// function CompanyList(props) {
//   const { companies } = props;
//   return (
//     <ol>
//       {companies.map((company) => (
//         <CompanyItem
//           key={company.id}
//           name={company.companyName}
//           earnings={company.earnings}
//         />
//       ))}
//     </ol>
//   );
// }

function mapStateToProps(state) {
  return {
    companies: state.companyData.companies,
  };
}

CompanyItem.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    companyName: PropTypes.string,
    earnings: PropTypes.number
  })),
};

export default connect(mapStateToProps)(CompaniesList);
