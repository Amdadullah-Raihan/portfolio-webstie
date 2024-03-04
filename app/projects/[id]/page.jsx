import React from "react";
import ProjectDetails from "../../components/Projects/ProjectDetails";
import Link from "next/link";

const Project = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <ProjectDetails />
      <button>
        {" "}
        <Link href="/" className="custom__shadow px-4 py-2 rounded-lg">
          Go Back to Homepage
        </Link>
      </button>
    </div>
  );
};

export default Project;
