import React from "react";
import SocialsLinks from "../SocialsLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" bg-gray-800 p-6  flex  flex-col-reverse items-center  justify-between">
      <div>@{currentYear} Amdadul I. All Rights Reserved</div>
      <div>
        <SocialsLinks />
      </div>
    </div>
  );
};

export default Footer;
