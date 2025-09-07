"use client";
import React from "react";
import { FiUser } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";


const menuItems = [ "CRM", "Utilities", "Insurance", "Assets", "Mutual", "Research", "Transact Online", "Goal GPS", "Financial Planning", "Wealth Report", "Other"];

const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Top section */}
      <div className="bg-blue-700 text-white px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FiUser className="text-xl" />
          <span className="font-semibold cursor-pointer">Profile</span>
        </div>
        <button onClick={onClose} className="text-2xl font-bold">
          &times;
        </button>
      </div>

      {/* Menu Buttons */}
      <div className="p-4 space-y-3 bg-white">
        {menuItems.map((item) => (
          <button
            key={item}
            className="w-full flex justify-between items-center px-4  rounded-md text-gray-800 font-medium active:bg-gray-900 transition duration-200"
          >
            <span>{item}</span>
            <IoIosArrowForward className="text-gray-600 text-xl" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileSidebar;
