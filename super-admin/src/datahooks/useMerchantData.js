import { useState, useEffect, useCallback } from "react";
import {
  getMerchants,
  getMerchantById,
} from "../services/merchantService"; // Removed getMerchantStats

export const useMerchantsData = () => {
  // State for the 3 stat cards
  const [stats, setStats] = useState({ totalStores: 0, oldStores: 0, newStores: 0 }); // Updated keys
  // State for the merchants list in the table
  const [merchants, setMerchants] = useState([]);
  // State for the selected merchant details panel
  const [selectedMerchant, setSelectedMerchant] = useState(null);
  
  // State for filters
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'new', 'old'
  const [search, setSearch] = useState("");
  const [date, setDate] = useState(null);

  // State for pagination
  const [pagination, setPagination] = useState({
    limit: 10,
    offset: 0,
    total: 0,
  });

  // Loading and error states
  // Removed loadingStats, as it's now one call
  const [loadingMerchants, setLoadingMerchants] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [error, setError] = useState(null);

  // Removed the separate fetchStats function

  // Fetch the list of merchants AND stats
  const fetchMerchants = useCallback(async () => {
    try {
      setLoadingMerchants(true);
      setError(null);
      
      const params = {
        limit: pagination.limit,
        offset: pagination.offset,
        name: search || undefined,
        isOld: activeTab === 'old' ? true : (activeTab === 'new' ? false : undefined),
      };

      const response = await getMerchants(params);
      if (response.success) {
        setMerchants(response.data); // Set merchants list
        setStats(response.stats);     // Set stats from the same call
        setPagination(prev => ({ ...prev, total: response.total })); // Set total for pagination
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingMerchants(false);
    }
  }, [pagination.limit, pagination.offset, search, activeTab]);

  // Fetch details for a single merchant (no change here)
  const selectMerchant = useCallback(async (storeId) => {
    try {
      setLoadingDetails(true);
      setSelectedMerchant(null);
      const response = await getMerchantById(storeId);
      if (response.success) {
        setSelectedMerchant(response.data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingDetails(false);
    }
  }, []);

  const clearSelectedMerchant = () => {
    setSelectedMerchant(null);
  };

  // Fetch merchants on initial load or when filters/page changes
  useEffect(() => {
    fetchMerchants();
  }, [fetchMerchants]);

  // Reset pagination when filters change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPagination(prev => ({ ...prev, offset: 0 }));
  };

  const handleSearchChange = (searchTerm) => {
    setSearch(searchTerm);
    setPagination(prev => ({ ...prev, offset: 0 }));
  };

  const handlePageChange = (newOffset) => {
    setPagination(prev => ({ ...prev, offset: newOffset }));
  };

  return {
    stats,
    merchants,
    pagination,
    selectedMerchant,
    // loadingStats removed
    loadingMerchants,
    loadingDetails,
    error,
    
    // Filters and handlers
    activeTab,
    search,
    date,
    setDate,
    handleTabChange,
    handleSearchChange,
    
    // Actions
    selectMerchant,
    clearSelectedMerchant,
    handlePageChange,
  };
};