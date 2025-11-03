import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useDashboardData } from "../datahooks/useDashboardData"; // 1. Import your new hook

// --- Helper Components ---

// Stat Card
const StatCard = ({ title, value, change, changeType }) => {
  const isPositive = changeType === "positive";
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <h3
        className={`text-3xl font-bold mb-3 ${
          !isPositive ? "text-red-600" : "text-gray-900"
        }`}
      >
        {value}
      </h3>
      <div
        className={`flex items-center text-xs ${
          !isPositive ? "text-red-600" : "text-green-600"
        }`}
      >
        {isPositive ? (
          <FaArrowUp size={12} className="mr-1" />
        ) : (
          <FaArrowDown size={12} className="mr-1" />
        )}
        <span>{change}</span>
        <span className="text-gray-500 ml-1">vs last Month</span>
      </div>
    </div>
  );
};

// Table Status Label
const StatusLabel = ({ status }) => {
  const statusColor =
    status === "Successful"
      ? "text-green-700 bg-green-100"
      : "text-red-700 bg-red-100";
  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${statusColor}`}
    >
      {status}
    </span>
  );
};

// --- Mock Data for Table (until API is ready) ---
const recentSettlementsData = [
  { id: "5321", merchant: "Abraham Lincoln", amount: "₦20,000", status: "Successful", orders: 15, date: "12/09/2024" },
  { id: "5322", merchant: "Abraham Lincoln", amount: "₦20,000", status: "Failed", orders: 15, date: "12/09/2024" },
  { id: "5323", merchant: "Abraham Lincoln", amount: "₦20,000", status: "Failed", orders: 15, date: "12/09/2024" },
  { id: "5324", merchant: "Abraham Lincoln", amount: "₦20,000", status: "Successful", orders: 15, date: "12/09/2024" },
]; //

// --- Pie Chart Colors ---
const FAILED_ORDER_COLORS = ["#16a34a", "#004324", "#86efac"]; //

// --- Main Dashboard Component ---
export default function Dashboard() {
  // 2. Call the hook to get data
  const { stats, trends, failedOrders, loading, error } = useDashboardData();

  // 3. Handle Loading and Error states
  if (loading) {
    return <div className="p-6">Loading dashboard data...</div>;
  }
  if (error) {
    return <div className="p-6 text-red-600">Error: {error}</div>;
  }

  // 4. Render the UI with data
  return (
    <div className="space-y-6">
      {/* 1. Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Dashboard Overview
        </h2>
        <p className="text-sm text-gray-500">
          Here's an overview of your Global system
        </p>
      </div>

      {/* 2. Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* We use 'orders' and 'settlements' from the processed stats object */}
        <StatCard
          title="This Week Orders"
          value={stats?.orders?.value || "0"}
          change="+1.5%" // Note: API doesn't provide change% yet
          changeType="positive"
        />
        <StatCard
          title="This Week Settlements"
          value={stats?.settlements?.value || "0"}
          change="+1.5%" // Note: API doesn't provide change% yet
          changeType="positive"
        />
        <StatCard
          title="Active Merchants"
          value={stats?.merchants?.value || "0"}
          change="+1.5%" // Note: API doesn't provide change% yet
          changeType="positive"
        />
        <StatCard
          title="Failed Orders This Week"
          value={stats?.failed_orders?.value || "0"}
          change="-2.3%" // Note: API doesn't provide change% yet
          changeType="negative"
        />
      </div>

      {/* 3. Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orders Trend (Line Chart) */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-semibold text-gray-800 mb-1">Orders Trend</h4>
          <p className="text-xs text-gray-400 mb-4">January - Dec 2025</p>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={trends}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} style={{ fontSize: '12px' }} />
                <YAxis axisLine={false} tickLine={false} style={{ fontSize: '12px' }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value" // 'value' from GET /dashboard/trends
                  stroke="#16a34a"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            <span className="font-semibold text-green-600">Trending up by 5.2% this month ↗</span>
          </p>
        </div>

        {/* Failed Orders (Pie Chart) */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h4 className="font-semibold text-gray-800 mb-1">Failed Orders</h4>
          <p className="text-xs text-gray-400 mb-4">January - Dec 2025</p>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div style={{ width: 200, height: 200 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={failedOrders}
                    dataKey="value" // 'value' from GET /dashboard/failed-orders
                    nameKey="reason" // 'reason' from GET /dashboard/failed-orders
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                  >
                    {failedOrders.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={FAILED_ORDER_COLORS[index % FAILED_ORDER_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
              {failedOrders.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: FAILED_ORDER_COLORS[index % FAILED_ORDER_COLORS.length] }}
                  ></div>
                  <span className="text-sm font-medium text-gray-700">
                    {entry.reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Recent Settlements Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h4 className="font-semibold text-gray-800 mb-4">
          Recent Settlements
        </h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {/* ... table headers ... */}
                <th className="px-4 py-3 text-left">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Payout ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Merchant Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount Paid
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  No. Of Orders
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentSettlementsData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {item.id}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {item.merchant}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {item.amount}
                  </td>
                  <td className="px-4 py-4">
                    <StatusLabel status={item.status} />
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {item.orders}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}