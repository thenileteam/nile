import { useState } from "react";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaTrash,
  FaArrowUp,
} from "react-icons/fa";
import { Calendar } from "lucide-react";

const BusinessManagement = () => {
  const [activeTab, setActiveTab] = useState("all Businesses");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedBusinesses, setSelectedBusinesses] = useState([]);

  return (
    <div className="space-y-6 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">Business Accounts</h2>
        <div className="flex gap-3">
          <button className="bg-green-900 font-semibold text-white px-4 py-2 rounded-md text-sm">
            Export
          </button>
          <button className="border border-green-900 font-semibold text-green-900 px-4 py-2 rounded-md text-sm">
            Add Business
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Total Businesses</p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-4">66,500</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span className="mr-1">+1,250</span>
            <span className="text-[#6e6e6e]">vs last Month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Active Businesses</p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-4">60,000</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span className="mr-1">15%</span>
            <span className="text-[#6e6e6e]">vs last Month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Premium Plan Adoption</p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-4">35%</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span className="mr-1">1.5%</span>
            <span className="text-[#6e6e6e]">vs last Month</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {["all Businesses", "active", "inactive", "suspended"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm font-medium relative ${activeTab === tab
                ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

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
        <BusinessListTable
          searchTerm={searchTerm}
          selectedDate={selectedDate}
          statusFilter={activeTab}
          selectedBusinesses={selectedBusinesses}
          setSelectedBusinesses={setSelectedBusinesses}
        />
      </div>
    </div>
  );
};

const BusinessListTable = ({
  searchTerm,
  selectedDate,
  statusFilter,
  selectedBusinesses,
  setSelectedBusinesses,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const businessesPerPage = 5;

  // Sample business data
  const allBusinesses = [
    {
      id: "BIZ-001",
      name: "Tech Store",
      owner: "Kunle",
      location: "Lagos, Nigeria",
      joinDate: "2023-01-15",
      plan: "Premium",
      status: "Active",
    },
    {
      id: "BIZ-002",
      name: "Fashion Hub",
      owner: "Damola",
      location: "Lagos, Nigeria",
      joinDate: "2023-02-20",
      plan: "Standard",
      status: "Active",
    },
    {
      id: "BIZ-003",
      name: "Grocery Mart",
      owner: "Rahim",
      location: "Lagos, Nigeria",
      joinDate: "2023-03-10",
      plan: "Basic",
      status: "Inactive",
    },
    {
      id: "BIZ-004",
      name: "Electronics World",
      owner: "Debby",
      location: "Lagos, Nigeria",
      joinDate: "2023-04-05",
      plan: "Premium",
      status: "Active",
    },
    {
      id: "BIZ-005",
      name: "Sports Gear",
      owner: "James",
      location: "Lagos, Nigeria",
      joinDate: "2023-05-12",
      plan: "Premium",
      status: "Suspended",
    },
    {
      id: "BIZ-006",
      name: "Home Decor",
      owner: "Jaddy",
      location: "Lagos, Nigeria",
      joinDate: "2023-06-18",
      plan: "Standard",
      status: "Active",
    },
    {
      id: "BIZ-007",
      name: "Beauty Shop",
      owner: "Mary",
      location: "Lagos, Nigeria",
      joinDate: "2023-07-22",
      plan: "Basic",
      status: "Active",
    },
    {
      id: "BIZ-008",
      name: "Book Store",
      owner: "Kelly",
      location: "Lagos, Nigeria",
      joinDate: "2023-08-30",
      plan: "Premium",
      status: "Inactive",
    },
    {
      id: "BIZ-009",
      name: "Pet Supplies",
      owner: "Tunde",
      location: "Lagos, Nigeria",
      joinDate: "2023-09-05",
      plan: "Standard",
      status: "Active",
    },
  ];

  const filteredBusinesses = allBusinesses.filter((business) => {
    const matchesStatus =
      statusFilter === "all Businesses" ||
      business.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesSearch =
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate
      ? new Date(business.joinDate).toLocaleDateString() ===
        new Date(selectedDate).toLocaleDateString()
      : true;
    return matchesStatus && matchesSearch && matchesDate;
  });

  const indexOfLastBusiness = currentPage * businessesPerPage;
  const indexOfFirstBusiness = indexOfLastBusiness - businessesPerPage;
  const currentBusinesses = filteredBusinesses.slice(
    indexOfFirstBusiness,
    indexOfLastBusiness
  );
  const totalPages = Math.ceil(filteredBusinesses.length / businessesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedBusinesses(currentBusinesses.map((b) => b.id));
    } else {
      setSelectedBusinesses([]);
    }
  };

  const handleSelectBusiness = (businessId) => {
    setSelectedBusinesses((prev) =>
      prev.includes(businessId)
        ? prev.filter((id) => id !== businessId)
        : [...prev, businessId]
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
                  selectedBusinesses.length > 0 &&
                  selectedBusinesses.length === currentBusinesses.length
                }
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Business ID
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Business Name
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Owner
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Join Date
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Plan
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
          {currentBusinesses.length > 0 ? (
            currentBusinesses.map((business, index) => (
              <tr key={`${business.id}-${index}`}>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedBusinesses.includes(business.id)}
                    onChange={() => handleSelectBusiness(business.id)}
                    className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {business.id}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {business.name}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {business.owner}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {business.location}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {new Date(business.joinDate).toLocaleDateString()}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {business.plan}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor(
                      business.status
                    )}`}
                  >
                    {business.status}
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
                No businesses found matching your criteria
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {filteredBusinesses.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 py-4 border-t border-gray-200">
          <div className="text-sm text-gray-700 mb-2 sm:mb-0">
            Showing <span className="font-medium">{indexOfFirstBusiness + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(indexOfLastBusiness, filteredBusinesses.length)}
            </span>{" "}
            of <span className="font-medium">{filteredBusinesses.length}</span>{" "}
            businesses
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

export default BusinessManagement;