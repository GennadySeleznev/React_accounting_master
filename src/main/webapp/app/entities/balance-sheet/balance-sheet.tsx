import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { IRootState } from 'app/shared/reducers';
import PageHeader from 'app/shared/component/page-header';
import FinancialDatasheet from 'app/shared/component/financial-datasheet';
import { setBsCollapsedList } from './balance-sheet.reducer';
import { getCompanies } from 'app/shared/reducers/companies';
import FinancialFilter from 'app/shared/component/financial-filter';
import { fetchBalanceSheetData } from './balance-sheet.actions';
import Sidebar from 'app/shared/layout/Sidebar/Sidebar';

export interface IBalanceSheetProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ url: string }> {}

export const BalanceSheet = (props: IBalanceSheetProps) => {
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
              <h5> BalanceSheet </h5>
            </div>
            <div className="breadcrumb-item">
              <Breadcrumb>
                <BreadcrumbItem>Dashboard</BreadcrumbItem>

                <BreadcrumbItem active>BalanceSheet</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>

          {/* <PageHeader
            titleKey="balance-sheet.title"
           
          /> */}

          <Card className="dashboard__home-card">
            <CardBody>
              <FinancialFilter
                companies={props.companies}
                onClickSearch={props.fetchBalanceSheetData}
              />
              <div className="outer">
                <div>
                  <FinancialDatasheet
                    loading={props.loading}
                    list={props.balanceSheet.list}
                    collapsedList={props.collapsedList}
                    setCollapsedList={props.setBsCollapsedList}
                    selectedCompanies={props.balanceSheet.selectedCompanies}
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

const mapStateToProps = ({ balanceSheet, companies }: IRootState) => ({
  balanceSheet: balanceSheet,
  loading: balanceSheet.loading,
  collapsedList: balanceSheet.collapsedList,
  companies: companies.list,
});

const mapDispatchToProps = {
  setBsCollapsedList,
  fetchBalanceSheetData,
  getCompanies,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(BalanceSheet);
