import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';
import { NavItem, NavLink, NavbarBrand } from 'reactstrap';

export const DocumentMenu = props => (
  <NavItem>
    <NavLink tag={Link} to="/ocr-document/list" className="d-flex align-items-center">
      <i className="fas fa-passport"></i> &nbsp;
      <span>
        <Translate contentKey="global.menu.documents.name">Home</Translate>
      </span>
    </NavLink>
  </NavItem>
);

export const ExpatriateMenu = props => (
  <NavItem>
    <NavLink tag={Link} to="/expatriate" className="d-flex align-items-center">
      <i className="fas fa-user-tie"></i> &nbsp;
      <span>
        <Translate contentKey="global.menu.expatriate">Home</Translate>
      </span>
    </NavLink>
  </NavItem>
);
