import { useState } from "react";
import { Link } from "wouter";
import SearchBar from "./SearchBar";

interface HeaderProps {
  toggleMobileMenu: () => void;
}

export default function Header({ toggleMobileMenu }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">MinistryTech</span>
        </Link>
        
        {/* Search Bar (Desktop) */}
        <div className="hidden md:block relative w-1/3">
          <SearchBar isMobile={false} />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral"
          onClick={toggleMobileMenu}
          aria-label="Open mobile menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
      
      {/* Search Bar (Mobile) */}
      <div className="md:hidden px-4 pb-3">
        <SearchBar isMobile={true} />
      </div>
    </header>
  );
}
