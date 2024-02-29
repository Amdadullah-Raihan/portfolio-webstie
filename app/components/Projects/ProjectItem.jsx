import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

const ProjectItem = ({ project }) => {
  return (
    <div className="border  border-gray-600 rounded-xl p-4 flex flex-col gap-3">
      <div>
        <Image
          src={project.imgUrl}
          className="w-full "
          alt=""
          width={100}
          height={100}
        />
        {project.title}
      </div>
      <div className="grid  gap-2">
        <button className="bg-gray-800 p-2 rounded-lg flex justify-center items-center gap-4 ">
          <TbListDetails />
          Project Details
        </button>

        <button className="bg-gray-800 p-2 rounded-lg flex justify-center items-center gap-4 ">
          <FaExternalLinkAlt />
          Live Preview
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
