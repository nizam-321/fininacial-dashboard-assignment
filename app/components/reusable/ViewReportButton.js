
"use client";
import React from "react";

const ViewReportButton = ({ text = "View Report", onClick, className  }) => {
  return (
    <button
      onClick={onClick}
      className={`border border-red-500 text-red-500 text-[10px] px-1 font-bold rounded-sm hover:bg-red-50 ${className}`}
    >
      {text}
    </button>
  );
};

export default ViewReportButton;