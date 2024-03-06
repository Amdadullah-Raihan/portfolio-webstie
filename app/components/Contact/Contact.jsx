"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
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

    console.log(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send Message");
        console.error("Failed to send Message.");
      }
    } catch (error) {
      toast.error("Error sending email", {
        duration: 3000,
        position: "top-right",
      });
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-10">
          <div className="mb-10">
            <motion.button
              whileTap={{ scale: 0.7 }}
              type="submit"
              className="bg-teal-800 bg-opacity-20 shadow__lg__on__hover w-full py-2 px-4 rounded-md  transition-all "
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </motion.button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
