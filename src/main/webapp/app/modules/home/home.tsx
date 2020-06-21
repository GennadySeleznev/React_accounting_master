import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Card, CardBody, Row, Col, Alert, Container } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';
import Sidebar from '../../shared/layout/Sidebar/Sidebar';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Home2 from '../../../content/images/home-2.png';
export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <Container fluid={true} className="dashboard-container">
      <Row className="app flex-row align-items">
        <Col lg="3" md="3">
          <Sidebar />{' '}
        </Col>
        <Col lg="9" md="9" className="info-menu">
          <div className="breadcrumb">
            <div>
              {' '}
              <h5> Dashboard </h5>
            </div>
            <div className="breadcrumb-item">
              <Breadcrumb>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>

                <BreadcrumbItem active>Dashboard</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>

          <Card className="dashboard__home-card">
            <CardBody>
              <img src={Home2} alt="home-2" />
              <h2>
                <Translate contentKey="home.title">
                  Welcome, Java Hipster!
                </Translate>
              </h2>
              <h4>
                <Translate
                  contentKey="home.logged.message"
                  interpolate={{ username: account.login }}
                >
                  You are logged in as user {account.first}.
                </Translate>
              </h4>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (storeState) => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
