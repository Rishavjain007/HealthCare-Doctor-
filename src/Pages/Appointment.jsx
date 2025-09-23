// Appointment.jsx
import React, { useState, useContext } from "react";
import { AiFillEye } from "react-icons/ai";
import { SiTicktick } from "react-icons/si";
import { CiCircleRemove } from "react-icons/ci";
import ThemeContext from "../Components/ThemeContext.jsx";

const Appointment = () => {
  const { isDarkMode, colors } = useContext(ThemeContext);

  const data = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    date: "20th Dec 2020",
    time: `${9 + (i % 8)}:${i % 2 === 0 ? "00" : "30"} AM`,
    name: `Patient ${i + 1}`,
    age: 20 + (i % 10),
    gender: i % 2 === 0 ? "Male" : "Female",
    photo: `https://randomuser.me/api/portraits/${
      i % 2 === 0 ? "men" : "women"
    }/${30 + i}.jpg`,
    fees: "$50/Patient",
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg,
        color: isDarkMode ? colors.darkText : colors.lightText,
      }}
      className="p-6 min-h-screen transition-colors duration-300"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Appointments</h2>
        <div className="flex items-center gap-3">
          <select
            style={{
              backgroundColor: isDarkMode ? colors.darkCard : colors.lightCard,
              color: isDarkMode ? colors.darkText : colors.lightText,
              border: `1px solid ${
                isDarkMode ? colors.borderDark : colors.borderLight
              }`,
            }}
            className="px-3 py-2 rounded-lg shadow-sm focus:outline-none"
          >
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
          <button
            style={{
              backgroundColor: colors.primary,
              color: colors.lightText,
            }}
            className="px-4 py-2 rounded-lg shadow transition"
          >
            Appointment
          </button>
        </div>
      </div>

      {/* Table */}
      <div
        style={{
          border: `1px solid ${
            isDarkMode ? colors.borderDark : colors.borderLight
          }`,
        }}
        className="overflow-x-auto shadow-xl rounded-lg"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr
              style={{
                backgroundColor: isDarkMode
                  ? colors.darkCard
                  : colors.lightCard,
                color: isDarkMode ? colors.darkText : colors.lightText,
              }}
            >
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Age</th>
              <th className="p-3 text-left">Gender</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Fees</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row, index) => (
              <tr
                key={row.id}
                style={{
                  borderBottom: `1px solid ${
                    isDarkMode ? colors.borderDark : colors.borderLight
                  }`,
                }}
                className="transition duration-200"
              >
                <td className="p-3 font-semibold">
                  {indexOfFirstRow + index + 1}
                </td>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={row.photo}
                    alt={row.name}
                    className="w-10 h-10 rounded-full border shadow-sm"
                    style={{
                      borderColor: isDarkMode
                        ? colors.borderDark
                        : colors.borderLight,
                    }}
                  />
                  <span className="font-medium">{row.name}</span>
                </td>
                <td className="p-3">{row.age}</td>
                <td className="p-3">{row.gender}</td>
                <td className="p-3">{row.date}</td>
                <td className="p-3">{row.time}</td>
                <td
                  className="p-3 font-semibold"
                  style={{ color: colors.success }}
                >
                  {row.fees}
                </td>
                <td className="p-3 flex justify-center gap-2">
                  <button
                    style={{
                      backgroundColor: isDarkMode
                        ? colors.darkCard
                        : colors.lightCard,
                      color: colors.primary,
                    }}
                    className="px-3 py-1 rounded transition"
                  >
                    <AiFillEye />
                  </button>
                  <button
                    style={{
                      backgroundColor: isDarkMode
                        ? colors.darkCard
                        : colors.lightCard,
                      color: colors.success,
                    }}
                    className="px-3 py-1 rounded transition"
                  >
                    <SiTicktick />
                  </button>
                  <button
                    style={{
                      backgroundColor: isDarkMode
                        ? colors.darkCard
                        : colors.lightCard,
                      color: colors.error,
                    }}
                    className="px-3 py-1 rounded transition"
                  >
                    <CiCircleRemove />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-6 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          style={{
            border: `1px solid ${
              isDarkMode ? colors.borderDark : colors.borderLight
            }`,
            backgroundColor: isDarkMode ? colors.darkCard : colors.lightCard,
            color: isDarkMode ? colors.darkText : colors.lightText,
            opacity: currentPage === 1 ? 0.5 : 1,
          }}
          className="px-3 py-1 rounded"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              border: `1px solid ${
                isDarkMode ? colors.borderDark : colors.borderLight
              }`,
              backgroundColor:
                currentPage === i + 1 ? colors.primary : "transparent",
              color:
                currentPage === i + 1
                  ? colors.lightText
                  : isDarkMode
                  ? colors.darkText
                  : colors.lightText,
            }}
            className="px-3 py-1 rounded"
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          style={{
            border: `1px solid ${
              isDarkMode ? colors.borderDark : colors.borderLight
            }`,
            backgroundColor: isDarkMode ? colors.darkCard : colors.lightCard,
            color: isDarkMode ? colors.darkText : colors.lightText,
            opacity: currentPage === totalPages ? 0.5 : 1,
          }}
          className="px-3 py-1 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Appointment;
