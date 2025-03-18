import { Link } from "wouter";

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

const CategoryCard = ({ name, slug, description, icon, color }: CategoryCardProps) => {
  return (
    <div className="bg-slate-50 rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
      <div className={`h-40 ${color} flex items-center justify-center text-white`}>
        <i className={`fas fa-${icon} text-5xl`}></i>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <Link href={`/category/${slug}`}>
          <a className="text-blue-500 font-medium hover:text-blue-700 inline-flex items-center">
            Explore {name}
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
