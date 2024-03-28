import React from "react";
import data from "./data";
import Image from "next/image";
import Link from "next/link";

const ProjectDetails = ({ project }) => {
  console.log(project);
  return (
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

        <button className="px-4 py-3 duration-150 rounded-lg custom__shadow shadow__lg__on__hover active:scale-90">
          {" "}
          <Link href={project[0].link} target="_black">
            See Live Preview
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
