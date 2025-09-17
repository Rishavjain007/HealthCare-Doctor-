import React from "react";

const AppointmentItem = ({ name, date }) => (
  <li className="mt-2">
    <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
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

export default AppointmentItem;
