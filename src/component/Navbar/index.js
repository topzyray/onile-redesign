"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "/public/assets/onile_light_ash.png";
import user from "/public/assets/tope.png";
import avatar from "/public/assets/avatar-white.svg";
import avatar_blue from "/public/assets/avatar-blue.svg";
import saved_prop from "/public/assets/save_property.svg";
import history from "/public/assets/history.svg";
import notification from "/public/assets/notification.svg";
import calculator from "/public/assets/calculator.svg";
import logout from "/public/assets/logout.svg";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userMenu, setUserMenu] = useState(false);
  const [userMenuLarge, setUserMenuLarge] = useState(false);

  // Pathname is for tracking active links
  const pathname = usePathname();

  // Hamburger handler
  const handleNav = () => {
    setMenuOpen((prevMenu) => !prevMenu);
    setUserMenu(false);
  };

  return (
    <nav className="fixed w-full h-[5rem] sm:h-[6.5rem] shadow-b-lg bg-[#1D2939] opacity-100 text-[#F2F4F7]">
      <div className="flex justify-between items-center h-full w-full px-8 sm:px-16 lg:px-[8.44rem]">
        {/* Site Logo */}
        <Link href="/">
          <Image src={logo} alt="Onile Logo" className="w-16 sm:w-20" priority />
        </Link>

        {/* Navigation Links */}
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex gap-5 lg:gap-8 text-base md:text-lg font-base">
            {navLinks.map((link) => {
              return (
                <Link
                  className={
                    pathname === link.href
                      ? "text-[#FF7F50] font-bold"
                      : "hover:underline hover:font-bold"
                  }
                  href={link.href}
                  key={link.name}
                >
                  <li>{link.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>

        {/* Toggler for User and Authentication Buttons */}
        <div className="hidden sm:block">
          {isLoggedIn ? (
            <Image
              src={user}
              alt="Profile image"
              width={30}
              height={30}
              className="w-10 h-10 rounded-full cursor-pointer mr-4"
              onClick={() => setUserMenuLarge((prevUserMenu) => !prevUserMenu)}
            />
          ) : (
            <Link
              href="/auth"
              className={`${
                pathname === "/auth"
                  ? "text-[#FF7F50] font-bold"
                  : "hover:underline hover:font-bold"
              }  flex flex-col justify-center items-center font-normal`}
            >
              <p className="">
                <Image src={avatar} alt="Profile avatar" />
              </p>
              <p className="p-1">Sign Up/Sign In</p>
            </Link>
          )}
        </div>

        {/* Mobile Menu Hamburger */}
        <div
          onClick={handleNav}
          className="sm:hidden cursor-pointer p-2 hover:bg-[#2a3648] hover:rounded-lg"
        >
          {!menuOpen ? (
            <AiOutlineMenu size={25} />
          ) : (
            <AiOutlineClose
              className="hover:bg-[#1D2939] hover:rounded-lg p-1"
              size={30}
            />
          )}
        </div>
      </div>

      <div
        className={
          menuOpen
            ? "fixed sm:hidden right-0 top-0 w-auto h-auto text-[#1D2939] bg-white border-2 rounded-2xl p-5 mt-16 mr-1 ease-in duration-500"
            : "fixed right-[-100%] h-auto top-0 p-5 mt-20 ease-in duration-500"
        }
      >
        <div className="flex flex-col w-full items-center justify-center gap-4">
          {/* Mobile Screen Nav Links */}
          <div
            className={userMenu ? "hidden text-center" : "block text-center"}
          >
            <ul className="text-xs flex flex-col gap-3 font-normal">
              {navLinks.map((link) => {
                return (
                  <Link
                    className={
                      pathname === link.href
                        ? "text-[#FF7F50] font-bold"
                        : "hover:underline hover:font-bold"
                    }
                    href={link.href}
                    key={link.name}
                    onClick={() => setMenuOpen(false)}
                  >
                    <li>{link.name}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="py-4 flex flex-col justify-center items-center">
          {isLoggedIn ? (
            <Image
              src={user}
              alt="Profile image"
              width={30}
              height={30}
              className="w-10 h-10 rounded-full hover:outline"
              onClick={() => setUserMenu((prevMenu) => !prevMenu)}
            />
          ) : (
            <Link
              href="/auth"
              className={`${
                pathname === "/auth"
                  ? "text-[#FF7F50] font-bold"
                  : "hover:underline hover:font-bold"
              }  flex flex-col justify-center items-center font-normal`}
            >
              <p className="focus:border-[#FF7F50]">
                <Image src={avatar_blue} alt="Profile avatar" />
              </p>
              <p className="text-sm" onClick={() => setMenuOpen(false)}>
                Sign Up/Sign In
              </p>
            </Link>
          )}
        </div>

        {/* Large Screen User Menu Pane*/}
        <div
          className={
            userMenuLarge
              ? "sm:fixed right-0 top-0 w-auto h-auto text-[#1D2939] bg-white border-2 rounded-2xl p-5 mt-20 mr-4 lg:mr-20 ease-in duration-500"
              : "fixed right-[-100%] h-auto top-0 p-5 mt-20 ease-in duration-500"
          }
        >
          <ul className="flex flex-col justify-center gap-3 text-xs font-normal text-[#1D2939]">
            <Link
              href="/user_details"
              className={
                pathname === "/user_details"
                  ? "text-[#FF7F50]"
                  : "hover:underline hover:font-bold"
              }
            >
              <li className="flex items-center gap-1.5">
                <Image
                  src={avatar_blue}
                  alt="Personal details"
                  width={20}
                  height={20}
                />
                <span>Personal Details</span>
              </li>
            </Link>

            <Link
              href="/save_properties"
              className={
                pathname === "/save_properties"
                  ? "text-[#FF7F50]"
                  : "hover:underline hover:font-bold"
              }
            >
              <li className="flex items-center gap-1.5">
                <Image
                  src={saved_prop}
                  alt="Personal details"
                  width={20}
                  height={20}
                />
                <span>Saved Properties</span>
              </li>
            </Link>

            <Link
              href="/search_history"
              className={
                pathname === "/search_history"
                  ? "text-[#FF7F50]"
                  : "hover:underline hover:font-bold"
              }
            >
              <li className="flex items-center gap-1.5">
                <Image
                  src={history}
                  alt="Personal details"
                  width={20}
                  height={20}
                />
                <span>Search History</span>
              </li>
            </Link>

            <Link
              href="/notifications"
              className={
                pathname === "/notifications"
                  ? "text-[#FF7F50]"
                  : "hover:underline hover:font-bold"
              }
            >
              <li className="flex items-center gap-1.5">
                <Image
                  src={notification}
                  alt="Personal details"
                  width={20}
                  height={20}
                />
                <span>Notification</span>
              </li>
            </Link>

            <Link
              href="/mortgage_calc"
              className={
                pathname === "/mortgage_calc"
                  ? "text-[#FF7F50]"
                  : "hover:underline hover:font-bold"
              }
            >
              <li className="flex items-center gap-1.5">
                <Image
                  src={calculator}
                  alt="Personal details"
                  width={20}
                  height={20}
                />
                <span>Mortgage Calculator</span>
              </li>
            </Link>

            <Link
              href=""
              className={
                pathname === "/"
                  ? "text-[#FF7F50]"
                  : "hover:underline hover:font-bold"
              }
              onClick={
                (() => setIsLoggedIn(false)) && (() => setUserMenuLarge(false))
              }
            >
              <li className="flex items-center gap-1.5">
                <Image
                  src={logout}
                  alt="Personal details"
                  width={20}
                  height={20}
                />
                <span className="text-[#FF7F50] hover:underline hover:font-semibold">Logout</span>
              </li>
            </Link>
          </ul>
        </div>

        {/* Mobile Screen User Menu Pane */}
        <div className={!userMenu ? "hidden" : "block"}>
          <ul className="flex flex-col justify-center gap-3 text-xs font-normal text-[#1D2939]">
            <Link
              href="/user_details"
              className={
                pathname === "/user_details"
                  ? "text-[#FF7F50]"
                  : "hover:underline hover:font-bold"
              }
            >
              <li className="flex items-center gap-1.5">
                <Image
                  src={avatar_blue}
                  alt="Personal details"
                  width={20}
                  height={20}
                />
                <span>Personal Details</span>
              </li>
            </Link>

            <Link
              href="/save_properties"
              className={
                pathname === "/save_properties"
                  ? "text-[#FF7F50]"
                  : "hover:underline hover:font-bold"
              }
            >
              <li className="flex items-center gap-1.5">
                <Image
                  src={saved_prop}
                  alt="Personal details"
                  width={20}
                  height={20}
                />
                <span>Saved Properties</span>
              </li>
            </Link>

            <Link
              href="/search_history"
              className={
                pathname === "/search_history"
                  ? "text-[#FF7F50]"
                  : "hover:underline hover:font-bold"
              }
            >
              <li className="flex items-center gap-1.5">
                <Image
                  src={history}
                  alt="Personal details"
                  width={20}
                  height={20}
                />
                <span>Search History</span>
              </li>
            </Link>

            <Link
              href="/notifications"
              className={
                pathname === "/notifications"
                  ? "text-[#FF7F50]"
                  : "hover:underline hover:font-bold"
              }
            >
              <li className="flex items-center gap-1.5">
                <Image
                  src={notification}
                  alt="Personal details"
                  width={20}
                  height={20}
                />
                <span>Notification</span>
              </li>
            </Link>

            <Link
              href="/mortgage_calc"
              className={
                pathname === "/mortgage_calc"
                  ? "text-[#FF7F50]"
                  : "hover:underline hover:font-bold"
              }
            >
              <li className="flex items-center gap-1.5">
                <Image
                  src={calculator}
                  alt="Personal details"
                  width={20}
                  height={20}
                />
                <span>Mortgage Calculator</span>
              </li>
            </Link>

            <Link
              href=""
              className={
                pathname === "/"
                  ? "text-[#FF7F50]"
                  : "hover:underline hover:font-bold"
              }
              onClick={(() => setIsLoggedIn(false)) && handleNav}
            >
              <li className="flex items-center gap-1.5">
                <Image
                  src={logout}
                  alt="Personal details"
                  width={20}
                  height={20}
                />
                <span className="text-[#FF7F50]">Logout</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
