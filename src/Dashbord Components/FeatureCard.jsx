import React, { useContext } from "react";
import ThemeContext from "../Components/ThemeContext.jsx";

const FeatureCard = ({ icon, title, description }) => {
  const { isDarkMode, colors } = useContext(ThemeContext);

  return (
    <div className="p-4 rounded-lg shadow-md text-center" style={{
      backgroundColor: isDarkMode ? colors.darkCard : colors.lightCard,
      color: isDarkMode ? colors.darkText : colors.lightText,
    }}>
      <i className={`uil ${icon} text-2xl mb-2`}></i>
      <h5 className="text-sm font-medium mb-2">{title}</h5>
      <p className="text-xs text-gray-500 mb-2">{description}</p>
      <a href="#" className="text-blue-600 text-xs">
        Read more <i className="ri-arrow-right-line"></i>
      </a>
    </div>
  );
};

export default FeatureCard;
