import React, { Component } from 'react';
import { Redirect, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Button,
  Label,
  Alert,
  Row,
  Col,
  Card,
  CardBody,
  Container,
  CardGroup,
} from 'reactstrap';
import { IRootState } from 'app/shared/reducers';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
} from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { login } from 'app/shared/reducers/authentication';
import ErrorBoundary from 'app/shared/error/error-boundary';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import Landing from './landing';
import Register from 'app/modules/account/register/register';
import Activate from 'app/modules/account/activate/activate';
import PasswordResetInit from 'app/modules/account/password-reset/init/password-reset-init';
import PasswordResetFinish from 'app/modules/account/password-reset/finish/password-reset-finish';
export interface IPublicPageProps extends StateProps, DispatchProps {}

export class PublicPage extends React.Component<IPublicPageProps> {
  componentDidMount() {}

  handleSubmit = (event, errors, { username, password, rememberMe }) => {
    this.props.login(username, password, rememberMe);
  };

  render() {
    const { loginError, isAuthenticated } = this.props;
    return (
      // <div className="app flex-row align-items-center landing">
      // <Container>
      <Row className="justify-content-center">
        <ErrorBoundary>
          <Switch>
            <ErrorBoundaryRoute path="/account/register" component={Register} />
            <ErrorBoundaryRoute
              path="/account/activate/:key?"
              component={Activate}
            />
            <ErrorBoundaryRoute
              path="/account/reset/request"
              component={PasswordResetInit}
            />
            <ErrorBoundaryRoute
              path="/account/reset/finish/:key?"
              component={PasswordResetFinish}
            />
            <ErrorBoundaryRoute path="/" exact component={Landing} />
          </Switch>
        </ErrorBoundary>
      </Row>
      // </Container>
      // </div>
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  loginError: authentication.loginError,
});

const mapDispatchToProps = { login };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PublicPage);
