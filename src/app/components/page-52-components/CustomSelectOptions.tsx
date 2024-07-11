import React from "react";

const CustomSelectOptions = ({
  label,
  options,
  outerStyles,
}: {
  label: string;
  options: string[];
  outerStyles?: string;
}) => {
  return (
    <select
      className={` py-1 px-1 bg-white text-black border border-gray-900 ${outerStyles}`}
    >
      <option disabled selected>
        {label}
      </option>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default CustomSelectOptions;
