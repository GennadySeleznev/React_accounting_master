import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import {
  Col,
  Row,
  Button,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  Card,
} from 'reactstrap';
import { IRootState } from 'app/shared/reducers';
import PageHeader from 'app/shared/component/page-header';
import {
  fetchBaseConfigurations,
  fetchGroupConfiguredList,
} from './group-configuration.actions';
import DragTable from './drag-table';
import DatasheetSelector from './datasheet-selector';
import './group-configuration.scss';
import Sidebar from 'app/shared/layout/Sidebar/Sidebar';

export interface IGroupConfigurationProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ url: string }> {}

export const GroupConfiguration = (props: IGroupConfigurationProps) => {
  return (
    <Container fluid={true} className="dashboard-container">
      <Row className="app flex-row align-items">
        <Col lg="3" md="3">
          <Sidebar />
        </Col>

        <Col lg="9" md="9" className="info-menu">
          <div className="breadcrumb">
            <div>
              <h5> Group Configuration </h5>
            </div>
            <div className="breadcrumb-item">
              <Breadcrumb>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>

                <BreadcrumbItem active>Group Configuration</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
          <Card className="dashboard__home-card">
            <CardBody>
              <DatasheetSelector
                onClickSearch={(value) => {
                  props.fetchBaseConfigurations(value);
                  props.fetchGroupConfiguredList(value);
                }}
              />

              <DragTable
                baseList={props.baseList}
                configuredList={props.configuredList}
              />

              <div className="button-footer">
                <Button className="reset-button">SAVE</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ groupConfiguration }: IRootState) => ({
  loading: groupConfiguration.loading,
  baseList: groupConfiguration.baseList,
  configuredList: groupConfiguration.configuredList,
});

const mapDispatchToProps = {
  fetchBaseConfigurations,
  fetchGroupConfiguredList,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(GroupConfiguration);
