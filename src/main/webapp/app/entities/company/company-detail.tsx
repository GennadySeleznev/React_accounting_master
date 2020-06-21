import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ModalHeader, ModalBody, Modal, Button, Row, Col, Label } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './company.reducer';
import { ICompany } from 'app/shared/model/company.model';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICompanyDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CompanyDetail = (props: ICompanyDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/company' + props.location.search);
  };

  const { companyEntity } = props;
  return (
    <Modal isOpen toggle={handleClose} size="lg">
      <ModalHeader toggle={handleClose}>
          <Translate contentKey="documentManagementApp.company.detail.title">Company</Translate> [<b>{companyEntity.id}</b>]
      </ModalHeader>

      <ModalBody>
        <dl className="jh-entity-details">
          <dt>
            <span id="name">
              <Translate contentKey="documentManagementApp.company.name">Name</Translate>
            </span>
          </dt>
          <dd>{companyEntity.name}</dd>
          <dt>
            <span id="address1">
              <Translate contentKey="documentManagementApp.company.address1">Address 1</Translate>
            </span>
          </dt>
          <dd>{companyEntity.address1}</dd>
          <dt>
            <span id="address2">
              <Translate contentKey="documentManagementApp.company.address2">Address 2</Translate>
            </span>
          </dt>
          <dd>{companyEntity.address2}</dd>
          <dt>
            <span id="city">
              <Translate contentKey="documentManagementApp.company.city">City</Translate>
            </span>
          </dt>
          <dd>{companyEntity.city}</dd>
          <dt>
            <span id="state">
              <Translate contentKey="documentManagementApp.company.state">State</Translate>
            </span>
          </dt>
          <dd>{companyEntity.state}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="documentManagementApp.company.email">Email</Translate>
            </span>
          </dt>
          <dd>{companyEntity.email}</dd>
          <dt>
            <span id="phoneNo">
              <Translate contentKey="documentManagementApp.company.phoneNo">Phone No</Translate>
            </span>
          </dt>
          <dd>{companyEntity.phoneNo}</dd>
          <dt>
            <span id="createdDate">
              <Translate contentKey="documentManagementApp.company.createdDate">Created Date</Translate>
            </span>
          </dt>
          <dd>
            <TextFormat value={companyEntity.createdDate} type="date" format={APP_DATE_FORMAT} />
          </dd>
          <dt>
            <span id="createdBy">
              <Translate contentKey="documentManagementApp.company.createdBy">Created By</Translate>
            </span>
          </dt>
          <dd>{companyEntity.createdBy}</dd>
          <dt>
            <span id="lastModifiedBy">
              <Translate contentKey="documentManagementApp.company.lastModifiedBy">Last Modified By</Translate>
            </span>
          </dt>
          <dd>{companyEntity.lastModifiedBy}</dd>
          <dt>
            <span id="lastModifiedDate">
              <Translate contentKey="documentManagementApp.company.lastModifiedDate">Last Modified Date</Translate>
            </span>
          </dt>
          <dd>
            <TextFormat value={companyEntity.lastModifiedDate} type="date" format={APP_DATE_FORMAT} />
          </dd>
        </dl>
        <Button tag={Link} to="/company" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/company/detail/${companyEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </ModalBody>
    </Modal>
  );
};

const mapStateToProps = ({ company }: IRootState) => ({
  companyEntity: company.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetail);
