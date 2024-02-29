"use client";
import React, { useState } from "react";
import Skills from "../Header/Skills";
import ProjectItem from "./ProjectItem";

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

const projects = [
  {
    id: 1,
    title: "Inventory Manager Pro",
    description: "Description for Project A.",
    link: "https://projectA.com",
    skills: ["ReactJS", "NodeJS", "MongoDB"],
    imgUrl:
      "https://www.sapphirewebsolutions.com/wp-content/uploads/2019/09/Web-Development-Trends.jpg",
  },
  {
    id: 2,
    title: "Roberto",
    description: "Description for Project B.",
    link: "https://projectB.com",
    skills: ["JavaScript", "ExpressJS", "MySQL"],
    imgUrl:
      "https://www.sapphirewebsolutions.com/wp-content/uploads/2019/09/Web-Development-Trends.jpg",
  },
  {
    id: 3,
    title: "Digital Fashion Store",
    description: "Description for Project C.",
    link: "https://projectC.com",
    skills: ["TypeScript", "ReactJS", "PostgreSQL"],
    imgUrl:
      "https://www.sapphirewebsolutions.com/wp-content/uploads/2019/09/Web-Development-Trends.jpg",
  },
  {
    id: 4,
    title: "Project D",
    description: "Description for Project D.",
    link: "https://projectD.com",
    skills: ["Redux", "Firebase", "GraphQL"],
    imgUrl:
      "https://www.sapphirewebsolutions.com/wp-content/uploads/2019/09/Web-Development-Trends.jpg",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projects
      : projects.filter((project) => project.skills.includes(selected));

  return (
    <div className="relative" id="projects">
      <p className="text-2xl uppercase font-bold">My Projects</p>
      <div className={`flex flex-wrap gap-4 my-6 `}>
        {skills?.map((skill) => (
          <button
            key={skill}
            className={`border border-gray-600 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 ${
              selected === skill && "bg-gray-700"
            }`}
            onClick={() => setSelected(skill)}
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
        {filteredProjects.length === 0 ? (
          <div className="text-rose-300 py-8 ">No Product Found!</div>
        ) : (
          filteredProjects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
