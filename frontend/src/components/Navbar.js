import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Start", path: "/start" },
  { label: "Templates", path: "/templates" },
  { label: "Pricing", path: "/pricing" }, // Updated: Now linked to a Pricing page
];

export default function Navbar({ onSignupOpen }) {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md fixed top-0 z-50">
      {/* Make the "Pixel" label clickable and redirect to the home page */}
      <div className="text-xl font-bold text-gray-900">
        <Link to="/">Pixel</Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((navItem, index) => (
          <div key={index} className="relative">
            {navItem.path ? (
              <Link to={navItem.path} className="text-gray-900 hover:text-gray-700">
                {navItem.label}
              </Link>
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-gray-900 hover:text-gray-700">Login</button>
        <button
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
          onClick={onSignupOpen}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}
