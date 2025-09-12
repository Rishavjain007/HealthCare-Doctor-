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
    { name: "profile", path: "/profile", icon: <FaUserCircle /> },
    { name: "profile-settings", path: "/profile-settings", icon: <FaCog /> },
    { name: "Patients", path: "/patients", icon: <FaUsers /> },
    { name: "patient-review", path: "/patient-review", icon: <FaStar /> },
    { name: "Chat", path: "/chat", icon: <FaComments /> },
    { name: "login", path: "/login", icon: <FaUserLock /> },
  ];

  return (
    <>
      {/* Overlay with blur effect */}
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

      {/* Sidebar panel */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 p-5 border-r transition-transform duration-300 z-10 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        style={{
          backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg,
          color: isDarkMode ? colors.darkText : colors.lightText,
        }}
      >
        <div className="text-center mb-6">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
            alt="doctor"
            className="mx-auto rounded-full w-24 h-24 object-cover"
          />
          <h2 className="font-bold mt-2" style={{ color: colors.primary }}>
            Dr. Calvin Carlo
          </h2>
          <p
            className="text-sm"
            style={{ color: isDarkMode ? colors.darkText : colors.lightText }}
          >
            General Physician
          </p>
        </div>

        <nav className="overflow-y-auto h-[calc(100vh-8rem)] space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 w-full rounded transition-colors duration-200 ${
                  isActive
                    ? "bg-primary text-white"
                    : "hover:bg-light-card dark:hover:bg-dark-card"
                }`
              }
              onClick={closeSidebar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? colors.primary : "",
                color: isActive
                  ? colors.darkText
                  : isDarkMode
                  ? colors.darkText
                  : colors.lightText,
              })}
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
