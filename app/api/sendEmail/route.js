import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

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
      from: email,
      to: "amdadullahrayhan@gmail.com",
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json({
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email" }),
    });
  }
}
