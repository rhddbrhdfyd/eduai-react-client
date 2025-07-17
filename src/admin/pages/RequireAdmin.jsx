// client\src\admin\pages\RequireAdmin.jsx
import React from "react";
import { useAuth } from '../../store/authContext';
import { Navigate } from 'react-router-dom';

export default function RequireAdmin({ children }) {
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
}