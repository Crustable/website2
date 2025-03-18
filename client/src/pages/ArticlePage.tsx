import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import MainLayout from "@/layouts/MainLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { Article } from "@/types";
import { formatDate, getReadTime } from "@/lib/utils";

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
        .slice(0, 5);
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
    audio: "bg-blue-100 text-blue-700 border-blue-200",
    lighting: "bg-yellow-100 text-yellow-800 border-yellow-200",
    video: "bg-red-100 text-red-800 border-red-200",
    graphics: "bg-green-100 text-green-800 border-green-200"
  };

  const colorClass = categoryColorClasses[article.category.slug as keyof typeof categoryColorClasses] || "bg-blue-100 text-blue-700 border-blue-200";
  const readTime = getReadTime(article.content);

  // Create table of contents from headings (simulated based on tags)
  const tableOfContents = [
    { id: "overview", title: "Overview" },
    { id: "setup", title: "Setup Guide" }
  ];

  // Add tag-based sections
  if (article.tags && article.tags.length > 0) {
    article.tags.forEach(tag => {
      tableOfContents.push({
        id: tag.toLowerCase().replace(/\s+/g, '-'),
        title: tag
      });
    });
  }

  return (
    <MainLayout currentTopic={article.category.slug}>
      <div className="flex flex-col min-h-screen">
        <div className="bg-white shadow-sm py-3 px-4 sm:px-6 lg:px-8 border-b sticky top-0 z-10">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>
        
        <div className="flex-grow">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Article Header */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-block ${colorClass} text-xs px-2 py-0.5 rounded-full border uppercase tracking-wide font-medium`}>
                    {article.category.name}
                  </span>
                  <span className="text-xs text-gray-500">Updated {formatDate(article.updatedAt)}</span>
                  <span className="text-xs text-gray-500">{readTime} min read</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
                
                {/* Table of contents links */}
                <div className="flex flex-wrap gap-2 mb-4 border-t border-b border-gray-100 py-3">
                  {tableOfContents.map((section, index) => (
                    <a 
                      key={index}
                      href={`#${section.id}`} 
                      className="inline-flex items-center text-sm text-blue-600 hover:underline"
                    >
                      <i className="fas fa-link mr-1 text-xs"></i>
                      {section.title}
                    </a>
                  ))}
                </div>
                
                {/* Article summary */}
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-6">
                  <h3 className="font-medium text-gray-900 mb-2">Summary</h3>
                  <p className="text-gray-700">{article.excerpt}</p>
                </div>
                
                {article.author && (
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0">
                      <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                        {article.author.avatar ? (
                          <img src={article.author.avatar} alt={article.author.name} className="h-10 w-10 object-cover" />
                        ) : (
                          <i className="fas fa-user-circle text-2xl text-gray-400 flex justify-center items-center h-full"></i>
                        )}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
                      <p className="text-xs text-gray-500">{article.author.title}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Article Content */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="prose prose-blue max-w-none">
                      {/* Article content sections */}
                      <div id="overview">
                        <h2>Overview</h2>
                        <div dangerouslySetInnerHTML={{ __html: article.content.substring(0, article.content.length / 3) }} />
                      </div>
                      
                      <div id="setup">
                        <h2>Setup Guide</h2>
                        <div dangerouslySetInnerHTML={{ __html: article.content.substring(article.content.length / 3, article.content.length * 2/3) }} />
                      </div>
                      
                      {article.tags && article.tags.map((tag, index) => (
                        <div key={index} id={tag.toLowerCase().replace(/\s+/g, '-')}>
                          <h2>{tag}</h2>
                          <div dangerouslySetInnerHTML={{ __html: article.content.substring(article.content.length * 2/3) }} />
                        </div>
                      ))}
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
                </div>
                
                <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => navigate(`/category/${article.category.slug}`)}
                      className="flex items-center justify-center"
                    >
                      <i className="fas fa-arrow-left mr-2"></i>
                      Back to {article.category.name}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="flex items-center justify-center"
                    >
                      <i className="fas fa-arrow-up mr-2"></i>
                      Back to top
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar with related articles */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Related Articles</h3>
                    <ul className="divide-y divide-gray-100">
                      {relatedArticles.map(relatedArticle => (
                        <li key={relatedArticle.id} className="py-2">
                          <Link href={`/article/${relatedArticle.slug}`} className="text-sm text-blue-600 hover:underline block">
                            {relatedArticle.title}
                          </Link>
                          <span className="text-xs text-gray-500">
                            {getReadTime(relatedArticle.content)} min read
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link href={`/category/${article.category.slug}`} className="text-sm text-blue-600 hover:underline flex items-center">
                        <i className="fas fa-folder mr-1"></i>
                        View all {article.category.name} articles
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
