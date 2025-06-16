import { useState } from "react";
import { FaArrowUp, FaChevronDown } from "react-icons/fa";
import OverviewTab from "../pages/financialManagement/OverviewTab";
import TransactionsTab from "../pages/financialManagement/TransactionsTab";

const FinancialManagement = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("This Month");

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setShowMonthDropdown(false);
  };

  return (
    <div className="space-y-6 px-4 sm:px-6">
      {/* Main Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">
          Financial Management
        </h2>
        <div className="flex gap-3 items-center">
          {/* This Month Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowMonthDropdown(!showMonthDropdown)}
              className="flex items-center justify-between px-3 py-2 text-sm border border-gray-400 rounded-md text-gray-700 bg-white min-w-[120px]"
            >
              {selectedMonth}
              <FaChevronDown className="ml-2 text-gray-500" />
            </button>
            {showMonthDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1">
                {[
                  "This Month",
                  "Last Month",
                  "Last 3 Months",
                  "Last 6 Months",
                  "Last Year",
                ].map((month) => (
                  <button
                    key={month}
                    onClick={() => handleMonthSelect(month)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="bg-green-900 font-semibold text-white px-4 py-2 rounded-md text-sm">
            Export
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">
            Revenue
          </p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">
            ₦66,500
          </h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span>↑ 1,250 vs last Month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">
            Expenses
          </p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">
            ₦18.7M
          </h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span>↑ 8.5% vs last Month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">
            Net Profit
          </p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">
            ₦26.5M
          </h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span>↑ 1.5% vs last Month</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-2 text-sm font-medium relative ${
              activeTab === "overview"
                ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("transactions")}
            className={`px-3 py-2 text-sm font-medium relative ${
              activeTab === "transactions"
                ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Transactions
          </button>
        </div>

        {/* Conditional rendering of tab content */}
        <div className="mt-4">
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "transactions" && <TransactionsTab />}
        </div>
      </div>
    </div>
  );
};

export default FinancialManagement;
