// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../API/AuthStatus'; // Adjust path if auth folder is elsewhere

const ProtectedRoute = () => {
  if (!isAuthenticated()) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/" replace />;
  }

  // If authenticated, show the child routes (your dashboard layout)
  return <Outlet />;
};

export default ProtectedRoute;