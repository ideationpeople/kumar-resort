// src/components/Admin.js
import React from "react";
import { Button } from "antd";
import { useAuth } from "../contexts/AuthContext";
import "../App.css";

const Admin = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "20px", textAlign: "center" }}>
      <h2>Admin Page</h2>
      <p>Welcome, {currentUser.email}</p>
      <Button type="primary" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Admin;
