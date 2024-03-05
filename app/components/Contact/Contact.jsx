"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("This feature isn't availavle yet. ");
    try {
      const response = await fetch("YOUR_NETLIFY_FUNCTION_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <div className=" w-full lg:w-1/2 xl:w-1/3 rounded-md p-4">
      <div className="grid grid-cols-2 justify-between items-center mb-4">
        <h2 className="text-2xl font-bold ">Contact Me</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block  mb-2 ">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2  rounded-md bg-teal-800 bg-opacity-20 outline-none"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block  mb-2">
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2  rounded-md bg-teal-800 bg-opacity-20 outline-none"
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block  mb-2">
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2  rounded-md bg-teal-800 bg-opacity-20 outline-none"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>
        <div className="mb-10">
          <button
            type="submit"
            className=" bg-teal-800 bg-opacity-20 shadow__lg__on__hover w-full py-2 px-4 rounded-md  transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
