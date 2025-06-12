// ./SystemManagement/SecuritySettings.jsx
import { useState } from "react";

const SecuritySettings = () => {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [passwordExpiry, setPasswordExpiry] = useState(false);
  const [ipRestriction, setIpRestriction] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState("60");
  const [passwordPolicy, setPasswordPolicy] = useState("Strong ( 8+ Characters, Mixed case, Numbers, Symbols )");

  const handleSaveChanges = () => {
    console.log("Saving Security Settings:", {
      twoFactorAuth,
      passwordExpiry,
      ipRestriction,
      sessionTimeout,
      passwordPolicy,
    });
    alert("Security Settings Saved!");
  };

  return (
    <div className="bg-[#f4f4f0] px-5 py-7 rounded-xl space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Security Settings
        </h3>
        <button
          onClick={handleSaveChanges}
          className="bg-green-700 font-semibold text-white px-4 py-2 rounded-md text-sm"
        >
          Save Changes
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-6">
        Configure security and authentication
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {/* Two-Factor Authentication */}
        <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200">
          <div>
            <p className="text-sm font-medium text-gray-700">Two-Factor Authentication</p>
            <p className="text-xs text-gray-500">Require 2FA for admin users</p>
          </div>
          <label htmlFor="2faToggle" className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="2faToggle"
              className="sr-only peer"
              checked={twoFactorAuth}
              onChange={(e) => setTwoFactorAuth(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
          </label>
        </div>

        {/* Password Expiry */}
        <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200">
          <div>
            <p className="text-sm font-medium text-gray-700">Password Expiry</p>
            <p className="text-xs text-gray-500">Force password reset every 90 days</p>
          </div>
          <label htmlFor="passExpiryToggle" className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="passExpiryToggle"
              className="sr-only peer"
              checked={passwordExpiry}
              onChange={(e) => setPasswordExpiry(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
          </label>
        </div>

        {/* IP Restriction */}
        <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200">
          <div>
            <p className="text-sm font-medium text-gray-700">IP Restriction</p>
            <p className="text-xs text-gray-500">Limit admin access to specific IPs</p>
          </div>
          <label htmlFor="ipRestrictionToggle" className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="ipRestrictionToggle"
              className="sr-only peer"
              checked={ipRestriction}
              onChange={(e) => setIpRestriction(e.target.checked)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
          </label>
        </div>

        {/* Session Timeout */}
        <div>
          <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700">
            Session Timeout (minutes)
          </label>
          <select
            id="sessionTimeout"
            value={sessionTimeout}
            onChange={(e) => setSessionTimeout(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          >
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="60">60</option>
            <option value="120">120</option>
          </select>
        </div>

        {/* Password Policy */}
        <div>
          <label htmlFor="passwordPolicy" className="block text-sm font-medium text-gray-700">
            Password Policy
          </label>
          <select
            id="passwordPolicy"
            value={passwordPolicy}
            onChange={(e) => setPasswordPolicy(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          >
            <option value="Weak ( 6+ Characters )">Weak ( 6+ Characters )</option>
            <option value="Medium ( 8+ Characters, Mixed case )">Medium ( 8+ Characters, Mixed case )</option>
            <option value="Strong ( 8+ Characters, Mixed case, Numbers, Symbols )">Strong ( 8+ Characters, Mixed case, Numbers, Symbols )</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;