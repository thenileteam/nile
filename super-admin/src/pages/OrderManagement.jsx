import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaTrash,
  FaArrowUp,
  FaChevronDown,
} from "react-icons/fa";
import {Search, CalendarDays } from "lucide-react";

const OrderManagement = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  return (
    <div className="space-y-6 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">Order Management</h2>
        <div className="flex gap-3">
          <button className="bg-green-900 font-semibold text-white px-4 py-2 rounded-md text-sm">
            Export
          </button>
          <button className="border border-green-900 font-semibold text-green-900 px-4 py-2 rounded-md text-sm">
            Add Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">All Orders</p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">2,345</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span>+186 from last month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Pending Orders</p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">128</h3>
          <div className="flex items-center text-sm text-[#6e6e6e]">
            <span>19% of total</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Completed Orders</p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">1,892</h3>
          <div className="flex items-center text-sm text-[#6e6e6e]">
            <span>80.7% completion rate</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Fulfillment Rate</p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">94.2%</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span>2.1% from last month</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {["orders", "purchaseOrders", "returnsRefunds", "shipping"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm font-medium relative ${activeTab === tab
                ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "purchaseOrders" ? "Purchase Orders" : tab === "returnsRefunds" ? "Returns & Refunds" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

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
            <div className="relative w-full sm:w-29">
              <button
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                className="flex items-center justify-between pl-3 pr-10 py-2 text-sm border border-gray-400 rounded-lg text-gray-700 w-full"
              >
                {statusFilter === "all" ? "All status" : statusFilter}
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </button>
              {showStatusDropdown && (
                <div className="absolute z-10 mt-1 w-full sm:w-40 bg-white shadow-lg rounded-md py-1">
                  {["all", "completed", "pending", "processing"].map(
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
      </div>

      <div className="overflow-x-auto">
        <OrderListTable
          searchTerm={searchTerm}
          selectedDate={selectedDate}
          statusFilter={statusFilter}
          tabFilter={activeTab}
          selectedOrders={selectedOrders}
          setSelectedOrders={setSelectedOrders}
        />
      </div>
    </div>
  );
};

const OrderListTable = ({
  searchTerm,
  selectedDate,
  statusFilter,
  tabFilter,
  selectedOrders,
  setSelectedOrders,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const allOrders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      date: "2023-04-18",
      total: "₦249,999",
      status: "completed",
      payment: "credit card",
      type: "order",
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      date: "2023-04-18",
      total: "₦129,500",
      status: "pending",
      payment: "paypal",
      type: "order",
    },
    {
      id: "ORD-003",
      customer: "Robert Johnson",
      date: "2023-04-18",
      total: "₦75,250",
      status: "processing",
      payment: "bank transfer",
      type: "purchase",
    },
    {
      id: "ORD-004",
      customer: "Emily Davis",
      date: "2023-04-18",
      total: "₦899,990",
      status: "completed",
      payment: "credit card",
      type: "order",
    },
    {
      id: "ORD-005",
      customer: "Michael Wilson",
      date: "2023-04-18",
      total: "₦799,950",
      status: "completed",
      payment: "paypal",
      type: "return",
    },
    {
      id: "ORD-006",
      customer: "Sarah Brown",
      date: "2023-04-18",
      total: "₦349,500",
      status: "processing",
      payment: "bank transfer",
      type: "shipping",
    },
    {
      id: "ORD-007",
      customer: "David Lee",
      date: "2023-04-18",
      total: "₦199,750",
      status: "pending",
      payment: "credit card",
      type: "order",
    },
    {
      id: "ORD-008",
      customer: "Jennifer Taylor",
      date: "2023-04-18",
      total: "₦549,300",
      status: "completed",
      payment: "paypal",
      type: "purchase",
    },
  ];

  const filteredOrders = allOrders.filter((order) => {
    const matchesTab =
      (tabFilter === "orders" && order.type === "order") ||
      (tabFilter === "purchaseOrders" && order.type === "purchase") ||
      (tabFilter === "returnsRefunds" && order.type === "return") ||
      (tabFilter === "shipping" && order.type === "shipping");
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate
      ? new Date(order.date).toLocaleDateString() ===
        new Date(selectedDate).toLocaleDateString()
      : true;
    return matchesTab && matchesStatus && matchesSearch && matchesDate;
  });

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedOrders(currentOrders.map((order) => order.id));
    } else {
      setSelectedOrders([]);
    }
  };

  const handleSelectOrder = (orderId) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const statusColors = {
    completed: "bg-green-100 text-green-800",
    processing: "bg-blue-100 text-blue-800",
    pending: "bg-yellow-100 text-yellow-800",
    default: "bg-gray-100 text-gray-800",
  };

  const paymentColors = {
    "credit card": "bg-purple-100 text-purple-800",
    paypal: "bg-blue-100 text-blue-800",
    "bank transfer": "bg-green-100 text-green-800",
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
                  selectedOrders.length > 0 &&
                  selectedOrders.length === currentOrders.length
                }
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Order ID
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total
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
          {currentOrders.length > 0 ? (
            currentOrders.map((order, index) => (
              <tr key={`${order.id}-${index}`}>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => handleSelectOrder(order.id)}
                    className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {order.id}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.customer}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {order.total}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${getPaymentColor(
                      order.payment
                    )}`}
                  >
                    {order.payment.charAt(0).toUpperCase() +
                      order.payment.slice(1)}
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
                colSpan="8"
                className="px-2 sm:px-4 py-4 text-center text-sm text-gray-500"
              >
                No orders found matching your criteria
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {filteredOrders.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 py-4 border-t border-gray-200">
          <div className="text-sm text-gray-700 mb-2 sm:mb-0">
            Showing <span className="font-medium">{indexOfFirstOrder + 1}</span>{" "}
            to <span className="font-medium">
              {Math.min(indexOfLastOrder, filteredOrders.length)}
            </span>{" "}
            of <span className="font-medium">{filteredOrders.length}</span>{" "}
            orders
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

export default OrderManagement;