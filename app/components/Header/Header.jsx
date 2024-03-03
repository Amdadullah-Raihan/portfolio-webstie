import React from "react";
import IntroCard from "./IntroCard";
import IntroContent from "./IntroContent";

const Header = () => {
  return (
    <div className="relative container mx-auto flex flex-col lg:flex-row gap-4 lg:gap-12 ">
      <IntroCard />
      <IntroContent />
    </div>
  );
};

export default Header;
