// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ session, children }) {
  if (!session) {
    // If there is no session, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // If there is a session, render the children (the protected page component)
  return children;
}

export default ProtectedRoute;