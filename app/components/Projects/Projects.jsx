"use client";
import React, { useEffect, useRef, useState } from "react";
import Skills from "../Header/Skills";
import ProjectItem from "./ProjectItem";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "./data";

const Projects = () => {
  const [selected, setSelected] = useState("All");
  const [projects, skills] = data();
  const [projectsRef, isProjectsInView] = useInView({ triggerOnce: true });
  const [projectRef, isProjectInView] = useInView({ triggerOnce: true });

  const filteredProjects =
    selected === "All"
      ? projects
      : projects.filter((project) => project.skills.includes(selected));

  return (
    <motion.div
      ref={projectsRef}
      initial={{ y: 50, opacity: 0 }}
      animate={isProjectsInView ? { y: 0, opacity: 1 } : {}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative xl:container mx-auto pb-10"
      id="projects"
    >
      <p className="text-2xl uppercase font-bold text__shadow ">
        <span className="text-green-400 font-bold text-3xl">&lt;</span>My
        Projects<span className="text-green-400">&#47;</span>
        <span className="text-green-400 font-bold text-3xl">&gt;</span>
      </p>
      <div className={`flex flex-wrap gap-4 my-6 `}>
        {skills?.map((skill) => (
          <motion.button
            key={skill}
            className={`border border-gray-800 p-2 rounded-lg transition-all duration-300 shadow__on__hover ${
              selected === skill && "custom__shadow"
            }`}
            onClick={() => setSelected(skill)}
          >
            {skill}
          </motion.button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div
          id="projects_container"
          className="grid lg:grid-cols-2 gap-4 lg:gap-6 "
        >
          {filteredProjects.map((project, index) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div>
          <span className="text-rose-300 font-bold">Sorry!!</span> I didn&apos;t
          build any project using{""}
          <span className="text-green-500">{selected}</span> yet.
        </div>
      )}
    </motion.div>
  );
};

export default Projects;
