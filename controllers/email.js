require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gamil",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PWD,
  },
});

const mailOption = {
  from: {
    name: "sssi-tech",
    address: process.env.EMAIL_ID,
  },
  to: "",
  subject: "sssi-tech onboarding mail",
  html: "<p>Your login details are verified successfully.</p><p>Thanks for joining with us.</p><br /><p>Thanks & Regards</p><p><b>sssi-tech</b></p><p>+91-7019397735</p><p>Shasssi.dev@gmail.com</p>",
};

const userVerificationOption = {
  from: {
    name: "sssi-tech",
    address: process.env.EMAIL_ID,
  },
  to: process.env.EMAIL_ID,
  subject: "sssi-tech onboarding mail",
  text: "",
};

const sendMail = async (mailContent) => {
  try {
    await transporter.sendMail(mailContent);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { sendMail, mailOption, userVerificationOption };
