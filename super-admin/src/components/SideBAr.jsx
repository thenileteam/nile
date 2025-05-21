import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Store,
  Package,
  Flag,
  ShoppingCart,
  Landmark,
  NotepadText,
  Headset,
  MonitorCog,
} from "lucide-react";
import Logo from "../assets/logo.png";

const menuItems = [
  { name: "Dashboard Overview", icon: LayoutDashboard, path: "/" },
  { name: "User Management", icon: Users, path: "/users" },
  { name: "Business Accounts", icon: Store, path: "/business" },
  { name: "Products", icon: Package, path: "/products" },
  { name: "Feature Flags", icon: Flag, path: "/features" },
  { name: "Order Management", icon: ShoppingCart, path: "/orders" },
  { name: "Financial Management", icon: Landmark, path: "/finance" },
  { name: "Report & Analytics", icon: NotepadText, path: "/reports" },
  { name: "Support & Tickets", icon: Headset, path: "/support" },
  { name: "System & Settings", icon: MonitorCog, path: "/settings" },
];

function Sidebar({ onLinkClick = () => {} }) {
  return (
    <aside className="w-64 bg-white shadow-md h-full flex flex-col">
      <div className="px-10 py-3 flex justify-center items-center">
        <img src={Logo} alt="Nile Logo" className="w-25 object-contain" />
      </div>

      <nav className="flex-1 p-1">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={idx}
              to={item.path}
              end={item.path === "/"}
              onClick={onLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-2 py-3 px-4 rounded-2xl cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-[#004324] text-white font-semibold"
                    : "text-[#004324]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`text-xl ${
                      isActive ? "text-white" : "text-[#004324]"
                    }`}
                  />
                  <span className="text-sm">{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="px-6 py-4 border-t text-sm text-gray-500">
        <div className="font-semibold">Super Admin</div>
        <div>Founder Access</div>
      </div>
    </aside>
  );
}

export default Sidebar;