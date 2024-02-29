import React from "react";
import Skills from "./Skills";

const IntroContent = () => {
  return (
    <div className="flex flex-col gap-y-6 justify-center p-4 lg:p-0">
      <div>
        <p className="text-5xl font-bold">
          Hello, I&apos;m <span className="text-green-400">Amadul Islam</span>.
        </p>
        <p className="text-xl ">
          I craft delightful user experiences as a Front-end Developer.
        </p>
      </div>

      <p className="text-gray-500">
        A Front-end focused Full Stack Web Developer, skilled in creating
        seamless user experiences, developing innovative solutions to complex
        problems, and seeking a challenging role in a dynamic organization to
        apply my skills and learn from industry experts.
      </p>

      <Skills />
    </div>
  );
};

export default IntroContent;
