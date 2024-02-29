import { motion } from "framer-motion";
import Link from "next/link";

const NavItem = ({ href, icon, text, index }) => {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={href}
        className="hover:bg-gray-900 rounded-lg p-2 transition-colors duration-300 flex gap-3 items-center"
      >
        <span> {icon} </span>
        <span className="text-sm">{text}</span>
      </Link>
    </motion.div>
  );
};

export default NavItem;
