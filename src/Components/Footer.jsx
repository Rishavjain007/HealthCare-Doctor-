import { useContext } from "react";
import ThemeContext from "./ThemeContext.jsx";

const Footer = () => {
  const { isDarkMode, colors } = useContext(ThemeContext);

  return (
    <footer
      className="p-4 text-center"
      style={{
        backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg,
        color: isDarkMode ? colors.darkText : colors.lightText,
        borderTop: `1px solid ${
          isDarkMode ? colors.darkCard : colors.lightCard
        }`,
      }}
    >
      <p className="text-sm">
        © 2025 HealthCare Clinic |{" "}
        <a
          href="mailto:support@healthcareclinic.com"
          style={{ color: colors.primary, textDecoration: "underline" }}
        >
          support@healthcareclinic.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
