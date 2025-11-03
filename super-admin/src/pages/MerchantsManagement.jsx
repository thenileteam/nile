import React from "react";
import { Search, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useMerchantsData } from "../datahooks/useMerchantData";
import MerchantDetails from "../components/merchants/MerchantDetails";

// Stat card component (reusable)
const StatCard = ({ title, value, change, changeType, isLoading }) => {
  const isPositive = changeType !== "negative";
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      {isLoading ? (
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-500 mb-2">{title}</p>
          <h3
            className={`text-3xl font-bold mb-3 ${
              !isPositive ? "text-red-600" : "text-gray-900"
            }`}
          >
            {value}
          </h3>
          <div
            className={`flex items-center text-xs ${
              !isPositive ? "text-red-600" : "text-green-600"
            }`}
          >
            {/* Add arrow icons later if needed */}
            <span>{change}</span>
            <span className="text-gray-500 ml-1">vs last Month</span>
          </div>
        </>
      )}
    </div>
  );
};

export default function MerchantsManagement() {
  const {
    stats,
    merchants,
    pagination,
    selectedMerchant,
    // loadingStats removed
    loadingMerchants,
    loadingDetails,
    error,
    activeTab,
    search,
    handleTabChange,
    handleSearchChange,
    selectMerchant,
    clearSelectedMerchant,
    handlePageChange,
  } = useMerchantsData();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Merchants Management
        </h2>
        <button className="bg-[#004324] text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-green-900 text-sm">
          Export CSV
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Merchants"
          // UPDATED KEY: Use totalStores from API response
          value={stats.totalStores} 
          change="+1.5%" 
          isLoading={loadingMerchants} // Use the main loading state
        />
        <StatCard
          title="Old Merchants"
          value={stats.oldStores}
          change="+1.5%"
          isLoading={loadingMerchants}
        />
        <StatCard
          title="New Merchants"
          value={stats.newStores}
          change="-2.3%" 
          changeType="negative"
          isLoading={loadingMerchants}
        />
      </div>

      {/* Filters and Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
        {/* ... (Tabs and Filters section is unchanged) ... */}
         <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex items-center space-x-1 border-b">
            {['all', 'new', 'old'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-green-600 text-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Merchants
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search by: Store Name, Email....."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm w-full md:w-64"
              />
            </div>
            <button className="flex items-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-sm text-gray-700">
              <Calendar size={16} />
              <span>Select Date</span>
            </button>
          </div>
        </div>

        {/* Merchants Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Merchant Name</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone Number</th>
                {/* REMOVED "Total Orders" and "Total Sales" columns, as they aren't in this API response */}
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Registered On</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action(s)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loadingMerchants ? (
                <tr><td colSpan="5" className="text-center py-8">Loading merchants...</td></tr>
              ) : error ? (
                <tr><td colSpan="5" className="text-center py-8 text-red-500">{error}</td></tr>
              ) : merchants.length === 0 ? (
                <tr><td colSpan="5" className="text-center py-8">No merchants found.</td></tr>
              ) : (
                merchants.map((merchant) => (
                  <tr key={merchant.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">{merchant.name}</td>
                    <td className="px-4 py-4 text-sm text-gray-500">{merchant.email}</td>
                    <td className="px-4 py-4 text-sm text-gray-500">{merchant.phone}</td>
                    <td className="px-4 py-4 text-sm text-gray-500">{new Date(merchant.createdAt).toLocaleDateString()}</td>
                    <td className="px-4 py-4 text-sm">
                      <button 
                        onClick={() => selectMerchant(merchant.id)}
                        className="font-medium text-green-600 hover:text-green-800"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* ... (Pagination section is unchanged) ... */}
        <div className="flex justify-end items-center space-x-2 text-sm text-gray-600">
          <span>Page {Math.floor(pagination.offset / pagination.limit) + 1} of {Math.ceil(pagination.total / pagination.limit)}</span>
          <button 
            disabled={pagination.offset === 0}
            onClick={() => handlePageChange(pagination.offset - pagination.limit)}
            className="p-2 disabled:opacity-50"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            disabled={pagination.offset + pagination.limit >= pagination.total}
            onClick={() => handlePageChange(pagination.offset + pagination.limit)}
            className="p-2 disabled:opacity-50"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Details Panel */}
      {(selectedMerchant || loadingDetails) && (
        <MerchantDetails 
          merchant={selectedMerchant} 
          onClose={clearSelectedMerchant} 
        />
      )}
      {loadingDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
          <p className="text-white">Loading details...</p>
        </div>
      )}
    </div>
  );
}