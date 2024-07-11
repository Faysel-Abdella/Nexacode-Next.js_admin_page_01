"use client";

import React from "react";
import Calendar from "../components/page-56-components/Calender";

const Page56 = () => {
  const events = [
    { title: "135,000", date: "2024-07-01" },
    { title: "135,000", date: "2024-07-10" },
    { title: "135,000", date: "2024-07-11" },
    { title: "135,000", date: "2024-07-12" },
    { title: "135,000", date: "2024-07-13" },
    { title: "135,000", date: "2024-07-14" },
    { title: "135,000", date: "2024-07-15" },
    { title: "135,000", date: "2024-07-16" },
    { title: "135,000", date: "2024-07-17" },
    { title: "135,000", date: "2024-07-18" },
    { title: "135,000", date: "2024-07-19" },
    { title: "135,000", date: "2024-07-20" },
    { title: "135,000", date: "2024-07-21" },
    { title: "135,000", date: "2024-07-22" },
    { title: "135,000", date: "2024-07-23" },
    { title: "135,000", date: "2024-07-24" },
    { title: "135,000", date: "2024-07-25" },
    { title: "135,000", date: "2024-07-30" },
  ];

  return (
    <section className="text-black">
      <div className="flex items-center  gap-2 mt-10">
        <div className="flex justify-center items-center w-[20px] h-[20px] bg-white p-2 border-[3px] border-gray-900 ">
          <div className=" w-1 bg-black  border-[3px] border-gray-900 p-[1px] text-center "></div>
        </div>
        <p className=" font-semibold">기간한정 가격 입력</p>
      </div>
      <div className="flex items-center mt-4">
        <button className="py-[6px] px-16 border border-gray-400 rounded-md ">
          요일 별
        </button>
        <button className="py-[6px] px-16 border border-gray-400 rounded-md ">
          일자 별
        </button>
        <button className="py-[6px] px-16 border border-gray-400 rounded-md bg-slate-200">
          기간 별
        </button>
      </div>

      <div className="mt-10">
        <p className=" font-semibold">기간설정</p>
        <div className="flex items-center mt-4 gap-2">
          <input
            type="date"
            className="border border-gray-400 min-w-[150px] px-2"
          />
          <p>-</p>
          <input
            type="date"
            className="border border-gray-400 min-w-[150px] px-2"
          />
        </div>
      </div>

      <div className="mt-10">
        <p className=" font-semibold">금액입력</p>
        <div className="flex items-center gap-2 py-1 mt-4">
          <div className="flex  items-center">
            <input
              defaultValue="60,000"
              className="w-[150px] border-[2px] border-slate-300 py-1 px-2"
            />
            <div className="py-1 px-2 text-slate-600  bg-slate-300 border-[2px] border-slate-300  ">
              $
            </div>
          </div>
          <div className="flex  items-center">
            <input
              defaultValue="75,000"
              className="w-[150px] border-[2px] border-slate-300 py-1 px-2"
            />
            <div className="py-1 px-2 text-slate-600 bg-slate-300 border-[2px] border-slate-300  ">
              ￦
            </div>
          </div>
        </div>
      </div>

      <button className="bg-blue-600 text-white py-1 px-5 rounded-md mt-5">
        미리보기
      </button>

      <div className="flex items-center gap-10 mt-12">
        <Calendar events={events} />
        <Calendar events={events} />
      </div>
      <div className="flex items-center gap-10">
        <Calendar events={events} />
        <Calendar events={events} />
      </div>
    </section>
  );
};

export default Page56;
