// components/TopNavbar.tsx

"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {useRouter} from "next/navigation";
import {useState} from "react";
import Image from "next/image";
import Logo from "@/public/android-chrome-512x512.png";

const TopNavbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      className="fixed top-0 left-0 right-0 z-50 bg-white "
      maxWidth="full"
      style={{height: "3.0rem"}}
    >
      <NavbarContent justify="start">
        <Dropdown isOpen={isMenuOpen} placement="bottom-start" onOpenChange={setIsMenuOpen}>
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="cursor-pointer transition-transform"
              size="sm"
              src="https://i.pravatar.cc/150?u=profile" // Placeholder; replace with actual profile URL
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="User Options"
            variant="flat"
            onAction={(actionKey) => router.push(`/${actionKey}`)}
          >
            <DropdownItem key="profile">My Profile</DropdownItem>
            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarBrand className="flex justify-center w-full">
        <Image priority alt="Logo" height={32} src={Logo} width={32} /> {/* Adjusted logo size */}
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="px-3 py-4 text-xs font-light border border-gray-300 text-black leading-tight"
            color="primary"
            radius="full"
            style={{
              height: "1.5rem", // Sets a smaller height directly
              fontSize: "0.75rem", // Smaller font size
            }}
            variant="ghost"
            onPress={() => router.push("/upgrade")}
          >
            Upgrade
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopNavbar;
