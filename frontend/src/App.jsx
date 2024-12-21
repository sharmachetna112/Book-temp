// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./auth/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import ManageBooks from "./components/adminDashboard/component/books/ManageBooks";
import ManagePurchaseLog from "./components/adminDashboard/component/purchaseLog/ManagePurchaseLog";
import ManageInventory from "./components/adminDashboard/component/inventory/ManageInventory";
import ManageUsers from "./components/adminDashboard/component/users/ManageUsers";
import ManageUserBooks from "./components/userDashboard/component/books/ManageUserBooks";
import ShoppingCart from "./components/userDashboard/component/shoppingCart/ShoppingCart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-login" element={<AdminDashboard />}>
          {/* <Route index element={<AdminSummary />} /> */}
          <Route index element={<ManageBooks />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="purchase-log" element={<ManagePurchaseLog />} />
          <Route path="inventory" element={<ManageInventory />} />
        </Route>
        <Route path="/user-login/*" element={<UserDashboard />}>
          <Route index element={<ManageUserBooks />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
