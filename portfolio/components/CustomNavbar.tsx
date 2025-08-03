"use client";

import React, { useState } from "react";
import Link from "next/link";

// T+K Logo Component
const TKLogo = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* T Letter */}
      <path 
        d="M8 8h12v4H16v16h-4V12H8V8z" 
        fill="currentColor"
      />
      {/* K Letter */}
      <path 
        d="M22 8h4v10l6-10h5l-7 11 8 9h-5l-6-7v7h-4V8z" 
        fill="currentColor"
      />
    </svg>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", textcolor: "text-white hover:text-blue-500"},
    { name: "Stack", href: "#stack", textcolor: "text-fuchsia-500 hover:text-fuchsia-700"},
    { name: "Project", href: "#project", textcolor: "text-indigo-500 hover:text-indigo-700"},
  ];

  return (
    <nav className="fixed w-full top-0 z-[9999] backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <TKLogo />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${item.textcolor}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="bg-gradient-to-br from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 text-white px-4 py-2 rounded-full shadow-[0_3px_24px_rgba(147,51,234,0.4)] transition font-medium"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:text-gray-900 dark:focus:text-white transition-all duration-300"
            >
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  isOpen ? 'rotate-90' : 'rotate-0'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    className="transition-all duration-300"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    className="transition-all duration-300"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="backdrop-blur-3xl bg-white/10 dark:bg-black/10 border-t border-gray-200/20 dark:border-gray-700/20 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium hover:bg-white/50 dark:hover:bg-black/50 rounded-md transition-all duration-300 transform ${item.textcolor} ${
                  isOpen 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isOpen ? `${index * 100}ms` : '0ms' 
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className={`px-3 py-2 transition-all duration-300 transform ${
              isOpen 
                ? 'translate-y-0 opacity-100' 
                : '-translate-y-4 opacity-0'
            }`}
            style={{ 
              transitionDelay: isOpen ? `${navItems.length * 100}ms` : '0ms' 
            }}>
              <Link
                href="#contact"
                className="block w-full text-center bg-gradient-to-br from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 text-white px-4 py-2 rounded-full font-medium shadow-[0_3px_24px_rgba(147,51,234,0.4)] hover:shadow-[0_12px_32px_rgba(147,51,234,0.6)] transform hover:scale-105 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}