import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ExperienceItem = ({
  title,
  company,
  location,
  date,
  responsibilities,
  index,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -50, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-baseline gap-4 lg:gap-10 -ml-[7px]`}
    >
      <div className="w-4 h-4 p-[5px] border-[3px] border-blue-100  rounded-full bg-gray-900 z-10  " />
      <div>
        <p className="text-xl">{title}</p>
        <p className="text-[#94A3B8]">{`${company} (${location})`}</p>
        <small className="text-[#94A3B8]">{date}</small>

        <ul className="list-disc text-[#94A3B8] flex flex-col gap-2 mt-4 ml-4">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
