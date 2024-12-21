// src/pages/AdminDashboard.jsx
import React from "react";
import UserSidebar from "../components/userDashboard/dashboard/UserSidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/userDashboard/dashboard/Navbar";

const UserDashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <div
        className="flex-grow-1 bg-light"
        style={{ marginLeft: "16rem", minHeight: "100vh" }}
      >
        {/* Navbar */}
        <div
          className="top-0 w-100"
          style={{ height: "4.1rem", position: "fixed", zIndex: 1 }}
        >
          <Navbar />
        </div>

        {/* Render the content of the selected route */}
        <div
          className="p-4"
          style={{
            marginTop: "4.1rem", // Offset the height of the fixed navbar
            height: "calc(100vh - 4.1rem)", // Content area height minus navbar height
            overflowY: "auto",
          }}
        >
          <Outlet /> {/* Dynamically renders the active child route's content */}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

