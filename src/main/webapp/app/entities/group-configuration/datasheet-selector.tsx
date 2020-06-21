import React from "react";
import { Row, Col } from "reactstrap";
import Select from "react-select";

const options = [
  { value: 1, label: "Profit & Loss" },
  { value: 2, label: "Balance Sheet" },
];

type Props = {
  onClickSearch?: Function;
};

const DatasheetSelector: React.FC<Props> = (props) => {
  return (
    <Row className="datasheet-selector">
      <Col md="5">
        <Select
          options={options}
          onChange={({ value }) => {
            props.onClickSearch(value);
          }}
        />
      </Col>
    </Row>
  );
};

export default DatasheetSelector;
