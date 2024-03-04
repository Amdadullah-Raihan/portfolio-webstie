import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavItem = ({ href, icon, text, index }) => {
  const handleScrollTo = () => {
    scroll.scrollTo(href);
  };

  return (
    <motion.div
      initial={{ x: 20, y: -20, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      <ScrollLink
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        className="hover:bg-gray-900 rounded-lg p-2 transition-colors duration-300 flex gap-3 items-center cursor-pointer "
      >
        <span> {icon} </span>
        <span className="text-sm">
          {" "}
          <span className="text-green-300 font-bold">&lt;</span>
          <span className="font-medium">{text}</span>
          <span className="text-green-300 font-bold">&#47;&gt;</span>
        </span>
      </ScrollLink>
    </motion.div>
  );
};

export default NavItem;
