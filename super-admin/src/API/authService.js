import Cookies from "js-cookie";
import ApiInstance from "./ApiInstance"; 

/**
 * Registers a new super admin.
 * POST /auth/register
 */
export const registerAdmin = async (firstName, lastName, email, password) => {
  try {
    const response = await ApiInstance.post("/auth/register", { 
      firstName,
      lastName,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || new Error("Registration failed");
  }
};

/**
 * Logs in a super admin.
 * POST /auth/login
 */
export const loginAdmin = async (email, password) => {
  try {
    const response = await ApiInstance.post("/auth/login", {
      email,
      password,
    });

    const { data } = response.data; 

    if (data.user && data.tokens) {
      // Set tokens
      Cookies.set("superAdminAccessToken", data.tokens.accessToken, {
        expires: 1 / 24, // 1 hour
        secure: true,
        sameSite: "None",
      });
      Cookies.set("superAdminRefreshToken", data.tokens.refreshToken, {
        expires: 7, // 7 days
        secure: true,
        sameSite: "None",
      });

      // --- THIS IS THE FIX ---
      // We must also save the user's ID and Role to cookies
      Cookies.set("superAdminId", data.user.id, {
        expires: 7, // 7 days
        secure: true,
        sameSite: "None",
      });
      Cookies.set("superAdminRole", "SUPER_ADMIN", {
        expires: 7, // 7 days
        secure: true,
        sameSite: "None",
      });
      // --- END OF FIX ---
    }

    return response.data;
  } catch (error) {
    throw error.response?.data || new Error("Login failed");
  }
};