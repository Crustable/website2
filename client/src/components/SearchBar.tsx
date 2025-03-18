import { useRef } from "react";
import { useLocation } from "wouter";
import { useSearch } from "@/hooks/useSearch";

interface SearchBarProps {
  isMobile: boolean;
}

export default function SearchBar({ isMobile }: SearchBarProps) {
  const [, navigate] = useLocation();
  const { searchQuery, setSearchQuery, performSearch } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch();
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <input 
        ref={inputRef}
        type="search" 
        placeholder="Search documentation..." 
        className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <i className="fas fa-search text-gray-400"></i>
      </div>
    </form>
  );
}
