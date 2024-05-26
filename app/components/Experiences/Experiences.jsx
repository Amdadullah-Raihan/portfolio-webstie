"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import bg from "../../assests/bg.jpg";
import Image from "next/image";
import DotsGrid from "../Backgrounds/DotsGrid";

const Experiences = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Perceptron",
      location: "Bangladesh, Remote, Part-time",
      date: "May 2024 - Present",
      responsibilities: [
        "Develop and improve user interfaces for web applications, enhancing user experience by 20% by implementing responsive design using React and TailwindCSS.",
        "Collaborate with 6 team members in an Agile environment to deliver front-end features, reducing project completion time by 15% by maintaining clear communication and providing feedback during online meetings.",
        "Implement dynamic and interactive UI components for ERP and CRM systems, increasing user satisfaction by 25%, by adhering to best practices in front-end development and ensuring high attention to detail.",
      ],
    },
    {
      title: "NextJS Developer Intern",
      company: "ZigyFlow",
      location: "India, Remote",
      date: "Jun 2023 - Oct 2023",
      responsibilities: [
        "Develop and maintain web apps using NextJS for a 2 million+ targeting user base with 100+ features.",
        "Execute full software development life cycle (SDLC) and write well-designed, testable code.",
        "Collaborate with the team to resolve issues, ensuring smooth functionality and optimal performance.",
      ],
    },
    {
      title: "MERN Stack Developer",
      company: "Upwork",
      location: "Freelance",
      date: "Feb 2023 - Present",
      responsibilities: [
        "Developed and deployed web apps using TypeScript, NextJS, ReactJS, ExpressJS, MongoDB, and Firebase.",
        "Collaborated with clients to understand their needs and deliver solutions tailored to their requirements.",
        "Communicated project progress provided updates to clients regularly and managed multiple projects.",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <section
      className="relative flex flex-col w-full mx-auto overflow-hidden xl:container gap-y-6"
      id="experiences"
    >
      <p className="text-2xl font-bold uppercase text__shadow ">
        <span className="text-3xl font-bold text-green-400">&lt;</span>
        <span className="text-gradient-to-r from-teal-500 to-indigo-500">
          My Experiences
        </span>
        <span className="text-green-400">&#47;</span>
        <span className="text-3xl font-bold text-green-400">&gt;</span>
      </p>
      <div className="relative z-10 flex flex-col ml-4 gap-y-12 lg:ml-16">
        <motion.div className="w-[3px] rounded bg-blue-100 h-full absolute left-0 z-0"></motion.div>

        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} index={index} />
        ))}
      </div>
      {/* <DotsGrid /> */}
    </section>
  );
};

export default Experiences;
