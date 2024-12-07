import React from "react";
import Image from "next/image";
import {
  ShoppingCartIcon,
  UserIcon,
  ArrowDownTrayIcon as DownloadIcon,
  FilmIcon,
} from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  const menuItems = [
    { label: "فیلم معرفی", href: "#", icon: FilmIcon },
    { label: "محصولات و خدمات", href: "#", icon: null },
    { label: "تماس با ما", href: "#", icon: null },
  ];

  const actionItems = [
    {
      label: "دانلود اپلیکیشن",
      href: "#",
      icon: DownloadIcon,
      isButton: true,
    },
    { label: "سبد سفارش", href: "#", icon: ShoppingCartIcon },
    { label: "ورود | ثبت‌نام", href: "#", icon: UserIcon },
  ];

  return (
    <header className="bg-white shadow-md relative  ">
      <div className="container mx-auto  max-w-[1100px] flex items-center justify-between p-4">
        <div className="flex items-center">
          <Image
            src="/images/logo.JPG"
            alt="Logo"
            width={42}
            height={42}
            className="w-10 h-10 ml-[8px]"
          />
          <span className="font-bold text-[25px] text-black-900">لدیما</span>
        </div>

        <nav className="flex text-sm items-center space-x-10">
          {menuItems.map(({ label, href, icon: Icon }, index) => (
            <a
              key={index}
              href={href}
              className="flex items-center text-gray-700 hover:text-blue-600 transition ml-[30px]"
            >
              {Icon && <Icon className="w-5 h-5 ml-1" />}
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="flex  text-sm">
          {actionItems.map(({ label, href, icon: Icon, isButton }, index) => {
            if (isButton) {
              return (
                <button
                  key={index}
                  className="flex items-center bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 transition"
                >
                  {Icon && <Icon className="w-5 h-5 ml-2" />}
                  <span>{label}</span>
                </button>
              );
            }
            return (
              <a
                key={index}
                href={href}
                className="flex items-center relative text-gray-700 hover:text-blue-600 transition mr-[18px]"
              >
                {Icon && <Icon className="w-5 h-5 ml-1" />}
                <span>{label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
