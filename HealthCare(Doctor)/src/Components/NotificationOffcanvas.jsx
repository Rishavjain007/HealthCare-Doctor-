import { useContext } from "react";
import ThemeContext from "./ThemeContext.jsx";

const NotificationOffcanvas = ({ isOpen, onClose, items = [] }) => {
  const { isDarkMode, colors } = useContext(ThemeContext);

  return (
    <>
      {/* Overlay with blur effect */}
      <div
        className={`fixed inset-0 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{
          backgroundColor: isDarkMode
            ? `rgba(0, 0, 0, 0.4)`
            : `rgba(255, 255, 255, 0.4)`,
          backdropFilter: "blur(2px)",
        }}
        onClick={onClose}
      ></div>

      {/* Offcanvas panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 p-4 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundColor: isDarkMode ? colors.darkCard : colors.lightCard,
          color: isDarkMode ? colors.darkText : colors.lightText,
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Notifications</h2>
          <button onClick={onClose} className="text-xl font-bold">
            &times;
          </button>
        </div>

        <div className="overflow-y-auto max-h-[80%] space-y-3">
          {items.length === 0 ? (
            <p>No notifications.</p>
          ) : (
            items.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded"
                style={{
                  backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg,
                  border: `1px solid ${colors.primary}`,
                }}
              >
                <p>{item.message}</p>
                <p>Time: {item.time}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default NotificationOffcanvas;
