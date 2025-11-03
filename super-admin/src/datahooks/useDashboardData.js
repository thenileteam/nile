import { useState, useEffect } from "react";
import {
  getDashboardStats,
  getDashboardTrends,
  getFailedOrders,
  getRecentSettlements,
} from "../services/dashboardService";

// Helper to convert month number (e.g., 10) to month name (e.g., "Oct")
const monthMap = {
  1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun",
  7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"
};

export const useDashboardData = () => {
  const [stats, setStats] = useState(null);
  const [trends, setTrends] = useState([]);
  const [failedOrders, setFailedOrders] = useState([]);
  const [settlements, setSettlements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [statsResponse, trendsResponse, failedOrdersResponse, settlementsResponse] =
          await Promise.all([
            getDashboardStats(),
            getDashboardTrends(),
            getFailedOrders(),
            getRecentSettlements(),
          ]);
        
        // --- NEW PARSING LOGIC ---

        // 1. Process Stats
        // The API returns: {"stats": [...]}
        // We check for the 'stats' key, NOT Array.isArray()
        if (statsResponse.stats) {
          const statsObject = statsResponse.stats.reduce((acc, metric) => {
            acc[metric.metricType] = metric; // e.g., { orders: { ... } }
            return acc;
          }, {});
          setStats(statsObject);
        }

        // 2. Process Trends
        // The API returns: {"stats": [{ "_sum": { "value": 7 }, "month": 10 }, ...]}
        // We check for the 'stats' key here too
        if (trendsResponse.stats) {
          const processedTrends = trendsResponse.stats.map(item => ({
            month: monthMap[item.month] || "N/A", // Convert month number to name
            value: item._sum.value, // Get the value from the nested "_sum" object
          }));
          setTrends(processedTrends);
        }

        // 3. Process Failed Orders
        // The API returns: {"failedOrderReasons": []}
        // This check was already correct.
        if (failedOrdersResponse.failedOrderReasons) {
          setFailedOrders(failedOrdersResponse.failedOrderReasons);
        }

        // 4. Set Settlements (from mock)
        if (settlementsResponse.settlements) {
          setSettlements(settlementsResponse.settlements);
        }
        
      } catch (err) {
        setError(err.message || "Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { stats, trends, failedOrders, settlements, loading, error };
};