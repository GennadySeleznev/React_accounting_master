import React, { Component } from 'react';
import { Redirect, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Label, Alert, Row, Col, Card, CardBody, Container, CardGroup } from 'reactstrap';
import { IRootState } from 'app/shared/reducers';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
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
        <CardGroup>
              <Card className="p-4 login" >
                <CardBody>
                  <AvForm onSubmit={this.handleSubmit}>

                  <h4>
                    
                  </h4>

                    <p className="text-muted">Sign In to your account</p>
                    <Row>
                      <Col md="12">
                        {loginError ? (
                          <Alert color="danger">
                            <Translate contentKey="login.messages.error.authentication">
                              <strong>Failed to sign in!</strong> <br/>Please check your credentials and try again.
                            </Translate>
                          </Alert>
                        ) : null}
                      </Col>
                      <Col md="12">
                        <AvField
                          name="username"
                          label="Username"
                          placeholder="Your Username"
                          required
                          errorMessage="Username cannot be empty!"
                          autoFocus
                        />
                        <AvField
                          name="password"
                          type="password"
                          label="Password"
                          placeholder="Your Password"
                          required
                          errorMessage="Password cannot be empty!"
                        />
                        <AvGroup check inline>
                          <Label className="form-check-label">
                            <AvInput type="checkbox" name="rememberMe" />{' '}
                            <Translate contentKey="login.form.rememberme">Remember me</Translate>
                          </Label>
                        </AvGroup>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col md="6">
                        <Button color="primary" type="submit">
                          Sign in
                        </Button>
                      </Col>

                      <Col md="6" className="text-right">
                      <Link to="/account/reset/request">
                        <Translate contentKey="login.password.forgot">Did you forget your password?</Translate>
                      </Link>
                      </Col>
                    </Row>
                  </AvForm>
                </CardBody>
              </Card>

            </CardGroup>
        </>
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  loginError: authentication.loginError
});

const mapDispatchToProps = { login };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
