import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Col, Row, Button } from "reactstrap";
import { IRootState } from "app/shared/reducers";
import PageHeader from "app/shared/component/page-header";
import {
  fetchBaseConfigurations,
  fetchGroupConfiguredList,
} from "./group-configuration.actions";
import DragTable from "./drag-table";
import DatasheetSelector from "./datasheet-selector";
import "./group-configuration.scss";

export interface IGroupConfigurationProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ url: string }> {}

export const GroupConfiguration = (props: IGroupConfigurationProps) => {
  return (
    <Row className="group-configuration">
      <Col>
        <PageHeader titleKey="group-configuration.title" />
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
          <Button color="primary">SAVE</Button>
        </div>
      </Col>
    </Row>
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
