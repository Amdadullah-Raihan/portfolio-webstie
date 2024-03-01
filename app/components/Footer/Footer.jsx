import React from "react";
import SocialsLinks from "../SocialsLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className=" bg-teal-800 bg-opacity-15   p-6  flex  flex-col-reverse items-center  justify-between"
      id="contact"
    >
      <div>@{currentYear} Amdadul I. All Rights Reserved</div>
      <div>
        <SocialsLinks />
      </div>
    </div>
  );
};

export default Footer;
