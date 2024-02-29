import React from "react";
import IntroCard from "./IntroCard";

import IntroContent from "./IntroContent";

const Header = () => {
  return (
    <div className=" flex flex-col lg:flex-row gap-4 lg:gap-16 ">
      <IntroCard />
      <IntroContent />
    </div>
  );
};

export default Header;
