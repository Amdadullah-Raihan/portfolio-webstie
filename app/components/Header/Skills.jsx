"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "ReactJS",
    "NextJS",
    "ExpressJS",
    "NodeJS",
    "TypeScript",
    "JavaScript",
    "Redux",
    "MongoDB",
    "TailwindCSS",
    "REST APIs",
  ];

  return (
    <div className="mt-4 lg:mt-10">
      <p className="text-2xl font-bold mb-6 text-center uppercase">My Skills</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
            className="bg-gray-800 p-4 rounded-lg shadow-md text-white text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
