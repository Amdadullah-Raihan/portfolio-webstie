"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import bg from "../../assests/bg.jpg";
import Image from "next/image";

const Experiences = () => {
  const experiences = [
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
      date: "Feb 2021 - Present",
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
      className="xl:container mx-auto relative w-full flex flex-col gap-y-6 bg-cover"
      id="experiences"
    >
      <p className="text-2xl uppercase font-bold  text__shadow">
        <span className="text-green-400 font-bold text-3xl">&lt;</span>My
        Experiences{""}
        <span className="text-green-400">&#47;</span>
        <span className="text-green-400 font-bold text-3xl">&gt;</span>
      </p>
      <div className="relative flex flex-col gap-y-12 ml-4 lg:ml-16 z-10">
        <motion.div className="w-[3px] rounded bg-blue-100 h-full absolute left-0 z-0"></motion.div>

        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
