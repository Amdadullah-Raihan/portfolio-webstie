"use client";
import React from "react";
import ProjectDetails from "../../components/Projects/ProjectDetails";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import data from "../../components/Projects/data";

const Project = () => {
  const { id } = useParams();
  const [projects] = data();

  const project = projects.filter((project) => project.id.toString() === id);

  return (
    <div className="w-full max-w-screen-xl p-4 mx-auto pb-14 lg:pb-16 lg:p-16">
      <motion.button whileTap={{ scale: 0.7 }} className="mb-16">
        {" "}
        <Link href="/" className="px-4 py-2 rounded-lg custom__shadow ">
          Go Back to Homepage
        </Link>
      </motion.button>
      <ProjectDetails project={project} />
    </div>
  );
};

export default Project;
