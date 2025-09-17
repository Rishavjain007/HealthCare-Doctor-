import React from "react";

const Card = ({ title, value, trend, chartId }) => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <div className="mb-3">
      <h6 className="text-sm font-medium text-gray-600">
        {title}{" "}
        <span
          className={`text-xs ${
            trend.includes("+")
              ? "bg-blue-100 text-blue-800"
              : "bg-red-100 text-red-800"
          } px-2 py-1 rounded-full`}
        >
          {trend}
        </span>
      </h6>
      <p className="text-xs text-gray-500">220+ Week</p>
    </div>
    <div id={chartId} className="h-20"></div>
  </div>
);

export default Card;
