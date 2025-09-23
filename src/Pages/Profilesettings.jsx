import React, { useState, useContext } from "react";
import ThemeContext from "../Components/ThemeContext.jsx";

const Profilesettings = () => {
  const { isDarkMode, colors } = useContext(ThemeContext);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bio: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [notifications, setNotifications] = useState({
    mentions: true,
    follows: false,
    shares: true,
    messages: false,
    sales: true,
    news: false,
    jobs: true,
    unsubscribe: false
  });

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeImage = () => setImage(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNotificationChange = (name) => {
    setNotifications(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Saving changes:", formData);
    alert("Changes saved successfully!");
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    console.log("Changing password:", {
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword
    });
    alert("Password changed successfully!");
    setFormData(prev => ({
      ...prev,
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    }));
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      console.log("Account deletion requested");
      alert("Your account has been deleted successfully.");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex justify-center"
      style={{ backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg, color: isDarkMode ? colors.darkText : colors.lightText }}
    >
      <div className="w-full max-w-6xl p-6 space-y-8">
        <h1 className="text-2xl font-semibold text-center">Profile Settings</h1>

        {/* Personal Information */}
        <form onSubmit={handleSaveChanges}>
          <div
            className="rounded-2xl p-6"
            style={{ color: isDarkMode ? colors.darkText : colors.lightText, border: `1px solid ${colors.primary}` }}
          >
            <h2 className="font-semibold mb-4">Personal Information :</h2>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={image || "https://via.placeholder.com/80x80.png?text=User"}
                  alt="profile"
                  className="w-20 h-20 rounded-full object-cover"
                  style={{ border: `2px solid ${colors.primary}` }}
                />
                <div className="text-sm opacity-80">
                  For best results, use an image at least 256px by 256px
                  in either .jpg or .png format
                </div>
              </div>

              <div className="flex gap-2">
                <label
                  className="px-4 py-2 rounded cursor-pointer hover:opacity-90 text-white text-center"
                  style={{ backgroundColor: colors.primary }}
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
                  type="button"
                  onClick={removeImage}
                  className="px-4 py-2 rounded hover:opacity-90"
                  style={{
                    color: isDarkMode ? colors.darkText : colors.lightText,
                    border: `1px solid ${colors.primary}`,
                  }}
                >
                  Remove
                </button>
              </div>
            </div>

            {/* Name / Email / Phone */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name :"
                value={formData.firstName}
                onChange={handleInputChange}
                className="rounded px-3 py-2 w-full"
                style={{
                  backgroundColor: isDarkMode ? colors.darkCard : colors.lightBg,
                  color: isDarkMode ? colors.darkText : colors.lightText,
                  border: `1px solid ${colors.primary}`
                }}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name :"
                value={formData.lastName}
                onChange={handleInputChange}
                className="rounded px-3 py-2 w-full"
                style={{
                  backgroundColor: isDarkMode ? colors.darkCard : colors.lightBg,
                  color: isDarkMode ? colors.darkText : colors.lightText,
                  border: `1px solid ${colors.primary}`
                }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email :"
                value={formData.email}
                onChange={handleInputChange}
                className="rounded px-3 py-2 w-full"
                style={{
                  backgroundColor: isDarkMode ? colors.darkCard : colors.lightBg,
                  color: isDarkMode ? colors.darkText : colors.lightText,
                  border: `1px solid ${colors.primary}`
                }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone no. :"
                value={formData.phone}
                onChange={handleInputChange}
                className="rounded px-3 py-2 w-full"
                style={{
                  backgroundColor: isDarkMode ? colors.darkCard : colors.lightBg,
                  color: isDarkMode ? colors.darkText : colors.lightText,
                  border: `1px solid ${colors.primary}`
                }}
              />
            </div>

            {/* Bio */}
            <textarea
              rows="4"
              name="bio"
              placeholder="Bio :"
              value={formData.bio}
              onChange={handleInputChange}
              className="rounded px-3 py-2 w-full mb-4"
              style={{
                backgroundColor: isDarkMode ? colors.darkCard : colors.lightBg,
                color: isDarkMode ? colors.darkText : colors.lightText,
                border: `1px solid ${colors.primary}`
              }}
            ></textarea>

            <button
              type="submit"
              className="px-4 py-2 rounded hover:opacity-90 text-white"
              style={{ backgroundColor: colors.primary }}
            >
              Save changes
            </button>
          </div>
        </form>

        {/* Change Password */}
        <form onSubmit={handlePasswordChange}>
          <div
            className="rounded-2xl p-6"
            style={{ color: isDarkMode ? colors.darkText : colors.lightText, border: `1px solid ${colors.primary}` }}
          >
            <h2 className="font-semibold mb-4">Change Password :</h2>

            <input
              type="password"
              name="oldPassword"
              placeholder="Old password :"
              value={formData.oldPassword}
              onChange={handleInputChange}
              className="rounded px-3 py-2 w-full mb-4"
              style={{
                backgroundColor: isDarkMode ? colors.darkCard : colors.lightBg,
                color: isDarkMode ? colors.darkText : colors.lightText,
                border: `1px solid ${colors.primary}`
              }}
            />
            <input
              type="password"
              name="newPassword"
              placeholder="New password :"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="rounded px-3 py-2 w-full mb-4"
              style={{
                backgroundColor: isDarkMode ? colors.darkCard : colors.lightBg,
                color: isDarkMode ? colors.darkText : colors.lightText,
                border: `1px solid ${colors.primary}`
              }}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-type New password :"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="rounded px-3 py-2 w-full mb-4"
              style={{
                backgroundColor: isDarkMode ? colors.darkCard : colors.lightBg,
                color: isDarkMode ? colors.darkText : colors.lightText,
                border: `1px solid ${colors.primary}`
              }}
            />

            <button
              type="submit"
              className="px-4 py-2 rounded hover:opacity-90 text-white"
              style={{ backgroundColor: colors.primary }}
            >
              Save password
            </button>
          </div>
        </form>

        {/* Account Notifications */}
        <div
          className="rounded-2xl p-6"
          style={{ color: isDarkMode ? colors.darkText : colors.lightText, border: `1px solid ${colors.primary}` }}
        >
          <h2 className="font-semibold mb-4">Account Notifications :</h2>
          <label className="flex justify-between items-center py-2 border-b" style={{ borderColor: colors.primary }}>
            <span>When someone mentions me</span>
            <input
              type="checkbox"
              className="w-5 h-5"
              style={{ accentColor: colors.primary }}
              checked={notifications.mentions}
              onChange={() => handleNotificationChange("mentions")}
            />
          </label>
          <label className="flex justify-between items-center py-2 border-b" style={{ borderColor: colors.primary }}>
            <span>When someone follows me</span>
            <input
              type="checkbox"
              className="w-5 h-5"
              style={{ accentColor: colors.primary }}
              checked={notifications.follows}
              onChange={() => handleNotificationChange("follows")}
            />
          </label>
          <label className="flex justify-between items-center py-2 border-b" style={{ borderColor: colors.primary }}>
            <span>When shares my activity</span>
            <input
              type="checkbox"
              className="w-5 h-5"
              style={{ accentColor: colors.primary }}
              checked={notifications.shares}
              onChange={() => handleNotificationChange("shares")}
            />
          </label>
          <label className="flex justify-between items-center py-2 last:border-none" style={{ borderColor: colors.primary }}>
            <span>When someone messages me</span>
            <input
              type="checkbox"
              className="w-5 h-5"
              style={{ accentColor: colors.primary }}
              checked={notifications.messages}
              onChange={() => handleNotificationChange("messages")}
            />
          </label>
        </div>

        {/* Marketing Notifications */}
        <div
          className="rounded-2xl p-6"
          style={{ color: isDarkMode ? colors.darkText : colors.lightText, border: `1px solid ${colors.primary}` }}
        >
          <h2 className="font-semibold mb-4">Marketing Notifications :</h2>
          <label className="flex justify-between items-center py-2 border-b" style={{ borderColor: colors.primary }}>
            <span>There is a sale or promotion</span>
            <input
              type="checkbox"
              className="w-5 h-5"
              style={{ accentColor: colors.primary }}
              checked={notifications.sales}
              onChange={() => handleNotificationChange("sales")}
            />
          </label>
          <label className="flex justify-between items-center py-2 border-b" style={{ borderColor: colors.primary }}>
            <span>Company news</span>
            <input
              type="checkbox"
              className="w-5 h-5"
              style={{ accentColor: colors.primary }}
              checked={notifications.news}
              onChange={() => handleNotificationChange("news")}
            />
          </label>
          <label className="flex justify-between items-center py-2 border-b" style={{ borderColor: colors.primary }}>
            <span>Weekly jobs</span>
            <input
              type="checkbox"
              className="w-5 h-5"
              style={{ accentColor: colors.primary }}
              checked={notifications.jobs}
              onChange={() => handleNotificationChange("jobs")}
            />
          </label>
          <label className="flex justify-between items-center py-2 last:border-none" style={{ borderColor: colors.primary }}>
            <span>Unsubscribe News</span>
            <input
              type="checkbox"
              className="w-5 h-5"
              style={{ accentColor: colors.primary }}
              checked={notifications.unsubscribe}
              onChange={() => handleNotificationChange("unsubscribe")}
            />
          </label>
        </div>

        {/* Delete Account */}
        <div
          className="rounded-2xl p-6"
          style={{ color: isDarkMode ? colors.darkText : colors.lightText, border: `1px solid ${colors.primary}` }}
        >
          <h2 className="font-semibold mb-4" style={{ color: colors.error }}>
            Delete Account :
          </h2>
          <p className="mb-4">
            Do you want to delete the account? Please press below "Delete" button
          </p>
          <button
            type="button"
            onClick={handleDeleteAccount}
            className="px-4 py-2 rounded text-white hover:opacity-90"
            style={{ backgroundColor: colors.primary }}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profilesettings;