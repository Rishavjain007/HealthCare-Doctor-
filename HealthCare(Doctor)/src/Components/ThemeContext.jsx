import { createContext } from "react";

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  colors: {
    primary: "#396CF0",
    lightBg: "#ffffff",
    lightCard: "#f0f4ff",
    lightText: "#000000",
    darkBg: "#1C2836",
    darkCard: "#1a1a1a",
    darkText: "#ffffff",
    success: "#396CF0",
    warning: "#396CF0",
    error: "#396CF0",
  },
});

export default ThemeContext;
