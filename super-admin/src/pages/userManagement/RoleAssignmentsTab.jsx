import { useState } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Calendar } from "lucide-react";

const RoleAssignmentsTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rolesPerPage = 5;

  const allRoles = [
    {
      id: "ROLE001",
      name: "Super Admin",
      description: "Full access to all features",
      roleType: "Vendor",
      users: 8,
      created: "05/11/2024",
    },
    {
      id: "ROLE001",
      name: "Admin",
      description: "Administrative access with",
      roleType: "Customer",
      users: 8,
      created: "05/11/2024",
    },
    {
      id: "ROLE001",
      name: "Vendor",
      description: "Access to vendor features",
      roleType: "Admin",
      users: 8,
      created: "05/11/2024",
    },
    {
      id: "ROLE001",
      name: "Customer",
      description: "Basic customer access",
      roleType: "Vendor",
      users: 8,
      created: "05/11/2024",
    },
    {
      id: "ROLE001",
      name: "Support",
      description: "Access to support and ticket",
      roleType: "Vendor",
      users: 8,
      created: "05/11/2024",
    },
    {
      id: "ROLE001",
      name: "Support",
      description: "Access to support and ticket",
      roleType: "Vendor",
      users: 8,
      created: "05/11/2024",
    },
    {
      id: "ROLE001",
      name: "Support",
      description: "Access to support and ticket",
      roleType: "Vendor",
      users: 8,
      created: "05/11/2024",
    },
  ];

  const filteredRoles = allRoles.filter((role) => {
    const matchesSearch =
      role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate
      ? new Date(role.created).toLocaleDateString() ===
        new Date(selectedDate).toLocaleDateString()
      : true;
    return matchesSearch && matchesDate;
  });

  const indexOfLastRole = currentPage * rolesPerPage;
  const indexOfFirstRole = indexOfLastRole - rolesPerPage;
  const currentRoles = filteredRoles.slice(indexOfFirstRole, indexOfLastRole);
  const totalPages = Math.ceil(filteredRoles.length / rolesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Search & Filter*/}
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
            id="datePickerRoleAssignments"
          />
          <div
            className="pl-10 pr-3 py-2 text-sm border border-gray-400 rounded-lg text-green-600 cursor-pointer flex items-center"
            onClick={() =>
              document.getElementById("datePickerRoleAssignments").showPicker()
            }
          >
            {selectedDate || "Select Date"}
          </div>
          <Calendar
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 cursor-pointer"
            onClick={() =>
              document.getElementById("datePickerRoleAssignments").showPicker()
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
                Role ID
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Users
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentRoles.length > 0 ? (
              currentRoles.map((role, index) => (
                <tr key={`${role.id}-${index}`}>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {role.id}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {role.name}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {role.description}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {role.roleType}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {role.users}
                  </td>
                  <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {role.created}
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
                  colSpan="8"
                  className="px-2 sm:px-4 py-4 text-center text-sm text-gray-500"
                >
                  No roles found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {filteredRoles.length > 0 && (
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

export default RoleAssignmentsTab;
