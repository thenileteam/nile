import { Bell, Search } from 'lucide-react';
import Logo from '../assets/logo.png';

export default function TopBar() {
  return (
    <header className="bg-white px-4 sm:px-6 py-3 border-b border-gray-200 flex items-center justify-between">
      
      {/*Left Section*/}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Nile Logo" className="w-35 h-8 object-contain" />
      </div>

      {/*Right Section*/}
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search 
            className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" 
            size={18} 
          />
          <input
            type="text"
            placeholder="Search for anything"
            className="border border-gray-300 rounded-xl pl-10 pr-4 py-2 text-sm w-full min-w-[300px] focus:outline-none focus:ring-1 focus:ring-green-700"
          />
        </div>
        <div className="relative">
          <Bell className="text-gray-600 cursor-pointer" size={24} />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </div>
      </div>
    </header>
  );
}