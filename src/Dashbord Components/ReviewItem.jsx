import React from "react";

const ReviewItem = ({ name, title, quote }) => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <p className="text-sm text-gray-600 italic mb-4">{quote}</p>
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

export default ReviewItem;
