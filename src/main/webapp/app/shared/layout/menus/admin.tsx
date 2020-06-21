import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from './menu-components';
import { Translate, translate } from 'react-jhipster';

const adminMenuItems = (
  <>
    <MenuItem icon="fas fa-user" to="/admin/user-management">
      <Translate contentKey="global.menu.admin.userManagement">User management</Translate>
    </MenuItem>
  </>
);

const sysadminMenuItems = (
  <>
    <MenuItem icon="fas fa-tachometer-alt" to="/admin/metrics">
      <Translate contentKey="global.menu.admin.metrics">Metrics</Translate>
    </MenuItem>
    <MenuItem icon="fas fa-heart" to="/admin/health">
      <Translate contentKey="global.menu.admin.health">Health</Translate>
    </MenuItem>
    <MenuItem icon="fas fa-list" to="/admin/configuration">
      <Translate contentKey="global.menu.admin.configuration">Configuration</Translate>
    </MenuItem>
    <MenuItem icon="fas fa-bell" to="/admin/audits">
      <Translate contentKey="global.menu.admin.audits">Audits</Translate>
    </MenuItem>
    {/* jhipster-needle-add-element-to-admin-menu - JHipster will add entities to the admin menu here */}
    <MenuItem icon="fas fa-tasks" to="/admin/logs">
      <Translate contentKey="global.menu.admin.logs">Logs</Translate>
    </MenuItem>
  </>
);

const swaggerItem = (
  <MenuItem icon="fas fa-book" to="/admin/docs">
    <Translate contentKey="global.menu.admin.apidocs">API</Translate>
  </MenuItem>
);

export const AdminMenu = ({isSysadmin}) => (
  <NavDropdown icon="fas fa-user-plus" name={translate('global.menu.admin.main')} style={{ width: '140%' }} id="admin-menu">
    {adminMenuItems}
    {isSysadmin && sysadminMenuItems}
  </NavDropdown>
);

export default AdminMenu;
