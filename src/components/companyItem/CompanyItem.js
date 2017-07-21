import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Well, Button } from 'react-bootstrap';


function CompanyItem(props) {
  const { name, earnings } = props;
  return (
    <Well>
      <Row>
        <Col md={4}>
          <li>
            <div>
              <h2>Company name:{name}</h2>
              <p>Earnings: {earnings}</p>
              <Button bsStyle="primary" style={{marginTop: '10px'}}>Load more...</Button>
            </div>
          </li>
        </Col>
      </Row>
    </Well>
  );
}

CompanyItem.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.number,
    companyName: PropTypes.string,
    earnings: PropTypes.number,
})};

export default CompanyItem;

