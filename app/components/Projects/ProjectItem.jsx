import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

const ProjectItem = ({ project }) => {
  return (
    <div className="border border-gray-800 rounded-xl p-3 flex flex-col bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-3xl">
      <div>
        <div
          className="w-full min-h-36 lg:min-h-64 h-[50%] bg-cover rounded-t-lg"
          style={{ backgroundImage: `url(${project.imgUrl})` }}
        ></div>
        <div className="flex flex-col gap-3 my-4">
          <p>{project.title}</p>
          <div className="text-gray-400">
            {project.description.length > 300 ? (
              <p>{project.description.slice(0, 300)}...</p>
            ) : (
              <p className="overflow-hidden">{project.description}</p>
            )}
          </div>
        </div>
      </div>
      <div className="grid gap-2">
        <button className="bg-gray-800  p-2 rounded-lg flex justify-center items-center gap-4">
          <TbListDetails />
          Project Details
        </button>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-2 rounded-lg flex justify-center items-center gap-4"
        >
          <FaExternalLinkAlt />
          Live Preview
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
