import React, { useEffect } from 'react';
import {
  Button,
  Col,
  Alert,
  Row,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  Card,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Translate, translate } from 'react-jhipster';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { locales, languages } from 'app/config/translation';
import { IRootState } from 'app/shared/reducers';
import { getSession } from 'app/shared/reducers/authentication';
import { saveAccountSettings, reset } from './settings.reducer';
import Sidebar from '../../../shared/layout/Sidebar/Sidebar';

export interface IUserSettingsProps extends StateProps, DispatchProps {}

export const SettingsPage = (props: IUserSettingsProps) => {
  // useEffect(() => {
  //   props.getSession();
  //   console.log("getsession");
  //   return () => {
  //     props.reset();
  //   };
  // });

  const handleValidSubmit = (event, values) => {
    const account = {
      ...props.account,
      ...values,
    };

    props.saveAccountSettings(account);
    event.persist();
  };

  return (
    <Container fluid={true} className="dashboard-container">
      <Row className="app flex-row align-items">
        <Col lg="3" md="3">
          <Sidebar />
        </Col>
        <Col lg="9" md="9" className="info-menu">
          <div className="breadcrumb">
            <div>
              {' '}
              <h5> Profile </h5>
            </div>
            <div className="breadcrumb-item">
              <Breadcrumb>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>

                <BreadcrumbItem active>Profile</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>

          <Card className="dashboard__home-card">
            <CardBody>
              <div>
                <h2 id="settings-title" className="password__title">
                  <Translate
                    contentKey="settings.title"
                    interpolate={{ username: props.account.login }}
                  >
                    User settings for {props.account.login}{' '}
                  </Translate>
                </h2>
                <AvForm id="settings-form" onValidSubmit={handleValidSubmit}>
                  {/* First name */}
                  <h6 className="lable">
                    {translate('settings.form.firstname')}
                  </h6>
                  <AvField
                    className="lable__input"
                    name="firstName"
                    id="firstName"
                    placeholder={translate(
                      'settings.form.firstname.placeholder'
                    )}
                    validate={{
                      required: {
                        value: true,
                        errorMessage: translate(
                          'settings.messages.validate.firstname.required'
                        ),
                      },
                      minLength: {
                        value: 1,
                        errorMessage: translate(
                          'settings.messages.validate.firstname.minlength'
                        ),
                      },
                      maxLength: {
                        value: 50,
                        errorMessage: translate(
                          'settings.messages.validate.firstname.maxlength'
                        ),
                      },
                    }}
                    value={props.account.firstName}
                  />
                  {/* Last name */}
                  <h6 className="lable">
                    {translate('settings.form.lastname')}
                  </h6>
                  <AvField
                    className="lable__input"
                    name="lastName"
                    id="lastName"
                    placeholder={translate(
                      'settings.form.lastname.placeholder'
                    )}
                    validate={{
                      required: {
                        value: true,
                        errorMessage: translate(
                          'settings.messages.validate.lastname.required'
                        ),
                      },
                      minLength: {
                        value: 1,
                        errorMessage: translate(
                          'settings.messages.validate.lastname.minlength'
                        ),
                      },
                      maxLength: {
                        value: 50,
                        errorMessage: translate(
                          'settings.messages.validate.lastname.maxlength'
                        ),
                      },
                    }}
                    value={props.account.lastName}
                  />
                  {/* Email */}
                  <h6 className="lable">
                    {translate('global.form.email.label')}
                  </h6>
                  <AvField
                    className="lable__input"
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
                    value={props.account.email}
                  />
                  {/* Language key */}
                  {/* <AvField
              type="select"
              id="langKey"
              name="langKey"
              className="form-control"
              label={translate('settings.form.language')}
              value={props.account.langKey}
            >
              {locales.map(locale => (
                <option value={locale} key={locale}>
                  {languages[locale].name}
                </option>
              ))}
            </AvField> */}
                  <Button className="reset-button" type="submit">
                    <Translate contentKey="settings.form.button">
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

const mapDispatchToProps = { getSession, saveAccountSettings, reset };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
