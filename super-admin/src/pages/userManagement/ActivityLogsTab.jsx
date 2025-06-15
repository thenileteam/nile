import { useState } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Calendar } from "lucide-react";

const ActivityLogsTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const logsPerPage = 5;

  const allLogs = [
    {
      id: "ACT001",
      user: "John Doe (USR001)",
      action: "Login",
      usersDetail: "User logged in from 192.168.1.1",
      timestamp: "2023-04-15 09:30:45",
      status: "Success",
    },
    {
      id: "ACT001",
      user: "Jane Smith (USR002)",
      action: "Product Update",
      usersDetail: "Updated product ID: PRD/123",
      timestamp: "2023-04-15 09:30:45",
      status: "Success",
    },
    {
      id: "ACT001",
      user: "Robert Johnson (USR003)",
      action: "Password Reset",
      usersDetail: "Requested password reset",
      timestamp: "2023-04-15 09:30:45",
      status: "Success",
    },
    {
      id: "ACT001",
      user: "Robert Johnson (USR003)",
      action: "Password Reset",
      usersDetail: "Requested password reset",
      timestamp: "2023-04-15 09:30:45",
      status: "Success",
    },
    {
      id: "ACT001",
      user: "Robert Johnson (USR003)",
      action: "Password Reset",
      usersDetail: "Requested password reset",
      timestamp: "2023-04-15 09:30:45",
      status: "Success",
    },
    {
      id: "ACT001",
      user: "Robert Johnson (USR003)",
      action: "Login",
      usersDetail: "Failed login attempt frc",
      timestamp: "2023-04-15 09:30:45",
      status: "Failed",
    },
    {
      id: "ACT001",
      user: "Robert Johnson (USR003)",
      action: "Order Creation",
      usersDetail: "Created order ID: ORD456",
      timestamp: "2023-04-15 09:30:45",
      status: "Success",
    },
    {
      id: "ACT001",
      user: "Robert Johnson (USR003)",
      action: "Order Creation",
      usersDetail: "Created order ID: ORD456",
      timestamp: "2023-04-15 09:30:45",
      status: "Success",
    },
    {
      id: "ACT001",
      user: "Robert Johnson (USR003)",
      action: "Order Creation",
      usersDetail: "Created order ID: ORD456",
      timestamp: "2023-04-15 09:30:45",
      status: "Success",
    },
  ];

  const filteredLogs = allLogs.filter((log) => {
    const matchesSearch =
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.usersDetail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate
      ? new Date(log.timestamp).toLocaleDateString() ===
        new Date(selectedDate).toLocaleDateString()
      : true;
    return matchesSearch && matchesDate;
  });

  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog);
  const totalPages = Math.ceil(filteredLogs.length / logsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const statusColors = {
    Success: "bg-green-100 text-green-800",
    Failed: "bg-red-100 text-red-800",
    default: "bg-blue-100 text-blue-800",
  };

  const getStatusColor = (status) =>
    statusColors[status] || statusColors["default"];

  return (
    <div>
      {/* Search & Filter */}
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
            id="datePickerActivityLogs"
          />
          <div
            className="pl-10 pr-3 py-2 text-sm border border-gray-400 rounded-lg text-green-600 cursor-pointer flex items-center"
            onClick={() =>
              document.getElementById("datePickerActivityLogs").showPicker()
            }
          >
            {selectedDate || "Select Date"}
          </div>
          <Calendar
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 cursor-pointer"
            onClick={() =>
              document.getElementById("datePickerActivityLogs").showPicker()
            }
          />
        </div>
      </div>

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
                Activity ID
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Users
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timestamp
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentLogs.length > 0 ? (
              currentLogs.map((log, index) => (
                <tr key={`${log.id}-${index}`}>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {log.id}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {log.user}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {log.action}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {log.usersDetail}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {log.timestamp}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor(
                        log.status
                      )}`}
                    >
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-2 sm:px-4 py-4 text-center text-sm text-gray-500"
                >
                  No activity logs found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {filteredLogs.length > 0 && (
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

export default ActivityLogsTab;
