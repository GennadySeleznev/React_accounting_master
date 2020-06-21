import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { IRootState } from "app/shared/reducers";
import PageHeader from "app/shared/component/page-header";
import FinancialDatasheet from "app/shared/component/financial-datasheet";
import { setBsCollapsedList } from "./balance-sheet.reducer";
import { getCompanies } from "app/shared/reducers/companies";
import FinancialFilter from "app/shared/component/financial-filter";
import { fetchBalanceSheetData } from "./balance-sheet.actions";

export interface IBalanceSheetProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ url: string }> {}

export const BalanceSheet = (props: IBalanceSheetProps) => {
  useEffect(() => {
    props.getCompanies();
  }, [props.getCompanies]);

  return (
    <Row>
      <Col>
        <PageHeader titleKey="balance-sheet.title" />
        <FinancialFilter
          companies={props.companies}
          onClickSearch={props.fetchBalanceSheetData}
        />
        <FinancialDatasheet
          loading={props.loading}
          list={props.balanceSheet.list}
          collapsedList={props.collapsedList}
          setCollapsedList={props.setBsCollapsedList}
          selectedCompanies={props.balanceSheet.selectedCompanies}
        />
      </Col>
    </Row>
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
