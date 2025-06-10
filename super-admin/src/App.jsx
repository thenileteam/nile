import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import BusinessAccounts from "./pages/BusinessManagement";
import Products from "./pages/Product";
import Finance from "./pages/FinancialManagement";
import Orders from "./pages/OrderManagement";
import Analytics from "./pages/UserAnalytics";
import SupportTicket from "./pages/SupportTicket";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "users", element: <UserManagement /> },
      { path: "business", element: <BusinessAccounts /> },
      { path: "products", element: <Products /> },
      { path: "orders", element: <Orders /> },
      { path: "finance", element: <Finance /> },
      { path: "reports", element: <Analytics /> },
       { path: "support", element: <SupportTicket  /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;
