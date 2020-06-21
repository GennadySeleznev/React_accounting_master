import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Card, CardBody, Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <Row className="app flex-row align-items">
      <Col md="8">
        <h2>
          <Translate contentKey="home.title">Welcome, Java Hipster!</Translate>
        </h2>

        <Alert color="warning">
          <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.first}.
          </Translate>
        </Alert>
      </Col>
      <Col md="4" className="pad">
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
