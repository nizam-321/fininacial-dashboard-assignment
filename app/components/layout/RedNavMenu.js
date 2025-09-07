// path: app/components/RedNavMenu.jsx
"use client";
import React from "react";
import Link from "next/link";

const navLinks = [
  { label: "CRM", href: "/crm" },
  { label: "Utilities", href: "/utilities" },
  { label: "Insurance", href: "/insurance" },
  { label: "Assets", href: "/assets" },
  { label: "Mutual", href: "/mutual" },
  { label: "Research", href: "/research" },
  { label: "Transact Online", href: "/transact-online" },
  { label: "Goal GPS", href: "/goal-gps" },
  { label: "Financial Planning", href: "/financial-planning" },
  { label: "Wealth Report", href: "/wealth-report" },
  { label: "Other", href: "/other" },
];

const RedNavMenu = () => {
  return (
    <nav className="hidden  md:block bg-red-600 text-white w-full">
      <ul className="flex  items-center justify-between mx-16 py-2 gap-4 text-sm font-medium overflow-x-auto">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="hover:underline whitespace-nowrap transition duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RedNavMenu;
