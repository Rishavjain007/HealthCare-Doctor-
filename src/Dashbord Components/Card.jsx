import React, { useContext } from "react";
import ThemeContext from "../Components/ThemeContext.jsx";

const Card = ({ title, value, trend, chartId }) => {
  const { isDarkMode, colors } = useContext(ThemeContext);
  const isPositive = trend.includes("+");

  return (
    <div className={`p-4 rounded-xl shadow-md`} style={{
      backgroundColor: isDarkMode ? colors.darkCard : colors.lightCard,
      color: isDarkMode ? colors.darkText : colors.lightText,
      border: `1px solid ${isDarkMode ? "#2c2c2c" : "#e5e7eb"}`
    }}>
      <div className="mb-3">
        <h6 className="text-sm font-medium">
          {title}{" "}
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            isPositive ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800"
          }`}>
            {trend}
          </span>
        </h6>
        <p className="text-xs text-gray-500">220+ Week</p>
      </div>
      <div id={chartId} className="h-20"></div>
    </div>
  );
};

export default Card;
