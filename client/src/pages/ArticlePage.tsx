import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import MainLayout from "@/layouts/MainLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { Article } from "@/types";
import { formatDate } from "@/lib/utils";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [, navigate] = useLocation();

  useEffect(() => {
    // Find the article
    const foundArticle = articles.find(a => a.slug === slug);
    setArticle(foundArticle || null);

    if (foundArticle) {
      // Get related articles from the same category
      const related = articles
        .filter(a => a.category.slug === foundArticle.category.slug && a.id !== foundArticle.id)
        .slice(0, 3);
      setRelatedArticles(related);
    }
  }, [slug]);

  if (!article) {
    return (
      <MainLayout>
        <div className="py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <a href="/" className="inline-flex items-center text-blue-600 hover:underline">
            <i className="fas fa-arrow-left mr-2"></i> Back to Home
          </a>
        </div>
      </MainLayout>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: article.category.name, href: `/category/${article.category.slug}` },
    { label: article.title, href: `/article/${article.slug}`, isActive: true }
  ];

  const categoryColorClasses = {
    audio: "bg-blue-100 text-blue-700",
    lighting: "bg-yellow-100 text-yellow-800",
    video: "bg-red-100 text-red-800",
    graphics: "bg-green-100 text-green-800"
  };

  const colorClass = categoryColorClasses[article.category.slug as keyof typeof categoryColorClasses] || "bg-blue-100 text-blue-700";

  return (
    <MainLayout currentTopic={article.category.slug}>
      <div className="lg:pl-64 flex flex-col">
        <div className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8 border-b">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>
        
        <div className="py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              {article.coverImage && (
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={article.coverImage} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              )}
              
              <div className="p-6 sm:p-8">
                <header className="mb-8">
                  <div className="flex items-center mb-4">
                    <span className={`inline-block ${colorClass} text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold`}>
                      {article.category.name}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">Updated {formatDate(article.updatedAt)}</span>
                  </div>

                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
                  
                  {article.author && (
                    <div className="flex items-center py-3 border-t border-b border-gray-100">
                      <div className="flex-shrink-0">
                        <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                          {article.author.avatar ? (
                            <img src={article.author.avatar} alt={article.author.name} className="h-10 w-10 object-cover" />
                          ) : (
                            <i className="fas fa-user-circle text-3xl text-gray-400 flex justify-center items-center h-full"></i>
                          )}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
                        <p className="text-xs text-gray-500">{article.author.title}</p>
                      </div>
                    </div>
                  )}
                </header>

                <div className="prose prose-blue max-w-none">
                  {/* In a real implementation, this would render MDX content */}
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {article.tags && article.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => navigate(`/category/${article.category.slug}`)}
                  className="flex items-center"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Back to {article.category.name}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center"
                >
                  <i className="fas fa-arrow-up mr-2"></i>
                  Back to top
                </Button>
              </div>
            </div>

            {relatedArticles.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-6 px-4">Related Articles</h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                  {relatedArticles.map(relatedArticle => (
                    <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
