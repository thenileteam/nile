import React, { useState } from "react";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaTrash,
  FaArrowUp,
} from "react-icons/fa";
import { Calendar } from "lucide-react";

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  return (
    <div className="space-y-6 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">User Management</h2>
        <div className="flex gap-3">
          <button className="bg-green-900 font-semibold text-white px-4 py-2 rounded-md text-sm">
            Export
          </button>
          <button className="border border-green-900 font-semibold text-green-900 px-4 py-2 rounded-md text-sm">
            Add User
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Total Users</p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-4">125,430</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span className="mr-1">+2,150</span>
            <span className="text-[#6e6e6e]">vs last Month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Active Users</p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-4">118,200</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span className="mr-1">+10%</span>
            <span className="text-[#6e6e6e]">vs last Month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Churn Rate</p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-4">2.5%</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span className="mr-1">-0.3%</span>
            <span className="text-[#6e6e6e]">vs last Month</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {["all", "active", "inactive", "suspended"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm font-medium relative ${activeTab === tab
                ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Users
            </button>
          ))}
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full py-4 gap-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search Users..."
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

      <div className="mt-4">
        <UserListTable
          searchTerm={searchTerm}
          selectedDate={selectedDate}
          statusFilter={activeTab}
          selectedUsers={selectedUsers}
          setSelectedUsers={setSelectedUsers}
        />
      </div>
    </div>
  );
};

const UserListTable = ({
  searchTerm,
  selectedDate,
  statusFilter,
  selectedUsers,
  setSelectedUsers,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Sample user data
  const allUsers = [
    {
      id: "USR-001",
      name: "John Doe",
      email: "john.doe@example.com",
      location: "Lagos, Nigeria",
      joinDate: "2023-01-15",
      role: "Customer",
      status: "Active",
    },
    {
      id: "USR-002",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      location: "Abuja, Nigeria",
      joinDate: "2023-02-20",
      role: "Customer",
      status: "Active",
    },
    {
      id: "USR-003",
      name: "Robert Johnson",
      email: "robert.j@example.com",
      location: "Kano, Nigeria",
      joinDate: "2023-03-10",
      role: "Merchant",
      status: "Inactive",
    },
    {
      id: "USR-004",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      location: "Lagos, Nigeria",
      joinDate: "2023-04-05",
      role: "Customer",
      status: "Active",
    },
    {
      id: "USR-005",
      name: "Michael Wilson",
      email: "michael.w@example.com",
      location: "Port Harcourt, Nigeria",
      joinDate: "2023-05-12",
      role: "Merchant",
      status: "Suspended",
    },
    {
      id: "USR-006",
      name: "Sarah Brown",
      email: "sarah.brown@example.com",
      location: "Lagos, Nigeria",
      joinDate: "2023-06-18",
      role: "Customer",
      status: "Active",
    },
    {
      id: "USR-007",
      name: "David Lee",
      email: "david.lee@example.com",
      location: "Ibadan, Nigeria",
      joinDate: "2023-07-22",
      role: "Customer",
      status: "Active",
    },
    {
      id: "USR-008",
      name: "Jennifer Taylor",
      email: "jennifer.t@example.com",
      location: "Lagos, Nigeria",
      joinDate: "2023-08-30",
      role: "Merchant",
      status: "Inactive",
    },
    {
      id: "USR-009",
      name: "Tunde Ade",
      email: "tunde.ade@example.com",
      location: "Abuja, Nigeria",
      joinDate: "2023-09-05",
      role: "Customer",
      status: "Active",
    },
  ];

  const filteredUsers = allUsers.filter((user) => {
    const matchesStatus =
      statusFilter === "all" ||
      user.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate
      ? new Date(user.joinDate).toLocaleDateString() ===
        new Date(selectedDate).toLocaleDateString()
      : true;
    return matchesStatus && matchesSearch && matchesDate;
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(currentUsers.map((u) => u.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const statusColors = {
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-gray-100 text-gray-800",
    Suspended: "bg-red-100 text-red-800",
    default: "bg-blue-100 text-blue-800",
  };

  const getStatusColor = (status) =>
    statusColors[status] || statusColors["default"];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={
                  selectedUsers.length > 0 &&
                  selectedUsers.length === currentUsers.length
                }
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User ID
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Join Date
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentUsers.length > 0 ? (
            currentUsers.map((user, index) => (
              <tr key={`${user.id}-${index}`}>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                    className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {user.id}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {user.location}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {new Date(user.joinDate).toLocaleDateString()}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {user.role}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor(
                      user.status
                    )}`}
                  >
                    {user.status}
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
                No users found matching your criteria
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {filteredUsers.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 py-4 border-t border-gray-200">
          <div className="text-sm text-gray-700 mb-2 sm:mb-0">
            Showing <span className="font-medium">{indexOfFirstUser + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(indexOfLastUser, filteredUsers.length)}
            </span>{" "}
            of <span className="font-medium">{filteredUsers.length}</span>{" "}
            users
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
  );
};

export default UserManagement;