import React from 'react';
import '../../css/sidenav.css';
import './sideNavLink.js';

const SideNav = (props) => {
  return (
    <div>
      <div className="sidenav">
        <div className="link selected">
          <a href="">Clients</a>
        </div>
        <div className="link">
          <a href="">Appointments</a>
        </div>
        <div className="link">
          <a href="">Inventory</a>
        </div>
      </div>
    </div>
  );
};
export default SideNav;
