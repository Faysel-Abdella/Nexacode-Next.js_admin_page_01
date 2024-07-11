import React from "react";

const DaySelectBtn = ({
  label,
  isCategory,
  onClick,
  isChecked,
}: {
  label: string;
  isCategory?: boolean;
  onClick?: () => void;
  isChecked?: boolean;
}) => {
  return (
    <div className="flex items-center  gap-3">
      <button
        onClick={onClick}
        className={`flex justify-center items-center w-[22px] h-[24px] rounded-md text-white font-semibold ${
          isChecked
            ? isCategory
              ? "bg-gray-500"
              : "bg-blue-700"
            : "border-[2px] border-slate-400"
        } `}
      >
        V
      </button>
      <p className="font-semibold text-[18px]">{label}</p>
    </div>
  );
};

export default DaySelectBtn;
