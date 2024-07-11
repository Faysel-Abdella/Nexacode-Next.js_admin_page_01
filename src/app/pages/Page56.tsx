"use client";

import React from "react";
import Calendar from "../components/page--54-components/Calander";

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
    <section>
      <div className="flex items-center gap-10">
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
