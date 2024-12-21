// src/pages/LandingPage.jsx
import React, { useState, useEffect } from "react";
import { SiBookstack } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown-menu") && !e.target.closest(".dropdown-toggle")) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  const handleLogin = () => {
    navigate("/login");
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header Section */}
      <header className="bg-dark bg-opacity-75 text-white py-3 fixed-top shadow">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <SiBookstack className="text-primary fs-3 me-2" />
            <h1 className="h4 mb-0">BookTrack</h1>
          </div>

          {/* Navigation */}
          <nav className="d-flex gap-4">
            <a href="#home" className="text-white text-decoration-none px-3 fs-5 py-2">
              Home
            </a>
            <a href="#features" className="text-white text-decoration-none px-3 fs-5 py-2">
              Features
            </a>
            <a href="#contact" className="text-white text-decoration-none px-3 fs-5 py-2">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1">
        {/* Welcome Section */}
        <section
          id="home"
          className="welcome-section text-center text-white d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <div className="bg-dark bg-opacity-75 p-4 rounded mt-5">
            <h2 className="display-4 fw-bold mb-4">Welcome to BookTrack</h2>
            <p className="lead mb-4">Manage your library, bookstore, or collection effortlessly.</p>
            <div className="dropdown">
              <button
                className="btn btn-primary"
                type="button"
                id="dropdownMenuButton"
                onClick={() => handleLogin()}
              >
                Login
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-5 bg-light text-center">
          <div className="container my-5 pb-5">
            <h2 className="mb-5">Our Key Features</h2>
            <div className="row g-6">
              <div className="col-md-4">
                <div className="card shadow-sm feature-card">
                  <div className="card-body">
                    <h5 className="card-title text-primary">Real-time Inventory</h5>
                    <p className="card-text">
                      Track your inventory in real-time across all devices and get instant updates.
                    </p>
                    <ul className="list-unstyled text-secondary">
                      <li>Instant updates on stock changes</li>
                      <li>View current stock levels anytime</li>
                      <li>Real-time syncing between devices</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-md feature-card">
                  <div className="card-body">
                    <h5 className="card-title text-success">Detailed Reporting</h5>
                    <p className="card-text">
                      Generate insightful reports to analyze sales, inventory turnover, and user activity.
                    </p>
                    <ul className="list-unstyled text-secondary">
                      <li>Sales performance analysis</li>
                      <li>Inventory turnover insights</li>
                      <li>Export reports to CSV</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm feature-card">
                  <div className="card-body">
                    <h5 className="card-title text-danger">User Management</h5>
                    <p className="card-text">
                      Manage user roles and permissions with an intuitive admin interface.
                    </p>
                    <ul className="list-unstyled text-secondary">
                      <li>Create and manage user profiles</li>
                      <li>Assign roles and permissions</li>
                      <li>Monitor user activity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-5 bg-primary text-white text-center">
          <div className="container">
            <h2 className="mb-4">Get In Touch</h2>
            <p className="mb-3">Need assistance or have questions? Contact our support team!</p>
            <p className="mb-1">
              <strong>Email:</strong> support@bookinventory.com
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <div>
              <a href="mailto:support@bookinventory.com" className="btn btn-light me-3">
                Email Us
              </a>
              <a href="tel:+15551234567" className="btn btn-light">
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
