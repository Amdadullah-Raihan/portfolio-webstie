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
    description:
      "Inventory Manager Pro is a sleek and efficient web application designed to streamline inventory management. Developed using ReactJS and hosted on Vercel, this project offers a user-friendly interface for easy tracking and organization of inventory. Check out the live demo to explore its seamless functionality.",
    link: "https://inventory-manager-pro.vercel.app/",
    skills: [
      "ReactJS",
      "NextJS",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "ExpressJS",
      "TailwindCSS",
    ],
    imgUrl:
      "https://i.ibb.co/zHzZ57r/screencapture-inventory-manager-pro-vercel-app-2024-02-29-21-34-29.png",
  },
  {
    id: 2,
    title: "Roberto Hotel & Resort",
    description:
      "Embark on a virtual journey with the Tourism Roberto website. Crafted using ReactJS and hosted on Firebase, this platform invites you to explore exciting destinations and plan your dream vacation. Immerse yourself in a visually captivating experience, complete with dynamic content and smooth navigation. Visit the live site to start your adventure.",
    link: "https://tourism-roberto.web.app/",
    skills: [
      "ReactJS",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
      "JavaScript",
      "TailwindCSS",
      "ExpressJS",
    ],
    imgUrl:
      "https://i.ibb.co/GsQcFZ4/screencapture-tourism-roberto-web-app-2024-02-29-21-37-15.png",
  },
  {
    id: 3,
    title: "Digital Fashion Store",
    description:
      "Digital Fashion Store is a vibrant e-commerce website built with ReactJS and hosted on Firebase. Dive into a visually appealing and user-friendly online shopping experience. Explore the latest fashion trends and enjoy smooth navigation. Visit the live site to browse the collections and witness the seamless integration of design and functionality.",
    link: "https://digital-fashion-store.web.app/",
    skills: [
      "ReactJS",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
      "JavaScript",
      "TailwindCSS",
      "ExpressJS",
    ],
    imgUrl:
      "https://i.ibb.co/sKTdrPW/screencapture-digital-fashion-store-web-app-2024-02-29-21-36-28.png",
  },
  {
    id: 4,
    title: "GetDone",
    description:
      "Experience productivity at its best with the Todo App. This minimalist task management web application, developed using ReactJS and hosted on Vercel, offers a clean and intuitive interface. Easily add, edit, and check off tasks with real-time updates. Explore the live demo to simplify your to-do list today.",
    link: "https://todo-app-qtech.vercel.app/",
    skills: [
      "ReactJS",
      "NextJS",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
      "JavaScript",
      "TailwindCSS",
      "ExpressJS",
    ],
    imgUrl:
      "https://i.ibb.co/N1T4wdL/screencapture-todo-app-qtech-vercel-app-2024-02-29-21-23-53.png",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projects
      : projects.filter((project) => project.skills.includes(selected));

  return (
    <div className="relative container mx-auto" id="projects">
      <p className="text-2xl uppercase font-bold">My Projects</p>
      <div className={`flex flex-wrap gap-4 my-6 `}>
        {skills?.map((skill) => (
          <button
            key={skill}
            className={`border border-gray-800 p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 ${
              selected === skill && "bg-gray-700"
            }`}
            onClick={() => setSelected(skill)}
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {filteredProjects.length === 0 ? (
          <div className="py-8 ">
            <span className="text-rose-300">Sorry!! </span> I didn&apos;t
            develop any project using{" "}
            <span className="text-blue-300"> {selected}</span> yet.
          </div>
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
