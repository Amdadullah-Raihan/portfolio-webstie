import React from "react";
import Skills from "./Skills";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";

const IntroContent = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="flex flex-col gap-y-6 justify-center  lg:p-0">
      <div>
        <p className="text-[2.4em] md:text-[2.6rem] font-bold leading-tight">
          Hello, <br /> I<span className="text-green-400">&apos;</span>m {""}
          <br className="md:hidden" />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Amdadul Islam.",
              1000,
              "a Front-end Developer.",
            ]}
            speed={25}
            className="text-green-400 text-wrap"
            repeat={Infinity}
          />
        </p>
        <p className="text-lg md:text-xl ">
          I craft delightful user experiences as a Front-end Developer.
        </p>
      </div>

      <p className="text-[#94A3B8]">
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
