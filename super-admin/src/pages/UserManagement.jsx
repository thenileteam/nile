import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import UserListTab from "../pages/userManagement/UserListTab";
import RoleAssignmentsTab from "../pages/userManagement/RoleAssignmentsTab";
import ActivityLogsTab from "../pages/userManagement/ActivityLogsTab";

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState("userList");

  return (
    <div className="space-y-6 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">
          User Management
        </h2>
        <div className="flex gap-3">
          <button className="bg-green-900 font-semibold text-white px-4 py-2 rounded-md text-sm">
            Export
          </button>
          <button className="border border-green-900 font-semibold text-green-900 px-4 py-2 rounded-md text-sm">
            Add User
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">
            Total Users
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-4">
            125,430
          </h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span className="mr-1">+2,150</span>
            <span className="text-[#6e6e6e]">vs last Month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">
            Active Users
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-4">
            118,200
          </h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span className="mr-1">+10%</span>
            <span className="text-[#6e6e6e]">vs last Month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">
            Churn Rate
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-4">
            2.5%
          </h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span className="mr-1">-0.3%</span>
            <span className="text-[#6e6e6e]">vs last Month</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {[
            { id: "userList", name: "User List" },
            { id: "roleAssignments", name: "Role Assignments" },
            { id: "activityLogs", name: "Activity Logs" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 text-sm font-medium relative ${
                activeTab === tab.id
                  ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Conditional rendering of tab content */}
        <div className="mt-4">
          {activeTab === "userList" && <UserListTab />}
          {activeTab === "roleAssignments" && <RoleAssignmentsTab />}
          {activeTab === "activityLogs" && <ActivityLogsTab />}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
