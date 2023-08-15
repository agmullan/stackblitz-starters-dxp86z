import * as React from 'react';
import { useState } from 'react';
import './style.css';
import SideNav from './page_elements/sidenav/SideNav';

export default function App() {
  const [wid, setWid] = useState('0%');

  const openSidenav = () => {
    setWid('25%');
  };
  const closeSidenav = () => {
    setWid('0%');
  };
  return (
    <div>
      <SideNav />
    </div>
  );
}
