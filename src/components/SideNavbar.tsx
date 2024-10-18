/** @format */
"use client";

import { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
  UsersRound,
  FileText,
  ChevronRight,
  AlignHorizontalDistributeCenter,
  Flower2,
  ShieldCheck,
  LogOut
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  const handleLogout = () => {
    // Logic để đăng xuất ở đây (có thể xóa cookie, gọi API, v.v.)
    console.log("Đăng xuất");
  };

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}

      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Loài Hoa",
            href: "/",
            icon: Flower2,
            variant: "default"
          },
          {
            title: "Quản Lý Bộ",
            href: "/sets",
            icon: FileText,
            variant: "default"
          },
          {
            title: "Quản Lý Họ",
            href: "/surnames",
            icon: FileText,
            variant: "default"
          },
          {
            title: "Quản Lý Chi",
            href: "/genus",
            icon: FileText,
            variant: "default"
          },
          {
            title: "Quản Lý Hình Dạng",
            href: "/shapes",
            icon: FileText,
            variant: "default"
          },
          {
            title: "Quản Lý Bề Mặt",
            href: "/surfaces",
            icon: FileText,
            variant: "default"
          },
          {
            title: "Quản Lý Khẩu Độ",
            href: "/apertures",
            icon: FileText,
            variant: "default"
          },
          {
            title: "Model Training",
            href: "/model_trains",
            icon: AlignHorizontalDistributeCenter,
            variant: "ghost"
          },
          {
            title: "Tài Khoản User",
            href: "/users",
            icon: UsersRound,
            variant: "ghost"
          },
          {
            title: "Tài Khoản Admin",
            href: "/admins",
            icon: ShieldCheck,
            variant: "ghost"
          },
        ]}
      />

      {/* Tài khoản và đăng xuất */}
      <div className="absolute bottom-5 w-full px-3">
        {/* Chỉ hiển thị phần tài khoản và đăng xuất khi sidebar không thu gọn */}
        {!isCollapsed && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="secondary" className="w-full text-left flex items-center justify-between">
                <span className="text-sm font-semibold">NamJSDev</span>
                <UsersRound className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                <LogOut className="mr-2" />
                Đăng xuất
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}
