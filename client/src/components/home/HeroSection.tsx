import { useState } from "react";
import { useLocation } from "wouter";
import SearchInput from "@/components/search/SearchInput";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [, navigate] = useLocation();

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Documentation</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">Resources, guides, and tutorials for your ministry's technical needs.</p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <form 
            className="w-full max-w-md relative"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(searchQuery);
            }}
          >
            <SearchInput 
              className="w-full py-3 px-4 rounded-md text-slate-800"
              placeholder="What can we help you with?"
              fullWidth={true}
              onSearch={handleSearch}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
