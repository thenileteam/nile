import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const userRoles = [
  { name: "Customers", count: 2302, percent: 40, color: "bg-blue-500" },
  { name: "Vendors", count: 708, percent: 25, color: "bg-green-500" },
  { name: "Admins", count: 354, percent: 20, color: "bg-orange-400" },
  { name: "Support", count: 178, percent: 15, color: "bg-gray-500" },
];

const userMetrics = [
  {
    title: "Retention Rate",
    value: "78.5%",
    change: "+2.3% from last period",
    up: true,
  },
  {
    title: "Churn Rate",
    value: "4.2%",
    change: "-0.8% from last period",
    up: false,
  },
  {
    title: "Avg. Session Time",
    value: "8.2 min",
    change: "-0.5 min from last period",
    up: false,
  },
  {
    title: "Bounce Rate",
    value: "32.5%",
    change: "-2.1% from last period",
    up: false,
  },
];

export default function UserAnalytics() {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Engagement", "Acquisition"];

  return (
    <div className="space-y-6">
      {/* Header */}
       <div className="flex items-center justify-between">
         <h2 className="text-xl font-bold text-gray-800">User Analytics</h2>
        <div className="flex gap-3">
          <select className="border border-green-900 font-semi-bold text-sm text-green-900 p-1 rounded-md">
            <option value="this month">This Month</option>
            <option value="last month">Last Month</option>
          </select>
           <button className="bg-green-900 font-semi-bold text-white px-6 py-2 rounded-md">Export</button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-30">
        {[
          { label: "Total Users", value: "3,542", diff: "+394", vs:"vs last Month" },
          { label: "New Signups", value: "245", diff: "+38", vs:"vs last Month" },
          { label: "Active Users", value: "2,845", diff: "+215", vs:"vs last Month" },
        ].map((item, idx) => (
          <div key={idx} className="bg-green-50 p-4 rounded-lg shadow-lg w-65">
            <p className="text-gray-600 text-sm mb-5">{item.label}</p>
            <h3 className="text-2xl font-bold text-green-700 mb-5">{item.value}</h3>
            <div className="flex items-center text-sm text-green-600 mt-1">
              <FaArrowUp className="mr-1" />
              <span>{item.diff}</span>
               <span className="text-[#00000085] ml-1">{item.vs}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-6 text-sm font-medium text-[#004324]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-1 transition-all duration-200 ${
              activeTab === tab ? "border-b-2 border-[#004324] text-green-700" : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Distribution & Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Distribution */}
        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h4 className="font-semibold text-[#004324] mb-4">User Distribution</h4>
          {userRoles.map((role, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>{role.name}</span>
                <span className="text-gray-500">{role.count}</span>
              </div>
              <div className="relative w-full bg-gray-200 h-3 rounded-full">
                <div
                  className={`${role.color} h-3 rounded-full relative`}
                  style={{ width: `${role.percent}%` }}
                >
                  <span className="absolute -top-1 -right-5 text-xs font-bold text-[#004324]">
                    {role.percent}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User Metrics */}
        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h4 className="font-semibold text-[#004324] mb-4">User Metrics</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {userMetrics.map((metric, idx) => (
              <div key={idx} className="border border-[#00000044] p-3 rounded-md">
                <p className="font-medium text-[#004324] mb-1">{metric.title}</p>
                <h3 className="text-2xl font-semibold text-gray-700">{metric.value}</h3>
                <div className={`flex items-center mt-1 ${metric.up ? 'text-green-600' : 'text-red-500'}`}>
                  {metric.up ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                  <span>{metric.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
