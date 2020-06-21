import React, { Component } from 'react';
import { Redirect, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import RightVector from '../content/images/right-part-vector.jpg';
import Logo from '../content/images/logo.png';
import Lock from '../content/images/lock.png';
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

export interface ILandingProp extends StateProps, DispatchProps {}

export class Landing extends React.Component<ILandingProp> {
  componentDidMount() {}

  handleSubmit = (event, errors, { username, password, rememberMe }) => {
    this.props.login(username, password, rememberMe);
  };

  render() {
    const { loginError, isAuthenticated } = this.props;
    const { from } = { from: { pathname: '/' } };

    if (isAuthenticated) {
      return <Redirect to={from} />;
    }
    return (
      <>
        <Container fluid={true} className="landing-container">
          <Row>
            <Col xl="5" lg="5" md="6" sm="12" xs="12">
              <img src={Logo} className="logo" alt="logo" />
              <img src={Lock} className="lock" alt="logo" />

              <Card className="p-4 login">
                <CardBody>
                  <AvForm onSubmit={this.handleSubmit}>
                    <h3 className="login_account">Login to account</h3>
                    <Row>
                      <Col md="12">
                        {loginError ? (
                          <Alert color="danger">
                            <Translate contentKey="login.messages.error.authentication">
                              <strong>Failed to sign in!</strong> <br />
                              Please check your credentials and try again.
                            </Translate>
                          </Alert>
                        ) : null}
                      </Col>
                      <Col md="12">
                        <h6 className="lable">Email Address</h6>
                        <AvField
                          className="lable__input"
                          name="username"
                          placeholder="Your Username"
                          required
                          errorMessage="Username cannot be empty!"
                          autoFocus
                        />
                        <h6 className="lable">Password</h6>
                        <AvField
                          className="lable__input"
                          name="password"
                          type="password"
                          placeholder="Your Password"
                          required
                          errorMessage="Password cannot be empty!"
                        />
                        <AvGroup check inline>
                          <Label className="form-check-label">
                            <AvInput type="checkbox" name="rememberMe" />{' '}
                            <Translate contentKey="login.form.rememberme">
                              Remember me
                            </Translate>
                          </Label>
                        </AvGroup>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col lg="6" md="7" sm="5" xs="7">
                        <div>
                          <Button className="sign__in-button" type="submit">
                            {' '}
                            Login
                          </Button>
                        </div>
                      </Col>

                      <Col lg="6" md="5" sm="7" xs="5">
                        <div>
                          <Link
                            to="/account/reset/request"
                            className="forget-password"
                          >
                            <h6 className="forgot-password__text">
                              <Translate contentKey="login.password.forgot">
                                Forgot Password?
                              </Translate>
                            </h6>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div className="no-account">
                          {' '}
                          Don't have an account{' '}
                          <Link to="/account/register" className="register">
                            {' '}
                            <span>Register here</span>{' '}
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </AvForm>
                </CardBody>
              </Card>
            </Col>

            <Col xl="7" lg="7" md="6" sm="12" xs="12">
              <div className="right-part-vector" />
            </Col>
          </Row>
        </Container>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
