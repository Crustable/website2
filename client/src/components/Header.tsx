import { useState } from "react";
import { Link } from "wouter";
import SearchBar from "./SearchBar";

interface HeaderProps {
  toggleMobileMenu: () => void;
}

export default function Header({ toggleMobileMenu }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8 flex h-16 justify-between items-center">
        {/* Left section with menu button and logo */}
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-500 hover:text-gray-700 mr-4 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Open mobile menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-bold text-xl text-blue-600">MinistryTech</span>
          </Link>
        </div>
        
        {/* Search Bar (Desktop) */}
        <div className="hidden md:block relative w-full max-w-md mx-4">
          <SearchBar isMobile={false} />
        </div>
        
        {/* Right section */}
        <div className="flex items-center">
          <a 
            href="https://github.com/yourusername/ministry-tech-docs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 ml-4"
            aria-label="GitHub repository"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
        </div>
      </div>
      
      {/* Search Bar (Mobile) */}
      <div className="md:hidden px-4 pb-3 border-b border-gray-200">
        <SearchBar isMobile={true} />
      </div>
    </header>
  );
}
