import React from "react";

const AlertRow = ({ date, isLast }: { date: string; isLast?: boolean }) => {
  return (
    <div
      className={`flex items-center justify-end p-3 ml-2 text-gray-500 ${
        !isLast ? "border-b-[3px] border-dashed border-slate-400 " : ""
      } `}
    >
      <p>{date}</p>
    </div>
  );
};

const PriceAlert = () => {
  return (
    <section className="min-w-[550px] border-[3px] border-slate-300">
      <header className="flex items-center justify-between bg-black text-white p-2 border-b-[3px] border-slate-500">
        <h2>가격 알림</h2>
        <button className="flex justify-center items-center font-bold px-2 bg-slate-400">
          +
        </button>
      </header>
      <section className="flex flex-col">
        <AlertRow date="2024-01-12 09:02:46" />
        <AlertRow date="2024-01-12 09:02:46" />
        <AlertRow date="2024-01-12 09:02:46" />
        <AlertRow date="2024-01-12 09:02:46" isLast={true} />
      </section>
    </section>
  );
};

export default PriceAlert;
