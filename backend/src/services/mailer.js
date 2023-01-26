require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
});

module.exports = transporter;
