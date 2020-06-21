import React from 'react';
import { Translate, translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Alert, Col, Row, Container, Card, CardBody } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';
import { handlePasswordResetInit, reset } from '../password-reset.reducer';
import ForgotPassword from '../../../../../content/images/forgot-password.png';
import Logo from '../../../../../content/images/logo.png';

export type IPasswordResetInitProps = DispatchProps;

export class PasswordResetInit extends React.Component<
  IPasswordResetInitProps
> {
  componentWillUnmount() {
    this.props.reset();
  }

  handleValidSubmit = (event, values) => {
    this.props.handlePasswordResetInit(values.email);
    event.preventDefault();
  };

  render() {
    return (
      <Container fluid={true} className="landing-container">
        <Row>
          <Col lg="5">
            <img src={Logo} className="logo" alt="logo" />

            <Card className="p-4 login">
              <CardBody>
                <AvForm onValidSubmit={this.handleValidSubmit}>
                  <h3 className="reset_password">
                    {' '}
                    <Translate contentKey="reset.request.title">
                      Reset your password
                    </Translate>{' '}
                  </h3>

                  <h6 className="enter-email">
                    <Translate contentKey="reset.request.messages.info">
                      {' '}
                      Enter the email address you used to register{' '}
                    </Translate>
                  </h6>

                  <AvField
                    className="enter-input"
                    name="email"
                    placeholder={translate('global.form.email.placeholder')}
                    type="email"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: translate(
                          'global.messages.validate.email.required'
                        ),
                      },
                      minLength: {
                        value: 5,
                        errorMessage: translate(
                          'global.messages.validate.email.minlength'
                        ),
                      },
                      maxLength: {
                        value: 254,
                        errorMessage: translate(
                          'global.messages.validate.email.maxlength'
                        ),
                      },
                    }}
                  />
                  <Button className="reset-button" type="submit">
                    <Translate contentKey="reset.request.form.button">
                      Reset password
                    </Translate>
                  </Button>
                </AvForm>{' '}
              </CardBody>
            </Card>
          </Col>
          <Col lg="7">
            <img
              src={ForgotPassword}
              alt="forget-password"
              className="right-part-vector"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = { handlePasswordResetInit, reset };

type DispatchProps = typeof mapDispatchToProps;

export default connect(null, mapDispatchToProps)(PasswordResetInit);
