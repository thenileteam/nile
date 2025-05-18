import { Bell, Search, Dot } from 'lucide-react';
import ProfilePics from '../assets/Ellipse.png';

export default function TopBar() {
  return (
    <header className="bg-white px-6 py-3 shadow flex items-center justify-between">
      <div></div>
      <div className="flex items-center gap-4 elative">
         <Search className="text-gray-600 absolute ml-3 cursor-pointer" size={16} />
        <input
          type="text"
          placeholder="Search for anything"
          className="border rounded-full px-10 py-1 text-sm w-64 focus:outline-none"
        />
        <div className='relative'>
          <Dot className="text-[red] absolute bottom-0.5 cursor-pointer" size={32}  />
          <Bell className="text-gray-600 cursor-pointer" size={20}  />
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
