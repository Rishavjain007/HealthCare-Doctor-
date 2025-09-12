import { useContext, useState } from "react";
import {
  FaSearch,
  FaBell,
  FaMailchimp,
  FaBars,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ThemeContext from "./ThemeContext.jsx";

const Topbar = ({ toggleNotification, toggleSidebar, toggleTheme }) => {
  const {
    isDarkMode,
    colors,
    toggleSidebar: contextToggleSidebar,
    toggleTheme: contextToggleTheme,
  } = useContext(ThemeContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  return (
    <div
      className="flex justify-between items-center p-4 shadow-sm"
      style={{
        backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg,
        color: isDarkMode ? colors.darkText : colors.lightText,
      }}
    >
      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-2xl"
          onClick={toggleSidebar || contextToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <FaBars />
        </button>
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <NavLink onClick={toggleNotification}>
          <FaBell className="text-2xl cursor-pointer" />
        </NavLink>
        <NavLink to="/messages">
          <FaMailchimp className="text-2xl cursor-pointer" />
        </NavLink>

        <button
          onClick={toggleTheme || contextToggleTheme}
          className="text-2xl cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Search Icon on Mobile, Full Search on Desktop */}
        <div className="relative">
          {/* Search Input - Hidden on mobile, visible on md+ */}
          <div
            className={`absolute top-full right-0 mt-2 w-64 md:static md:w-auto ${
              isSearchOpen ? "block" : "hidden md:flex"
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="border rounded p-2 pl-8 w-full md:w-64 lg:w-80"
              style={{
                borderColor: colors.primary,
                backgroundColor: isDarkMode
                  ? colors.darkCard
                  : colors.lightCard,
                color: isDarkMode ? colors.darkText : colors.lightText,
              }}
            />
            <FaSearch
              className="absolute top-5 left-2 text-base"
              style={{ color: colors.warning }}
            />
          </div>
          {/* Search Toggle Icon on Mobile */}
          <button
            onClick={toggleSearch}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle search"
          >
            <FaSearch className="text-base" style={{ color: colors.warning }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
