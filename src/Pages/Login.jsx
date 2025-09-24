import React, { useContext, useState } from "react";
import ThemeContext from "../Components/ThemeContext.jsx";
import { Link } from "react-router-dom";

const Login = () => {
  const { isDarkMode, colors } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const bgPage = isDarkMode ? colors.darkBg : colors.lightBg;
  const cardBg = isDarkMode ? colors.darkCard : colors.lightCard;
  const textPage = isDarkMode ? colors.darkText : colors.lightText;
  const primary = colors.primary;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: bgPage, color: textPage }}
    >
      <div
        className="w-full max-w-md rounded-2xl shadow-lg p-8 space-y-6"
        style={{ backgroundColor: cardBg }}
      >
        {/* Logo + Title */}
        <div className="text-center space-y-2">
          <div
            className="mx-auto w-12 h-12 flex items-center justify-center rounded-full"
            style={{ backgroundColor: primary }}
          >
            <span className="text-white font-bold">D</span>
          </div>
          <h1 className="text-xl font-semibold">Doctris</h1>
          <h2 className="text-lg font-bold">Sign In</h2>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full rounded px-3 py-2 outline-none"
            style={{
              backgroundColor: bgPage,
              color: textPage,
              border: `1px solid ${primary}`,
            }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded px-3 py-2 outline-none"
            style={{
              backgroundColor: bgPage,
              color: textPage,
              border: `1px solid ${primary}`,
            }}
          />

          <button
            type="submit"
            className="w-full py-2 rounded font-medium text-white"
            style={{ backgroundColor: primary }}
          >
            Sign In
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between text-sm">
          <Link to="/recover" style={{ color: primary }}>
            Forgot password?
          </Link>
          <Link to="/signup" style={{ color: primary }}>
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
