import ApiInstance from "../API/ApiInstance"; // Adjust path if needed

/**
 * REAL API CALL: Fetches the 4 stats cards data
 * GET /dashboard/stats
 */
export const getDashboardStats = async () => {
  try {
    const response = await ApiInstance.get("/dashboard/stats");
    return response.data; // Returns [ { id: "...", metricType: "orders", ... } ]
  } catch (error) {
    throw error.response?.data || new Error("Failed to fetch stats");
  }
};

/**
 * REAL API CALL: Fetches the data for the orders trend line chart
 * GET /dashboard/month-orders-trends
 *
 */
export const getDashboardTrends = async () => {
  try {
    // UPDATED URL
    const response = await ApiInstance.get("/dashboard/month-orders-trends"); 
    return response.data; // Returns [ { "_sum": { "value": 7 }, "month": 10 }, ... ]
  } catch (error) {
    throw error.response?.data || new Error("Failed to fetch trends");
  }
};

/**
 * REAL API CALL: Fetches the data for the failed orders pie chart
 * GET /dashboard/failed-order-reasons
 *
 */
export const getFailedOrders = async () => {
  try {
    // UPDATED URL
    const response = await ApiInstance.get("/dashboard/failed-order-reasons"); 
    return response.data; // Returns {"failedOrderReasons": []}
  } catch (error) {
    throw error.response?.data || new Error("Failed to fetch failed orders");
  }
};

/**
 * MOCK: Fetches the data for the recent settlements table
 * (No API endpoint exists for this yet)
 */
const MOCK_SETTLEMENTS = [
  { id: "5321", merchant: "Abraham Lincoln", amount: "₦20,000", status: "Successful", orders: 15, date: "12/09/2024" },
  { id: "5322", merchant: "Abraham Lincoln", amount: "₦20,000", status: "Failed", orders: 15, date: "12/09/2024" },
];

export const getRecentSettlements = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ settlements: MOCK_SETTLEMENTS });
    }, 500);
  });
};