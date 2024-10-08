// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { notification } from 'antd';
// import 'antd/dist/reset.css';
// import mailSender from '../../utils/page';

// export default function Contact() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [subject, setSubject] = useState("");
//     const [message, setMessage] = useState("");
//     const [submitting, setSubmitting] = useState(false);
//     const timeoutRef = useRef(null);

//     useEffect(() => {
//         // Clean up timeout on component unmount
//         return () => {
//             if (timeoutRef.current) {
//                 clearTimeout(timeoutRef.current);
//             }
//         };
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setSubmitting(true);

//         try {
//             const response = await fetch("api/contact", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ name, email, subject, message }),
//             });

//             if (response.ok) {
//                 // Send email
//                 await mailSender("bimalgayali@gmail.com", email, subject, message);

//                 // Reset form fields
//                 setName("");
//                 setEmail("");
//                 setSubject("");
//                 setMessage("");

//                 // Show success notification
//                 notification.success({
//                     message: 'Success',
//                     description: 'Your message has been sent successfully!',
//                 });

//                 const submitButton = document.getElementById('submitButton');
//                 submitButton.textContent = 'Data Stored Successfully';
//                 submitButton.classList.add('success');

//                 timeoutRef.current = setTimeout(() => {
//                     submitButton.textContent = 'Send Message';
//                     submitButton.classList.remove('success');
//                 }, 2000);
//             } else {
//                 throw new Error("Failed to submit form");
//             }
//         } catch (error) {
//             console.log(error);
//             // Show error notification
//             notification.error({
//                 message: 'Error',
//                 description: 'There was an error sending your message. Please try again later.',
//             });
//         } finally {
//             setSubmitting(false);
//         }
//     };

//     return (
//         <section id="contact" className="contact">
//             <div className="container">
//                 <div className="section-title" data-aos="zoom-out">
//                     <h2>Contact</h2>
//                     <p>Contact Us</p>
//                 </div>
//                 <div className="row mt-5">
//                     <div className="col-lg-4" data-aos="fade-right">
//                         <div className="info">
//                             <div className="address">
//                                 <i className="bi bi-geo-alt"></i>
//                                 <h4>Location:</h4>
//                                 <p>A108 Adam Street, New York, NY 535022</p>
//                             </div>
//                             <div className="email">
//                                 <i className="bi bi-envelope"></i>
//                                 <h4>Email:</h4>
//                                 <p>info@example.com</p>
//                             </div>
//                             <div className="phone">
//                                 <i className="bi bi-phone"></i>
//                                 <h4>Call:</h4>
//                                 <p>+1 5589 55488 55s</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">
//                         <form className="php-email-form" onSubmit={handleSubmit}>
//                             <div className="row">
//                                 <div className="col-md-6 form-group">
//                                     <input
//                                         type="text"
//                                         value={name}
//                                         name="name"
//                                         className="form-control"
//                                         id="name"
//                                         placeholder="Your Name"
//                                         required
//                                         onChange={(e) => setName(e.target.value)}
//                                     />
//                                 </div>
//                                 <div className="col-md-6 form-group mt-3 mt-md-0">
//                                     <input
//                                         type="email"
//                                         value={email}
//                                         className="form-control"
//                                         name="email"
//                                         id="email"
//                                         placeholder="Your Email"
//                                         required
//                                         onChange={(e) => setEmail(e.target.value)}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="form-group mt-3">
//                                 <input
//                                     type="text"
//                                     value={subject}
//                                     className="form-control"
//                                     name="subject"
//                                     id="subject"
//                                     placeholder="Subject"
//                                     required
//                                     onChange={(e) => setSubject(e.target.value)}
//                                 />
//                             </div>
//                             <div className="form-group mt-3">
//                                 <textarea
//                                     value={message}
//                                     className="form-control"
//                                     name="message"
//                                     rows="5"
//                                     placeholder="Message"
//                                     required
//                                     onChange={(e) => setMessage(e.target.value)}
//                                 ></textarea>
//                             </div>
//                             <div className="my-3">
//                                 <div className="loading">Loading</div>
//                                 <div className="error-message"></div>
//                                 <div className="sent-message">Your message has been sent. Thank you!</div>
//                             </div>
//                             <div className="text-center">
//                                 <button type="submit" id="submitButton" disabled={submitting}>
//                                     {submitting ? "Submitting..." : "Send Message"}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }




"use client"

import React, { useState, useEffect, useRef } from "react"
import { notification } from 'antd';
export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const timeoutRef = useRef(null);

    // useEffect(() => {
    //     // Clean up timeout on component unmount
    //     return () => {
    //         if (timeoutRef.current) {
    //             clearTimeout(timeoutRef.current);
    //         }
    //     };
    // }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, subject, message }),
            });

            if (response.ok) {
                setName("");
                setEmail("");
                setSubject("");
                setMessage("");
                // Show success notification
                notification.success({
                    message: 'Success',
                    description: 'Your message has been sent successfully!',
                });

                const submitButton = document.getElementById('submitButton');
                submitButton.textContent = 'Data Stored Successfully';
                submitButton.classList.add('success');

                timeoutRef.current = setTimeout(() => {
                    submitButton.textContent = 'Send Message';
                    submitButton.classList.remove('success');
                }, 2000);
                console.log({
                    name:name,
                    email: email,
                    subject: subject,
                    message: message
                });
            }
            else{
                alert("Error");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        // <!-- ======= Contact Section ======= -->
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title" data-aos="zoom-out">
                    <h2>Contact</h2>
                    <p>Contact Us</p>
                </div>

                <div className="row mt-5">

                    <div className="col-lg-4" data-aos="fade-right">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@example.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+1 5589 55488 55s</p>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

                        <form className="php-email-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" value={name} name="name" className="form-control" id="name" placeholder="Your Name" required onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" value={email} className="form-control" name="email" id="email" placeholder="Your Email" required onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" value={subject} className="form-control" name="subject" id="subject" placeholder="Subject" required onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className="form-group mt-3">
                                <textarea value={message} className="form-control" name="message" rows="5" placeholder="Message" required onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="submit" id="submitButton">Send Message</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
            {/* <!-- End Contact Section --> */}
        </section>
    )
}