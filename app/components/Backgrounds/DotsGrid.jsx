"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const DotsGrid = () => {
  const rows = 5;
  const cols = 5;
  const dots = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dots.push(
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity }}
          key={`${i}-${j}`}
          className="w-4 h-4 bg-teal-800  rounded-full"
        />
      );
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 100 }}
        exit={{ y: 0 }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="absolute right-0  top-0 bottom-0 my-auto z-0 max-w-40 max-h-40 grid grid-cols-5 gap-5"
      >
        {dots}
      </motion.div>
    </AnimatePresence>
  );
};

export default DotsGrid;
