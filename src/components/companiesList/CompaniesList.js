import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as companyActions from '../../redux/actions/companyActions';

import { Grid, Col, Row, Button } from 'react-bootstrap';

import CompanyItem from '../companyItem/CompanyItem';

class CompaniesList extends Component {

  componentDidMount() {
    this.props.getCompanies(
      [
        {
          id: 1,
          companyName: 'Main LTD',
          mainCompany: true,
          earnings: 150000,
        },
        {
          id: 2,
          companyName: 'Second LTD',
          earnings: 1000,
          mainCompany: true,
        },
      ],
    );
  }

  render() {
    console.log('are we accessing the state: ', this.props.companies);
    const companyList = this.props.companies.map(function(company) {
      return (
        <Col xs={12} sm={6} md={4} key={company.id}>
          <CompanyItem
            key={company.id}
            name={company.companyName}
            earnings={company.earnings}
          />
        </Col>
      )
    });

    return (
      <Grid>
        <Row style={{marginTop: '50px'}}>
          <ol>{companyList}</ol>
        </Row>
      </Grid>
    );
  }
}


function mapStateToProps(state) {
  return {
    companies: state.companyData.companies,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCompanies: companyActions.GET_COMPANIES,
  }, dispatch)
}

CompanyItem.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    companyName: PropTypes.string,
    earnings: PropTypes.number
  })),
};

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList);
