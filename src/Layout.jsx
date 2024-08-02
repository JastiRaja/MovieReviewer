import React, { useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { AuthContext } from './AuthContext';

const Layout = ({ onSearchChange }) => {
  const { logout } = useContext(AuthContext);
  const location = useLocation();

  // Paths where Navbar should not be displayed
  const hideNavbarPaths = ['/', '/Login', '/Signup','/reset-password'];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar onSearchChange={onSearchChange} onLogout={logout} />}
      <Outlet />
    </>
  );
};

export default Layout;

