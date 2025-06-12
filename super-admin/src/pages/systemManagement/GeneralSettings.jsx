// ./SystemManagement/GeneralSettings.jsx
import { useState } from "react";

const GeneralSettings = () => {
  const [siteName, setSiteName] = useState("Nile Technologies");
  const [siteURL, setSiteURL] = useState("https://nile.technologies");
  const [adminEmail, setAdminEmail] = useState("admin@nile.io");
  const [timezone, setTimezone] = useState("Africa/Lagos");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [userRegistration, setUserRegistration] = useState(true);

  const handleSaveChanges = () => {
    console.log("Saving General Settings:", {
      siteName,
      siteURL,
      adminEmail,
      timezone,
      maintenanceMode,
      userRegistration,
    });
    alert("General Settings Saved!");
  };

  return (
    <div className="bg-[#f4f4f0] px-5 py-7 rounded-xl space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          General Settings
        </h3>
        <button
          onClick={handleSaveChanges}
          className="bg-green-700 font-semibold text-white px-4 py-2 rounded-md text-sm"
        >
          Save Changes
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        Configure basic system settings
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {/* Site Name */}
        <div>
          <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
            Site Name
          </label>
          <input
            type="text"
            id="siteName"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Site URL */}
        <div>
          <label htmlFor="siteURL" className="block text-sm font-medium text-gray-700">
            Site URL
          </label>
          <input
            type="text"
            id="siteURL"
            value={siteURL}
            onChange={(e) => setSiteURL(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Admin Email */}
        <div>
          <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">
            Admin Email
          </label>
          <input
            type="email"
            id="adminEmail"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Timezone */}
        <div>
          <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
            Timezone
          </label>
          <select
            id="timezone"
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          >
            <option value="Africa/Lagos">Africa/Lagos</option>
            <option value="Europe/London">Europe/London</option>
            <option value="America/New_York">America/New_York</option>
          </select>
        </div>

        {/* Maintenance Mode */}
        <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200">
          <div>
            <p className="text-sm font-medium text-gray-700">Maintenance Mode</p>
            <p className="text-xs text-gray-500">Put the site in maintenance mode</p>
          </div>
          <label htmlFor="maintenanceToggle" className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="maintenanceToggle"
              className="sr-only peer"
              checked={maintenanceMode}
              onChange={(e) => setMaintenanceMode(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
          </label>
        </div>

        {/* User Registration */}
        <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200">
          <div>
            <p className="text-sm font-medium text-gray-700">User Registration</p>
            <p className="text-xs text-gray-500">Allow new users to register</p>
          </div>
          <label htmlFor="userRegToggle" className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="userRegToggle"
              className="sr-only peer"
              checked={userRegistration}
              onChange={(e) => setUserRegistration(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;