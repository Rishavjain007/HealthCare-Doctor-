import React, { useContext, useState } from "react";
import ThemeContext from "../Components/ThemeContext.jsx";

const RecoverAccount = () => {
  const { isDarkMode, colors } = useContext(ThemeContext);
  const [email, setEmail] = useState("");

  // color palette from ThemeContext
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
          <h2 className="text-lg font-bold">Recover Account</h2>
          <p className="text-sm opacity-75">
            Please enter your email address. You will receive a link to create a
            new password via email.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium">Email address *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              className="w-full rounded px-3 py-2 outline-none"
              style={{
                backgroundColor: bgPage,
                color: textPage,
                border: `1px solid ${primary}`,
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded font-medium text-white"
            style={{ backgroundColor: primary }}
          >
            Send
          </button>
        </form>

        {/* Link */}
        <div className="text-center text-sm">
          Remember your password?{" "}
          <a href="/login" style={{ color: primary }}>
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecoverAccount;
