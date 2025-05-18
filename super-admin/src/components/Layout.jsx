import React from "react";
import Sidebar from './SideBAr';
import TopBar from './TopBar';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sticky Sidebar */}
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>

      {/* Right Section */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Sticky TopBar */}
        <div className="sticky top-0 z-10">
          <TopBar />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
