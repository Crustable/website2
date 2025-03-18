import { useState, useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticlesList from "@/components/ArticlesList";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";
import { Article } from "@/types";

export default function Home() {
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [recentArticles, setRecentArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Get featured article (first that has 'featured' flag)
    const featured = articles.find(article => article.featured) || articles[0];
    setFeaturedArticle(featured);

    // Get recent articles (except the featured one)
    const recent = articles
      .filter(article => article.id !== featured.id)
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 6);
    setRecentArticles(recent);
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/", isActive: true }
  ];

  return (
    <MainLayout>
      <div className="lg:pl-64 flex flex-col">
        <div className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8 border-b">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>
        
        <div className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <header className="max-w-3xl mb-8">
                <h1 className="text-3xl font-bold mb-4 text-gray-900">MinistryTech Documentation</h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Find comprehensive documentation, tutorials, and troubleshooting guides for your ministry's tech equipment.
                </p>
              </header>
            </div>

            {/* Categories grid */}
            <div className="mb-16">
              <h2 className="text-xl font-semibold mb-6 text-gray-900">Browse by Category</h2>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {categories.map(category => {
                  const categoryColors: Record<string, string> = {
                    audio: "bg-blue-50 text-blue-700 border-blue-200",
                    lighting: "bg-yellow-50 text-yellow-700 border-yellow-200",
                    video: "bg-red-50 text-red-700 border-red-200", 
                    graphics: "bg-green-50 text-green-700 border-green-200"
                  };
                  
                  const colorClass = categoryColors[category.slug] || "bg-blue-50 text-blue-700 border-blue-200";
                  
                  return (
                    <a 
                      key={category.id}
                      href={`/category/${category.slug}`}
                      className="flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    >
                      <div className={`flex items-center p-6 border-b ${colorClass.includes('border') ? colorClass.split(' ').filter(c => c.includes('border'))[0] : 'border-gray-200'}`}>
                        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${colorClass.split(' ').filter(c => c.includes('bg'))[0]} mr-4`}>
                          <i className={`fas ${category.icon} text-xl ${colorClass.split(' ').filter(c => c.includes('text'))[0]}`}></i>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900">{category.name}</h3>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 text-sm">{category.description}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Featured Article */}
            {featuredArticle && <FeaturedArticle article={featuredArticle} />}

            {/* Recent Articles */}
            {recentArticles.length > 0 && (
              <div className="mt-16">
                <ArticlesList articles={recentArticles} title="Recent Articles" />
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
