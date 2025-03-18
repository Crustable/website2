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
    audio: "bg-blue-100 text-primary",
    lighting: "bg-yellow-100 text-yellow-800",
    video: "bg-red-100 text-red-800",
    graphics: "bg-green-100 text-green-800"
  };

  const colorClass = categoryColorClasses[category.slug as keyof typeof categoryColorClasses] || "bg-blue-100 text-primary";

  return (
    <Link 
      href={`/article/${slug}`} 
      className="article-card block bg-white rounded-lg shadow-sm hover:shadow-md transition-all overflow-hidden"
    >
      <div className="h-40 overflow-hidden">
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
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
      </div>
      <div className="p-5">
        <div className="flex items-center mb-2">
          <span className={`inline-block ${colorClass} text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold`}>
            {category.name}
          </span>
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{excerpt}</p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{readTime} min read</span>
          <span>Updated {formatDate(updatedAt)}</span>
        </div>
      </div>
    </Link>
  );
}
