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
      <BreadcrumbNavigation items={breadcrumbItems} />
      
      <div className="mb-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-3">MinistryTech Documentation</h1>
          <p className="text-gray-600 max-w-2xl">
            Find comprehensive documentation, tutorials, and troubleshooting guides for your ministry's tech equipment.
          </p>
        </header>
      </div>

      {/* Categories grid */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Browse by Category</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(category => (
            <a 
              key={category.id}
              href={`/category/${category.slug}`}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary bg-opacity-10 mb-4">
                <i className={`fas ${category.icon} text-2xl text-primary`}></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
              <p className="text-gray-500 text-sm">{category.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Featured Article */}
      {featuredArticle && <FeaturedArticle article={featuredArticle} />}

      {/* Recent Articles */}
      {recentArticles.length > 0 && (
        <ArticlesList articles={recentArticles} title="Recent Articles" />
      )}
    </MainLayout>
  );
}
