import React from 'react';

import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavDropdown = props => (
  <UncontrolledDropdown nav inNavbar id={props.id}>
    <DropdownToggle nav caret className="d-flex align-items-center">
      <i className={props.icon}/> &nbsp;
      <span>{props.name}</span>
    </DropdownToggle>
    <DropdownMenu right style={props.style}>
      {props.children}
    </DropdownMenu>
  </UncontrolledDropdown>
);
