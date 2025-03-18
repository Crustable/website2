import { Link } from "wouter";
import { formatDate } from "@/lib/utils";
import { Article } from "@/types";

interface FeaturedArticleProps {
  article: Article;
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  const { slug, title, excerpt, category, coverImage, updatedAt, author } = article;

  const categoryColorClasses = {
    audio: "bg-blue-100 text-blue-700 border-blue-200",
    lighting: "bg-yellow-100 text-yellow-800 border-yellow-200",
    video: "bg-red-100 text-red-800 border-red-200",
    graphics: "bg-green-100 text-green-800 border-green-200"
  };

  const colorClass = categoryColorClasses[category.slug as keyof typeof categoryColorClasses] || "bg-blue-100 text-blue-700 border-blue-200";

  return (
    <div className="bg-white overflow-hidden">
      {coverImage && (
        <div className="relative h-64 w-full bg-gray-100">
          <img 
            src={coverImage} 
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className={`inline-block ${colorClass} text-xs px-2 py-0.5 rounded-full border uppercase tracking-wide font-medium`}>
            {category.name}
          </span>
          <span className="ml-2 text-xs text-gray-500">Updated {formatDate(updatedAt)}</span>
        </div>
        
        <Link href={`/article/${slug}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-700 transition-colors">{title}</h3>
        </Link>
        
        <p className="text-gray-600 mb-5">{excerpt}</p>
        
        {author && (
          <div className="flex items-center pt-4 border-t border-gray-100">
            <div className="flex-shrink-0">
              <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                {author.avatar ? (
                  <img src={author.avatar} alt={author.name} className="h-10 w-10 object-cover" />
                ) : (
                  <i className="fas fa-user-circle text-3xl text-gray-400 flex justify-center items-center h-full"></i>
                )}
              </span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{author.name}</p>
              <p className="text-xs text-gray-500">{author.title}</p>
            </div>
          </div>
        )}
        
        <div className="mt-6">
          <Link 
            href={`/article/${slug}`} 
            className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Read article
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
