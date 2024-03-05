// netlify/functions/sendEmail.js

import { createTransport } from "nodemailer";

export async function handler(event) {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Create a nodemailer transporter
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Configure the email options
    const mailOptions = {
      from: "your.email@gmail.com",
      to: "amdadullahrayhan@gmail.com",
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email" }),
    };
  }
}
