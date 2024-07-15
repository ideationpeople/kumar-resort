// app/website/admin/enquiries/page.js
'use client';

import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../utils/firebaseConfig';
import ProtectedRoute from '../../../../components/ProtectedRoute';
import { notification } from 'antd';
import { useRouter } from 'next/navigation';
import logout from '../../../../utils/logout';
import mailSender from '../../../../utils/mailSender';

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchEnquiries = async () => {
      const querySnapshot = await getDocs(collection(db, 'enquiries'));
      const enquiriesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEnquiries(enquiriesList);
    };
    fetchEnquiries();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'enquiries', id));
      setEnquiries(enquiries.filter((enquiry) => enquiry.id !== id));
      notification.success({
        message: 'Success',
        description: 'Enquiry deleted successfully!',
      });
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'There was an error deleting the enquiry. Please try again later.',
      });
    }
  };

  const handleSendEmail = async (email, subject, message) => {
    try {
      await mailSender('your-email@example.com', email, subject, message);
      notification.success({
        message: 'Success',
        description: 'Email sent successfully!',
      });
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'There was an error sending the email. Please try again later.',
      });
    }
  };

  return (
    <ProtectedRoute>
      <div>
        <h1>Enquiries</h1>
        <button onClick={() => logout(router)}>Logout</button>
        <ul>
          {enquiries.map((enquiry) => (
            <li key={enquiry.id}>
              <p>Name: {enquiry.name}</p>
              <p>Email: {enquiry.email}</p>
              <p>Subject: {enquiry.subject}</p>
              <p>Message: {enquiry.message}</p>
              <button onClick={() => handleDelete(enquiry.id)}>Delete</button>
              <button onClick={() => handleSendEmail(enquiry.email, enquiry.subject, enquiry.message)}>
                Send Email
              </button>
            </li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  );
};

export default Enquiries;
