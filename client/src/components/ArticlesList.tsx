import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";
import { Article } from "@/types";

interface ArticlesListProps {
  articles: Article[];
  title: string;
  categorySlug?: string;
}

export default function ArticlesList({ articles, title, categorySlug }: ArticlesListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("recent");
  const articlesPerPage = 6;

  // Sort articles
  const sortedArticles = [...articles].sort((a, b) => {
    if (sortOrder === "recent") {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    } else if (sortOrder === "popular") {
      return (b.viewCount || 0) - (a.viewCount || 0);
    } else if (sortOrder === "alpha") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  // Paginate articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = sortedArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="relative">
          <select 
            className="appearance-none pl-3 pr-10 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
            <option value="alpha">Alphabetical</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <i className="fas fa-chevron-down text-xs"></i>
          </div>
        </div>
      </div>
      
      {currentArticles.length > 0 ? (
        <>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {currentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="mt-10">
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
              />
            </div>
          )}
        </>
      ) : (
        <div className="bg-white rounded-lg p-8 text-center">
          <i className="fas fa-file-alt text-4xl text-gray-400 mb-2"></i>
          <h3 className="text-xl font-medium mb-2">No Articles Found</h3>
          <p className="text-gray-500">
            {categorySlug 
              ? `There are no articles available in the ${categorySlug} category yet.`
              : "No articles match your search criteria."}
          </p>
        </div>
      )}
    </div>
  );
}
