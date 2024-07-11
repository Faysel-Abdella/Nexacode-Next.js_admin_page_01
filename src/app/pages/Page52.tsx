"use client";
import React from "react";

import FormTitle from "../components/page-52-components/FormTitle";
import CustomSelectOptions from "../components/page-52-components/CustomSelectOptions";

const Page52 = () => {
  return (
    <section className="">
      <main className="border-[1px] border-gray-900">
        {/* Row 1 */}
        <div className="flex items-center border-b-[1px] border-gray-900">
          <FormTitle title="국가" />
          <div className="py-2  pl-1 pr-10 border-r-[1px] border-gray-900">
            <CustomSelectOptions
              label="전체"
              options={["English", "Turkish", "French", "German"]}
            />
          </div>

          <FormTitle title="국가" />

          <div className="py-2 pl-1 pr-10  border-gray-900">
            <CustomSelectOptions
              label="전체"
              options={["English", "Turkish", "French", "German"]}
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
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex items-center border-b-[1px] border-gray-900">
          <FormTitle title="이미지" innerStyles="h-[100px]" />

          <button className="flex items-center gap-2 border-[2px] border-gray-900 rounded-xl p-2 px-3 ml-3">
            <p className="font-bold text-black">+</p>
            <p className="font-medium text-black">첨부</p>
          </button>
        </div>

        {/* Row 4 */}
        <div className="flex  w-full bg-slate-300  text-black border-b border-gray-900">
          <div className="w-1/2 text-center py-1 border-r-[1px]  border-gray-900">
            영어
          </div>
          <div className="w-1/2 text-center py-1">한국</div>
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
          <div className="py-2  pl-1 pr-10 border-r-[1px] border-gray-900">
            <CustomSelectOptions
              label="전체"
              options={["English", "Turkish", "French", "German"]}
            />
          </div>

          <FormTitle title="설명 (KR)" />

          <div className="py-2 pl-1 pr-10  border-gray-900">
            <CustomSelectOptions
              label="전체"
              options={["English", "Turkish", "French", "German"]}
            />
          </div>
        </div>

        {/* Row 7 */}
        <div className="flex items-center border-b-[1px] border-gray-900">
          <FormTitle title="노출기간 (EN)" />
          <div className=" pl-1 pr-10 border-r-[1px] border-gray-900">
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

          <FormTitle title="노출기간 (KR)" />
          <div className="  pl-1 pr-10 border-r-[1px] border-gray-900">
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
      </main>
    </section>
  );
};

export default Page52;
