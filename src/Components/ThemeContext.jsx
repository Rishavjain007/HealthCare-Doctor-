// import { createContext } from "react";

// const ThemeContext = createContext({
//   isDarkMode: false,
//   toggleTheme: () => {},
//   colors: {
//     primary: "#396CF0",
//     lightBg: "#ffffff",
//     lightCard: "#f0f4ff",
//     lightText: "#000000",
//     darkBg: "#1C2836",
//     darkCard: "#1a1a1a",
//     darkText: "#ffffff",
//     success: "#396CF0",
//     warning: "#396CF0",
//     error: "#396CF0",
//   },
// });

// export default ThemeContext;

import { createContext } from "react";

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  colors: {
    primary: "#396CF0",
    lightBg: "#F8FAFC",
    lightCard: "#FFFFFF",
    lightText: "#1F2937",
    darkBg: "#0F172A",
    darkCard: "#1E293B",
    darkText: "#F1F5F9",
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
  },
});

export default ThemeContext;
