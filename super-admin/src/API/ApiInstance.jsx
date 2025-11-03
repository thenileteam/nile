// ApiInstance.jsx
import axios from "axios";
import Cookies from "js-cookie";
import { isAuthenticatingPage } from "./AuthStatus";

// Create an Axios instance
const ApiInstance = axios.create({
   baseURL: "https://api.nile.ng/nileadmin/api",
  withCredentials: true,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

const retryAttempts = new Map();

// --- Helper Functions to manage roles ---

// Get the current user role
const getUserRole = () => {
  // Read role from Cookies instead of localStorage
  const isSuperAdmin = Cookies.get("superAdminRole") === "SUPER_ADMIN";
  return {
    isSuperAdmin,
  };
};

// Get the current user ID based on their role
const getUserId = () => {
  const { isSuperAdmin } = getUserRole();

  if (isSuperAdmin) {
    // Read ID from Cookies instead of localStorage
    return Cookies.get("superAdminId");
  }
  return null;
};

// --- Token Refresh and Logout Logic ---

// Function to refresh access token
const refreshAccessToken = async () => {
  try {
    const { isSuperAdmin } = getUserRole();
    if (!isSuperAdmin) {
      throw new Error("User role not detected");
    }
    const id = getUserId();
    
    const refreshTokenKey = isSuperAdmin
      ? "superAdminRefreshToken"
      : null; 

    // Read refresh token *only* from Cookies
    const refreshToken = Cookies.get(refreshTokenKey);

    if (!refreshToken || !id) {
      throw new Error("No refresh token or user ID available");
    }

    const response = await axios.post(
      "https://api.nile.ng/nileadmin/api/users/auth/refresh",
      {
        refreshToken,
        userId: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response?.data?.accessToken) {
      throw new Error("Failed to retrieve new access token");
    }
    const newAccessToken = response?.data?.accessToken;
    
    const accessTokenKey = isSuperAdmin
      ? "superAdminAccessToken"
      : null; 
      
    // Set new access token *only* in Cookies
    Cookies.set(accessTokenKey, newAccessToken, {
      expires: 1 / 24, // 1 hour
      secure: true,
      sameSite: "None",
    });

    ApiInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${newAccessToken}`;

    return newAccessToken;
  } catch (error) {
    handleRefreshTokenFailure();
    throw error;
  }
};

// Function to handle logout on refresh failure
const handleRefreshTokenFailure = () => {
  const { isSuperAdmin } = getUserRole();
  if (!isAuthenticatingPage()) {
    console.warn("Session expired. Logging out the user...");
    
    // Clear Super Admin data *only* from Cookies
    if (isSuperAdmin) {
      Cookies.remove("superAdminAccessToken");
      Cookies.remove("superAdminRefreshToken");
      Cookies.remove("superAdminId");
      Cookies.remove("superAdminRole");
    }
    
    window.location.href = "/";
  }
};

// --- Axios Interceptors ---

// 1. REQUEST Interceptor: Add token to every request
ApiInstance.interceptors.request.use(
  (config) => {
    const { isSuperAdmin } = getUserRole();
    
    const accessTokenKey = isSuperAdmin
      ? "superAdminAccessToken"
      : null; 

    // Read token *only* from Cookies
    const token = Cookies.get(accessTokenKey);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 2. RESPONSE Interceptor (No changes needed here)
let refreshTokenPromise = null;

ApiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (!originalRequest || originalRequest._retry) {
      return Promise.reject(error);
    }

    const requestKey = `${originalRequest.url}-${originalRequest.method}`;
    const currentAttempts = retryAttempts.get(requestKey) || 0;

    if (
      (error.response?.status === 401 ||
        error.response?.status === 403 ||
        error.response?.data.message === "Authorization failed.") &&
      currentAttempts < 1
    ) {
      retryAttempts.set(requestKey, currentAttempts + 1);

      try {
        if (!refreshTokenPromise) {
          refreshTokenPromise = refreshAccessToken();
        }
        const newAccessToken = await refreshTokenPromise;

        refreshTokenPromise.finally(() => {
          refreshTokenPromise = null;
          setTimeout(() => {
            retryAttempts.delete(requestKey);
          }, 1000);
        });

        const newConfig = {
          ...originalRequest,
          headers: {
            ...originalRequest.headers,
            Authorization: `Bearer ${newAccessToken}`,
          },
        };

        return ApiInstance(newConfig);
      } catch (refreshError) {
        handleRefreshTokenFailure();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default ApiInstance;