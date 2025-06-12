// SystemManagement.jsx
import { useState } from "react";
import GeneralSettings from "../pages/systemManagement/GeneralSettings";
import SecuritySettings from "../pages/systemManagement/SecuritySettings";
import ServiceStatus from "../pages/systemManagement/ServiceStatus";

const SystemManagement = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-6 px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">
          System Management
        </h2>
        <div className="flex gap-3">
          <button className="bg-green-900 font-semibold text-white px-4 py-2 rounded-md text-sm flex items-center">
            Refresh
          </button>
          <button className="border border-green-900 font-semibold text-green-900 px-4 py-2 rounded-md text-sm flex items-center">
           Backup
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-sm border border-gray-100">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-2">
            System Status
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-2">
            Operational
          </h3>
          <div className="flex items-center text-sm text-[#6e6e6e]">
            <span>All systems normal</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-sm border border-gray-100">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-2">
            Server Load
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-2">
            Cpu Usage{" "}
            <span className="text-gray-800 font-normal text-base">42%</span>
          </h3>
          <div className="w-full bg-gray-300 h-2 rounded-full mb-1">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: "42%" }}
            ></div>
          </div>
          <div className="flex items-center text-sm text-[#6e6e6e]">
            <span>4 of 8 cores active</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-sm border border-gray-100">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-2">
            Database Status
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-2">
            Connected
          </h3>
          <div className="flex items-center text-sm text-[#6e6e6e]">
            <span>Last backup: 2h ago</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-sm border border-gray-100">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-2">
            Active Users
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-2">
            1,245
          </h3>
          <div className="flex items-center text-sm text-[#6e6e6e]">
            <span>Currently online</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="p-6 rounded-md shadow-sm border border-gray-100">
        <div className="flex flex-wrap gap-4 mb-6">
          {["general", "security", "services"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm font-medium relative ${
                activeTab === tab
                  ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "general" && <GeneralSettings />}
          {activeTab === "security" && <SecuritySettings />}
          {activeTab === "services" && <ServiceStatus />}
        </div>
      </div>
    </div>
  );
};

export default SystemManagement;
