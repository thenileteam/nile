import React from 'react';
import { X } from 'lucide-react';

// Helper component for detail rows
const DetailRow = ({ label, value, isGreen = false }) => (
  <div className="flex justify-between items-center py-3">
    <span className="text-sm text-gray-500">{label}</span>
    <span className={`text-sm font-medium ${isGreen ? 'text-green-600' : 'text-gray-900'}`}>
      {value}
    </span>
  </div>
);

// Helper component for summary cards
const SummaryCard = ({ label, value, linkText = "View" }) => (
  <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-lg font-bold text-gray-900">{value}</p>
    </div>
    <button className="text-sm font-semibold text-green-600 hover:underline">
      {linkText}
    </button>
  </div>
);

export default function MerchantDetails({ merchant, onClose }) {
  if (!merchant) return null;

  // As noted: Using UI fields from and filling
  // with API data from where possible.
  
  // Mock data for fields not in the API response
  const phone = merchant.phone || "+234 803 123 4567";
  const registeredOn = merchant.registeredOn || "July 12, 2025";
  const totalCustomers = merchant.totalCustomers || "3,000,000";
  const pendingPayout = merchant.pendingPayout || "₦250,000";
  const totalPayouts = merchant.totalPayouts || "₦3,000,000";

  return (
    <div className="fixed inset-0 z-30">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50" 
        onClick={onClose}
      ></div>

      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-40 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b">
            <h2 className="text-lg font-semibold text-gray-900">
              {merchant.name || "Merchant Details"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Details */}
          <div className="py-4 divide-y divide-gray-200">
            <DetailRow label="Email" value={merchant.email} isGreen />
            <DetailRow label="Phone Number" value={phone} />
            <DetailRow label="Registered On" value={registeredOn} />
            <DetailRow label="Total Customers" value={totalCustomers} />
            <DetailRow label="Total Orders" value={merchant.totalOrders || 0} />
            <DetailRow label="Total Sales" value={`₦${merchant.totalRevenue || 0}`} />
            <DetailRow label="Pending Payout" value={pendingPayout} />
            <DetailRow label="Last Active" value={merchant.lastOrderDate ? new Date(merchant.lastOrderDate).toLocaleString() : 'N/A'} />
          </div>

          {/* Summary Cards */}
          <div className="space-y-4 pt-4">
            <SummaryCard 
              label="Total Orders" 
              value={merchant.totalOrders || 0} 
            />
            <SummaryCard 
              label="Total Payouts" 
              value={totalPayouts} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}