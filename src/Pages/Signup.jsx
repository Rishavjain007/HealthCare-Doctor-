import React, { useContext, useState } from "react";
import ThemeContext from "../Components/ThemeContext.jsx";
import { Link } from "react-router-dom";

const Signup = () => {
  const { isDarkMode, colors } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const bgPage = isDarkMode ? colors.darkBg : colors.lightBg;
  const cardBg = isDarkMode ? colors.darkCard : colors.lightCard;
  const textPage = isDarkMode ? colors.darkText : colors.lightText;
  const primary = colors.primary;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
          <h2 className="text-lg font-bold">Create Account</h2>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full rounded px-3 py-2 outline-none"
            style={{
              backgroundColor: bgPage,
              color: textPage,
              border: `1px solid ${primary}`,
            }}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full rounded px-3 py-2 outline-none"
            style={{
              backgroundColor: bgPage,
              color: textPage,
              border: `1px solid ${primary}`,
            }}
          />
          <input
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            placeholder="Confirm Password"
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
            Sign Up
          </button>
        </form>

        {/* Link */}
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" style={{ color: primary }}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
