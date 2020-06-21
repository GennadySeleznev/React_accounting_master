import React, { useState, useEffect } from 'react';
import { Translate, translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {
  Row,
  Col,
  Button,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  Card,
} from 'reactstrap';

import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import PasswordStrengthBar from 'app/shared/layout/password/password-strength-bar';
import { savePassword, reset } from './password.reducer';
import SideBar from '../../../shared/layout/Sidebar/Sidebar';

export interface IUserPasswordProps extends StateProps, DispatchProps {}

export const PasswordPage = (props: IUserPasswordProps) => {
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   props.reset();
  //   props.getSession();
  //   return () => props.reset();
  // }, []);

  const handleValidSubmit = (event, values) => {
    props.savePassword(values.currentPassword, values.newPassword);
  };

  const updatePassword = (event) => setPassword(event.target.value);

  return (
    <Container fluid={true} className="dashboard-container">
      <Row className="app flex-row align-items">
        <Col lg="3" md="3">
          <SideBar />
        </Col>

        <Col lg="9" md="9" className="info-menu">
          <div className="breadcrumb">
            <div>
              {' '}
              <h5> Password </h5>
            </div>
            <div className="breadcrumb-item">
              <Breadcrumb>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>

                <BreadcrumbItem active>Password</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>

          <Card className="dashboard__home-card">
            <CardBody>
              <div>
                <h2 id="password-title" className="password__title">
                  <Translate
                    contentKey="password.title"
                    interpolate={{ username: props.account.login }}
                  >
                    Password for {props.account.login}
                  </Translate>
                </h2>
                <AvForm id="password-form" onValidSubmit={handleValidSubmit}>
                  <h6 className="lable">
                    {translate('global.form.currentpassword.label')}
                  </h6>
                  <AvField
                    className="lable__input"
                    name="currentPassword"
                    placeholder={translate(
                      'global.form.currentpassword.placeholder'
                    )}
                    type="password"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: translate(
                          'global.messages.validate.newpassword.required'
                        ),
                      },
                    }}
                  />
                  <h6 className="lable">
                    {translate('global.form.newpassword.label')}
                  </h6>
                  <AvField
                    className="lable__input"
                    name="newPassword"
                    placeholder={translate(
                      'global.form.newpassword.placeholder'
                    )}
                    type="password"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: translate(
                          'global.messages.validate.newpassword.required'
                        ),
                      },
                      minLength: {
                        value: 4,
                        errorMessage: translate(
                          'global.messages.validate.newpassword.minlength'
                        ),
                      },
                      maxLength: {
                        value: 50,
                        errorMessage: translate(
                          'global.messages.validate.newpassword.maxlength'
                        ),
                      },
                    }}
                    onChange={updatePassword}
                  />
                  <div className="lable">
                    {' '}
                    <PasswordStrengthBar password={password} />{' '}
                  </div>

                  <h6 className="lable">
                    {translate('global.form.confirmpassword.label')}
                  </h6>

                  <AvField
                    className="lable__input"
                    name="confirmPassword"
                    placeholder={translate(
                      'global.form.confirmpassword.placeholder'
                    )}
                    type="password"
                    validate={{
                      required: {
                        value: true,
                        errorMessage: translate(
                          'global.messages.validate.confirmpassword.required'
                        ),
                      },
                      minLength: {
                        value: 4,
                        errorMessage: translate(
                          'global.messages.validate.confirmpassword.minlength'
                        ),
                      },
                      maxLength: {
                        value: 50,
                        errorMessage: translate(
                          'global.messages.validate.confirmpassword.maxlength'
                        ),
                      },
                      match: {
                        value: 'newPassword',
                        errorMessage: translate(
                          'global.messages.error.dontmatch'
                        ),
                      },
                    }}
                  />
                  <Button className="reset-button" type="submit">
                    <Translate contentKey="password.form.button">
                      Save
                    </Translate>
                  </Button>
                </AvForm>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account,
  isAuthenticated: authentication.isAuthenticated,
});

const mapDispatchToProps = { getSession, savePassword, reset };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PasswordPage);
