"use client";

import React from "react";
import ViewReportButton from "../reusable/ViewReportButton";

export default function FinancialCard({
  label,
  title,
  unit,
  growth,
}) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-md p-5 w-full shadow-sm flex justify-center">
      {/* ===== Content Section ===== */}
      <div className="flex flex-col items-center justify-center">
        {/* Label */}
        <span className="text-gray-600 text-sm">{label}</span>

        {/* Title */}
        <h2 className="text-2xl font-extrabold text-gray-900 flex items-baseline gap-1 mt-2">
          {title} <span className="font-normal text-lg text-gray-700">{unit}</span>
        </h2>

        {/* Growth */}
        <div className="flex items-center gap-1 mt-2">
          <span
            className={`text-lg ${
              growth?.startsWith("+") ? "text-green-600" : "text-red-600"
            }`}
          >
            ▲
          </span>
          <p
            className={`text-sm font-medium ${
              growth?.startsWith("+") ? "text-green-600" : "text-red-600"
            }`}
          >
            {growth}
          </p>
        </div>
      </div>

      {/* ===== Action Buttons ===== */}
      <div className="flex flex-col justify-between items-center mt-4 absolute right-4 top-0">
        <ViewReportButton />
      </div>
    </div>
  );
}
