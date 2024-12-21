// src/auth/LoginPage.jsx
import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [role, setRole] = useState("User");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "Admin" && email == "admin@me.com" && password == 123) {
      navigate("/admin-login");
    } else if (role === "User" && email == "user@me.com" && password == 123) {
      navigate("/user-login");
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg p-4" style={{ width: "24rem" }}>
        <h2 className="text-center text-primary mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <select
              id="role"
              className="form-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        {/* Sign up link */}
        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <a href="/signup" className="text-decoration-none text-primary">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
