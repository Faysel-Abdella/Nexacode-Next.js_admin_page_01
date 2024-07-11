import React from "react";

const FormTitle = ({
  title,
  outerStyles,
  innerStyles,
}: {
  title: string;
  outerStyles?: string;
  innerStyles?: string;
}) => {
  return (
    <div
      className={`flex items-center justify-center py-3 bg-slate-200   border-r-[1px] border-gray-900 ${outerStyles} `}
    >
      <h3
        className={`flex items-center justify-center w-[150px] font-semibold text-black text-center text-[16px]  ${innerStyles}`}
      >
        {title}
      </h3>
    </div>
  );
};

export default FormTitle;
