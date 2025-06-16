import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowUp,
  FaChevronDown,
} from "react-icons/fa";
import { CalendarDays, Search } from "lucide-react";

const SupportTicket = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  // Dummy Data for Tickets
  const allTickets = [
    {
      id: "TKT-001",
      subject: "Login Issue",
      date: "2023-04-15",
      customer: "John Doe",
      status: "Open",
      priority: "High",
      assignee: "Alice",
    },
    {
      id: "TKT-002",
      subject: "Payment Error",
      date: "2023-04-14",
      customer: "Jane Smith",
      status: "In Progress",
      priority: "Critical",
      assignee: "Bob",
    },
    {
      id: "TKT-003",
      subject: "Product Inquiry",
      date: "2023-04-13",
      customer: "Robert Johnson",
      status: "Resolved",
      priority: "Low",
      assignee: "Charlie",
    },
    {
      id: "TKT-004",
      subject: "Account Deactivation",
      date: "2023-04-12",
      customer: "Emily Davis",
      status: "Open",
      priority: "Medium",
      assignee: "Alice",
    },
    {
      id: "TKT-005",
      subject: "Refund Request",
      date: "2023-04-11",
      customer: "Michael Wilson",
      status: "In Progress",
      priority: "High",
      assignee: "Bob",
    },
    {
      id: "TKT-006",
      subject: "Feature Request",
      date: "2023-04-10",
      customer: "Sarah Brown",
      status: "Resolved",
      priority: "Low",
      assignee: "Charlie",
    },
    {
      id: "TKT-007",
      subject: "Order Tracking",
      date: "2023-04-09",
      customer: "David Lee",
      status: "Open",
      priority: "Medium",
      assignee: "Alice",
    },
    {
      id: "TKT-008",
      subject: "Technical Glitch",
      date: "2023-04-08",
      customer: "Jennifer Taylor",
      status: "In Progress",
      priority: "Critical",
      assignee: "Bob",
    },
  ];

  const filteredTickets = allTickets.filter((ticket) => {
    const matchesTab =
      activeTab === "all" ||
      ticket.status.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch =
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.assignee.toLowerCase().includes(searchTerm.toLowerCase()); // Include assignee in search
    const matchesStatusDropdown =
      statusFilter === "All Status" ||
      ticket.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesDate = selectedDate
      ? new Date(ticket.date).toLocaleDateString() ===
        new Date(selectedDate).toLocaleDateString()
      : true;

    return matchesTab && matchesSearch && matchesStatusDropdown && matchesDate;
  });

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = filteredTickets.slice(
    indexOfFirstTicket,
    indexOfLastTicket
  );
  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "open":
        return "bg-green-100 text-green-800";
      case "in progress":
        return "bg-blue-100 text-blue-800";
      case "resolved":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "critical":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6 px-4 sm:px-6">
      {/* Header and Buttons */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">
          Support & Tickets
        </h2>
        <div className="flex gap-3">
          <button className="bg-green-900 font-semibold text-white px-4 py-2 rounded-md text-sm">
            Export
          </button>
          <button className="border border-green-900 font-semibold text-green-900 px-4 py-2 rounded-md text-sm">
            New Ticket
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6">
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">
            Open Tickets
          </p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">
            350
          </h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span>↑ 10% vs last month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">
            Resolved Today
          </p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">
            25
          </h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span>↑ 12.7% vs last month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">
            Avg. Response Time
          </p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">
            2h 15m
          </h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span>↓ 8.3% vs last month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">
            Customer Satisfaction
          </p>
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a9b21] mb-4">
            92%
          </h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span>↑ 5.2% vs last month</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* Tab Navigation (All, Open, In Progress, Resolved) */}
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {[
            { id: "all", name: "All" },
            { id: "open", name: "Open" },
            { id: "in progress", name: "In Progress" },
            { id: "resolved", name: "Resolved" },
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

        {/* Search, Status Dropdown, and Date Picker */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full py-4 gap-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search Order..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-6 pr-3 py-2 text-xs border border-gray-400 rounded-2xl outline-none"
            />
            <Search
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={15}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Status Dropdown */}
            <div className="relative w-full sm:w-27">
              <button
                onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                className="flex items-center justify-between pl-2 pr-10 py-2 text-sm border border-gray-400 rounded-lg text-gray-700 w-full"
              >
                {statusFilter}
                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </button>
              {showStatusDropdown && (
                <div className="absolute z-10 mt-1 w-full sm:w-40 bg-white shadow-lg rounded-md py-1">
                  {["All Status", "Open", "In Progress", "Resolved"].map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setStatusFilter(status);
                          setShowStatusDropdown(false);
                        }}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {status}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Date Picker */}
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

      {/* Tickets List Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ticket ID
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>{" "}
              {/* New column header */}
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assignee
              </th>{" "}
              {/* New column header */}
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentTickets.length > 0 ? (
              currentTickets.map((ticket, index) => (
                <tr key={`${ticket.id}-${index}`}>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {ticket.id}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {ticket.subject}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {new Date(ticket.date).toLocaleDateString()}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {ticket.customer}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor(
                        ticket.status
                      )}`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${getPriorityColor(
                        ticket.priority
                      )}`}
                    >
                      {ticket.priority}
                    </span>
                  </td>{" "}
                  {/* New column data */}
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {ticket.assignee}
                  </td>{" "}
                  {/* New column data */}
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
                  No tickets found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        {filteredTickets.length > 0 && (
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
    </div>
  );
};

export default SupportTicket;
