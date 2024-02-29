"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaHome,
  FaIdBadge,
  FaServer,
  FaUser,
} from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import NavItem from "./NavItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: "/", icon: <FaHome />, text: "Home" },
    { href: "/", icon: <FaUser />, text: "About me" },
    { href: "/", icon: <FaIdBadge />, text: "Portfolios" },
    { href: "/", icon: <FaServer />, text: "Services" },
    { href: "/", icon: <FaEnvelope />, text: "Contact" },
  ];

  return (
    <div className="fixed top-2 right-2 lg:top-4 lg:right-4 z-50 w-auto">
      <div className="relative">
        <button
          className="text-white text-xl border  border-gray-500 bg-gray-800   w-8 h-8 rounded-full flex items-center justify-center "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CgClose /> : <RiMenu3Fill />}
        </button>
        <motion.div
          initial={{ opacity: 0.9, x: 100, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${
            !isOpen && "hidden"
          } min-w-44 absolute top-8 right-2 bg-gray-800 rounded-3xl p-2 lg:p-4 text-white flex flex-col gap-y-1 shadow-lg border border-gray-500`}
        >
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
