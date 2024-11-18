import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Brand Name */}
        <span className="text-2xl font-semibold text-gray-900 dark:text-white">
          Zabzul Supratman
        </span>

        {/* Navigation Links */}
        <div className="text-2xl md:flex space-x-10">
          <Link
            href="#"
            className="text-blue-700 dark:text-blue-500 font-medium hover:underline"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-500"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-500"
          >
            Services
          </Link>
          <Link
            href="/Tabel"
            className="text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-500"
          >
            Table
          </Link>
          <Link
            href="#"
            className="text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-500"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
