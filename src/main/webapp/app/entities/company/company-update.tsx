import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ModalHeader, ModalBody, Modal, Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './company.reducer';
import { ICompany } from 'app/shared/model/company.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICompanyUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CompanyUpdate = (props: ICompanyUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { companyEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/company' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.createdDate = convertDateTimeToServer(values.createdDate);
    values.lastModifiedDate = convertDateTimeToServer(values.lastModifiedDate);

    if (errors.length === 0) {
      const entity = {
        ...companyEntity,
        ...values
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };


  return (

      <Modal isOpen toggle={handleClose} size="lg">
        <ModalHeader toggle={handleClose}>
            <Translate contentKey="documentManagementApp.company.home.createOrEditLabel">Create or edit a Company</Translate>
        </ModalHeader>

        <ModalBody>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : companyEntity} onSubmit={saveEntity}>
              {!isNew ? (

                  <AvInput id="company-id" type="hidden" className="form-control" name="id" required readOnly />

              ) : null}
              <AvGroup>
                <Label id="nameLabel" for="company-name">
                  <Translate contentKey="documentManagementApp.company.name">Name</Translate>
                </Label>
                <AvField id="company-name" type="text" name="name" />
              </AvGroup>
              <AvGroup>
                <Label id="address1Label" for="company-address1">
                  <Translate contentKey="documentManagementApp.company.address1">Address 1</Translate>
                </Label>
                <AvField id="company-address1" type="text" name="address1" />
              </AvGroup>
              <AvGroup>
                <Label id="address2Label" for="company-address2">
                  <Translate contentKey="documentManagementApp.company.address2">Address 2</Translate>
                </Label>
                <AvField id="company-address2" type="text" name="address2" />
              </AvGroup>
              <AvGroup>
                <Label id="cityLabel" for="company-city">
                  <Translate contentKey="documentManagementApp.company.city">City</Translate>
                </Label>
                <AvField id="company-city" type="text" name="city" />
              </AvGroup>
              <AvGroup>
                <Label id="stateLabel" for="company-state">
                  <Translate contentKey="documentManagementApp.company.state">State</Translate>
                </Label>
                <AvField id="company-state" type="text" name="state" />
              </AvGroup>
              <AvGroup>
                <Label id="emailLabel" for="company-email">
                  <Translate contentKey="documentManagementApp.company.email">Email</Translate>
                </Label>
                <AvField id="company-email" type="text" name="email" />
              </AvGroup>
              <AvGroup>
                <Label id="phoneNoLabel" for="company-phoneNo">
                  <Translate contentKey="documentManagementApp.company.phoneNo">Phone No</Translate>
                </Label>
                <AvField id="company-phoneNo" type="text" name="phoneNo" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/company" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </ModalBody>
    </Modal>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  companyEntity: storeState.company.entity,
  loading: storeState.company.loading,
  updating: storeState.company.updating,
  updateSuccess: storeState.company.updateSuccess
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CompanyUpdate);
