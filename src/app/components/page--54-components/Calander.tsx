import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = ({
  events,
}: {
  events: { title: string; date: string }[];
}) => {
  const headerToolbarOptions = {
    left: "today",
    // center: "2024년 1월",
    right: "timeGridDay",
  };
  const dayCellContent = (arg: any) => {
    const date = arg.date.getDate();
    const price = getPriceForDate(date); // Replace with your logic to get the price for the date

    return (
      <div className="date-cell">
        <span className="date text-black">{date}</span>
        {/* <span className="price text-[12px]">{price}</span> */}
      </div>
    );
  };

  const getPriceForDate = (date: any) => {
    // Replace with your logic to retrieve the price for the given date
    // Return the corresponding price value or an empty string if no price is available
    // Example implementation:
    const matchingEvent = events.find((event) => event.date === date);
    return matchingEvent ? matchingEvent.title : "";
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={headerToolbarOptions}
        dayCellContent={dayCellContent}
        dayHeaders={true}
        showNonCurrentDates={false}
      />
    </div>
  );
};

export default Calendar;
