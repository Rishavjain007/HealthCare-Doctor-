import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-4 bg-white rounded-lg shadow-md text-center">
    <i className={`uil ${icon} text-2xl mb-2`}></i>
    <h5 className="text-sm font-medium mb-2">{title}</h5>
    <p className="text-xs text-gray-600 mb-2">{description}</p>
    <a href="#" className="text-blue-600 text-xs">
      Read more <i className="ri-arrow-right-line"></i>
    </a>
  </div>
);

export default FeatureCard;
