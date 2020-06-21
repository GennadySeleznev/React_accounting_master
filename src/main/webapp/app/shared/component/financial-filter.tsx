import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Select, { components } from "react-select";
import DatePicker from "react-datepicker";
import "./financial-filter.scss";

type Props = {
  onClickSearch?: Function;
  companies?: Array<any>;
};

const FinancialFilter: React.FC<Props> = (props) => {
  const [selectedCompanies, setCompanies] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <Row className="financial-filter">
      <Col md="5">
        <Select
          closeMenuOnSelect={false}
          components={<components.MultiValueContainer {...props} />}
          isMulti
          options={props.companies}
          onChange={(value) => {
            setCompanies(value);
            props.onClickSearch(value, {
              startDate: startDate,
              endDate: endDate,
            });
          }}
        />
      </Col>
      <Col md="2" className="date-wrapepr">
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setEndDate(null);
          }}
        />
      </Col>
      <Col md="2" className="date-wrapepr">
        <DatePicker
          selected={endDate}
          minDate={startDate}
          onChange={(date) => {
            setEndDate(date);
            props.onClickSearch(selectedCompanies, {
              startDate: startDate,
              endDate: date,
            });
          }}
        />
      </Col>
    </Row>
  );
};

export default FinancialFilter;
