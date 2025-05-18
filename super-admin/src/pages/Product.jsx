import React, { useState } from "react";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { Calendar } from "lucide-react";

const ProductManagement = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Product Management
        </h1>
        <div className="flex gap-3 justify-end w-full sm:w-auto">
          <button className="bg-green-900 font-semi-bold text-white px-6 py-2 rounded-md">
            Export
          </button>
          <button className="border border-green-900 font-semi-bold text-green-900 px-5 py-2 rounded-md">
            Add Product
          </button>
        </div>
      </div>

      {/* Stats Cards - 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-lg text-[#6e6e6e] font-medium mb-6">
            Total Products
          </p>
          <h3 className="text-2xl font-bold text-[#0a9b21] mb-6">12,543</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <span className="mr-1">↑ +156</span>
            <span className="text-[#6e6e6e]">vs last Week</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-lg text-[#6e6e6e] font-medium mb-6">
            Active Products
          </p>
          <h3 className="text-2xl font-bold text-[#0a9b21] mb-6">10,872</h3>
          <div className="flex items-center text-sm text-[#0a9b21]">
            <span className="mr-1">↑ 86.7% </span>
            <span className="text-[#6e6e6e]">of total</span>
          </div>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <p className="text-lg text-[#6e6e6e] font-medium mb-6">
            Top Selling Product
          </p>
          <h3 className="text-xl font-bold text-[black] mb-6">Sneakers</h3>
          <p className="text-sm text-[#0a9b21]">₦66,000 revenue</p>
        </div>
        <div className="bg-[#f4f4f0d2] p-4 rounded-md shadow-lg">
          <h4 className="font-semibold mb-3">Inventory Status</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Well Stocked</span>
              </div>
              <span className="text-sm font-medium">66%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm">Adequate</span>
              </div>
              <span className="text-sm font-medium">25%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm">Low</span>
              </div>
              <span className="text-sm font-medium">8%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm">Out of Stock</span>
              </div>
              <span className="text-sm font-medium">2%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {/* Tab Navigation */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-3 text-sm font-medium relative ${
              activeTab === "all"
                ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setActiveTab("active")}
            className={`px-4 py-3 text-sm font-medium relative ${
              activeTab === "active"
                ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setActiveTab("inactive")}
            className={`px-4 py-3 text-sm font-medium relative ${
              activeTab === "inactive"
                ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Inactive
          </button>
          <button
            onClick={() => setActiveTab("outOfStock")}
            className={`px-4 py-3 text-sm font-medium relative ${
              activeTab === "outOfStock"
                ? "text-green-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Out of Stock
          </button>
        </div>

        {/* Search and Date Picker */}
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

      {/* Product Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <ProductListTable
          searchTerm={searchTerm}
          selectedDate={selectedDate}
          statusFilter={activeTab}
        />
      </div>
    </div>
  );
};

const ProductListTable = ({ searchTerm, selectedDate, statusFilter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const productsPerPage = 5;

  const toggleProductSelection = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };
  // Sample product data
  const allProducts = [
    {
      id: "PBD-001",
      name: "Wireless Headphones",
      category: "Electronics",
      merchant: "Tech Store",
      price: "₦25,000",
      status: "Active",
      inventory: "Well Stocked",
      date: "2023-01-15",
    },
    {
      id: "PBD-002",
      name: "Designer T-Shirt",
      category: "Clothing",
      merchant: "Fashion Hub",
      price: "₦7,500",
      status: "Active",
      inventory: "Adequate",
      date: "2023-02-20",
    },
    {
      id: "PBD-003",
      name: "Organic Vegies Pack",
      category: "Food",
      merchant: "Grocery Mart",
      price: "₦2,200",
      status: "Active",
      inventory: "Low",
      date: "2023-03-10",
    },
    {
      id: "PBD-004",
      name: "Smart TV 55-inch",
      category: "Electronics",
      merchant: "Electronics World",
      price: "₦350,000",
      status: "Active",
      inventory: "Well Stocked",
      date: "2023-04-05",
    },
    {
      id: "PBD-005",
      name: "Running Shoes",
      category: "Footwear",
      merchant: "Sports Gear",
      price: "₦15,000",
      status: "Inactive",
      inventory: "Out of Stock",
      date: "2023-05-12",
    },
    {
      id: "PBD-006",
      name: "Decorative Lamp",
      category: "Home",
      merchant: "Home Decor",
      price: "₦12,500",
      status: "Active",
      inventory: "Adequate",
      date: "2023-06-18",
    },
    {
      id: "PBD-007",
      name: "Bluetooth Speaker",
      category: "Electronics",
      merchant: "Tech Store",
      price: "₦18,000",
      status: "Active",
      inventory: "Well Stocked",
      date: "2023-07-22",
    },
    {
      id: "PBD-008",
      name: "Jeans",
      category: "Clothing",
      merchant: "Fashion Hub",
      price: "₦9,500",
      status: "Active",
      inventory: "Low",
      date: "2023-08-30",
    },
    {
      id: "PBD-009",
      name: "Fruit Basket",
      category: "Food",
      merchant: "Grocery Mart",
      price: "₦5,000",
      status: "Inactive",
      inventory: "Out of Stock",
      date: "2023-09-05",
    },
  ];

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    // Filter by status
    const matchesStatus =
      statusFilter === "all" ||
      product.status.toLowerCase() === statusFilter.toLowerCase() ||
      (statusFilter === "outOfStock" && product.inventory === "Out of Stock");

    // Filter by search term
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.merchant.toLowerCase().includes(searchTerm.toLowerCase());

    // Filter by date if selected
    const matchesDate = selectedDate
      ? new Date(product.date).toLocaleDateString() ===
        new Date(selectedDate).toLocaleDateString()
      : true;

    return matchesStatus && matchesSearch && matchesDate;
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const statusColors = {
    Active: "bg-green-100 text-green-800",
    Inactive: "bg-gray-100 text-gray-800",
    default: "bg-blue-100 text-blue-800",
  };

  const inventoryColors = {
    "Well Stocked": "bg-green-100 text-green-800",
    Adequate: "bg-blue-100 text-blue-800",
    Low: "bg-yellow-100 text-yellow-800",
    "Out of Stock": "bg-red-100 text-red-800",
    default: "bg-gray-100 text-gray-800",
  };
  const getStatusColor = (status) =>
    statusColors[status] || statusColors["default"];
  const getInventoryColor = (inventory) =>
    inventoryColors[inventory] || inventoryColors["default"];

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <input
                type="checkbox"
                checked={
                  selectedProducts.length === currentProducts.length &&
                  currentProducts.length > 0
                }
                onChange={() => {
                  if (selectedProducts.length === currentProducts.length) {
                    setSelectedProducts([]);
                  } else {
                    setSelectedProducts(
                      currentProducts.map((product) => product.id)
                    );
                  }
                }}
                className="mr-2"
              />
            </th>
            <th className="px-3 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Product Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Merchant
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Inventory
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentProducts.length > 0 ? (
            currentProducts.map((product, index) => (
              <tr key={`${product.id}-${index}`}>
                <td className="px-6 py-4 whitespace-nowrap">
                   <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => toggleProductSelection(product.id)}
                    className="mr-2"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.merchant}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${getInventoryColor(
                      product.inventory
                    )}`}
                  >
                    {product.inventory}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${getStatusColor(
                      product.status
                    )}`}
                  >
                    {product.status}
                  </span>
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
            ))
          ) : (
            <tr>
              <td
                colSpan="8"
                className="px-6 py-4 text-center text-sm text-gray-500"
              >
                No products found matching your criteria
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
          <div className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">{indexOfFirstProduct + 1}</span> to{" "}
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
              className={`px-3 py-1 border rounded-md flex items-center ${
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
                  className={`px-3 py-1 border rounded-md ${
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
              className={`px-3 py-1 border rounded-md flex items-center ${
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

export default ProductManagement;