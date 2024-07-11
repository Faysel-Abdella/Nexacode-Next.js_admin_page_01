"use client";

import React from "react";
import Calendar from "../components/page--54-components/Calander";

const Page56 = () => {
  const events = [
    { title: "10000", date: "2024-07-01" },
    { title: "20000", date: "2024-07-10" },
    { title: "20000", date: "2024-07-15" },
    // Add more events for other days...
  ];

  return (
    <section>
      <div>
        <h1>Price Calendar</h1>
        <Calendar events={events} />
      </div>
    </section>
  );
};

export default Page56;
