import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeContext from "./Components/ThemeContext.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Topbar from "./Components/Topbar.jsx";
import NotificationOffcanvas from "./Components/NotificationOffcanvas.jsx";
import Footer from "./Components/Footer.jsx";
import Profilesettings from "./Pages/Profilesettings.jsx";
import ScheduleTiming from "./Pages/ScheduleTiming.jsx";
import Dashboard from "./Pages/Dashbord.jsx";
import RecoverAccount from "./Pages/RecoverAccount.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Appointment from "./Pages/Appointment.jsx";
import ChatUI from "./Pages/Chat.jsx";

function App() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Notification Offcanvas state
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Apply dark mode class to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Theme colors
  const colors = {
    primary: "#396CF0",
    lightBg: "#ffffff",
    lightCard: "#f0f4ff",
    lightText: "#000000",
    darkBg: "#1C2836",
    darkCard: "#1a1a1a",
    darkText: "#ffffff",
  };

  // Theme context object
  const theme = {
    isDarkMode,
    toggleTheme: () => setIsDarkMode((prev) => !prev),
    isSidebarOpen,
    toggleSidebar: () => setIsSidebarOpen((prev) => !prev),
    closeSidebar: () => setIsSidebarOpen(false),
    colors,
  };

  // Notification handlers
  const toggleNotification = () => setIsNotificationOpen((prev) => !prev);

  const closeNotification = () => setIsNotificationOpen(false);

  // Dummy notification items
  const notificationItems = [
    {
      message: "New appointment scheduled",
      time: "01:16 AM IST, Sep 13, 2025",
    },
    {
      message: "System update available",
      time: "11:30 PM IST, Sep 12, 2025",
    },
    {
      message: "Profile updated successfully",
      time: "07:45 PM IST, Sep 10, 2025",
    },
  ];

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-1 relative">
            {/* Sidebar */}
            <Sidebar />

            {/* Content Area */}
            <div className="flex flex-col flex-1 w-full md:ml-64">
              {/* Topbar */}
              <Topbar
                toggleNotification={toggleNotification}
                toggleSidebar={theme.toggleSidebar}
                toggleTheme={theme.toggleTheme}
              />

              {/* Main content */}
              <main className="flex-grow transition-colors duration-300 bg-lightBg dark:bg-darkBg">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route
                    path="/profile-settings"
                    element={<Profilesettings />}
                  />
                  <Route path="/schedule-timing" element={<ScheduleTiming />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/recover" element={<RecoverAccount />} />
                  <Route path="/appointment" element={<Appointment />} />
                  <Route path="/chat" element={<ChatUI />} />
                </Routes>
              </main>

              {/* Footer */}
              <Footer />
            </div>

            {/* Notification Offcanvas */}
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
