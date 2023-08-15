import React from 'react';
import '../../css/sidenav.css';

const SideNav = (props) => {
  return (
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
  );
};
export default SideNav;
