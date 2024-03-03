"use client";
// Import necessary modules and types
import React, { useEffect, useState } from "react";
import Experiences from "./components/Experiences/Experiences";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import ScrollToTopButton from "./components/ScrollToToButton";

interface Position {
  x: number;
  y: number;
}

const Home: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  // Effect to update the mouse position on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main
      className="relative bg-gray-900 p-4 lg:px-16 lg:py-8 flex flex-col gap-12 lg:gap-16 "
      id="/"
    >
      <div
        className="fixed w-[600px] h-[600px] rounded-full bg-gradient-radial from-green-500  opacity-5 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      <Header />
      <Experiences />
      <Projects />
      <ScrollToTopButton />
    </main>
  );
};

export default Home;
