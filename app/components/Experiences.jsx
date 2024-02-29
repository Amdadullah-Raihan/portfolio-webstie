"use client";
import React from "react";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="relative flex justify-center w-full">
      <div className="w-[2px] h-52 bg-blue-50 relative"></div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 left-[49%] flex items-center gap-4"
      >
        <div className="border-2 border-blue-50 bg-gray-900 rounded-full p-[6px] "></div>
        <div>
          <p>NextJS Developer</p>
          <p>ZigyFlow, India, Remote</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-24 right-[49%] flex items-center gap-4"
      >
        <div>
          <p>NextJS Developer</p>
          <p>ZigyFlow, India, Remote</p>
        </div>
        <div className="border-2 border-blue-50 bg-gray-900 rounded-full p-[6px] "></div>
      </motion.div>
    </div>
  );
};

export default Experiences;
