import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import MainLayout from "@/layouts/MainLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import ArticlesList from "@/components/ArticlesList";
import { useSearch } from "@/hooks/useSearch";
import { Article } from "@/types";

export default function SearchResults() {
  const [location] = useLocation();
  const { searchQuery, searchResults, performSearch } = useSearch();
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    // Extract query from URL
    const urlParams = new URLSearchParams(location.split('?')[1]);
    const queryParam = urlParams.get('q');
    
    if (queryParam) {
      setIsSearching(true);
      performSearch(queryParam);
      setIsSearching(false);
    }
  }, [location, performSearch]);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Search Results", href: "/search", isActive: true }
  ];

  return (
    <MainLayout>
      <BreadcrumbNavigation items={breadcrumbItems} />
      
      <div className="mb-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-3">Search Results</h1>
          {searchQuery && (
            <p className="text-gray-600">
              {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found for "{searchQuery}"
            </p>
          )}
        </header>
        
        {isSearching ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <ArticlesList 
            articles={searchResults} 
            title="Search Results" 
          />
        )}
      </div>
    </MainLayout>
  );
}
