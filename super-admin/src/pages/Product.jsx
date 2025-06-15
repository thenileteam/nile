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

const ProductManagement = () => {
  const [activeTab, setActiveTab] = useState("all Products");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <div className="space-y-6 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">Product Management</h2>
        <div className="flex gap-3">
          <button className="bg-green-900 font-semibold text-white px-4 py-2 rounded-md text-sm">
            Export
          </button>
          <button className="border border-green-900 font-semibold text-green-900 px-4 py-2 rounded-md text-sm">
            Add Product
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Total Products</p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-4">12,340</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span className="mr-1">+320</span>
            <span className="text-[#6e6e6e]">vs last Month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Active Listings</p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-4">11,500</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span className="mr-1">+5%</span>
            <span className="text-[#6e6e6e]">vs last Month</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0] p-4 rounded-md shadow-lg">
          <p className="text-base sm:text-lg text-[#6e6e6e] font-medium mb-4">Out of Stock</p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0a9b21] mb-4">245</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <FaArrowUp className="mr-1" />
            <span className="mr-1">+10</span>
            <span className="text-[#6e6e6e]">vs last Month</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {["all Products", "active", "inactive", "out of Stock"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm font-medium relative ${activeTab === tab
                ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "outOfStock" ? "Out of Stock" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full py-4 gap-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search Products..."
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
        <ProductListTable
          searchTerm={searchTerm}
          selectedDate={selectedDate}
          statusFilter={activeTab}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </div>
    </div>
  );
};

const ProductListTable = ({
  searchTerm,
  selectedDate,
  statusFilter,
  selectedProducts,
  setSelectedProducts,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Sample product data
  const allProducts = [
    {
      id: "PROD-001",
      name: "Smartphone X",
      category: "Electronics",
      price: "₦249,999",
      stock: 150,
      addedDate: "2023-01-10",
      status: "Active",
    },
    {
      id: "PROD-002",
      name: "Designer Shirt",
      category: "Clothing",
      price: "₦15,000",
      stock: 300,
      addedDate: "2023-02-15",
      status: "Active",
    },
    {
      id: "PROD-003",
      name: "Rice 50kg",
      category: "Food",
      price: "₦35,000",
      stock: 0,
      addedDate: "2023-03-20",
      status: "Out of Stock",
    },
    {
      id: "PROD-004",
      name: "LED TV 55inch",
      category: "Electronics",
      price: "₦350,000",
      stock: 50,
      addedDate: "2023-04-05",
      status: "Active",
    },
    {
      id: "PROD-005",
      name: "Running Shoes",
      category: "Footwear",
      price: "₦25,000",
      stock: 200,
      addedDate: "2023-05-12",
      status: "Active",
    },
    {
      id: "PROD-006",
      name: "Laptop Pro",
      category: "Electronics",
      price: "₦650,000",
      stock: 30,
      addedDate: "2023-06-18",
      status: "Inactive",
    },
    {
      id: "PROD-007",
      name: "Sofa Set",
      category: "Furniture",
      price: "₦150,000",
      stock: 10,
      addedDate: "2023-07-22",
      status: "Active",
    },
    {
      id: "PROD-008",
      name: "Headphones",
      category: "Electronics",
      price: "₦10,000",
      stock: 500,
      addedDate: "2023-08-30",
      status: "Active",
    },
    {
      id: "PROD-009",
      name: "Pet Food",
      category: "Pet Supplies",
      price: "₦5,000",
      stock: 1000,
      addedDate: "2023-09-05",
      status: "Active",
    },
  ];

  const filteredProducts = allProducts.filter((product) => {
    const matchesStatus =
      statusFilter === "all Products" ||
      (statusFilter === "outOfStock" && product.status === "Out of Stock") ||
      product.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate
      ? new Date(product.addedDate).toLocaleDateString() ===
        new Date(selectedDate).toLocaleDateString()
      : true;
    return matchesStatus && matchesSearch && matchesDate;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProducts(currentProducts.map((p) => p.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const statusColors = {
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-gray-100 text-gray-800",
    "Out of Stock": "bg-red-100 text-red-800",
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
                  selectedProducts.length > 0 &&
                  selectedProducts.length === currentProducts.length
                }
                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product ID
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Stock
            </th>
            <th className="px-2 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Added Date
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
          {currentProducts.length > 0 ? (
            currentProducts.map((product, index) => (
              <tr key={`${product.id}-${index}`}>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleSelectProduct(product.id)}
                    className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {product.id}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product.name}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {product.category}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {product.price}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {product.stock}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {new Date(product.addedDate).toLocaleDateString()}
                </td>
                <td className="px-2 sm:px-4 py-3 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor(
                      product.status
                    )}`}
                  >
                    {product.status}
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
                No products found matching your criteria
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {filteredProducts.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-4 py-4 border-t border-gray-200">
          <div className="text-sm text-gray-700 mb-2 sm:mb-0">
            Showing <span className="font-medium">{indexOfFirstProduct + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(indexOfLastProduct, filteredProducts.length)}
            </span>{" "}
            of <span className="font-medium">{filteredProducts.length}</span>{" "}
            products
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

export default ProductManagement;