
"use client";

import React from "react";
import FinancialCard from "../cards/FinancialCard";
import data from "@/data/data.json";

const AumAndSip = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      {data.map((item, index) => (
        <FinancialCard
          key={index}
          label={item.label}
          title={item.title}
          unit={item.unit}
          growth={item.growth}
          trendLinkText={item.trendLinkText}
        />
      ))}
    </div>
  );
};

export default AumAndSip;
