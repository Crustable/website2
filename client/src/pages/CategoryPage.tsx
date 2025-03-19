import { useEffect, useState } from "react";
import { useParams } from "wouter";
import MainLayout from "@/layouts/MainLayout";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticlesList from "@/components/ArticlesList";
import CreateArticleForm from "@/components/CreateArticleForm";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";
import { Category, Article } from "@/types";
import { unslugify } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon, PlusIcon } from "lucide-react";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [categoryArticles, setCategoryArticles] = useState<Article[]>([]);
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(true);
  const [createFormOpen, setCreateFormOpen] = useState(false);

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
      
      <div className="mb-16" id="category-view">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-3">{category.name}</h1>
          <p className="text-gray-600 max-w-2xl">{category.description}</p>
        </header>
        
        {/* Collapsible Featured Article */}
        {featuredArticle && (
          <div className="mb-8">
            <Collapsible
              open={isFeaturedOpen}
              onOpenChange={setIsFeaturedOpen}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h2 className="text-xl font-semibold">Featured Article</h2>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="px-2 h-8 hover:bg-gray-100">
                    {isFeaturedOpen ? (
                      <span className="flex items-center text-gray-600">
                        <ChevronUpIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">Hide</span>
                      </span>
                    ) : (
                      <span className="flex items-center text-gray-600">
                        <ChevronDownIcon className="h-4 w-4 mr-1" />
                        <span className="text-sm">Show</span>
                      </span>
                    )}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <FeaturedArticle article={featuredArticle} />
              </CollapsibleContent>
            </Collapsible>
          </div>
        )}
        
        {/* Articles Grid */}
        <ArticlesList 
          articles={remainingArticles} 
          title={`All ${category.name} Articles`} 
          categorySlug={category.slug} 
        />
        
        {/* Create New Article Button */}
        <div className="mt-10 text-center">
          <Button 
            onClick={() => setCreateFormOpen(true)}
            size="lg"
            className="gap-2"
          >
            <PlusIcon className="h-5 w-5" />
            Create New Article
          </Button>
        </div>
        
        {/* Create Article Form Dialog */}
        {category && (
          <CreateArticleForm
            open={createFormOpen}
            setOpen={setCreateFormOpen}
            category={category}
          />
        )}
      </div>
    </MainLayout>
  );
}
