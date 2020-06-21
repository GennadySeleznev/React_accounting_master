import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'reactstrap';

import './financial-datasheet.scss';

type Props = {
  loading?: boolean;
  selectedCompanies?: Array<any>;
  list?: Array<any>;
  collapsedList?: Array<any>;
  setCollapsedList?: Function;
};

const Header = ({ selectedCompanies }) => (
  <thead>
    <tr className="header">
      <th className="account-sticky-col header__acount-style">Account</th>
      <th className="account-code-sticky-col header__acount-style">
        Account Code
      </th>
      {selectedCompanies &&
        selectedCompanies.map((item, i) => <th key={i}>{item.label}</th>)}
      <th className="header__acount-style">Total</th>
    </tr>
  </thead>
);

const mapCellItem = (item) => (company, i) => (
  <td key={i + item.label} className="item-cell">
    {item[`company${i + 1}`]
      ? item[`company${i + 1}`] === 0
        ? '-'
        : item[`company${i + 1}`]
      : '-'}
  </td>
);

const mapItem = (props) => (item, i) => {
  const collapsed =
    props.collapsedList.filter(
      (fItem) => fItem.toLowerCase() === item.label.toLowerCase()
    ).length > 0;

  return (
    <React.Fragment key={i}>
      <tr
        className={`list-item ${
          item.level
            ? 'level-' + item.level
            : i % 2
            ? 'level-n-even'
            : 'level-n-odd'
        }
        ${props.level ? 'parent-level-' + props.level : ''}`}
      >
        <td className="account-sticky-col item-cell">
          {item.level && (
            <span
              className="toggle-cell-icon"
              onClick={() => props.setCollapsedList(item.label)}
            >
              <FontAwesomeIcon icon={collapsed ? faAngleDown : faAngleRight} />
            </span>
          )}
          {item.label}
        </td>
        <td className="account-code-sticky-col item-cell">{item.code}</td>
        {props.selectedCompanies.map(mapCellItem(item))}
        <td className="item-cell">{item.total}</td>
      </tr>
      {collapsed &&
        item.node &&
        item.node.length > 0 &&
        item.node.map(mapItem({ ...props, level: item.level }))}
    </React.Fragment>
  );
};

const FinancialDatasheet: React.FC<Props> = (props) => {
  return props.loading ? (
    <Card>
      <CardBody>
        <i className="fas fa-spinner fa-spin"></i>Loading ...{' '}
      </CardBody>
    </Card>
  ) : (
    <Col lg="10" md="8">
      <Table style={{ overflowX: 'scroll' }}>
        <Header selectedCompanies={props.selectedCompanies} />
        <tbody>{props.list && props.list.map(mapItem(props))}</tbody>
      </Table>
      {/* <Row className="financial-datasheet">
        <Row className="financial-datasheet-scroller">
          <table className="financial-datasheet-list">
            <Header selectedCompanies={props.selectedCompanies} />
            <tbody> </tbody>
          </table>
        </Row>
      </Row> */}
    </Col>
  );
};

export default FinancialDatasheet;
