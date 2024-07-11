"use client";
import React, { useState } from "react";

import FormTitle from "../components/page-52-53-components/FormTitle";
import CustomSelectOptions from "../components/page-52-53-components/CustomSelectOptions";
import RadioInputWithLabel from "../components/page-52-53-components/RadioInputWithLabel";
import DaySelectBtn from "../components/page-52-53-components/DaySelectBtn";

const Page53 = () => {
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
    <section className="text-black">
      <main className="border-[1px] border-gray-900">
        {/* Row 1 */}
        <div className="flex items-center border-b-[1px] border-gray-900">
          <FormTitle title="국가" />
          <div className="py-2  pl-1 pr-10 border-r-[1px] border-gray-900">
            <CustomSelectOptions
              label="전체"
              options={["English", "Turkish", "French", "German"]}
              outerStyles="min-w-[299.9px]"
            />
          </div>

          <FormTitle title="국가" />

          <div className="py-2 pl-1 pr-10  border-gray-900">
            <CustomSelectOptions
              label="전체"
              options={["English", "Turkish", "French", "German"]}
              outerStyles="min-w-[299.9px]"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center border-b-[1px] border-gray-900">
          <FormTitle title="골프장 명" />
          <div className="py-2  pl-1 pr-10 ">
            <CustomSelectOptions
              label="전체"
              options={["English", "Turkish", "French", "German"]}
              outerStyles="min-w-[299.9px]"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex items-center border-b-[1px] border-gray-900">
          <FormTitle title="이미지" innerStyles="h-[100px]" />

          <button className="flex items-center gap-2 border-[2px] border-gray-900 rounded-xl p-2 px-3 ml-3">
            <p className="font-bold ">+</p>
            <p className="font-medium ">첨부</p>
          </button>
        </div>

        {/* Row 4 */}
        <div className="flex  w-full bg-slate-300   border-b border-gray-900">
          <div className="w-[50.1%] text-center py-1 border-r-[1px]  border-gray-900">
            영어
          </div>
          <div className="w-[49.9%] text-center py-1">한국</div>
        </div>

        {/* Row 5 */}

        <div className="flex  items-center border-b-[1px] border-gray-900">
          <FormTitle title="국가" />
          <div className="pl-1 pr-10 ">
            <input className="min-w-[299.9px] border border-gray-900" />
          </div>

          <FormTitle
            title="국가"
            outerStyles="border-l-[1px] border-gray-900"
          />

          <div className="pl-1 pr-10 ">
            <input className="min-w-[299.9px] border border-gray-900" />
          </div>
        </div>

        {/* Row 6 */}
        <div className="flex items-center border-b-[1px] border-gray-900">
          <FormTitle title="주의사항 (EN)" />
          <div className=" pl-1 pr-10 ">
            <CustomSelectOptions
              label="전체"
              options={["English", "Turkish", "French", "German"]}
              outerStyles="min-w-[299.9px]"
            />
          </div>

          <FormTitle
            title="설명 (KR)"
            outerStyles="border-l-[1px] border-gray-900"
          />

          <div className="py-2 pl-1 pr-10  border-gray-900">
            <CustomSelectOptions
              label="전체"
              options={["English", "Turkish", "French", "German"]}
              outerStyles="min-w-[299.9px]"
            />
          </div>
        </div>

        {/* Row 7 */}
        <div className="flex items-center border-b-[1px] border-gray-900">
          <FormTitle title="노출기간 (EN)" />
          <div className=" pl-1 pr-10 ">
            <div className="flex w-[299.9px]">
              <input
                type="date"
                className="min-w-[45%] border border-gray-900"
              />
              <p className=" px-2">-</p>
              <input
                type="date"
                className="min-w-[45%] border border-gray-900"
              />
            </div>
          </div>

          <FormTitle
            title="노출기간 (KR)"
            outerStyles="border-l-[1px] border-gray-900"
          />
          <div className="  pl-1 pr-10 ">
            <div className="flex w-[299.9px]">
              <input
                type="date"
                className="min-w-[45%] border border-gray-900"
              />
              <p className="text-black px-2">-</p>
              <input
                type="date"
                className="min-w-[45%] border border-gray-900"
              />
            </div>
          </div>
        </div>

        {/* Row 8 */}
        <div className="flex items-center ">
          <FormTitle title="공개여부 (EN)" />
          <div className=" pl-1 pr-10 ">
            <div className="flex w-[299.9px]">
              <div className="flex justify-center items-center gap-4">
                <RadioInputWithLabel
                  name="public"
                  label="공개"
                  labelStyles="text-slate-400"
                />
                <RadioInputWithLabel
                  name="public"
                  label="비공개"
                  labelStyles="text-slate-400"
                />
                <RadioInputWithLabel
                  name="public"
                  label="예약공개"
                  labelStyles="text-slate-400"
                />
              </div>
            </div>
          </div>

          <FormTitle
            title="공개여부 (KR)"
            outerStyles="border-l-[1px] border-gray-900"
          />
          <div className=" pl-1 pr-10 ">
            <div className="flex w-[299.9px]">
              <div className="flex justify-center items-center gap-4">
                <RadioInputWithLabel
                  name="public"
                  label="공개"
                  labelStyles="text-slate-400"
                />
                <RadioInputWithLabel
                  name="public"
                  label="비공개"
                  labelStyles="text-slate-400"
                />
                <RadioInputWithLabel
                  name="public"
                  label="예약공개"
                  labelStyles="text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="flex items-center gap-2 mt-10">
        <div className="flex justify-center items-center w-[20px] h-[20px] bg-white p-2 border-[3px] border-gray-900 ">
          <div className=" w-1 bg-black  border-[3px] border-gray-900 p-[1px] text-center "></div>
        </div>
        <p className=" font-semibold">기간한정 가격 입력</p>
      </div>

      <div className="mt-6">
        <p>월 선택</p>
        <CustomSelectOptions
          label="1월"
          options={["january", "february", "march", "april"]}
          outerStyles="min-w-[240px]"
        />
      </div>

      <div className="flex items-center mt-8">
        <button className="py-1 px-12 border border-gray-400 rounded-md">
          요일 별
        </button>
        <button className="py-1 px-12 border border-gray-400 rounded-md">
          일자 별
        </button>
        <button className="py-1 px-12 border border-gray-400 rounded-md">
          기간 별
        </button>
      </div>

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
              isChecked={
                !checkedOption.weekends || selectedIndividualDay.monday
              }
            />
            <DaySelectBtn
              label="화"
              onClick={() => handleIndividualDayClick("tuesday")}
              isChecked={
                !checkedOption.weekends || selectedIndividualDay.tuesday
              }
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
              isChecked={
                !checkedOption.weekends || selectedIndividualDay.friday
              }
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
    </section>
  );
};

export default Page53;
