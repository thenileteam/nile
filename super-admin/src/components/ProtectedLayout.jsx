import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../API/AuthStatus'; // Adjust path if needed
import Layout from './Layout'; // Import your main dashboard layout

const ProtectedLayout = () => {
  if (!isAuthenticated()) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the main Layout.
  // The <Outlet> inside Layout will handle the child routes (Dashboard, Users, etc.)
  return <Layout />;
};

export default ProtectedLayout;