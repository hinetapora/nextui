// components/MobileNavbar.tsx

"use client";

import {FC} from "react";
import {Link as NextUILink} from "@nextui-org/react";
import {FaHome} from "react-icons/fa";
import {MdSearch, MdPeopleOutline, MdNotificationsNone, MdMailOutline} from "react-icons/md";
import {usePathname} from "next/navigation";

export interface MobileNavbarProps {
  routes: any[]; // Adjust based on your routes structure
  mobileRoutes?: any[]; // Adjust based on your mobileRoutes structure
  tag?: string;
  slug?: string;
  children?: React.ReactNode;
}

export const MobileNavbar: FC<MobileNavbarProps> = ({
  children,
  routes,
  mobileRoutes = [],
  slug,
  tag,
}) => {
  const pathname = usePathname();

  const handlePressNavbarItem = (name: string, url: string) => {
    console.log(`Navigating to ${name}: ${url}`);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-md lg:hidden">
      <div className="flex justify-around py-2">
        {/* Home */}
        <NextUILink
          aria-label="Home"
          className={`flex items-center justify-center transition-colors duration-200 ${
            isActive("/home") ? "text-blue-500" : "text-black"
          } hover:text-blue-500 focus:text-blue-500`}
          href="/home"
        >
          <FaHome className="w-6 h-6" />
        </NextUILink>

        {/* Search */}
        <NextUILink
          aria-label="Search"
          className={`flex items-center justify-center transition-colors duration-200 ${
            isActive("/search") ? "text-blue-500" : "text-black"
          } hover:text-blue-500 focus:text-blue-500`}
          href="/search"
        >
          <MdSearch className="w-6 h-6" />
        </NextUILink>

        {/* Communities */}
        <NextUILink
          aria-label="Communities"
          className={`flex items-center justify-center transition-colors duration-200 ${
            isActive("/communities") ? "text-blue-500" : "text-black"
          } hover:text-blue-500 focus:text-blue-500`}
          href="/communities"
        >
          <MdPeopleOutline className="w-6 h-6" />
        </NextUILink>

        {/* Notifications */}
        <NextUILink
          aria-label="Notifications"
          className={`relative flex items-center justify-center transition-colors duration-200 ${
            isActive("/notifications") ? "text-blue-500" : "text-black"
          } hover:text-blue-500 focus:text-blue-500`}
          href="/notifications"
        >
          <MdNotificationsNone className="w-6 h-6" />
        </NextUILink>

        {/* DMs */}
        <NextUILink
          aria-label="Direct Messages"
          className={`flex items-center justify-center transition-colors duration-200 ${
            isActive("/dm") ? "text-blue-500" : "text-black"
          } hover:text-blue-500 focus:text-blue-500`}
          href="/dm"
        >
          <MdMailOutline className="w-6 h-6" />
        </NextUILink>
      </div>
    </nav>
  );
};
