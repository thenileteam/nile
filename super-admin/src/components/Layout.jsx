import React, { useState } from "react";
import Sidebar from './SideBAr';
import TopBar from './TopBar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar: Hidden on mobile*/}
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 transform bg-white shadow-md transition-transform duration-300 ease-in-out md:sticky md:top-0 md:h-screen md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar onLinkClick={closeSidebar} />
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-opacity-50 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Right Section */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* TopBar with hamburger menu toggle */}
        <div className="sticky top-0 z-10">
          <TopBar onToggleSidebar={toggleSidebar} />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}