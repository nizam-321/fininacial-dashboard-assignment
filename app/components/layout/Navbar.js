"use client";
import MobileSidebar from "./MobileSidebar";
import React, { useState, useEffect } from "react";
import { FiMenu, FiBell, FiSettings, FiLogOut } from "react-icons/fi";
import { FaLightbulb, FaBullseye, FaStar, FaGraduationCap, FaVideo} from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { TbUserUp } from "react-icons/tb";
import { GoKey } from "react-icons/go";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let lastScrollY = 0;


  return (
    <header
      className={`w-full bg-white shadow-md px-4 py-3 sticky top-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* ===== Main Container ===== */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-center">
        {/* ==== Top Row for Mobile ==== */}
        <div className="w-full flex items-center justify-center gap-3 md:hidden">
          {/* Menu Icon */}
          <button
            className="h-11 w-11 rounded-md flex items-center justify-center"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FiMenu className="text-3xl" />
          </button>

          {/* Search Bar */}
          <div className="relative bg-gray-100 h-11 rounded-md w-full max-w-sm flex items-center">
            <input
              type="text"
              placeholder="ex. Live portfolio"
              className="bg-gray-100 h-11 rounded-md px-3 pr-10 py-2 outline-none text-base w-full"
            />
            <div className="absolute right-0 top-0 h-full w-10 bg-gray-200 flex items-center justify-center rounded-r-md">
              <GoKey className="text-gray-500 text-xl" />
            </div>
          </div>

          {/* Arrow & Dropdown */}
          <div className="relative flex items-center text-2xl text-gray-600">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {isDropdownOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </button>

           {/* Icons Dropdown (Mobile) */}
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-max bg-white shadow-md rounded-md p-3 flex flex-col gap-3 text-left text-gray-700 text-sm font-medium z-50">
                <div className="flex items-center justify-start gap-2">
                  <FaBullseye />
                  <span>Target</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <FaLightbulb />
                  <span>Ideas</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <FiSettings />
                  <span>Settings</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <FiBell />
                  <span>Notifications</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <FaStar />
                  <span>Favorites</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <TbUserUp />
                  <span>Groups</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <FaUserPen />
                  <span>Profile</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <HiOutlineLockClosed />
                  <span>Lock</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <FaGraduationCap />
                  <span>Courses</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <FaVideo />
                  <span>Videos</span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <FiLogOut />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ==== Desktop Row ==== */}
        <div className="hidden md:flex items-center space-x-6 w-full justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="/wealth-elite-logo.png"
              alt="Wealth Elite"
              className="h-10 w-auto"
            />
          </div>

          {/* Search */}
          <div className="flex-1 mx-6">
            <div className="relative bg-gray-100 h-11 rounded-md w-full flex items-center">
              <input
                type="text"
                placeholder="ex. Live portfolio"
                className="bg-gray-100 h-11 rounded-md px-3 pr-10 py-2 outline-none text-base w-full"
              />
              <div className="absolute right-0 top-0 h-full w-10 bg-gray-200 flex items-center justify-center rounded-r-md">
                <GoKey className="text-gray-500 text-xl" />
              </div>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-start space-x-4 text-xl text-gray-600">
            <FaBullseye />
            <FaLightbulb />
            <FiSettings />
            <FiBell />
            <FaStar />
            <TbUserUp />
            <GoKey />
            <FaUserPen />
            <HiOutlineLockClosed />
            <FaGraduationCap />
            <FaVideo />
            <Link
              href="/logout"
              className="flex items-center space-x-1 text-sm text-gray-700 hover:text-red-600"
            >
              <FiLogOut />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ===== Backdrop & Sidebar ===== */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-40 z-40"
        ></div>
      )}

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </header>
  );
};

export default Navbar;
