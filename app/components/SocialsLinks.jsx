"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import Tooltip from "./utils/Tooltip";

const links = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/amdadul-islam-raihan-010611215/",
    tooltip: "Linkedin",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/Amdadul89710582",
    tooltip: "Twitter",
  },
  {
    icon: <TbBrandLeetcode />,
    url: "https://leetcode.com/Amdadullah-Raihan/",
    tooltip: "LeetCode",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/Amdadullah-Raihan",
    tooltip: "Github",
  },
];

const SocialsLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex gap-2">
      {links.map((link, index) => (
        <Link
          key={index}
          target="_blank"
          href={link.url}
          className="relative border p-2 rounded-full hover:border-green-500 hover:text-green-500 transition-colors duration-300"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {link.icon}
          {hoveredIndex === index && <Tooltip data={link.tooltip} />}
        </Link>
      ))}
    </div>
  );
};

export default SocialsLinks;
