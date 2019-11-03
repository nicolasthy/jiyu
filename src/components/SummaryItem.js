import React from "react";

const SummaryItem = ({ label, value, position }) => {
  const getElementMarginClass = () => {
    switch (position) {
      case 1:
        return "mr-5";
      case 2:
        return "mr-5 ml-5";
      case 3:
        return "ml-5";
      default:
        return null;
    }
  };

  return (
    <div
      className={`flex flex-col rounded bg-white flex-auto ${getElementMarginClass()} px-6 py-4 shadow-xl`}
    >
      <span className="uppercase text-gray-400 text-xs">{label}</span>
      <span className="text-xl font-medium">{value}</span>
    </div>
  );
};

export default SummaryItem;
