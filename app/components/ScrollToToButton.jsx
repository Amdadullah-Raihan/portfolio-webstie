import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-4 right-2 lg:bottom-8 lg:right-8 bg-teal-700 p-2 rounded-full cursor-pointer"
          onClick={handleScrollToTop}
        >
          <FaArrowUp />
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
