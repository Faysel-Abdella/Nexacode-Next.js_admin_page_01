import React from "react";

const CustomSelectOptions = ({
  label,
  options,
}: {
  label: string;
  options: string[];
}) => {
  return (
    <select className="min-w-[300px] py-1 px-1 bg-white text-black border border-gray-900">
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
