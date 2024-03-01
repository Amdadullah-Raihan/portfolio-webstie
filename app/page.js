"use client";
import { useEffect, useState } from "react";
import Experiences from "./components/Experiences/Experiences";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import UnderConstruction from "./components/modal/UnderConstruction";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="relative bg-gray-900 p-4 lg:px-16 lg:py-8 flex flex-col gap-12 lg:gap-16 ">
      <div
        className="fixed w-96 h-96 rounded-full bg-gradient-to-br opacity-5 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          left: position.x,
          top: position.y,
          background: `radial-gradient(circle at center, teal 0%, indigo 100%)`,
        }}
      />
      <Header />
      <Experiences />
      <Projects />
    </main>
  );
}
