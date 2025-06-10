import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const FinancialOverview = () => {
  // Financial metrics data - matching your design exactly
  const financialMetrics = [
    { 
      title: "Revenue", 
      amount: "₦66,500", 
      change: "↑ 1,250 vs last Month",
      changeType: "positive"
    },
    { 
      title: "Expenses", 
      amount: "₦18.7M", 
      change: "↑ 8.5% vs last Month",
      changeType: "negative"
    },
    { 
      title: "Net Profit", 
      amount: "₦26.5M", 
      change: "↑ 1.5% vs last Month",
      changeType: "positive"
    }
  ];

  // Chart data - matching your design
  const revenueData = [
    { name: "Electronics", value: 18.1, color: "#8884d8" },
    { name: "Fashion", value: 11.3, color: "#83a6ed" },
    { name: "Home", value: 9.0, color: "#8dd1e1" },
    { name: "Others", value: 6.5, color: "#82ca9d" }
  ];

  const expenseData = [
    { name: "Operations", value: 18.1, color: "#ff8042" },
    { name: "Marketing", value: 11.3, color: "#ffbb28" },
    { name: "Salaries", value: 9.0, color: "#00c49f" },
    { name: "Others", value: 6.5, color: "#0088fe" }
  ];

  return (
    <div className="space-y-8">
      {/* Financial Metrics - matches your design */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {financialMetrics.map((metric, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md border border-gray-100">
            <p className="text-sm text-gray-500 mb-2">{metric.title}</p>
            <h3 className="text-xl font-bold mb-2">{metric.amount}</h3>
            <div className={`flex items-center text-xs ${
              metric.changeType === "positive" ? "text-green-600" : "text-red-600"
            }`}>
              <FaArrowUp className="mr-1" />
              <span>{metric.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section - matches your design */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Breakdown */}
        <div className="bg-white p-4 rounded-md shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Revenue Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`₦${value}M`, "Amount"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            {revenueData.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-xs text-gray-500">{item.name}</p>
                <p className="text-sm font-semibold">₦{item.value}M</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expense Breakdown */}
        <div className="bg-white p-4 rounded-md shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Expense Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={expenseData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`₦${value}M`, "Amount"]} />
                <Bar dataKey="value">
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
            {expenseData.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-xs text-gray-500">{item.name}</p>
                <p className="text-sm font-semibold">₦{item.value}M</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialOverview;