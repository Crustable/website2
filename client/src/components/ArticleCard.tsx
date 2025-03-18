import { Link } from "wouter";
import { formatDate, getReadTime } from "@/lib/utils";
import { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { slug, title, excerpt, category, coverImage, updatedAt, content } = article;
  const readTime = getReadTime(content);

  const categoryColorClasses = {
    audio: "bg-blue-100 text-blue-700",
    lighting: "bg-yellow-100 text-yellow-800",
    video: "bg-red-100 text-red-800",
    graphics: "bg-green-100 text-green-800"
  };

  const colorClass = categoryColorClasses[category.slug as keyof typeof categoryColorClasses] || "bg-blue-100 text-blue-700";

  return (
    <div className="article-card bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden h-full flex flex-col">
      <div className="h-40 relative overflow-hidden">
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          {coverImage ? (
            <img 
              src={coverImage} 
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <i className={`fas ${category.icon} text-4xl text-gray-400`}></i>
          )}
        </div>
        <div className="absolute top-3 left-3">
          <span className={`inline-block ${colorClass} text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold`}>
            {category.name}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <Link href={`/article/${slug}`}>
          <h3 className="font-semibold text-lg mb-2 text-gray-900 hover:text-blue-700 transition-colors">{title}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 flex-1">{excerpt.length > 100 ? excerpt.substring(0, 100) + '...' : excerpt}</p>
        <div className="flex justify-between items-center text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100">
          <span>{readTime} min read</span>
          <span>Updated {formatDate(updatedAt)}</span>
        </div>
      </div>
    </div>
  );
}
