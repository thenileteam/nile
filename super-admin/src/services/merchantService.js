import ApiInstance from "../API/ApiInstance"; // Adjust path as needed

/**
 * Fetches the list of merchants, stats, and total count.
 * GET /merchants
 *
 */
export const getMerchants = async (params) => {
  try {
    // params can be { name, email, isOld, isActive, limit, offset }
    const response = await ApiInstance.get("/merchants", { params });
    // The response now contains { success: true, data: [...], total: 10, stats: {...} }
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error("Failed to fetch merchants");
  }
};

/**
 * Fetches a single merchant's details
 * GET /merchants/{storeId}
 * (This is still needed for the "View Details" panel)
 */
export const getMerchantById = async (storeId) => {
  try {
    const response = await ApiInstance.get(`/merchants/${storeId}`);
    return response.data; // { success: true, data: { ... } }
  } catch (error) {
    throw error.response?.data || new Error("Failed to fetch merchant details");
  }
};

// getMerchantStats() function has been removed.