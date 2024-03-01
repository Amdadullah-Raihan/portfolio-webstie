"use client";
import { motion } from "framer-motion";

const ExperienceItem = ({
  title,
  company,
  location,
  date,
  responsibilities,
}) => (
  <motion.div
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="flex gap-4 lg:gap-10 -ml-[7px]"
  >
    <span className="w-4 h-4 p-[5px] border-[3px] border-blue-100  rounded-full bg-gray-900 z-10" />
    <div>
      <p className="text-xl">{title}</p>
      <p className="text-gray-400">{`${company} (${location})`}</p>
      <small className="text-gray-400">{date}</small>

      <ul className="list-disc text-gray-400 flex flex-col gap-2 mt-4 ml-4">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default ExperienceItem;
