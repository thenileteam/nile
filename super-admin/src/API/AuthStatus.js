// AuthStatus.js
import Cookies from "js-cookie";

// Checks if any valid user token exists
export const isAuthenticated = () => {
  const isSuperAdmin = localStorage.getItem("superAdminRole") === "SUPER_ADMIN";
  // Add other roles here
  // const isStoreOwner = localStorage.getItem("storeOwnerRole") === "STORE_OWNER";

  const accessTokenKey = isSuperAdmin
    ? "superAdminAccessToken"
    : null; // Add other roles
    
  const token = Cookies.get(accessTokenKey) || localStorage.getItem(accessTokenKey);
  return !!token; // Return true if token exists, false otherwise
};

// Checks if the user is currently on a login/signup page
export const isAuthenticatingPage = () => {
    const currentPath = window.location.pathname.replace(/\/$/, "").split("?")[0];
    const authPaths = [
      "/", // Your login page
      "/signup", // Your signup page
      "/reset-password", // Example for later
    ];
    return authPaths.includes(currentPath);
  };