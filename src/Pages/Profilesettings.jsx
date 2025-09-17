import React, { useState, useContext } from "react";
import ThemeContext from "./ThemeContext.jsx";

const Profilesettings = () => {
  const { isDarkMode, colors } = useContext(ThemeContext);
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeImage = () => setImage(null);

  // palette from your list
  const bgPage   = isDarkMode ? colors.darkBg   : colors.lightBg;
  const textPage = isDarkMode ? colors.darkText : colors.lightText;
  const primary  = colors.primary;

  return (
    <div
      className="min-h-screen w-full flex justify-center"
      style={{ backgroundColor: bgPage, color: textPage }}
    >
      <div className="w-full max-w-6xl p-6 space-y-8">
        <h1 className="text-2xl font-semibold text-center">Schedule Timing</h1>

        {/* Personal Information */}
        <div
          className="rounded-2xl p-6"
          style={{ color: textPage, border: `1px solid ${primary}` }}
        >
          <h2 className="font-semibold mb-4">Personal Information :</h2>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div className="flex items-center gap-4">
              <img
                src={image || "https://via.placeholder.com/80x80.png?text=User"}
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
                style={{ border: `2px solid ${primary}` }}
              />
              <div className="text-sm opacity-80">
                For best results, use an image at least 256px by 256px
                in either .jpg or .png format
              </div>
            </div>

            <div className="flex gap-2">
              <label
                className="px-4 py-2 rounded cursor-pointer hover:opacity-90 text-white text-center"
                style={{ backgroundColor: primary }}
              >
                Upload
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImage}
                />
              </label>
              <button
                onClick={removeImage}
                className="px-4 py-2 rounded hover:opacity-90"
                style={{
                  
                  color: textPage,
                  border: `1px solid ${primary}`,
                }}
              >
                Remove
              </button>
            </div>
          </div>

          {/* Name / Email / Phone */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {["First Name :", "Last Name :"].map((ph, i) => (
              <input
                key={i}
                type="text"
                placeholder={ph}
                className="rounded px-3 py-2 w-full"
                style={{ backgroundColor: bgPage, color: textPage, border: `1px solid ${primary}` }}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {["Your Email :", "Phone no. :"].map((ph, i) => (
              <input
                key={i}
                type="text"
                placeholder={ph}
                className="rounded px-3 py-2 w-full"
                style={{ backgroundColor: bgPage, color: textPage, border: `1px solid ${primary}` }}
              />
            ))}
          </div>

          {/* Bio */}
          <textarea
            rows="4"
            placeholder="Bio :"
            className="rounded px-3 py-2 w-full mb-4"
            style={{ backgroundColor: bgPage, color: textPage, border: `1px solid ${primary}` }}
          ></textarea>

          <button
            className="px-4 py-2 rounded hover:opacity-90 text-white"
            style={{ backgroundColor: primary }}
          >
            Save changes
          </button>
        </div>

        {/* Change Password */}
        <div
          className="rounded-2xl p-6"
          style={{  color: textPage, border: `1px solid ${primary}` }}
        >
          <h2 className="font-semibold mb-4">Change Password :</h2>

          {["Old password :", "New password :", "Re-type New password :"].map((ph, i) => (
            <input
              key={i}
              type="password"
              placeholder={ph}
              className="rounded px-3 py-2 w-full mb-4"
              style={{ backgroundColor: bgPage, color: textPage, border: `1px solid ${primary}` }}
            />
          ))}

          <button
            className="px-4 py-2 rounded hover:opacity-90 text-white"
            style={{ backgroundColor: primary }}
          >
            Save password
          </button>
        </div>

        {/* Account Notifications */}
        <div
          className="rounded-2xl p-6"
          style={{  color: textPage, border: `1px solid ${primary}` }}
        >
          <h2 className="font-semibold mb-4">Account Notifications :</h2>
          {[
            "When someone mentions me",
            "When someone follows me",
            "When shares my activity",
            "When someone messages me",
          ].map((txt, i) => (
            <label
              key={i}
              className="flex justify-between items-center py-2 border-b last:border-none"
              style={{ borderColor: primary }}
            >
              <span>{txt}</span>
              <input
                type="checkbox"
                className="w-5 h-5 accent-[#396CF0]"
                defaultChecked={i % 2 === 1}
              />
            </label>
          ))}
        </div>

        {/* Marketing Notifications */}
        <div
          className="rounded-2xl p-6"
          style={{  color: textPage, border: `1px solid ${primary}` }}
        >
          <h2 className="font-semibold mb-4">Marketing Notifications :</h2>
          {[
            "There is a sale or promotion",
            "Company news",
            "Weekly jobs",
            "Unsubscribe News",
          ].map((txt, i) => (
            <label
              key={i}
              className="flex justify-between items-center py-2 border-b last:border-none"
              style={{ borderColor: primary }}
            >
              <span>{txt}</span>
              <input
                type="checkbox"
                className="w-5 h-5 accent-[#396CF0]"
                defaultChecked={i % 2 === 0}
              />
            </label>
          ))}
        </div>

        {/* Delete Account */}
        <div
          className="rounded-2xl p-6"
          style={{  color: textPage, border: `1px solid ${primary}` }}
        >
          <h2 className="font-semibold mb-4" style={{ color: "#ff4d4f" }}>
            Delete Account :
          </h2>
          <p className="mb-4">
            Do you want to delete the account? Please press below "Delete" button
          </p>
          <button
            className="px-4 py-2 rounded text-white hover:opacity-90"
            style={{ backgroundColor: "#ff4d4f" }}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profilesettings;