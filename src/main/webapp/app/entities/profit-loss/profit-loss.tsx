import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { IRootState } from "app/shared/reducers";
import PageHeader from "app/shared/component/page-header";
import FinancialDatasheet from "app/shared/component/financial-datasheet";
import { setPnlCollapsedList } from "./profit-loss.reducer";
import { getCompanies } from "app/shared/reducers/companies";
import FinancialFilter from "app/shared/component/financial-filter";
import { fetchProfitLossData } from "./profit-loss.actions";

export interface IProfitLossProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ url: string }> {}

export const ProfitLoss = (props: IProfitLossProps) => {
  useEffect(() => {
    props.getCompanies();
  }, [props.getCompanies]);

  return (
    <Row>
      <Col>
        <PageHeader titleKey="profit-loss.title" />
        <FinancialFilter
          companies={props.companies}
          onClickSearch={props.fetchProfitLossData}
        />
        <FinancialDatasheet
          loading={props.loading}
          list={props.profitLoss.list}
          collapsedList={props.collapsedList}
          setCollapsedList={props.setPnlCollapsedList}
          selectedCompanies={props.profitLoss.selectedCompanies}
        />
      </Col>
    </Row>
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
