"use client";

import React, { useState } from "react";

const RadioInputWithLabel = ({
  name,
  label,
  inputStyles,
  labelStyles,
  outerStyles,
}: {
  name: string;
  label: string;
  inputStyles?: string;
  labelStyles?: string;
  outerStyles?: string;
}) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex justify-center items-center gap-1">
      <input
        type="radio"
        className={`h-[18px] w-[18px] ${inputStyles}`}
        checked={checked}
        onClick={handleClick}
      />
      <label className={`text-black ${labelStyles}`}>{label}</label>
    </div>
  );
};

export default RadioInputWithLabel;
