import { Link } from "wouter";
import { Article } from "@/lib/data";

interface FeaturedArticlesProps {
  articles: Article[];
}

const FeaturedArticles = ({ articles }: FeaturedArticlesProps) => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Articles</h2>
          <Link href="/search">
            <a className="text-blue-500 hover:text-blue-700">View all</a>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <CategoryBadge category={article.category} />
                  <span className="text-slate-400 text-sm ml-auto">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-slate-600 mb-4">{article.excerpt}</p>
                <Link href={`/article/${article.slug}`}>
                  <a className="text-blue-500 font-medium hover:text-blue-700 inline-flex items-center">
                    Read Article
                    <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper component for category badges
const CategoryBadge = ({ category }: { category: string }) => {
  const colorMap: Record<string, string> = {
    audio: 'bg-blue-100 text-blue-800',
    lighting: 'bg-orange-100 text-orange-800',
    video: 'bg-red-100 text-red-800',
    graphics: 'bg-purple-100 text-purple-800'
  };
  
  const color = colorMap[category] || 'bg-gray-100 text-gray-800';
  
  return (
    <span className={`${color} text-xs font-medium px-2.5 py-0.5 rounded capitalize`}>
      {category}
    </span>
  );
};

export default FeaturedArticles;
