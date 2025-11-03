import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layouts and Pages
import ProtectedLayout from "./components/ProtectedLayout";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import MerchantsManagement from "./pages/MerchantsManagement"; // 1. Import new page
// ... other page imports

const router = createBrowserRouter([
  {
    path: "/", 
    element: <LoginPage />,
  },
  {
    path: "/signup", 
    element: <SignupPage />,
  },
  {
    path: "/dashboard", 
    element: <ProtectedLayout />,
    children: [
      { index: true, element: <Dashboard /> }, 
      
      // 2. Add the route for merchants
      // This matches your sidebar link to "/dashboard/business"
      { path: "business", element: <MerchantsManagement /> }, 
      
      // ... your other routes
      // { path: "users", element: <UserManagement /> },
      // { path: "products", element: <Products /> },
      // { path: "orders", element: <Orders /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;