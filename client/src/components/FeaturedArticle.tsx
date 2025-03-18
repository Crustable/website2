import { Link } from "wouter";
import { formatDate } from "@/lib/utils";
import { Article } from "@/types";

interface FeaturedArticleProps {
  article: Article;
}

export default function FeaturedArticle({ article }: FeaturedArticleProps) {
  const { slug, title, excerpt, category, coverImage, updatedAt, author } = article;

  const categoryColorClasses = {
    audio: "bg-blue-100 text-primary",
    lighting: "bg-yellow-100 text-yellow-800",
    video: "bg-red-100 text-red-800",
    graphics: "bg-green-100 text-green-800"
  };

  const colorClass = categoryColorClasses[category.slug as keyof typeof categoryColorClasses] || "bg-blue-100 text-primary";

  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4">Featured Article</h2>
      <Link 
        href={`/article/${slug}`} 
        className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <div className="h-48 w-full md:w-48 bg-gray-200 flex items-center justify-center">
              {coverImage ? (
                <img 
                  src={coverImage} 
                  alt={title}
                  className="h-48 w-full object-cover md:w-48"
                />
              ) : (
                <i className={`fas ${category.icon} text-5xl text-gray-400`}></i>
              )}
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center">
              <span className={`inline-block ${colorClass} text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold`}>
                {category.name}
              </span>
              <span className="ml-2 text-xs text-gray-500">Updated {formatDate(updatedAt)}</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-neutral">{title}</h3>
            <p className="mt-3 text-gray-500">{excerpt}</p>
            {author && (
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                    {author.avatar ? (
                      <img src={author.avatar} alt={author.name} className="h-10 w-10 object-cover" />
                    ) : (
                      <i className="fas fa-user-circle text-3xl text-gray-400 flex justify-center items-center h-full"></i>
                    )}
                  </span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-neutral">{author.name}</p>
                  <p className="text-xs text-gray-500">{author.title}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
