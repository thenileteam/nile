import { Bell, Search, Dot, Menu } from 'lucide-react';
import ProfilePics from '../assets/Ellipse.png';

export default function TopBar({ onToggleSidebar = () => {} }) {
  return (
    <header className="bg-white px-4 sm:px-6 py-3 shadow flex items-center justify-between">
      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-gray-600 focus:outline-none"
        onClick={onToggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Spacer for larger screens */}
      <div className="hidden md:block"></div>

      <div className="flex items-center gap-4 relative">
        <div className="relative">
          <Search className="text-gray-600 absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer" size={16} />
          <input
            type="text"
            placeholder="Search for anything"
            className="border rounded-full pl-10 pr-4 py-1 text-sm w-48 sm:w-64 focus:outline-none"
          />
        </div>
        <div className="relative">
          <Dot className="text-red-500 absolute bottom-0 -left-0.5 cursor-pointer" size={35} />
          <Bell className="text-gray-600 cursor-pointer" size={20} />
        </div>
        <img
          src={ProfilePics}
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
}