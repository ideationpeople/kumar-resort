'use client';
// src/components/NewsletterSignUp.js
import React, { useState } from "react";
import axios from "axios";
import { notification, Button, Input, Form } from "antd";
// import "../App.css";

const NewsletterSignUp = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const firebaseURL =
    "https://unwind-7c2d6-default-rtdb.firebaseio.com/newsletter.json";

  const handleSubmit = async () => {
    if (!email) {
      return notification.error({
        message: "Error",
        description: "Please enter a valid email address.",
      });
    }

    setSubmitting(true);

    try {
      await axios.post(firebaseURL, { email, timestamp: new Date().toString() });

      notification.success({
        message: "Success",
        description: "You have successfully signed up for the newsletter!",
      });

      setEmail("");
    } catch (error) {
      console.error("Error signing up for the newsletter:", error);

      notification.error({
        message: "Error",
        description: "There was an error signing up for the newsletter. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "20px", textAlign: "center" }}>
      <h2>Sign Up for Our Newsletter</h2>
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
          <Button type="primary" htmlType="submit" loading={submitting}>
            {submitting ? "Submitting..." : "Sign Up"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewsletterSignUp;
