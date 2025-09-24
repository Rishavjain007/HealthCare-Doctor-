import React, { useContext } from "react";
import ThemeContext from "../Components/ThemeContext.jsx";
import Card from "../Dashbord Components/Card";
import AppointmentItem from "../Dashbord Components/AppointmentItem";
import ReviewItem from "../Dashbord Components/ReviewItem";
import FeatureCard from "../Dashbord Components/FeatureCard";

const Dashboard = () => {
  const { isDarkMode, colors } = useContext(ThemeContext);

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
    <div className="min-h-screen p-6" style={{
      backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg,
    }}>
      <h5 className="text-xl font-semibold mb-6" style={{
        color: isDarkMode ? colors.darkText : colors.lightText,
      }}>Dashboard</h5>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card title="Appointment" value="220+" trend="+15%" chartId="chart-1" />
        <Card title="Patients" value="220+" trend="+20%" chartId="chart-2" />
        <Card title="Urgent" value="220+" trend="+5%" chartId="chart-3" />
        <Card title="Canceled" value="220+" trend="-5%" chartId="chart-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b">
            <h6 className="text-sm font-medium">Latest Appointment <span className="text-gray-500">55 Patients</span></h6>
          </div>
          <ul className="p-4">
            {latestAppointments.map((appt, index) => (
              <AppointmentItem key={index} name={appt.name} date={appt.date} />
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b">
            <h6 className="text-sm font-medium">Upcoming Appointment <span className="text-gray-500">55 Patients</span></h6>
          </div>
          <ul className="p-4">
            {upcomingAppointments.map((appt, index) => (
              <AppointmentItem key={index} name={appt.name} date={appt.date} />
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ReviewItem
            name="Barbara McIntosh"
            title="M.D"
            quote="There is now an in order to have a 'ready-made' text..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FeatureCard icon="uil-message" title="New Messages" description="Due to its wide spread use..." />
        <FeatureCard icon="uil-file-check" title="Latest Proposals" description="Due to its wide spread use..." />
        <FeatureCard icon="uil-hourglass" title="Package Expiry" description="Due to its wide spread use..." />
        <FeatureCard icon="uil-heart" title="Saved Items" description="Due to its wide spread use..." />
      </div>
    </div>
  );
};

export default Dashboard;
