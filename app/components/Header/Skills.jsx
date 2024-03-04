"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

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

  const [skillsRef, isSkillsInView] = useInView({ triggerOnce: true });

  return (
    <div className="mt-4">
      <p className="text-2xl font-bold mb-6 text-center uppercase text__shadow">
        <span className="text-green-400 font-bold text-3xl">&lt;</span>My Skills
        {""}
        <span className="text-green-400 font-bold">&#47;</span>
        <span className="text-green-400 font-bold text-3xl">&gt;</span>
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 ">
        {skills.map((skill, index) => (
          <motion.div
            ref={skillsRef}
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={isSkillsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            whileHover={{ scale: 1.1 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
            className="bg-teal-800 bg-opacity-15 px-4 py-3 rounded-lg shadow text-center flex  justify-center items-center gap-2 custom__shadow"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
