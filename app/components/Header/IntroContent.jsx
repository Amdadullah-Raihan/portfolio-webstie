import React from "react";
import Skills from "./Skills";

const IntroContent = () => {
  return (
    <div className="flex flex-col gap-y-6 justify-center  lg:p-0">
      <div>
        <p className="text-5xl font-bold">
          Hello, I&apos;m <span className="text-green-400">Amadul Islam</span>.
        </p>
        <p className="text-xl ">
          I craft delightful user experiences as a Front-end Developer.
        </p>
      </div>

      <p className="text-gray-400">
        I&apos;m a Front-end ReactJS/NextJS Developer with a passion for
        crafting intuitive user interfaces. I contributed to the development of
        a trading journal platform from scratch at ZigyFlow during my remote
        internship. This platform had 100+ features 2 million+ targeted
        userbase. Additionally, I&apos;ve been trying to freelance on Upwork for
        the past 2 years, I&apos;m dedicated to delivering impactful front-end
        solutions.
      </p>

      <Skills />
    </div>
  );
};

export default IntroContent;
