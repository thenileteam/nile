import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaTrash,
  FaChevronDown,
} from "react-icons/fa";
import { CalendarDays, Search } from "lucide-react";

const TransactionsTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  const allTransactions = [
    {
      id: "TRX-001",
      type: "Payment",
      merchant: "Tech Store",
      amount: "₦249,999",
      date: "2023-04-15",
      status: "completed",
      payment: "Credit Card",
    },
    {
      id: "TRX-001",
      type: "Payout",
      merchant: "Fashion Hub",
      amount: "₦129,500",
      date: "2023-04-15",
      status: "pending",
      payment: "PayPal",
    },
    {
      id: "TRX-001",
      type: "Processing",
      merchant: "Grocery Mart",
      amount: "₦75,250",
      date: "2023-04-15",
      status: "completed",
      payment: "Bank Transfer",
    },
    {
      id: "TRX-001",
      type: "Payment",
      merchant: "Electronics World",
      amount: "₦899,990",
      date: "2023-04-15",
      status: "completed",
      payment: "Credit Card",
    },
    {
      id: "TRX-001",
      type: "Payment",
      merchant: "Sports Gear",
      amount: "₦199,950",
      date: "2023-04-15",
      status: "failed",
      payment: "PayPal",
    },
    {
      id: "TRX-001",
      type: "Refund",
      merchant: "Home Decor",
      amount: "₦349,500",
      date: "2023-04-15",
      status: "refunded",
      payment: "Bank Transfer",
    },
    {
      id: "TRX-001",
      type: "Payment",
      merchant: "Home Decor",
      amount: "₦349,500",
      date: "2023-04-15",
      status: "completed",
      payment: "Credit Card",
    },
    {
      id: "TRX-001",
      type: "Payment",
      merchant: "Home Decor",
      amount: "₦349,500",
      date: "2023-04-15",
      status: "completed",
      payment: "Credit Card",
    },
    {
      id: "TRX-001",
      type: "Payment",
      merchant: "Home Decor",
      amount: "₦349,500",
      date: "2023-04-15",
      status: "completed",
      payment: "Credit Card",
    },
  ];

  const filteredTransactions = allTransactions.filter((transaction) => {
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
    return matchesStatus && matchesSearch && matchesDate;
  });

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );
  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  );

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
    pending: "bg-orange-100 text-orange-800",
    failed: "bg-red-100 text-red-800",
    refunded: "bg-blue-100 text-blue-800", 
    default: "bg-gray-100 text-gray-800",
  };

  // Type colors (for "Payment", "Payout", "Processing", "Refund") 
  const typeColors = {
    payment: "bg-green-100 text-green-800",
    payout: "bg-purple-100 text-purple-800",
    processing: "bg-blue-100 text-blue-800",
    refund: "bg-gray-100 text-gray-800", 
    default: "bg-gray-100 text-gray-800",
  };

  const getStatusColor = (status) =>
    statusColors[status.toLowerCase()] || statusColors["default"];
  const getTypeColor = (type) =>
    typeColors[type.toLowerCase()] || typeColors["default"];

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full py-4 gap-4">
       <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search Order..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-6 pr-3 py-2 text-xs border border-gray-400 rounded-2xl outline-none"
          />
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" size={15} />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-30">
            <button
              onClick={() => setShowStatusDropdown(!showStatusDropdown)}
               className="flex items-center justify-between pl-2 pr-10 py-2 text-sm border border-gray-400 rounded-lg text-gray-700 w-full"
            >
              {statusFilter === "all"
                ? "All Status"
                : statusFilter.charAt(0).toUpperCase() +
                  statusFilter.slice(1)}{" "}
              {/* Capitalize filter text */}
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </button>
            {showStatusDropdown && (
              <div className="absolute z-10 mt-1 w-full sm:w-40 bg-white shadow-lg rounded-md py-1">
                {[
                  "all",
                  "completed",
                  "pending",
                  "processing",
                  "failed",
                  "refunded",
                ].map(
                  (status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setStatusFilter(status);
                        setShowStatusDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {status === "all"
                        ? "All Status"
                        : status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          <div className="relative w-full sm:w-31">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              id="datePickerTransactions"
            />
            <div
              className="pl-8 pr-3 py-2 text-sm border border-gray-400 rounded-lg text-green-600 cursor-pointer flex items-center"
              onClick={() =>
                document.getElementById("datePickerTransactions").showPicker()
              }
            >
              {selectedDate || "Select Date"}
            </div>
            <CalendarDays
              size={18}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-green-600 cursor-pointer"
              onClick={() =>
                document.getElementById("datePickerTransactions").showPicker()
              }
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
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
                Transac. ID
              </th>{" "}
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
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${getTypeColor(
                        transaction.type
                      )}`}
                    >
                      {transaction.type}
                    </span>
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
                      className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor(
                        // Reusing getStatusColor, but could be getPaymentColor
                        transaction.payment.toLowerCase()
                      )}`}
                    >
                      {transaction.payment.charAt(0).toUpperCase() +
                        transaction.payment.slice(1)}
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-500 hover:text-gray-700">
                      <span className="font-bold text-lg">...</span>
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
          <div className="flex flex-col sm:flex-row items-center justify-end px-2 sm:px-4 py-4 border-t border-gray-200">
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
      </div>
    </>
  );
};

export default TransactionsTab;
