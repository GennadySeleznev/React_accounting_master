import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Logo from '../../../../content/images/logo-admin.png';
import DownArrow from '../../../../content/images/down-arrow-white.png';
import UserIcon from '../../../../content/images/user-icon.jpg';
import ProfileIcon from '../../../../content/images/profile-icon.png';
import SettingIcon from '../../../../content/images/setting-icon.png';
import LogoutIcon from '../../../../content/images/logout-icon.png';
import Sidebar from '../Sidebar/Sidebar';

function AppBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [touchDropdown, setTouchDropdown] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const openToggle = () => {
    setTouchDropdown(true);
  };
  const closeToggle = () => {
    setTimeout(() => {
      setTouchDropdown(false);
    }, 50);
  };

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const openMenu = () => {
    setOpenNav(true);
  };

  const closeMenu = () => {
    setOpenNav(false);
  };

  let drawerClasses = 'sidenav';
  if (openNav) {
    drawerClasses = 'sidenav open';
  }

  return (
    <div>
      <div id="mySidenav" className={drawerClasses}>
        <Sidebar />
        <a className="closebtn" onClick={closeMenu}>
          &times;
        </a>
        <div className="appbar-sidebar">
          <h6>Menu</h6>
          <ul>
            <li>
              <NavLink
                to="/balance-sheet"
                className="dropdown__dropdown-item"
                activeClassName="profile-link"
                onClick={closeMenu}
              >
                Balance Sheet
              </NavLink>{' '}
            </li>
            <li>
              <NavLink
                to="/profit-loss"
                className="dropdown__dropdown-item"
                activeClassName="profile-link"
                onClick={closeMenu}
              >
                Profit &amp; Loss
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/group-configuration"
                className="dropdown__dropdown-item"
                activeClassName="profile-link"
                onClick={closeMenu}
              >
                Configuration
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/user-management"
                className="dropdown__dropdown-item"
                activeClassName="profile-link"
                onClick={closeMenu}
              >
                Administration
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="parent">
        <div className="app-bar">
          <img src={Logo} alt="logo" className="dashboard-logo" />
          <div className="profile-menu">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle className="down-arrow" color="red">
                <img src={UserIcon} alt="user-icon" className="user-icon" />
                Username
                <img
                  src={DownArrow}
                  alt="down-arrow"
                  className="down-arrow-icon"
                />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <img src={SettingIcon} alt="setting-icon" />
                  <NavLink
                    to="/account/settings"
                    className="dropdown__dropdown-item"
                    activeClassName="profile-link"
                  >
                    Setting
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <img src={ProfileIcon} alt="setting-icon" />
                  <NavLink
                    to="/account/password"
                    className="dropdown__dropdown-item"
                    activeClassName="profile-link"
                  >
                    Password
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <img src={LogoutIcon} alt="setting-icon" />{' '}
                  <NavLink
                    to="/logout"
                    className="dropdown__dropdown-item"
                    activeClassName="profile-link"
                  >
                    Signout
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="mobile-view-container">
          <img src={Logo} alt="logo" className="dashboard-logo__mobile" />

          <div className="mobile-view">
            <div className="mobile-menu" onClick={openMenu}>
              <i className="fa fa-bars"></i> Menu
            </div>
            <div className="mobile-menu__profile">
              <Dropdown isOpen={touchDropdown} toggle={openToggle}>
                <DropdownToggle className="down-arrow" color="red">
                  <img src={UserIcon} alt="user-icon" className="user-icon" />
                  Username
                  <img
                    src={DownArrow}
                    alt="down-arrow"
                    className="down-arrow-icon"
                  />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={closeToggle}>
                    <img src={SettingIcon} alt="setting-icon" />{' '}
                    <NavLink
                      to="/account/settings"
                      className="dropdown__dropdown-item"
                      activeClassName="profile-link"
                    >
                      Setting
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem onClick={closeToggle}>
                    <img src={ProfileIcon} alt="setting-icon" />
                    <NavLink
                      to="/account/password"
                      className="dropdown__dropdown-item"
                      activeClassName="profile-link"
                    >
                      Password
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem onClick={closeToggle}>
                    <img src={LogoutIcon} alt="setting-icon" />{' '}
                    <NavLink
                      to="/logout"
                      className="dropdown__dropdown-item"
                      activeClassName="profile-link"
                    >
                      Signout
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
