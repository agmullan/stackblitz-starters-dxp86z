import * as React from 'react';
import { useState } from 'react';
import './style.css';
import SideNav from './components/sidenav/SideNav.js'

export default function App() {
  // const [wid, setWid] = useState('0%');

  // const openSidenav = () => {
  //   setWid('25%');
  // };
  // const closeSidenav = () => {
  //   setWid('0%');
  // };
  return (
    <div>
      <SideNav />
    </div>
  );
}
