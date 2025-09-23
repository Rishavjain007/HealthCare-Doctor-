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
  subDays,
  addWeeks,
  subWeeks,
  isSameMonth,
  isSameDay,
  format
} from "date-fns";

const ScheduleTiming = () => {
  const { isDarkMode, colors } = useContext(ThemeContext);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("Month"); // Month / Week / Day
  const [selectedDate, setSelectedDate] = useState(null);
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventTime, setEventTime] = useState("");

  // Navigation handlers
  const nextPeriod = () => {
    if (view === "Month") {
      setCurrentDate(addMonths(currentDate, 1));
    } else if (view === "Week") {
      setCurrentDate(addWeeks(currentDate, 1));
    } else if (view === "Day") {
      setCurrentDate(addDays(currentDate, 1));
    }
  };

  const prevPeriod = () => {
    if (view === "Month") {
      setCurrentDate(subMonths(currentDate, 1));
    } else if (view === "Week") {
      setCurrentDate(subWeeks(currentDate, 1));
    } else if (view === "Day") {
      setCurrentDate(subDays(currentDate, 1));
    }
  };

  const goToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
    setView("Day");
  };

  const handleDateClick = (date, event) => {
    setSelectedDate(date);
    const rect = event.target.getBoundingClientRect();
    setPopupPosition({
      top: rect.bottom + window.scrollY + 5,
      left: rect.left + window.scrollX,
    });
    setShowEventPopup(true);
  };

  const handleSave = () => {
    if (eventTitle && selectedDate && eventTime) {
      setEvents([...events, { date: new Date(selectedDate), title: eventTitle, time: eventTime }]);
    }
    setShowEventPopup(false);
    setEventTitle("");
    setEventTime("");
  };

  const handleViewChange = (newView) => {
    setView(newView);
    if (newView === "Week") {
      setCurrentDate(startOfWeek(selectedDate || currentDate));
    } else if (newView === "Day") {
      setCurrentDate(selectedDate || currentDate);
    } else if (newView === "Month") {
      setCurrentDate(startOfMonth(selectedDate || currentDate));
    }
  };

  // Build days grid for month view
  const monthCells = () => {
    const monthStart = startOfMonth(currentDate);
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
            onClick={(e) => handleDateClick(clone, e)}
            className={`h-20 border text-sm p-1 flex flex-col cursor-pointer
              ${!isSameMonth(clone, monthStart) ? "text-gray-400" : ""}
              ${isSameDay(clone, new Date()) ? `bg-[${colors.lightCard}] text-[${colors.lightText}] font-bold` : ""}
              ${isSameDay(clone, selectedDate) ? `bg-[${colors.primary}] text-[${colors.darkText}]` : ""}`}
          >
            {format(clone, "d")}
            {events
              .filter((e) => isSameDay(e.date, clone))
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((e, idx) => (
                <div key={idx} className="text-xs mt-1 truncate" style={{ color: colors.success }}>
                  {e.time} {e.title}
                </div>
              ))}
          </div>
        );
        day = addDays(day, 1);
      }
    }
    return days;
  };

  // Build week view
  const weekCells = () => {
    const start = startOfWeek(currentDate);
    return Array.from({ length: 7 }).map((_, i) => {
      const d = addDays(start, i);
      return (
        <div
          key={d}
          onClick={(e) => handleDateClick(d, e)}
          className={`h-32 border text-center flex flex-col justify-start cursor-pointer
            ${isSameDay(d, new Date()) ? `bg-[${colors.lightCard}] font-bold` : ""}
            ${isSameDay(d, selectedDate) ? `bg-[${colors.primary}] text-[${colors.darkText}]` : ""}`}
        >
          <div className="text-lg">{format(d, "EEE")}</div>
          <div>{format(d, "d")}</div>
          {events
            .filter((e) => isSameDay(e.date, d))
            .sort((a, b) => a.time.localeCompare(b.time))
            .map((e, idx) => (
              <div key={idx} className="text-xs mt-1 truncate" style={{ color: colors.success }}>
                {e.time} {e.title}
              </div>
            ))}
        </div>
      );
    });
  };

  // Build day view
  const dayCell = () => (
    <div
      onClick={(e) => handleDateClick(currentDate, e)}
      className="border h-64 flex flex-col justify-start text-center cursor-pointer p-4"
    >
      <div className="text-3xl font-bold">{format(currentDate, "d MMM yyyy")}</div>
      <div className="text-lg">{format(currentDate, "EEEE")}</div>
      {isSameDay(currentDate, new Date()) && (
        <div className="mt-2 p-2 rounded" style={{ backgroundColor: colors.lightCard }}>
          Today
        </div>
      )}
      {events
        .filter((e) => isSameDay(e.date, currentDate))
        .sort((a, b) => a.time.localeCompare(b.time))
        .map((e, idx) => (
          <div key={idx} className="mt-2 text-left" style={{ color: colors.success }}>
            {e.time} {e.title}
          </div>
        ))}
    </div>
  );

  return (
    <div
      className={`p-4 min-h-screen ${isDarkMode ? `bg-[${colors.darkBg}] text-[${colors.darkText}]` : `bg-[${colors.lightBg}] text-[${colors.lightText}]`}`}
    >
      {/* Event Popup */}
      {showEventPopup && (
        <div
          className="fixed z-50 shadow-lg rounded-md border p-4 w-64"
          style={{
            top: `${popupPosition.top}px`,
            left: `${popupPosition.left}px`,
            backgroundColor: isDarkMode ? colors.darkCard : colors.lightBg,
            borderColor: isDarkMode ? colors.darkText : colors.lightText,
          }}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold">Add Event</h3>
            <button
              onClick={() => setShowEventPopup(false)}
              className="hover:text-gray-700"
              style={{ color: isDarkMode ? colors.darkText : colors.lightText }}
            >
              ✕
            </button>
          </div>
          <div className="mb-3">
            <label className="text-sm mb-1 block" style={{ color: isDarkMode ? colors.darkText : colors.lightText }}>
              Date:
            </label>
            <input
              type="date"
              className="w-full p-2 border rounded text-sm"
              value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
              onChange={(e) => setSelectedDate(e.target.value ? new Date(e.target.value) : null)}
              style={{
                backgroundColor: isDarkMode ? colors.darkCard : colors.lightBg,
                color: isDarkMode ? colors.darkText : colors.lightText,
                borderColor: isDarkMode ? colors.darkText : colors.lightText,
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="w-full p-2 border rounded text-sm"
              placeholder="Event title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              style={{
                backgroundColor: isDarkMode ? colors.darkCard : colors.lightBg,
                color: isDarkMode ? colors.darkText : colors.lightText,
                borderColor: isDarkMode ? colors.darkText : colors.lightText,
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="time"
              className="w-full p-2 border rounded text-sm"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
              style={{
                backgroundColor: isDarkMode ? colors.darkCard : colors.lightBg,
                color: isDarkMode ? colors.darkText : colors.lightText,
                borderColor: isDarkMode ? colors.darkText : colors.lightText,
              }}
            />
          </div>
          <button
            onClick={handleSave}
            className="w-full py-2 rounded text-sm"
            style={{ backgroundColor: colors.primary, color: colors.darkText }}
          >
            Save
          </button>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-48">
          <h2 className="font-bold mb-4">All Events</h2>
          {["Meeting", "Operations", "Lunch", "Conference", "Business Meeting"].map((e) => (
            <div
              key={e}
              className="rounded-sm px-2 py-1 mb-2 text-sm cursor-pointer hover:opacity-90"
              style={{ backgroundColor: colors.primary, color: colors.darkText }}
            >
              {e}
            </div>
          ))}
          <label className="flex items-center gap-2 mt-4 text-sm">
            <input type="checkbox" style={{ accentColor: colors.primary }} />
            Remove after drop
          </label>
        </div>

        {/* Calendar */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
            <div className="flex gap-2">
              <button
                onClick={prevPeriod}
                className="px-2 py-1 rounded"
                style={{ backgroundColor: colors.primary, color: colors.darkText }}
              >
                {"<"}
              </button>
              <button
                onClick={nextPeriod}
                className="px-2 py-1 rounded"
                style={{ backgroundColor: colors.primary, color: colors.darkText }}
              >
                {">"}
              </button>
              <button
                onClick={goToday}
                className="px-2 py-1 rounded"
                style={{ backgroundColor: colors.primary, color: colors.darkText }}
              >
                Today
              </button>
              <button
                onClick={() => {
                  setSelectedDate(new Date());
                  setShowEventPopup(true);
                  setPopupPosition({ top: 100, left: 100 });
                }}
                className="px-2 py-1 rounded"
                style={{ backgroundColor: colors.primary, color: colors.darkText }}
              >
                Add Event
              </button>
            </div>
            <div className="font-bold text-lg text-center md:text-left">
              {format(currentDate, view === "Month" ? "MMMM yyyy" : view === "Week" ? "MMMM yyyy" : "d MMMM yyyy")}
            </div>
            <div className="flex gap-2 justify-center">
              {["Month", "Week", "Day"].map((v) => (
                <button
                  key={v}
                  onClick={() => handleViewChange(v)}
                  className={`px-2 py-1 rounded`}
                  style={{
                    backgroundColor: view === v ? colors.primary : colors.lightCard,
                    color: view === v ? colors.darkText : isDarkMode ? colors.darkText : colors.lightText,
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {view === "Month" && (
            <div className="grid grid-cols-7 text-center border">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="py-2 font-medium border-b">{d}</div>
              ))}
              {monthCells()}
            </div>
          )}
          {view === "Week" && (
            <div className="grid grid-cols-7 border">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="py-2 font-medium border-b text-center">{d}</div>
              ))}
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