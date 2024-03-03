import React from "react";

interface TooltipProps {
  data: string;
}

const Tooltip: React.FC<TooltipProps> = ({ data }) => {
  return (
    <div className="absolute bg-black shadow-md rounded-md -left-[80%] mx-auto -top-9 text-sm px-2 py-1 text-green-400">
      {data}
    </div>
  );
};

export default Tooltip;
