import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import {
  Col,
  Row,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
} from 'reactstrap';
import { IRootState } from 'app/shared/reducers';
import PageHeader from 'app/shared/component/page-header';
import FinancialDatasheet from 'app/shared/component/financial-datasheet';
import { setPnlCollapsedList } from './profit-loss.reducer';
import { getCompanies } from 'app/shared/reducers/companies';
import FinancialFilter from 'app/shared/component/financial-filter';
import { fetchProfitLossData } from './profit-loss.actions';
import Sidebar from 'app/shared/layout/Sidebar/Sidebar';

export interface IProfitLossProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ url: string }> {}

export const ProfitLoss = (props: IProfitLossProps) => {
  useEffect(() => {
    props.getCompanies();
  }, [props.getCompanies]);

  return (
    <Container fluid={true} className="dashboard-container">
      <Row className="app flex-row align-items">
        <Col lg="3" md="3">
          <Sidebar />
        </Col>

        <Col lg="9" md="9" className="info-menu">
          <div className="breadcrumb">
            <div>
              <h5> Profit and Loss </h5>
            </div>
            <div className="breadcrumb-item">
              <Breadcrumb>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>

                <BreadcrumbItem active> Profit and Loss </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>

          <Card className="dashboard__home-card">
            <CardBody>
              <FinancialFilter
                companies={props.companies}
                onClickSearch={props.fetchProfitLossData}
              />
              <div className="outer">
                <div>
                  <FinancialDatasheet
                    loading={props.loading}
                    list={props.profitLoss.list}
                    collapsedList={props.collapsedList}
                    setCollapsedList={props.setPnlCollapsedList}
                    selectedCompanies={props.profitLoss.selectedCompanies}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ profitLoss, companies }: IRootState) => ({
  profitLoss: profitLoss,
  loading: profitLoss.loading,
  collapsedList: profitLoss.collapsedList,
  companies: companies.list,
});

const mapDispatchToProps = {
  setPnlCollapsedList,
  fetchProfitLossData,
  getCompanies,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProfitLoss);
