import { useState } from "react";
import { Link } from "wouter";
import Pagination from "@/components/Pagination";
import { Article } from "@/types";
import { formatDate } from "@/lib/utils";

interface ArticlesListProps {
  articles: Article[];
  title: string;
  categorySlug?: string;
}

export default function ArticlesList({ articles, title, categorySlug }: ArticlesListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("recent");
  const articlesPerPage = 10; // Increased for condensed layout

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

  const getCategoryColorClass = (categorySlug: string) => {
    const categoryColorClasses: Record<string, string> = {
      audio: "bg-blue-100 text-blue-700 border-blue-200",
      lighting: "bg-yellow-100 text-yellow-800 border-yellow-200",
      video: "bg-red-100 text-red-800 border-red-200",
      graphics: "bg-green-100 text-green-800 border-green-200"
    };
    
    return categoryColorClasses[categorySlug] || "bg-blue-100 text-blue-700 border-blue-200";
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
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-100">
              {currentArticles.map((article) => {
                const colorClass = getCategoryColorClass(article.category.slug);
                
                return (
                  <li key={article.id} className="hover:bg-gray-50 transition-colors">
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-block ${colorClass} text-xs px-2 py-0.5 rounded-full border uppercase tracking-wide font-medium`}>
                          {article.category.name}
                        </span>
                        <span className="text-xs text-gray-500">Updated {formatDate(article.updatedAt)}</span>
                      </div>
                      
                      <Link href={`/article/${article.slug}`}>
                        <h3 className="font-semibold text-lg mb-1 text-gray-900 hover:text-blue-700 transition-colors">
                          {article.title}
                        </h3>
                      </Link>
                      
                      {/* Documentation links - simulated */}
                      <div className="flex flex-wrap gap-2 mt-1 ml-1">
                        <Link href={`/article/${article.slug}#overview`}>
                          <span className="text-sm text-blue-600 hover:underline flex items-center">
                            <i className="fas fa-file-alt mr-1 text-xs"></i> Overview
                          </span>
                        </Link>
                        <Link href={`/article/${article.slug}#setup`}>
                          <span className="text-sm text-blue-600 hover:underline flex items-center">
                            <i className="fas fa-cog mr-1 text-xs"></i> Setup Guide
                          </span>
                        </Link>
                        {article.tags && article.tags.length > 0 && (
                          <Link href={`/article/${article.slug}#${article.tags[0].toLowerCase().replace(/\s+/g, '-')}`}>
                            <span className="text-sm text-blue-600 hover:underline flex items-center">
                              <i className="fas fa-tag mr-1 text-xs"></i> {article.tags[0]}
                            </span>
                          </Link>
                        )}
                      </div>
                      
                      <p className="text-gray-600 text-sm mt-2">{article.excerpt.substring(0, 140)}...</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {totalPages > 1 && (
            <div className="mt-8">
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
