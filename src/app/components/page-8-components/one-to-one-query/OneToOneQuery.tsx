import React from "react";

const QueryRow = ({
  date,
  query,
  isLast,
}: {
  query: string;
  date: string;
  isLast?: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-between p-3 ml-2 text-gray-500 ${
        !isLast ? "border-b-[3px] border-dashed border-slate-400 " : ""
      } `}
    >
      <p>{query}</p>
      <p>{date}</p>
    </div>
  );
};

const OneToOneQuery = () => {
  return (
    <section className="min-w-[550px] border-[3px] border-slate-300">
      <header className="flex items-center justify-between bg-black text-white p-2 border-b-[3px] border-slate-500">
        <h2>1:1문의</h2>
        <button className="flex justify-center items-center font-bold px-2 bg-slate-400">
          +
        </button>
      </header>
      <section className="flex flex-col">
        <QueryRow
          query="예약했는데 날짜 변경 가능한가요?"
          date="2024-01-12 09:02:46"
        />
        <QueryRow
          query="결제했는데 플레이어 이름 변경 가능한가요?"
          date="2024-01-12 09:02:46"
        />
        <QueryRow
          query="I can't pay with my credit card"
          date="2024-01-12 09:02:46"
        />
        <QueryRow
          query="후기 작성 어떻게 하나요?"
          date="2024-01-12 09:02:46"
          isLast={true}
        />
      </section>
    </section>
  );
};

export default OneToOneQuery;
