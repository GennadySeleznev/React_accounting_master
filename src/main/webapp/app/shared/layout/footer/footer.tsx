import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';

const Footer = props => (
  <div className="footer page-content">
    <Row>
      <Col md="12">
      <span>
        <a href="">Document Management System</a> &copy; 2020 Picosoft Solutions
      </span>
      <br/>
      <span className="ml-auto">
        Powered by <a href="">Picosoft Solutions</a>
      </span>
      </Col>
    </Row>
  </div>
);

export default Footer;
