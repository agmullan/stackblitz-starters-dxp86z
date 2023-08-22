import * as React from 'react';
import { useState } from 'react';
import './style.css';
import SideNav from './components/sidenav/SideNav.js';
import SideNavLink from './components/sidenav/SideNav.js';
import Layout from './components/sidenav/SideNav.js';
import {
  Routes,
  Route,
  useNavigate,
  useParams,
  generatePath,
  Outlet,
  Navigate,
} from 'react-router-dom';

const sideNavTitles = ['dashboard', 'clients', 'appointments', 'inventory'];

const SideNavTitles = () => {
  const { navLinkId } = useParams();

  return <h1>Content: {navLinkId}</h1>;
};

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/:navLinkId" element={<SideNavTitles />} />
          <Route path="*" element={<Navigate to="/title" replace />} />
        </Route>
      </Routes>
    </div>
  );
}
