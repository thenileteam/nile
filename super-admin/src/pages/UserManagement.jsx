import React, { useState, useRef } from "react";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaTrash,
  FaUser,
} from "react-icons/fa";
import { Calendar, CircleUserRound, UserCheck, Activity } from "lucide-react";

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState("userList");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          User Management
        </h1>
        <div className="flex gap-3 justify-end w-full sm:w-auto">
          <button className="bg-green-900 font-semi-bold text-white px-6 py-2 rounded-md">
            Export
          </button>
          <button className="border border-green-900 font-semi-bold text-green-900 px-5 py-2 rounded-md">
            Add User
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* Tab Navigation */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("userList")}
            className={`px-4 py-3 text-sm font-medium flex items-center relative ${
              activeTab === "userList"
                ? "text-green-600 border-b-2 border-[#004324]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <CircleUserRound size={18} className="mr-2" />
            User List
          </button>
          <button
            onClick={() => setActiveTab("roleAssignments")}
            className={`px-4 py-3 text-sm font-medium flex items-center relative ${
              activeTab === "roleAssignments"
                ? "text-green-600 border-b-2 border-[#004324]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <UserCheck size={18} className="mr-2" />
            Role Assignments
          </button>
          <button
            onClick={() => setActiveTab("activityLogs")}
            className={`px-4 py-3 text-sm font-medium flex items-center relative ${
              activeTab === "activityLogs"
                ? "text-green-600 border-b-2 border-[#004324]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Activity size={18} className="mr-2" />
            Activity Logs
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full py-6 gap-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 text-sm border border-gray-400 rounded-full outline-none"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
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
              className="absolute left-3 top-2.5 text-green-600 cursor-pointer"
              onClick={() => document.getElementById("datePicker").showPicker()}
            />
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="mt-6">
        {activeTab === "userList" && (
          <UserListTable searchTerm={searchTerm} selectedDate={selectedDate} />
        )}
        {activeTab === "roleAssignments" && (
          <div className="p-4 bg-white rounded-lg shadow">
            Role Assignments Content
          </div>
        )}
        {activeTab === "activityLogs" && (
          <div className="p-4 bg-white rounded-lg shadow">
            Activity Logs Content
          </div>
        )}
      </div>
    </div>
  );
};

const UserListTable = ({ searchTerm, selectedDate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Sample user data
  const allUsers = [
    {
      id: "USBROI",
      name: "Kunle",
      email: "rober.i3@example.com",
      role: "Vendor",
      status: "Active",
      joinDate: "2023-01-15",
    },
    {
      id: "USBROI",
      name: "Dannola",
      email: "rober.i3@example.com",
      role: "Customer",
      status: "Active",
      joinDate: "2023-02-20",
    },
    {
      id: "USBROI",
      name: "Rohim",
      email: "rober.i3@example.com",
      role: "Admin",
      status: "Active",
      joinDate: "2023-03-10",
    },
    {
      id: "USBROI",
      name: "Dekbjy",
      email: "rober.i3@example.com",
      role: "Vendor",
      status: "Active",
      joinDate: "2023-04-05",
    },
    {
      id: "USBROI",
      name: "James",
      email: "rober.i3@example.com",
      role: "Vendor",
      status: "Active",
      joinDate: "2023-05-12",
    },
    {
      id: "USBROI",
      name: "Jaddy",
      email: "rober.i3@example.com",
      role: "Vendor",
      status: "Active",
      joinDate: "2023-06-18",
    },
    {
      id: "USBROI",
      name: "Mary",
      email: "rober.i3@example.com",
      role: "Vendor",
      status: "Active",
      joinDate: "2023-07-22",
    },
    {
      id: "USBROI",
      name: "Mary",
      email: "rober.i3@example.com",
      role: "Vendor",
      status: "Active",
      joinDate: "2023-08-30",
    },
    {
      id: "USBROI",
      name: "Kelly",
      email: "rober.i3@example.com",
      role: "Vendor",
      status: "Active",
      joinDate: "2023-09-05",
    },
  ];

  // Filter users
  const filteredUsers = allUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs flex items-center font-medium text-gray-500 uppercase tracking-wider">
              <FaUser className="mr-2 text-gray-400" />
              User ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Join Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentUsers.map((user, index) => (
            <tr key={`${user.id}-${index}`}>
              <td className="px-6 py-4 whitespace-nowrap flex items-center text-sm text-gray-500">
                <FaUser className="mr-2 text-gray-400" />
                {user.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.role}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-3 py-1 inline-flex text-[#0000009c] text-sm font-semibold rounded-lg bg-[#0A9B21] ">
                  {user.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(user.joinDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900 mr-3">
                  <FaEdit className="inline mr-1" /> Edit
                </button>
                <button className="text-red-600 hover:text-red-900">
                  <FaTrash className="inline mr-1" /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">{indexOfFirstUser + 1}</span> to{" "}
          <span className="font-medium">
            {Math.min(indexOfLastUser, filteredUsers.length)}
          </span>{" "}
          of <span className="font-medium">{filteredUsers.length}</span> users
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => paginate(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded-md flex items-center ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FaChevronLeft className="mr-1" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 py-1 border rounded-md ${
                currentPage === number
                  ? "bg-[green] text-white cursor-not-allowed"
                  : "text-gray-700"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 border rounded-md flex items-center ${
              currentPage === totalPages
                ? "bg-[green] text-white cursor-not-allowed"
                : "text-gray-700"
            }`}
          >
            <FaChevronRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;