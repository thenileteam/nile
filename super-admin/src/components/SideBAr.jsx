import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users2,
  ShoppingCart,
  Archive,
  ShieldCheck,
  PanelLeft,
} from "lucide-react";
import ProfilePics from "../assets/Ellipse.png";

const menuItems = [
  { name: "Dashboard Overview", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Merchants Management", icon: Users2, path: "/dashboard/business" },
  { name: "Orders & Transactions", icon: ShoppingCart, path: "/dashboard/orders" },
  { name: "Settlements", icon: Archive, path: "/dashboard/settlements" }, 
  { name: "Admin Users & Roles", icon: ShieldCheck, path: "/dashboard/users" },
];

function Sidebar({ onLinkClick = () => {} }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className={`bg-white h-full flex relative flex-col transition-all duration-300 border-r border-gray-200 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center -right-5 absolute justify-end py-3">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 text-gray-600 rounded-md hover:bg-gray-100"
        >
          <PanelLeft size={18} />
        </button>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={idx}
              to={item.path}
              end={item.path === "/dashboard"}
              onClick={onLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3 px-4 rounded-lg cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-[#004324] text-white font-semibold"
                    : "text-[#004324] hover:bg-green-50"
                } ${isCollapsed ? "justify-center" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`text-xl ${
                      isActive ? "text-white" : "text-[#004324]"
                    }`}
                  />
                  {!isCollapsed && (
                    <span className="text-sm">{item.name}</span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* New User Profile Section */}
      <div className={`p-4 border-t border-dashed transition-all ${isCollapsed ? 'hidden' : 'block'}`}>
        <div className="flex items-center gap-3">
          <img
            src={ProfilePics}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-sm text-gray-800">Super Admin</div>
            <div className="text-xs text-gray-500">Founder Access</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;