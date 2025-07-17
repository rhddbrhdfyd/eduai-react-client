// client/src/admin/components/AdminSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <aside className="w-48 p-4 border-r h-full">
      <ul className="space-y-2">
        <li><Link to="/admin">대시보드</Link></li>
        <li><Link to="/admin/users">유저 관리</Link></li>
        <li><Link to="/admin/courses">강좌 관리</Link></li>
        <li><Link to="/admin/settings">사이트 설정</Link></li>
      </ul>
    </aside>
  );
}
