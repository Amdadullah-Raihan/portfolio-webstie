import React from "react";
import SocialsLinks from "../SocialsLinks";
import Contact from "../Contact/Contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className=" bg-teal-800 bg-opacity-5   py-8  flex  flex-col-reverse items-center  justify-between"
      id="contact"
    >
      <div>@{currentYear} Amdadul I. All Rights Reserved</div>
      <div className="mb-4">
        <SocialsLinks />
      </div>
      <Contact />
    </div>
  );
};

export default Footer;
