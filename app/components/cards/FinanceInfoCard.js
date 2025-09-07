"use client";

import React from "react";

export default function FinanceInfoCard({
  icon,
  titile,
  amount,
  total,
  className,
  children,
}) {
  return (
    <div
      className={`relative bg-white border-r-2 border-gray-200 p-4 w-[250px] flex-shrink-0 ${className}`}
    >
      {/* Optional Button (e.g. View Report) */}
      {children && (
        <div className="absolute top-0 right-2">
          {children}
        </div>
      )}

      {/* Main Content */}
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <img src={icon} alt="icon" className="w-12 h-12" />
        </div>
        <div className="flex flex-col">
          <div className="gap-1 border-b-2 border-gray-200 pr-8 pb-1">
            <span className="text-2xl mr-2">{total}</span>
            <span className="text-gray-700 text-sm">{titile}</span>
          </div>
          <span className="text-gray-500 text-sm mt-2">{amount} INR</span>
        </div>
      </div>
    </div>
  );
}
