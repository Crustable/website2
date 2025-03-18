import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { categories } from "@/data/categories";

interface SidebarProps {
  isOpen: boolean;
  currentTopic?: string;
  closeMobileMenu: () => void;
}

export default function Sidebar({ isOpen, currentTopic, closeMobileMenu }: SidebarProps) {
  return (
    <aside 
      className={cn(
        "w-full md:w-64 bg-white p-4 md:min-h-screen md:shadow-sm md:sticky md:top-16 md:h-[calc(100vh-4rem)] md:overflow-y-auto transform -translate-x-full md:translate-x-0 fixed top-0 left-0 h-full z-20 transition-transform duration-300 ease-in-out",
        isOpen && "mobile-menu-open"
      )}
    >
      {/* Mobile Close Button */}
      <div className="flex justify-between items-center md:hidden mb-6">
        <span className="font-bold text-xl text-primary">MinistryTech</span>
        <button 
          className="text-neutral" 
          onClick={closeMobileMenu}
          aria-label="Close mobile menu"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>
      
      {/* Navigation Menu */}
      <nav className="space-y-8">
        {/* Topics Nav */}
        <div>
          <h2 className="font-bold text-lg mb-3 text-neutral">Topics</h2>
          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category.id}>
                <Link 
                  href={`/category/${category.slug}`}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-secondary group transition-colors",
                    currentTopic === category.slug && "bg-primary bg-opacity-10 text-primary font-medium"
                  )}
                >
                  <i className={`fas ${category.icon} text-gray-400 group-hover:text-primary transition-colors`}></i>
                  <span>{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Resources */}
        <div>
          <h2 className="font-bold text-lg mb-3 text-neutral">Resources</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-secondary group transition-colors">
                <i className="fas fa-book text-gray-400 group-hover:text-primary transition-colors"></i>
                <span>Getting Started</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-secondary group transition-colors">
                <i className="fas fa-question-circle text-gray-400 group-hover:text-primary transition-colors"></i>
                <span>FAQs</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-secondary group transition-colors">
                <i className="fas fa-download text-gray-400 group-hover:text-primary transition-colors"></i>
                <span>Downloads</span>
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Contact */}
        <div>
          <h2 className="font-bold text-lg mb-3 text-neutral">Help</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-secondary group transition-colors">
                <i className="fas fa-envelope text-gray-400 group-hover:text-primary transition-colors"></i>
                <span>Contact Support</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
