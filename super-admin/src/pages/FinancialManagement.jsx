import React, { useState } from "react";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaTrash,
  FaArrowUp,
  FaChevronDown,
} from "react-icons/fa";
import { Calendar } from "lucide-react";

const FinancialManagement = () => {
  const [activeTab, setActiveTab] = useState("transactions");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  return (
    <div className="space-y-6 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">Financial Management</h2>
        <div className="flex gap-3">
          <button className="bg-green-900 font-semibold text-white px-4 py-2 rounded-md text-sm">
            Export
          </button>
          <button className="border border-green-900 font-semibold text-green-900 px-4 py-2 rounded-md text-sm">
            Add Transaction
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Monthly Revenue</p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">₦45.2M</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span>↑ 10% from last month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Commission Earned</p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">₦6.8M</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span>↑ 12.7% vs last month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Active Merchants</p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">1,245</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span>↑ 8.3% from last month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Avg Order Value</p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">₦24,500</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span>↑ 5.2% from last month</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {["transactions", "payouts"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm font-medium relative ${activeTab === tab
                ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "payouts" ? "Payouts & Invoices" : "Transactions"}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full py-4 gap-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 text-sm border border-gray-400 rounded-full outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-40">
              <button
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                className="flex items-center justify-between pl-3 pr-10 py-2 text-sm border border-gray-400 rounded-lg text-gray-700 w-full"
              >
                {statusFilter === "all" ? "All status" : statusFilter}
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </button>
              {showStatusDropdown && (
                <div className="absolute z-10 mt-1 w-full sm:w-40 bg-white shadow-lg rounded-md py-1">
                  {["all", "completed", "pending", "processing", "failed"].map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setStatusFilter(status);
                          setShowStatusDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {status === "all" ? "All status" : status}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            <div className="relative w-full sm:w-40">
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="datePicker"
              />
              <div
                className="pl-10 pr-3 py-2 text-sm border border-gray-400 rounded-lg text-green-600 cursor-pointer flex items-center"
                onClick={() => document.getElementById("datePicker").showPicker()}
              >
                {selectedDate || "Select Date"}
              </div>
              <Calendar
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 cursor-pointer"
                onClick={() => document.getElementById("datePicker").showPicker()}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <TransactionListTable
          searchTerm={searchTerm}
          selectedDate={selectedDate}
          statusFilter={statusFilter}
          tabFilter={activeTab}
          selectedTransactions={selectedTransactions}
          setSelectedTransactions={setSelectedTransactions}
        />
      </div>
    </div>
  );
};

const TransactionListTable = ({
  searchTerm,
  selectedDate,
  statusFilter,
  tabFilter,
  selectedTransactions,
  setSelectedTransactions,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  const allTransactions = [
    {
      id: "T1TX-C01",
      type: "Payment",
      merchant: "Tech Store",
      amount: "₦249,999",
      date: "2023-04-15",
      status: "completed",
      payment: "credit card",
    },
    {
      id: "T1TX-C02",
      type: "Payout",
      merchant: "Fashion Hub",
      amount: "₦129,500",
      date: "2023-04-15",
      status: "completed",
      payment: "bank transfer",
    },
    {
      id: "T1TX-C03",
      type: "Processing",
      merchant: "Grocery Mart",
      amount: "₦78,250",
      date: "2023-04-15",
      status: "processing",
      payment: "pending",
    },
    {
      id: "T1TX-C04",
      type: "Payment",
      merchant: "Electronics World",
      amount: "₦899,990",
      date: "2023-04-15",
      status: "completed",
      payment: "credit card",
    },
    {
      id: "T1TX-C05",
      type: "Payment",
      merchant: "Sports Gear",
      amount: "₦199,950",
      date: "2023-04-15",
      status: "completed",
      payment: "paypal",
    },
    {
      id: "T1TX-C06",
      type: "Refund",
      merchant: "Home Decor",
      amount: "₦349,500",
      date: "2023-04-15",
      status: "completed",
      payment: "credit card",
    },
    {
      id: "T1TX-C07",
      type: "Payment",
      merchant: "Home Decor",
      amount: "₦349,500",
      date: "2023-04-15",
      status: "failed",
      payment: "paypal",
    },
    {
      id: "T1TX-C08",
      type: "Payment",
      merchant: "Home Decor",
      amount: "₦349,500",
      date: "2023-04-15",
      status: "pending",
      payment: "bank transfer",
    },
  ];

  const filteredTransactions = allTransactions.filter((transaction) => {
    const matchesTab =
      tabFilter === "transactions" ||
      (tabFilter === "payouts" && transaction.type === "Payout");
    const matchesStatus =
      statusFilter === "all" || transaction.status === statusFilter;
    const matchesSearch =
      transaction.merchant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate
      ? new Date(transaction.date).toLocaleDateString() ===
        new Date(selectedDate).toLocaleDateString()
      : true;
    return matchesTab && matchesStatus && matchesSearch && matchesDate;
  });

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );
  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedTransactions(currentTransactions.map((tx) => tx.id));
    } else {
      setSelectedTransactions([]);
    }
  };

  const handleSelectTransaction = (transactionId) => {
    setSelectedTransactions((prev) =>
      prev.includes(transactionId)
        ? prev.filter((id) => id !== transactionId)
        : [...prev, transactionId]
    );
  };

  const statusColors = {
    completed: "bg-green-100 text-green-800",
    processing: "bg-blue-100 text-blue-800",
    pending: "bg-yellow-100 text-yellow-800",
    failed: "bg-red-100 text-red-800",
    default: "bg-gray-100 text-gray-800",
  };

  const paymentColors = {
    "credit card": "bg-purple-100 text-purple-800",
    paypal: "bg-blue-100 text-blue-800",
    "bank transfer": "bg-green-100 text-green-800",
    pending: "bg-gray-100 text-gray-800",
    default: "bg-gray-100 text-gray-800",
  };

  const getStatusColor = (status) => statusColors[status] || statusColors["default"];
  const getPaymentColor = (payment) => paymentColors[payment.toLowerCase()] || paymentColors["default"];

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={
                  selectedTransactions.length > 0 &&
                  selectedTransactions.length === currentTransactions.length
                }
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Transac_ID
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Merchant
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Payment
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentTransactions.length > 0 ? (
            currentTransactions.map((transaction, index) => (
              <tr key={`${transaction.id}-${index}`}>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedTransactions.includes(transaction.id)}
                    onChange={() => handleSelectTransaction(transaction.id)}
                    className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {transaction.id}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {transaction.type}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {transaction.merchant}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {transaction.amount}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {new Date(transaction.date).toLocaleDateString()}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor(
                      transaction.status
                    )}`}
                  >
                    {transaction.status.charAt(0).toUpperCase() +
                      transaction.status.slice(1)}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${getPaymentColor(
                      transaction.payment
                    )}`}
                  >
                    {transaction.payment.charAt(0).toUpperCase() +
                      transaction.payment.slice(1)}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">
                    <FaEdit className="inline mr-1" /> Edit
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <FaTrash className="inline mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="9"
                className="px-2 sm:px-4 py-4 text-center text-sm text-gray-500"
              >
                No transactions found matching your criteria
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {filteredTransactions.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 py-4 border-t border-gray-200">
          <div className="text-sm text-gray-700 mb-2 sm:mb-0">
            Showing <span className="font-medium">{indexOfFirstTransaction + 1}</span>{" "}
            to <span className="font-medium">
              {Math.min(indexOfLastTransaction, filteredTransactions.length)}
            </span>{" "}
            of <span className="font-medium">{filteredTransactions.length}</span>{" "}
            transactions
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 border rounded-md flex items-center text-sm ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <FaChevronLeft className="mr-1" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 border rounded-md text-sm ${
                    currentPage === number
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {number}
                </button>
              )
            )}
            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 border rounded-md flex items-center text-sm ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <FaChevronRight className="ml-1" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FinancialManagement;