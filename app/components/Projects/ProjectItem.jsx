import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ProjectItem = ({ project, index }) => {
  const descriptionRef = useRef(null);
  const [isOverflowed, setIsOverflowed] = useState(false);
  const [projectRef, isProjectInView] = useInView({ triggerOnce: true });

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
      ref={projectRef}
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={isProjectInView ? { scale: 1, opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-gray-800 rounded-xl p-3 flex flex-col bg-teal-800  bg-opacity-10 hover:bg-opacity-20 backdrop-filter backdrop-blur-3xl shadow-2xl hover:"
    >
      <div>
        <div
          className="w-full min-h-36 lg:min-h-64 h-[50%] bg-cover rounded-t-lg"
          style={{ backgroundImage: `url(${project.imgUrl})` }}
        ></div>
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
            className="bg-teal-900 bg-opacity-50 text-teal-300 px-2 py-1 rounded-full text-xs"
          >
            {skill}
          </p>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-2 z-10">
        <button className="bg-teal-800 bg-opacity-15  p-2 rounded-lg flex justify-center items-center gap-4 hover:border hover:border-teal-900">
          <TbListDetails />
          Project Details
        </button>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal-800 bg-opacity-15 p-2 rounded-lg flex justify-center items-center gap-4 hover:border hover:border-teal-900"
        >
          <FaExternalLinkAlt />
          Live Preview
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
