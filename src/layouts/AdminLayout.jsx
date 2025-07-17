// client/src/layouts/AdminLayout.jsx
import React from 'react';
import AdminHeader from '../admin/components/AdminHeader';
import AdminSidebar from '../admin/components/AdminSidebar';
import AdminRoutes from '../admin/routes';

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <main className="flex-1">
        <AdminHeader />
        <AdminRoutes />
      </main>
    </div>
  );
}