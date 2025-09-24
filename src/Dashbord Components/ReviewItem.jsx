import React, { useContext } from "react";
import ThemeContext from "../Components/ThemeContext.jsx";

const ReviewItem = ({ name, title, quote }) => {
  const { isDarkMode, colors } = useContext(ThemeContext);

  return (
    <div className="p-4 rounded-lg shadow-md" style={{
      backgroundColor: isDarkMode ? colors.darkCard : colors.lightCard,
      color: isDarkMode ? colors.darkText : colors.lightText,
    }}>
      <p className="text-sm italic mb-4">{quote}</p>
      <div className="flex items-center">
        <img
          src={`../assets/images/client/default.jpg`}
          alt={name}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <ul className="flex space-x-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <li key={i}>
                <i className="mdi mdi-star text-yellow-400"></i>
              </li>
            ))}
          </ul>
          <h6 className="text-sm font-medium text-blue-600">
            {name} <small className="text-gray-500">{title}</small>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
