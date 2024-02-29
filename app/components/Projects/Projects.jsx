"use client";
import React, { useState } from "react";
import Skills from "../Header/Skills";

const skills = [
  "All",
  "ReactJS",
  "NextJS",
  "TypeScript",
  "JavaScript",
  "ExpressJS",
  "NodeJS",
  "Redux",
  "MongoDB",
  "TailwindCSS",
];

const Projects = () => {
  const [selected, setSelected] = useState("All");
  return (
    <div className="relative">
      <p className="text-2xl uppercase font-bold">My Projects</p>
      <div className={`flex flex-wrap gap-4 my-6  `}>
        {skills?.map((skill) => (
          <button
            key={skill}
            className={`border border-gray-600 p-2 rounded-lg ${
              selected === skill && "bg-gray-800"
            }`}
            onClick={() => setSelected(skill)}
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 ">
        <div className="border py-16 rounded-lg"></div>
        <div className="border py-16 rounded-lg"></div>
        <div className="border py-16 rounded-lg"></div>
        <div className="border py-16 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Projects;
