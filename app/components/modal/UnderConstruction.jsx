import React from "react";

const UnderConstruction = ({ onClose }) => {
  return (
    <div
      className={`${
        process.env.NODE_ENV === "development" && "hidden"
      } h-full w-full absolute  flex items-center justify-center z-0`}
    >
      <div className="absolute bg-black opacity-70 h-full w-full"></div>
      <div className="bg-gray-900 relative z-10 text-red-200 p-16 rounded-xl border border-gray-700 text-xl">
        {" "}
        This website is still in under construction. <br /> Do you still want to
        continue?
      </div>
    </div>
  );
};

export default UnderConstruction;
