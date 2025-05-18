import React from "react";
import { FaArrowUp, FaCircle } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const pieData = [
  { name: "Completed", value: 65, color: "#16a34a" },
  { name: "Processing", value: 20, color: "#3b82f6" },
  { name: "Cancelled", value: 5, color: "#ef4444" },
];

const barData = [
  { name: "Jan", revenue: 250000 },
  { name: "Feb", revenue: 450000 },
  { name: "Mar", revenue: 300000 },
  { name: "Apr", revenue: 750000 },
  { name: "May", revenue: 1000000 },
  { name: "Jun", revenue: 850000 },
  { name: "Jul", revenue: 970000 },
  { name: "Aug", revenue: 724843 },
  { name: "Sep", revenue: 480000 },
  { name: "Oct", revenue: 650000 },
  { name: "Nov", revenue: 300000 },
  { name: "Dec", revenue: 520000 },
];

function Dashboard() {
  return (
    <div className="flex flex-col h-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Welcome Super Admin
          </h2>
        </div>
        <div className="flex gap-3">
          <button className="bg-green-900 font-semi-bold text-white px-6 py-2 rounded-md">
            Export
          </button>
          <button className="border border-green-900 font-semi-bold text-green-900 px-5 py-2 rounded-md">
            Refresh
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          "Total Active Businesses",
          "Total Individual Users",
          "Total Orders",
          "Monthly Revenue",
        ].map((label, idx) => (
          <div
            key={idx}
            className="bg-[#f4f4f0] py-4 px-2 rounded-md shadow-sm w-fit md:w-60"
          >
            <p className="text-lg text-[#6e6e6e] font-medium mb-5">{label}</p>
            <h3 className="text-xl font-bold text-[#0a9b21] mb-5">
              {label === "Monthly Revenue"
                ? "₦45.2M"
                : idx === 1
                ? "125,430"
                : "50,000"}
            </h3>
            <div className="flex items-center text-sm text-[#0a9b21] mt-1">
              <FaArrowUp className="mr-1" />
              <span>1.5%</span>
              <span className="text-[#6e6e6e] ml-2">vs last Month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart + System Health */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-sm">
          <h4 className="font-semibold mb-2">Running Year</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="name" stroke="#6e6e6e" />
                <YAxis
                  stroke="#6e6e6e"
                  tickFormatter={(value) =>
                    value >= 1_000_000
                      ? `₦${(value / 1_000_000).toFixed(1)}M`
                      : value >= 1_000
                      ? `₦${(value / 1_000).toFixed(0)}K`
                      : `₦${value}`
                  }
                />
                <Tooltip
                  formatter={(value) =>
                    value >= 1_000_000
                      ? `₦${(value / 1_000_000).toFixed(1)}M`
                      : value >= 1_000
                      ? `₦${(value / 1_000).toFixed(0)}K`
                      : `₦${value}`
                  }
                />
                <Bar
                  dataKey="revenue"
                  fill="#0a9b21"
                  radius={[4, 4, 0, 0]}
                  barSize={11}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-sm">
          <h4 className="font-semibold mb-4">System health</h4>
          <div className="space-y-2 text-sm">
            {[
              {
                name: "API Services",
                uptime: "100%",
                status: "Operational",
                color: "text-green-600",
              },
              {
                name: "Database",
                uptime: "99.9%",
                status: "Operational",
                color: "text-green-600",
              },
              {
                name: "Payment Gateway",
                uptime: "92.5%",
                status: "Operational",
                color: "text-yellow-500",
              },
              {
                name: "Database",
                uptime: "87.5%",
                status: "Operational",
                color: "text-red-600",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#004324] text-[17px] leading-7">
                    {item.name}
                  </div>
                  <span className="text-gray-500">{item.uptime} Uptime</span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border ${item.color} border-current`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-sm font-medium mb-1">Overall System Health</p>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "91%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-sm">
          <h4 className="font-semibold mb-4">Top selling product categories</h4>
          {[
            { name: "Electronics", width: "80%" },
            { name: "Clothing", width: "100%" },
            { name: "Food", width: "95%" },
            { name: "Others", width: "70%" },
          ].map((cat, idx) => (
            <div key={idx} className="mb-3">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{cat.name}</span>
                <span>{cat.width}</span>
              </div>
              <div className="w-full bg-green-100 h-3 rounded">
                <div
                  className="bg-green-700 h-3 rounded"
                  style={{ width: cat.width }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-sm">
          <h4 className="font-semibold mb-4">Order Status</h4>
          <div className="flex items-center justify-between">
            <div className="text-sm space-y-2">
              {pieData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 leading-7">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span className="font-medium text-[#004324]">
                    {item.name}
                  </span>
                  <span className="text-gray-500">{item.value}%</span>
                </div>
              ))}
            </div>
            <div className="h-40 w-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
