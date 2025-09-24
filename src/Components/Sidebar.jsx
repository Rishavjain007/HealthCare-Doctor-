import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaComments,
  FaCog,
  FaClock,
  FaStar,
  FaUsers,
  FaUserCircle,
  FaUserLock,
} from "react-icons/fa";
import ThemeContext from "./ThemeContext.jsx";

const Sidebar = () => {
  const { isDarkMode, colors, isSidebarOpen, closeSidebar } =
    useContext(ThemeContext);

  const navItems = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
    { name: "Appointment", path: "/appointment", icon: <FaCalendarAlt /> },
    { name: "Schedule Timing", path: "/schedule-timing", icon: <FaClock /> },
    { name: "Invoice", path: "/invoice", icon: <FaCalendarAlt /> },
    { name: "Messages", path: "/messages", icon: <FaComments /> },
    { name: "Profile", path: "/profile", icon: <FaUserCircle /> },
    { name: "Profile Settings", path: "/profile-settings", icon: <FaCog /> },
    { name: "Patients", path: "/patients", icon: <FaUsers /> },
    { name: "Patient Review", path: "/patient-review", icon: <FaStar /> },
    { name: "Chat", path: "/chat", icon: <FaComments /> },
    { name: "Login", path: "/login", icon: <FaUserLock /> },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          backgroundColor: isDarkMode
            ? `${colors.darkBg}80`
            : `${colors.lightBg}80`,
        }}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 p-5 border-r transition-transform duration-300 bg-white z-20 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        style={{
          backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg,
          color: isDarkMode ? colors.darkText : colors.lightText,
          borderColor: isDarkMode ? colors.darkCard : colors.lightCard,
        }}
      >
        {/* Profile Section */}
        <div className="text-center mb-4">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
            alt="Doctor"
            className="mx-auto rounded-full w-24 h-24 object-cover border-4"
            style={{
              borderColor: colors.primary,
            }}
          />
          <h2
            className="font-bold mt-2 text-lg"
            style={{ color: colors.primary }}
          >
            Dr. Calvin Carlo
          </h2>
          <p
            className="text-sm mt-1"
            style={{ color: isDarkMode ? colors.darkText : colors.lightText }}
          >
            General Physician
          </p>
        </div>

        {/* Navigation Section */}
        <nav
          className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500"
          style={{
            maxHeight: "calc(100vh - 180px)", // adjust based on profile height
          }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 mb-1 rounded transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`
              }
              onClick={closeSidebar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? colors.primary : "",
                color: isActive
                  ? "#fff"
                  : isDarkMode
                  ? colors.darkText
                  : colors.lightText,
              })}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="capitalize">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
