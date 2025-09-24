import React, { useContext } from "react";
import ThemeContext from "../Components/ThemeContext.jsx";

const AppointmentItem = ({ name, date }) => {
  const { isDarkMode, colors } = useContext(ThemeContext);

  return (
    <li className="mt-2">
      <a href="#" className={`flex items-center p-2 rounded hover:bg-gray-100 ${isDarkMode ? "hover:bg-gray-800" : ""}`} style={{
        color: isDarkMode ? colors.darkText : colors.lightText,
      }}>
        <img
          src={`../assets/images/client/default.jpg`}
          alt={name}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h6 className="text-sm font-medium">{name}</h6>
          <small className="text-xs text-gray-500">{date}</small>
        </div>
        <i className="uil uil-arrow-right ml-auto"></i>
      </a>
    </li>
  );
};

export default AppointmentItem;
