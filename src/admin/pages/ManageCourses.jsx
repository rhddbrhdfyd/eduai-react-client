// client/src/admin/pages/ManageUsers.jsx
import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/admin';

export default function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">유저 목록</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.email} ({user.role})</li>
        ))}
      </ul>
    </div>
  );
}
