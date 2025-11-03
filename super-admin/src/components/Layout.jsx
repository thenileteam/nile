import { Outlet } from 'react-router-dom';
import Sidebar from './SideBAr';
import TopBar from './TopBar';

export default function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#FDFDFC]">
      
      {/* 1. TopBar is now at the top, full-width */}
      <div className="w-full z-10">
        <TopBar />
      </div>

      {/* 2. Content area is now a flex-row *below* the TopBar */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar - sits in the flex row */}
        <div className="z-20 bg-white md:relative">
          <Sidebar /> 
        </div>

        {/* Main Content - takes up remaining space */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}