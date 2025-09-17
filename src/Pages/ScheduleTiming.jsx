import React, { useContext, useState } from "react";
import ThemeContext from "../Components/ThemeContext.jsx";
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  format
} from "date-fns";

const ScheduleTiming = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [view, setView] = useState("Month"); // Month / Week / Day

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const goToday = () => setCurrentMonth(new Date());

  // Build days grid for month view
  const monthCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const weekStart = startOfWeek(monthStart);
    const weekEnd = endOfWeek(monthEnd);

    const days = [];
    let day = weekStart;
    while (day <= weekEnd) {
      for (let i = 0; i < 7; i++) {
        const clone = day;
        days.push(
          <div
            key={clone}
            className={`h-20 border text-sm p-1 flex items-start
              ${!isSameMonth(clone, monthStart) ? "text-gray-400" : ""}
              ${isSameDay(clone, new Date()) ? "bg-[#fef7e0] text-[#000000] font-bold" : ""}`}
          >
            {format(clone, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
    }
    return days;
  };

  const weekCells = () => {
    const start = startOfWeek(currentMonth);
    return Array.from({ length: 7 }).map((_, i) => {
      const d = addDays(start, i);
      return (
        <div
          key={d}
          className={`h-32 border text-center flex flex-col justify-center
            ${isSameDay(d, new Date()) ? "bg-[#fef7e0] font-bold" : ""}`}
        >
          <div className="text-lg">{format(d, "EEE")}</div>
          <div>{format(d, "d")}</div>
        </div>
      );
    });
  };

  const dayCell = () => (
    <div className="border h-64 flex flex-col justify-center text-center">
      <div className="text-3xl font-bold">{format(currentMonth, "d MMM yyyy")}</div>
      <div className="text-lg">{format(currentMonth, "EEEE")}</div>
      {isSameDay(currentMonth, new Date()) &&
        <div className="mt-2 p-2 bg-[#fef7e0] rounded">Today</div>}
    </div>
  );

  return (
    <div
      className={`p-4 min-h-screen ${isDarkMode ? "bg-[#1C2836] text-[#ffffff]" : "bg-white text-black"
        }`}
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-48">
          <h2 className="font-bold mb-4">All Events</h2>
          {["Meeting", "Operations", "Lunch", "Conference", "Business Meeting"].map(e => (
            <div
              key={e}
              className="bg-[#396CF0] text-white rounded-sm px-2 py-1 mb-2 text-sm cursor-pointer hover:opacity-90"
            >
              {e}
            </div>
          ))}
          <label className="flex items-center gap-2 mt-4 text-sm">
            <input type="checkbox" className="accent-[#396CF0]" />
            Remove after drop
          </label>
        </div>

        {/* Calendar */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <div className="flex gap-2">
              <button onClick={prevMonth} className="px-2 py-1 rounded bg-[#396CF0] text-white">{"<"}</button>
              <button onClick={nextMonth} className="px-2 py-1 rounded bg-[#396CF0] text-white">{">"}</button>
              <button onClick={goToday} className="px-2 py-1 rounded bg-[#396CF0] text-white">Today</button>
              <button onClick={() => alert("Add Event Clicked!")}
                className="px-2 py-1 rounded bg-[#396CF0] text-white">Add Event</button>
            </div>
            <div className="font-bold text-lg text-center md:text-left">
              {format(currentMonth, "MMMM yyyy")}
            </div>
            <div className="flex gap-2 justify-center">
              {["Month", "Week", "Day"].map(v => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-2 py-1 rounded ${view === v ? "bg-[#396CF0] text-white" :
                      "bg-gray-200 text-black"
                    }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {view === "Month" && (
            <div className="grid grid-cols-7 text-center border">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
                <div key={d} className="py-2 font-medium border-b">{d}</div>
              ))}
              {monthCells()}
            </div>
          )}
          {view === "Week" && (
            <div className="grid grid-cols-7 border">
              {weekCells()}
            </div>
          )}
          {view === "Day" && dayCell()}
        </div>
      </div>
    </div>
  );
};

export default ScheduleTiming;
