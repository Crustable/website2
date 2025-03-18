import { useState } from "react";
import { Link, useLocation } from "wouter";
import SearchInput from "@/components/search/SearchInput";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path || location.startsWith(path + '/');
  };

  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <a className="text-xl font-bold tracking-tight cursor-pointer">Ministry Tech</a>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className={`text-white hover:text-blue-300 font-medium ${isActive('/') && !isActive('/audio') && !isActive('/lighting') && !isActive('/video') && !isActive('/graphics') ? 'text-blue-300' : ''}`}>Home</a>
            </Link>
            <Link href="/category/audio">
              <a className={`text-white hover:text-blue-300 font-medium ${isActive('/category/audio') ? 'text-blue-300' : ''}`}>Audio</a>
            </Link>
            <Link href="/category/lighting">
              <a className={`text-white hover:text-blue-300 font-medium ${isActive('/category/lighting') ? 'text-blue-300' : ''}`}>Lighting</a>
            </Link>
            <Link href="/category/video">
              <a className={`text-white hover:text-blue-300 font-medium ${isActive('/category/video') ? 'text-blue-300' : ''}`}>Video</a>
            </Link>
            <Link href="/category/graphics">
              <a className={`text-white hover:text-blue-300 font-medium ${isActive('/category/graphics') ? 'text-blue-300' : ''}`}>Graphics</a>
            </Link>
          </nav>
          
          {/* Search Bar */}
          <div className="hidden md:block relative">
            <SearchInput className="py-1 px-3 rounded-md text-slate-800 w-48 focus:w-64 transition-all duration-300" />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 py-4 border-t border-slate-700">
            <Link href="/">
              <a className="text-white hover:text-blue-300 font-medium" onClick={closeMobileMenu}>Home</a>
            </Link>
            <Link href="/category/audio">
              <a className="text-white hover:text-blue-300 font-medium" onClick={closeMobileMenu}>Audio</a>
            </Link>
            <Link href="/category/lighting">
              <a className="text-white hover:text-blue-300 font-medium" onClick={closeMobileMenu}>Lighting</a>
            </Link>
            <Link href="/category/video">
              <a className="text-white hover:text-blue-300 font-medium" onClick={closeMobileMenu}>Video</a>
            </Link>
            <Link href="/category/graphics">
              <a className="text-white hover:text-blue-300 font-medium" onClick={closeMobileMenu}>Graphics</a>
            </Link>
            
            {/* Mobile Search */}
            <div className="relative mt-2">
              <SearchInput 
                className="py-2 px-4 rounded-md text-slate-800 w-full" 
                onSearch={closeMobileMenu}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
