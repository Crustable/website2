import { createContext, useContext, useState, ReactNode } from "react";
import { Article } from "@/types";
import { articles } from "@/data/articles";

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: Article[];
  performSearch: (customQuery?: string) => void;
  isSearching: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const performSearch = (customQuery?: string) => {
    const query = (customQuery || searchQuery).toLowerCase().trim();
    
    if (!query) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    // Simulate a slight delay for search
    setTimeout(() => {
      const results = articles.filter(article => {
        const titleMatch = article.title.toLowerCase().includes(query);
        const contentMatch = article.content.toLowerCase().includes(query);
        const excerptMatch = article.excerpt.toLowerCase().includes(query);
        const categoryMatch = article.category.name.toLowerCase().includes(query);
        const tagMatch = article.tags?.some(tag => tag.toLowerCase().includes(query)) || false;
        
        return titleMatch || contentMatch || excerptMatch || categoryMatch || tagMatch;
      });

      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  };

  return (
    <SearchContext.Provider 
      value={{ 
        searchQuery, 
        setSearchQuery, 
        searchResults, 
        performSearch,
        isSearching
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
}
