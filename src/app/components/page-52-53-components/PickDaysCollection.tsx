"use client";

import React, { useState } from "react";
import DaySelectBtn from "./DaySelectBtn";

const PickDaysCollection = () => {
  const [checkedOption, setCheckedOption] = useState<{
    allDays: boolean;
    workingDays: boolean;
    weekends: boolean;
  }>({
    allDays: false,
    workingDays: false,
    weekends: false,
  });

  const [selectedIndividualDay, setSelectedIndividualDay] = useState<{
    [key: string]: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
  }>({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  const handleCategoryOptionClick = (option: string) => {
    setCheckedOption((prevState) => ({
      ...prevState,
      allDays: option === "allDays",
      workingDays: option === "workingDays",
      weekends: option === "weekends",
    }));
  };

  const handleIndividualDayClick = (day: string) => {
    setSelectedIndividualDay((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  return (
    <article className="mt-10">
      <div className="flex items-center  gap-8">
        <DaySelectBtn
          label="전체 요일"
          isCategory={true}
          onClick={() => handleCategoryOptionClick("allDays")}
          isChecked={
            checkedOption.allDays ||
            (!checkedOption.weekends && !checkedOption.workingDays)
          }
        />
        <DaySelectBtn
          label="주중"
          isCategory={true}
          onClick={() => handleCategoryOptionClick("workingDays")}
          isChecked={checkedOption.workingDays}
        />
        <DaySelectBtn
          label="주말"
          isCategory={true}
          onClick={() => handleCategoryOptionClick("weekends")}
          isChecked={checkedOption.weekends}
        />
      </div>

      <div className="mt-10 w-[620px] py-6 pl-4 pr-16  border-[2px] border-slate-300 ">
        <div className="flex items-center justify-between ">
          <DaySelectBtn
            label="월"
            onClick={() => handleIndividualDayClick("monday")}
            isChecked={!checkedOption.weekends || selectedIndividualDay.monday}
          />
          <DaySelectBtn
            label="화"
            onClick={() => handleIndividualDayClick("tuesday")}
            isChecked={!checkedOption.weekends || selectedIndividualDay.tuesday}
          />
          <DaySelectBtn
            label="수"
            onClick={() => handleIndividualDayClick("wednesday")}
            isChecked={
              !checkedOption.weekends || selectedIndividualDay.wednesday
            }
          />
          <DaySelectBtn
            label="목"
            onClick={() => handleIndividualDayClick("thursday")}
            isChecked={
              !checkedOption.weekends || selectedIndividualDay.thursday
            }
          />
          <DaySelectBtn
            label="금"
            onClick={() => handleIndividualDayClick("friday")}
            isChecked={!checkedOption.weekends || selectedIndividualDay.friday}
          />
          <DaySelectBtn
            label="토"
            onClick={() => handleIndividualDayClick("saturday")}
            isChecked={
              checkedOption.weekends ||
              checkedOption.allDays ||
              selectedIndividualDay.saturday
            }
          />
          <DaySelectBtn
            label="일"
            onClick={() => handleIndividualDayClick("sunday")}
            isChecked={
              checkedOption.weekends ||
              checkedOption.allDays ||
              selectedIndividualDay.sunday
            }
          />
        </div>

        <div className="flex items-center gap-7 mt-8 ">
          <div className="flex  items-center">
            <input className="w-[220px] border-[2px] border-slate-300 py-1 px-2" />
            <div className="bg-slate-300 border-[2px] border-slate-300 py-1 px-2 text-slate-600">
              $
            </div>
          </div>
          <div className="flex  items-center">
            <input className="w-[220px] border-[2px] border-slate-300 py-1 px-2" />
            <div className="bg-slate-300 border-[2px] border-slate-300 py-1 px-2 text-slate-600">
              ￦
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PickDaysCollection;
