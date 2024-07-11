import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import koLocale from "@fullcalendar/core/locales/ko";

const Calendar = ({
  events,
}: {
  events: { title: string; date: string }[];
}) => {
  const headerToolbarOptions = {
    // left: "today",
    // center: "2024년 1월",
    right: "",
  };
  const dayCellContent = (arg: any) => {
    const date = arg.date.getDate();
    const price = getPriceForDate(date); // Replace with your logic to get the price for the date

    return (
      <div className="date-cell">
        <span className="date text-black font-bold">{date}</span>
        {/* <span className="price text-[12px]">{price}</span> */}
      </div>
    );
  };

  const getPriceForDate = (date: any) => {
    // Return the corresponding price value or an empty string if no price is available
    const matchingEvent = events.find((event) => event.date === date);
    return matchingEvent ? matchingEvent.title : "";
  };

  return (
    <div>
      <div>
        <h3 className="text-black text-center font-bold mb-6">2024년 1월</h3>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={headerToolbarOptions}
        dayCellContent={dayCellContent}
        dayHeaders={true}
        showNonCurrentDates={false}
        locales={[koLocale]}
        locale="ko"
      />
    </div>
  );
};

export default Calendar;
