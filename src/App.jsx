import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeContext from "./Components/ThemeContext.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Topbar from "./Components/Topbar.jsx";
import NotificationOffcanvas from "./Components/NotificationOffcanvas.jsx";
import Footer from "./Components/Footer.jsx";
import Profilesettings from "./Pages/Profilesettings.jsx";
import ScheduleTiming from "./Pages/ScheduleTiming.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const theme = {
    isDarkMode,
    toggleTheme: () => setIsDarkMode((prev) => !prev),
    isSidebarOpen,
    toggleSidebar: () => setIsSidebarOpen((prev) => !prev),
    closeSidebar: () => setIsSidebarOpen(false),
    colors: {
      primary: "#396CF0",
      lightBg: "#ffffff",
      lightCard: "#f0f4ff",
      lightText: "#000000",
      darkBg: "#1C2836",
      darkCard: "#1a1a1a",
      darkText: "#ffffff",
    },
  };

  const toggleNotification = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  const closeNotification = () => {
    if (isNotificationOpen) setIsNotificationOpen(false);
  };

  const notificationItems = [
    {
      message: "New appointment scheduled",
      time: "01:16 AM IST, Sep 13, 2025",
    },
    { message: "System update available", time: "11:30 PM IST, Sep 12, 2025" },
  ];

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-1 relative">
            {/* Sidebar - Fixed on desktop, hidden/slidable on mobile */}
            <Sidebar />
            <div className="flex flex-col flex-1 w-full md:ml-64">
              {/* Topbar - Full width */}
              <Topbar
                toggleNotification={toggleNotification}
                toggleSidebar={theme.toggleSidebar}
                toggleTheme={theme.toggleTheme}
              />
              {/* Main content - Adjustable margin and full width */}
              <main className="flex-grow p-4">
                <Routes>
                  <Route path="/" element={<h2>Dashboard</h2>} />
                  <Route
                    path="/profile-settings"
                    element={<Profilesettings />}
                  />
                  <Route path="/schedule-timing" element={<ScheduleTiming />} />
                </Routes>
              </main>
              {/* Footer - Full width */}
              <Footer />
            </div>
            <NotificationOffcanvas
              isOpen={isNotificationOpen}
              onClose={closeNotification}
              items={notificationItems}
            />
          </div>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
