"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

const ProjectItem = ({ project, index }) => {
  const descriptionRef = useRef(null);
  const [isOverflowed, setIsOverflowed] = useState(false);
  const [projectRef, isProjectInView] = useInView({ triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const hoverStyles = {
    backgroundImage: `url(${project.imgUrl})`,
    backgroundPosition: isHovered ? "0% 100%" : "0% 0%",
    transition: "background-position 0.5s ease",
  };

  useEffect(() => {
    const descriptionElement = descriptionRef.current;

    if (descriptionElement) {
      setIsOverflowed(
        descriptionElement.scrollHeight > descriptionElement.clientHeight
      );
    }
  }, [project.description]);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={isProjectInView ? { scale: 1, opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      ref={projectRef}
      className={`relative border border-gray-800 rounded-xl p-3 flex flex-col bg-teal-800  bg-opacity-10 custom__shadow shadow__lg__on__hover hover:transition-all hover:duration-300 z-1 `}
    >
      <div
        className="relative w-full bg-green-900 bg-cover rounded-t-lg min-h-52 lg:min-h-72"
        style={hoverStyles}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div className="absolute w-full h-full rounded-t-lg lg:bg-green-900 lg:bg-opacity-15 hover:bg-opacity-0" />
      </div>
      <div>
        <div className="flex flex-col gap-3 my-4">
          <p>{project.title}</p>
          <div className="text-[#94A3B8] overflow-hidden max-h-24 line-clamp-3">
            {project.description}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills.map((skill, index) => (
          <p
            key={index}
            className="px-2 py-1 text-xs text-teal-300 bg-teal-900 bg-opacity-50 rounded-full"
          >
            {skill}
          </p>
        ))}
      </div>

      <div className="flex items-end justify-center h-full ">
        <div className="z-20 grid w-full gap-2 md:grid-cols-2">
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center justify-center gap-4 p-2 transition-shadow duration-300 bg-teal-800 rounded-lg bg-opacity-15 shadow__on__hover"
          >
            <TbListDetails />
            Project Details
          </Link>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-2 transition-all duration-300 bg-teal-800 rounded-lg bg-opacity-15 shadow__on__hover"
          >
            <FaExternalLinkAlt />
            Live Preview
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
