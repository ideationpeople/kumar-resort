// app/website/admin/page.js
'use client';

import React from 'react';
import ProtectedRoute from '../../../components/ProtectedRoute';
import logout from '../../../utils/logout';
import { useRouter } from 'next/navigation';

const AdminPage = () => {
  const router = useRouter();

  return (
    <ProtectedRoute>
      <div>
        <h1>Admin Page</h1>
        <button onClick={() => logout(router)}>Logout</button>
        {/* Add your admin content here */}
      </div>
    </ProtectedRoute>
  );
};

export default AdminPage;
