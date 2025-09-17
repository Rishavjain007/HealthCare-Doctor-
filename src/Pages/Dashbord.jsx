// import React, { useContext } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import ThemeContext from "../Components/ThemeContext.jsx";

// // Register ChartJS components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Dashboard = () => {
//   const { isDarkMode, colors } = useContext(ThemeContext);

//   const chartData = {
//     labels: ["Sep 10", "Sep 11", "Sep 12", "Sep 13", "Sep 14"],
//     datasets: [
//       {
//         label: "Appointments",
//         data: [2, 4, 3, 5, 6],
//         borderColor: colors.primary,
//         backgroundColor: "rgba(57, 108, 240, 0.2)",
//         tension: 0.4,
//         fill: true,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           color: isDarkMode ? colors.darkText : colors.lightText,
//         },
//         grid: {
//           color: isDarkMode ? "#333" : "#ddd",
//         },
//       },
//       x: {
//         ticks: {
//           color: isDarkMode ? colors.darkText : colors.lightText,
//         },
//         grid: {
//           color: isDarkMode ? "#333" : "#ddd",
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         labels: {
//           color: isDarkMode ? colors.darkText : colors.lightText,
//         },
//       },
//       title: {
//         display: false,
//       },
//     },
//   };

//   const cardStyle = {
//     backgroundColor: isDarkMode ? colors.darkCard : colors.lightCard,
//     color: isDarkMode ? colors.darkText : colors.lightText,
//     border: `1px solid ${isDarkMode ? "#444" : "#eee"}`,
//     transition: "background-color 0.3s ease, color 0.3s ease",
//   };

//   const statCard = (title, value, subtitle, color = colors.primary) => (
//     <div className="p-6 rounded-lg shadow-md" style={cardStyle}>
//       <h3 className="text-sm font-medium mb-2">{title}</h3>
//       <p className="text-2xl font-bold" style={{ color: color }}>
//         {value}
//       </p>
//       <p className="text-xs opacity-70">{subtitle}</p>
//     </div>
//   );

//   const userItem = (img, name, subtitle) => (
//     <div className="flex items-center space-x-3 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer">
//       <img src={img} alt={name} className="w-10 h-10 rounded-full" />
//       <div>
//         <p className="font-medium">{name}</p>
//         <p className="text-xs opacity-70">{subtitle}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-6 space-y-6">
//       {/* Stats Graph Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {statCard("Appointment", "220+", "Week")}
//         {statCard("Patients", "220+", "Week", "green")}
//         {statCard("Urgent", "220+", "Week", "orange")}
//         {statCard("Canceled", "220+", "Week", "red")}
//       </div>

//       {/* Latest Appointments and Upcoming Appointments */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="p-4 rounded-lg shadow-md" style={cardStyle}>
//           <h3 className="font-semibold mb-4">Latest Appointment</h3>
//           {userItem(
//             "https://randomuser.me/api/portraits/men/1.jpg",
//             "Calvin Carlo",
//             "Booking on 27th Nov, 2020"
//           )}
//           {userItem(
//             "https://randomuser.me/api/portraits/women/2.jpg",
//             "Joya Khan",
//             "Booking on 27th Nov, 2020"
//           )}
//           {userItem(
//             "https://randomuser.me/api/portraits/women/3.jpg",
//             "Amelia Muli",
//             "Booking on 27th Nov, 2020"
//           )}
//           {userItem(
//             "https://randomuser.me/api/portraits/men/4.jpg",
//             "Nik Ronaldo",
//             "Booking on 27th Nov, 2020"
//           )}
//           {userItem(
//             "https://randomuser.me/api/portraits/women/5.jpg",
//             "Crista Joseph",
//             "Booking on 27th Nov, 2020"
//           )}
//         </div>

//         <div className="p-4 rounded-lg shadow-md" style={cardStyle}>
//           <h3 className="font-semibold mb-4">Upcoming Appointment</h3>
//           {userItem(
//             "https://randomuser.me/api/portraits/men/6.jpg",
//             "Cristino Murphy",
//             "Booking on 27th Nov, 2020"
//           )}
//           {userItem(
//             "https://randomuser.me/api/portraits/men/7.jpg",
//             "Nick Jons",
//             "Booking on 27th Nov, 2020"
//           )}
//           {userItem(
//             "https://randomuser.me/api/portraits/men/8.jpg",
//             "Alex Dirio",
//             "Booking on 27th Nov, 2020"
//           )}
//           {userItem(
//             "https://randomuser.me/api/portraits/women/9.jpg",
//             "Vrunda Koli",
//             "Booking on 27th Nov, 2020"
//           )}
//           {userItem(
//             "https://randomuser.me/api/portraits/women/10.jpg",
//             "Aisha Low",
//             "Booking on 27th Nov, 2020"
//           )}
//         </div>

//         <div className="p-4 rounded-lg shadow-md" style={cardStyle}>
//           <h3 className="font-semibold mb-4">Patient's Review</h3>
//           <p className="text-sm mb-4 italic">
//             "The advantage of its writing melodies in order to have a
//             'ready-made' text to sing with the melody and to itself or distract
//             the viewer's attention from the layout."
//           </p>
//           <div className="flex items-center space-x-3 mb-4">
//             <img
//               src="https://randomuser.me/api/portraits/women/11.jpg"
//               alt="Patient"
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <p className="font-medium">Carl Oliver</p>
//               <p className="text-xs opacity-70">P.A</p>
//             </div>
//           </div>
//           <div className="flex space-x-2 mb-4">
//             {[...Array(5)].map((_, idx) => (
//               <span key={idx} className="text-yellow-400">
//                 ★
//               </span>
//             ))}
//           </div>
//           <div className="flex space-x-2 opacity-50">
//             <img
//               src="https://via.placeholder.com/40x20?text=Logo1"
//               alt="Logo1"
//             />
//             <img
//               src="https://via.placeholder.com/40x20?text=Logo2"
//               alt="Logo2"
//             />
//             <img
//               src="https://via.placeholder.com/40x20?text=Logo3"
//               alt="Logo3"
//             />
//             <img
//               src="https://via.placeholder.com/40x20?text=Logo4"
//               alt="Logo4"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Appointments Trend Graph */}
//       <div className="p-4 rounded-lg shadow-md" style={cardStyle}>
//         <h3 className="font-semibold mb-4">Appointments Trend</h3>
//         <div style={{ height: "300px" }}>
//           <Line data={chartData} options={chartOptions} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import Card from "../Dashbord Components/Card";
import AppointmentItem from "../Dashbord Components/AppointmentItem";
import ReviewItem from "../Dashbord Components/ReviewItem";
import FeatureCard from "../Dashbord Components/FeatureCard";

const Dashboard = () => {
  const latestAppointments = [
    { name: "Calvin Carlo", date: "14th Sep, 2025, 11:30 PM IST" },
    { name: "Joya Khan", date: "13th Sep, 2025, 10:00 AM IST" },
    { name: "Amelia Muli", date: "12th Sep, 2025, 02:00 PM IST" },
  ];

  const upcomingAppointments = [
    { name: "Cristino Murphy", date: "15th Sep, 2025, 9:00 AM IST" },
    { name: "Nick Jons", date: "16th Sep, 2025, 11:00 AM IST" },
    { name: "Alex Dirio", date: "17th Sep, 2025, 01:00 PM IST" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h5 className="text-xl font-semibold mb-4">Dashboard</h5>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <Card title="Appointment" value="220+" trend="+15%" chartId="chart-1" />
        <Card title="Patients" value="220+" trend="+20%" chartId="chart-2" />
        <Card title="Urgent" value="220+" trend="+5%" chartId="chart-3" />
        <Card title="Canceled" value="220+" trend="-5%" chartId="chart-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b">
            <h6 className="text-sm font-medium">
              Latest Appointment{" "}
              <span className="text-gray-500">55 Patients</span>
            </h6>
          </div>
          <ul className="p-4">
            {latestAppointments.map((appt, index) => (
              <AppointmentItem key={index} name={appt.name} date={appt.date} />
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b">
            <h6 className="text-sm font-medium">
              Upcoming Appointment{" "}
              <span className="text-gray-500">55 Patients</span>
            </h6>
          </div>
          <ul className="p-4">
            {upcomingAppointments.map((appt, index) => (
              <AppointmentItem key={index} name={appt.name} date={appt.date} />
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <ReviewItem
            name="Barbara McIntosh"
            title="M.D"
            quote="There is now an in order to have a 'ready-made' text..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FeatureCard
          icon="uil-message"
          title="New Messages"
          description="Due to its wide spread use..."
        />
        <FeatureCard
          icon="uil-file-check"
          title="Latest Proposals"
          description="Due to its wide spread use..."
        />
        <FeatureCard
          icon="uil-hourglass"
          title="Package Expiry"
          description="Due to its wide spread use..."
        />
        <FeatureCard
          icon="uil-heart"
          title="Saved Items"
          description="Due to its wide spread use..."
        />
      </div>
    </div>
  );
};

export default Dashboard;
