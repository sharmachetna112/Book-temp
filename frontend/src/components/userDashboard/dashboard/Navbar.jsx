// src/components/userDashboard/dashboard/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <div className="d-flex align-items-center text-white px-3 justify-content-between bg-primary" style={{ height: '4.1rem' }}>
      <p className="mb-0">Welcome User</p>
      <button className="btn btn-secondary btn-sm">Logout</button>
    </div>
  );
};

export default Navbar;