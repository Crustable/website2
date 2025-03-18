import { useSearchContext } from "@/contexts/SearchContext";

export function useSearch() {
  const context = useSearchContext();
  return context;
}
