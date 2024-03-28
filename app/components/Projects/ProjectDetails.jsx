import React from "react";
import data from "./data";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetails = ({ project }) => {
  console.log(project);
  return (
    <div>
      <div className="grid w-full gap-16 lg:grid-cols-2">
        <div className="w-full overflow-y-scroll max-h-[500px] custom__shadow p-1 pr-0 ">
          <img
            alt={project[0].title}
            src={project[0].imgUrl}
            className="w-full"
          />
        </div>
        <div className="max-w-1/2">
          <h1 className="text-4xl font-bold">{project[0].title}</h1>
          <p className="my-4">{project[0].description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project[0].skills.map((skill) => (
              <div
                key={skill}
                className="px-3 py-1 font-semibold text-teal-500 bg-teal-500 rounded-full bg-opacity-20"
              >
                {skill}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {project[0].code && project[0].code.fullCode && (
              <Link
                href={project[0].code.fullCode}
                target="_black"
                className="flex items-center justify-center gap-3 px-4 py-3 duration-150 rounded-lg custom__shadow shadow__lg__on__hover active:scale-90"
              >
                <FaGithub />
                See Code
              </Link>
            )}
            {project[0].code && project[0].code.clientCode && (
              <Link
                href={project[0].code.clientCode}
                target="_black"
                className="flex items-center justify-center w-full gap-3 px-4 py-3 duration-150 rounded-lg custom__shadow shadow__lg__on__hover active:scale-90"
              >
                <FaGithub />
                Client Code
              </Link>
            )}
            {project[0].code && project[0].code.serverCode && (
              <Link
                href={project[0].code.serverCode}
                target="_black"
                className="flex items-center justify-center w-full gap-3 px-4 py-3 duration-150 rounded-lg custom__shadow shadow__lg__on__hover active:scale-90"
              >
                <FaGithub />
                Server Code
              </Link>
            )}{" "}
            <Link
              href={project[0].link}
              target="_black"
              className="flex items-center justify-center gap-3 px-4 py-3 duration-150 rounded-lg custom__shadow shadow__lg__on__hover active:scale-90"
            >
              <FaExternalLinkAlt className="" />
              See Live Preview
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full mt-16">
        {project[0].myContributions && (
          <div>
            <h1 className="text-3xl">What I did?</h1>
            <ul className="pl-4">
              {project[0].myContributions.map((point, idx) => (
                <li key={idx} className="my-4 list-disc">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
