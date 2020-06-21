import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label, Card, CardHeader, CardBody} from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';
import { getEntity, updateEntity } from './system-configuration.reducer';

export interface ISystemConfigurationProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> { }

export const SystemConfiguration = (props: ISystemConfigurationProps) => {

  const { configurationEntity, loading, updating } = props;

  useEffect(() => {
    props.getEntity();
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...configurationEntity,
        ...values
      };
      props.updateEntity(entity);
    }
  };

  return (
    <Card>
      <CardHeader>
        <Translate contentKey="documentManagementApp.systemConfiguration.home.title">System Configurations</Translate>
      </CardHeader>
      <CardBody>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <AvForm model={configurationEntity} onSubmit={saveEntity}>
            <AvGroup row>
              <Col md="3">
                <Label for="expiredPredefinedMonth">
                  <Translate contentKey="documentManagementApp.systemConfiguration.expiredPredefinedMonth">Expired Predefined Month</Translate>
                </Label>
              </Col>
              <Col xs="12" md="8">
                <AvField id="configuration-expiredPredefinedMonth" type="text" name="expiredPredefinedMonth" />
              </Col>
            </AvGroup>
            <Button size="sm" color="primary" id="save-entity" type="submit" disabled={updating}>
              <FontAwesomeIcon icon="save" />
              &nbsp;
              <Translate contentKey="entity.action.save">Save</Translate>
            </Button>
          </AvForm>
        )}
      </CardBody>
    </Card>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  configurationEntity: storeState.configuration.entity,
  loading: storeState.configuration.loading,
  updating: storeState.configuration.updating,
  updateSuccess: storeState.configuration.updateSuccess
});

const mapDispatchToProps = {
  getEntity,
  updateEntity
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(SystemConfiguration);
