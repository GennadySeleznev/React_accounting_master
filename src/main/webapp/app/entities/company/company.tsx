import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Card, CardBody, CardHeader, Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat, IPaginationBaseState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSortState } from 'app/shared/util/pagination-utils';
import { IRootState } from 'app/shared/reducers';
import { getEntities } from './company.reducer';
import { ICompany } from 'app/shared/model/company.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface ICompanyProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> { }

export const Company = (props: ICompanyProps) => {
  const [paginationState, setPaginationState] = useState(getSortState(props.location, ITEMS_PER_PAGE));

  const getAllEntities = () => {
    props.getEntities(paginationState.activePage - 1, paginationState.itemsPerPage, `${paginationState.sort},${paginationState.order}`);
  };

  const sortEntities = () => {
    getAllEntities();
    props.history.push(
      `${props.location.pathname}?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`
    );
  };

  useEffect(() => {
    getAllEntities();
  }, [props.updateSuccess]);

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' ? 'desc' : 'asc',
      sort: p
    });
  };

  const handlePagination = currentPage =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage
    });

  const { companyList, match, loading, totalItems } = props;
  return (
    <Card>
      <CardHeader>
        <Translate contentKey="documentManagementApp.company.home.title">Companies</Translate>
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
              <FontAwesomeIcon icon="plus" />
              &nbsp;
              <Translate contentKey="documentManagementApp.company.home.createLabel">Create new Company</Translate>
            </Link>
          </Col>
        </Row>
        <br/>
        {companyList && companyList.length > 0 ? (
          <Table responsive striped hover size="sm">
            <thead>
              <tr>
                <th className="hand" onClick={sort('name')}>
                  <Translate contentKey="documentManagementApp.company.name">Name</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('address1')}>
                  <Translate contentKey="documentManagementApp.company.address1">Address 1</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('address2')}>
                  <Translate contentKey="documentManagementApp.company.address2">Address 2</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('city')}>
                  <Translate contentKey="documentManagementApp.company.city">City</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('state')}>
                  <Translate contentKey="documentManagementApp.company.state">State</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('email')}>
                  <Translate contentKey="documentManagementApp.company.email">Email</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('phoneNo')}>
                  <Translate contentKey="documentManagementApp.company.phoneNo">Phone No</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastModifiedBy')}>
                  <Translate contentKey="documentManagementApp.company.lastModifiedBy">Last Modified By</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastModifiedDate')}>
                  <Translate contentKey="documentManagementApp.company.lastModifiedDate">Last Modified Date</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {companyList && companyList.length>0 && companyList.map((company, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/detail/${company.id}`} color="link" size="sm">
                      {company.name}
                    </Button>
                  </td>
                  <td>{company.address1}</td>
                  <td>{company.address2}</td>
                  <td>{company.city}</td>
                  <td>{company.state}</td>
                  <td>{company.email}</td>
                  <td>{company.phoneNo}</td>
                  <td>{company.lastModifiedBy}</td>
                  <td>
                    <TextFormat type="date" value={company.lastModifiedDate} format={APP_DATE_FORMAT} blankOnInvalid/>
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/detail/${company.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/detail/${company.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/detail/${company.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="danger"
                        size="sm"
                      >
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
            !loading && (
              <div className="alert alert-warning">
                <Translate contentKey="documentManagementApp.company.home.notFound">No Companies found</Translate>
              </div>
            )
          )}

        <div className={companyList && companyList.length > 0 ? '' : 'd-none'}>
          <Row className="justify-content-center">
            <JhiItemCount page={paginationState.activePage} total={totalItems} itemsPerPage={paginationState.itemsPerPage} i18nEnabled />
          </Row>
          <Row className="justify-content-center">
            <JhiPagination
              activePage={paginationState.activePage}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={paginationState.itemsPerPage}
              totalItems={props.totalItems}
            />
          </Row>
        </div>
      </CardBody>
    </Card>
  );
};

const mapStateToProps = ({ company }: IRootState) => ({
  companyList: company.entities,
  loading: company.loading,
  totalItems: company.totalItems,
  updateSuccess: company.updateSuccess
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Company);
