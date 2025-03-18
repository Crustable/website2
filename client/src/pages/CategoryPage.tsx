import { useEffect, useState } from "react";
import { useParams } from "wouter";
import MainLayout from "@/layouts/MainLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticlesList from "@/components/ArticlesList";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";
import { Category, Article } from "@/types";
import { unslugify } from "@/lib/utils";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [categoryArticles, setCategoryArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);

  useEffect(() => {
    // Find the category
    const foundCategory = categories.find(c => c.slug === slug);
    setCategory(foundCategory || null);

    if (foundCategory) {
      // Get articles for this category
      const filtered = articles.filter(article => article.category.slug === slug);
      setCategoryArticles(filtered);

      // Get featured article for this category
      const featured = 
        filtered.find(article => article.featured) || 
        (filtered.length > 0 ? filtered[0] : null);
      setFeaturedArticle(featured);
    }
  }, [slug]);

  if (!category) {
    return (
      <MainLayout>
        <div className="py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
          <p className="text-gray-600 mb-6">The category you're looking for doesn't exist.</p>
          <a href="/" className="inline-flex items-center text-primary hover:underline">
            <i className="fas fa-arrow-left mr-2"></i> Back to Home
          </a>
        </div>
      </MainLayout>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: category.name, href: `/category/${category.slug}`, isActive: true }
  ];

  const remainingArticles = featuredArticle 
    ? categoryArticles.filter(article => article.id !== featuredArticle.id)
    : categoryArticles;

  return (
    <MainLayout currentTopic={category.slug}>
      <BreadcrumbNavigation items={breadcrumbItems} />
      
      <div className="mb-10" id="category-view">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-3">{category.name}</h1>
          <p className="text-gray-600 max-w-2xl">{category.description}</p>
        </header>
        
        {/* Featured Article */}
        {featuredArticle && <FeaturedArticle article={featuredArticle} />}
        
        {/* Articles Grid */}
        <ArticlesList 
          articles={remainingArticles} 
          title={`All ${category.name} Articles`} 
          categorySlug={category.slug} 
        />
      </div>
    </MainLayout>
  );
}
