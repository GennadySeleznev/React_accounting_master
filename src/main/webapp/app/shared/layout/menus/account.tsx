import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';
import { Translate, translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';

const accountMenuItemsAuthenticated = (
  <>
    <MenuItem icon="fas fa-wrench" to="/account/settings">
      <Translate contentKey="global.menu.account.settings">Settings</Translate>
    </MenuItem>
    <MenuItem icon="fas fa-lock" to="/account/password">
      <Translate contentKey="global.menu.account.password">Password</Translate>
    </MenuItem>
    <MenuItem icon="fas fa-sign-out-alt" to="/logout">
      <Translate contentKey="global.menu.account.logout">Sign out</Translate>
    </MenuItem>
  </>
);

const accountMenuItems = (
  <>
    <MenuItem id="login-item" icon="fas fa-sign-in-alt" to="/login">
      <Translate contentKey="global.menu.account.login">Sign in</Translate>
    </MenuItem>
    <MenuItem icon="fas fa-sign-in-alt" to="/account/register">
      <Translate contentKey="global.menu.account.register">Register</Translate>
    </MenuItem>
  </>
);

export const AccountMenu = ({ isAuthenticated = false }) => (
  <NavDropdown
    icon="fas fa-user"
    name={translate('global.menu.account.main')}
    id="account-menu"
  >
    {isAuthenticated ? accountMenuItemsAuthenticated : accountMenuItems}
  </NavDropdown>
);

export default AccountMenu;
