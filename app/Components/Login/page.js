// src/components/Login.js
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { notification, Button, Input, Form } from "antd";
// import "../App.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await login(email, password);
      notification.success({
        message: "Success",
        description: "You have successfully logged in!",
      });
      history.push("/admin");
    } catch (error) {
      console.error("Error logging in:", error);
      notification.error({
        message: "Error",
        description: "There was an error logging in. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "20px", textAlign: "center" }}>
      <h2>Login</h2>
      <Form onFinish={handleSubmit}>
        <Form.Item>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={submitting}>
            {submitting ? "Logging in..." : "Login"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
