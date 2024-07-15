const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

// Load environment variables from .env file
dotenv.config();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 465,
  secure: true,
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Function to send email
async function mailSender(from, to, subject, text) {
  console.log(`Sending email from ${from} to ${to} with subject ${subject}`);
  
  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: text,
    // html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email: ', error);
    } else {
      console.log('Email sent: ', info.response);
    }
  });
}

module.exports = mailSender;
