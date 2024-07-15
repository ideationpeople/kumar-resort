'use client';
// src/components/EnquiryForm.js
import React, { useState } from "react";
import axios from "axios";
import { notification, Button, Input, Form } from "antd";
// import "../App.css";

const EnquiryForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const firebaseURL = "https://unwind-7c2d6-default-rtdb.firebaseio.com/enquiries.json";

  const handleSubmit = async () => {
    if (!name || !email || !message) {
      return notification.error({
        message: "Error",
        description: "Please fill out all fields.",
      });
    }

    setSubmitting(true);

    try {
      await axios.post(firebaseURL, { name, email, message, timestamp: new Date().toString() });

      notification.success({
        message: "Success",
        description: "Your enquiry has been submitted successfully!",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting enquiry:", error);

      notification.error({
        message: "Error",
        description: "There was an error submitting your enquiry. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "20px", textAlign: "center" }}>
      <h2>Enquiry Form</h2>
      <Form onFinish={handleSubmit}>
        <Form.Item>
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item>
          <Input.TextArea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={submitting}>
            {submitting ? "Submitting..." : "Submit Enquiry"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EnquiryForm;
