import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaChevronLeft, FaChevronRight, FaEdit, FaTrash } from "react-icons/fa";
import { Calendar } from "lucide-react";

const SupportTickets = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");

  // Stats data
  const stats = [
    { title: "Open Tickets", value: "42", change: "10% vs. Yesterday" },
    { title: "Resolved Today", value: "18", change: "10% vs. Yesterday" },
    { title: "Avg. Response Time", value: "2.4h", change: "10% vs. Yesterday" },
    { title: "Customer Satisfaction", value: "94%", change: "12.7% vs. last month" }
  ];

  // Ticket data with additional fields
  const allTickets = [
    { 
      id: "TKT-O01", 
      subject: "Payment not processing", 
      date: "2023-04-15", 
      customer: "John Doe", 
      status: "Open",
      priority: "High",
      assignee: "Support Team 1"
    },
    { 
      id: "TKT-O02", 
      subject: "How to reset my password?", 
      date: "2023-04-15", 
      customer: "John Doe", 
      status: "In Progress",
      priority: "Medium",
      assignee: "Support Team 2"
    },
    { 
      id: "TKT-O03", 
      subject: "Product not delivered", 
      date: "2023-04-15", 
      customer: "John Doe", 
      status: "Open",
      priority: "High",
      assignee: "Support Team 1"
    },
    { 
      id: "TKT-O04", 
      subject: "Refund request", 
      date: "2023-04-15", 
      customer: "John Doe", 
      status: "Resolved",
      priority: "Low",
      assignee: "Support Team 3"
    },
    { 
      id: "TKT-O05", 
      subject: "Product not delivered", 
      date: "2023-04-15", 
      customer: "John Doe", 
      status: "Open",
      priority: "Medium",
      assignee: "Support Team 2"
    },
    { 
      id: "TKT-O06", 
      subject: "Product not delivered", 
      date: "2023-04-15", 
      customer: "John Doe", 
      status: "In Progress",
      priority: "High",
      assignee: "Support Team 1"
    },
    { 
      id: "TKT-O07", 
      subject: "Product not delivered", 
      date: "2023-04-15", 
      customer: "John Doe", 
      status: "Open",
      priority: "Low",
      assignee: "Support Team 3"
    },
    { 
      id: "TKT-O08", 
      subject: "Product not delivered", 
      date: "2023-04-15", 
      customer: "John Doe", 
      status: "Resolved",
      priority: "Medium",
      assignee: "Support Team 2"
    }
  ];

  // Filter tickets based on search, date, and status
  const filteredTickets = allTickets.filter(ticket => {
    const matchesStatus = statusFilter === "all" || ticket.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesSearch = 
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate 
      ? new Date(ticket.date).toLocaleDateString() === new Date(selectedDate).toLocaleDateString()
      : true;
    return matchesStatus && matchesSearch && matchesDate;
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = filteredTickets.slice(indexOfFirstTicket, indexOfLastTicket);
  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle ticket selection
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedTickets(currentTickets.map(ticket => ticket.id));
    } else {
      setSelectedTickets([]);
    }
  };

  const handleSelectTicket = (ticketId) => {
    setSelectedTickets(prev =>
      prev.includes(ticketId)
        ? prev.filter(id => id !== ticketId)
        : [...prev, ticketId]
    );
  };

  // Status colors
  const statusColors = {
    Open: "bg-yellow-100 text-yellow-800",
    "In Progress": "bg-blue-100 text-blue-800",
    Resolved: "bg-green-100 text-green-800",
    default: "bg-gray-100 text-gray-800"
  };

  // Priority colors
  const priorityColors = {
    High: "bg-red-100 text-red-800",
    Medium: "bg-orange-100 text-orange-800",
    Low: "bg-green-100 text-green-800",
    default: "bg-gray-100 text-gray-800"
  };

  const getStatusColor = (status) => statusColors[status] || statusColors["default"];
  const getPriorityColor = (priority) => priorityColors[priority] || priorityColors["default"];

  return (
    <div className="space-y-6 px-4 sm:px-6">
      <h2 className="text-xl font-bold text-gray-800">Support & Tickets</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#f4f4f0] p-4 rounded-md shadow-sm">
            <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">{stat.title}</p>
            <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-4">{stat.value}</h3>
            <div className="flex items-center text-sm text-[#0a9b21]">
              <span>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs and Filters */}
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {["all", "Open", "In Progress", "Resolved"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm font-medium relative ${
                activeTab === tab
                  ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "all" ? "All" : tab}
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
              className="w-full pl-10 pr-3 py-2 text-sm border border-gray-400 rounded-full outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
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

      {/* Tickets Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    selectedTickets.length > 0 &&
                    selectedTickets.length === currentTickets.length
                  }
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
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assignee
              </th>
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
                      checked={selectedTickets.includes(ticket.id)}
                      onChange={() => handleSelectTicket(ticket.id)}
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
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {ticket.assignee}
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
                  No tickets found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {filteredTickets.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 py-4 border-t border-gray-200">
            <div className="text-sm text-gray-700 mb-2 sm:mb-0">
              Showing <span className="font-medium">{indexOfFirstTicket + 1}</span> to{" "}
              <span className="font-medium">
                {Math.min(indexOfLastTicket, filteredTickets.length)}
              </span>{" "}
              of <span className="font-medium">{filteredTickets.length}</span>{" "}
              tickets
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
      </div>
    </div>
  );
};

export default SupportTickets;