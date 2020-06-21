import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="dashboard-sidebar">
      <h6>Menu</h6>
      <ul>
        <li>
          <NavLink
            to="/balance-sheet"
            className="dropdown__dropdown-item"
            activeClassName="profile-link"
          >
            Balance Sheet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profit-loss"
            className="dropdown__dropdown-item"
            activeClassName="profile-link"
          >
            Profit &amp; Loss
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/group-configuration"
            className="dropdown__dropdown-item"
            activeClassName="profile-link"
          >
            Configuration
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/admin/user-management"
            className="dropdown__dropdown-item"
            activeClassName="profile-link"
          >
            Administration
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
