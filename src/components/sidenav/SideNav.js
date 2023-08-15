import React from 'react';
import '../../css/sidenav.css';
import { Outlet, Routes } from 'react-router-dom';

const SideNav = (props) => {
  return (
    <div className="sidenav">
      <Routes>
        <SideNavLink name="Dashboard" />
        <SideNavLink name="Clients" />
        <SideNavLink name="Appointments" />
        <SideNavLink name="Inventory" />
      </Routes>
    </div>
  );
};
export default SideNav;

const SideNavLink = (props) => {
  return (
    <div className="link">
      <a href="">{props.name}</a>
    </div>
  );
};
