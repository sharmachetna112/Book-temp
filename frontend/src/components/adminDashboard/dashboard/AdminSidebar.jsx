// src/components/adminDashboard/dashboard/AdminSidebar.jsx
import React from "react";
import { FaUserAlt, FaBook, FaListAlt, FaBoxes, FaUserTie, FaCartPlus, FaChartLine, FaCogs, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const sidebarItems = [
  { to: "/admin-login", label: "Books", icon: <FaBook /> },
  { to: "/admin-login/users", label: "Users", icon: <FaListAlt /> },
  { to: "/admin-login/inventory", label: "Inventory", icon: <FaBoxes /> },
  { to: "/admin-login/purchase-log", label: "Purchase Log", icon: <FaChartLine /> },
];

const AdminSidebar = () => {
  return (
    <div
      className="bg-dark text-white h-100 position-fixed d-flex flex-column"
      style={{ width: "16rem", height: "100vh" }} // Sidebar full height, no overflow here
    >
      {/* Sidebar Header */}
      <div className="bg-primary py-3 text-center">
        <h3 className="mb-0">Admin Panel</h3>
      </div>

      {/* Sidebar Navigation Links */}
      <div className="flex-grow-1" style={{ overflowY: "auto", padding: "1rem" }}>
        {sidebarItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            end={item.to === "/admin-login"} // This ensures the Dashboard link is only active on the exact `/admin-login` route
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary" : ""
              } d-flex align-items-center mb-2 p-2 px-4 gap-3 text-white text-decoration-none rounded hover-effect`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
