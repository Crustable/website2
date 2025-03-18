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
        "w-64 bg-white border-r border-gray-200 lg:block fixed top-0 left-0 h-full z-40 pt-16 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto",
        isOpen && "translate-x-0"
      )}
    >
      {/* Mobile Close Button */}
      <div className="flex justify-between items-center lg:hidden border-b border-gray-200 p-4">
        <span className="font-bold text-lg text-primary">MinistryTech</span>
        <button 
          className="text-gray-500 hover:text-gray-700" 
          onClick={closeMobileMenu}
          aria-label="Close mobile menu"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>
      
      {/* Navigation Menu */}
      <nav className="p-4 space-y-6">
        {/* Topics Nav */}
        <div>
          <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Topics</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.id} className="mb-1">
                <Link 
                  href={`/category/${category.slug}`}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    currentTopic === category.slug 
                      ? "bg-blue-50 text-blue-700" 
                      : "text-gray-700 hover:text-blue-700 hover:bg-gray-50"
                  )}
                >
                  <i className={`fas ${category.icon} w-5 h-5 mr-2`}></i>
                  <span>{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Resources */}
        <div>
          <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Resources</h2>
          <ul>
            <li className="mb-1">
              <Link 
                href="/" 
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-blue-700 hover:bg-gray-50 transition-colors"
              >
                <i className="fas fa-book w-5 h-5 mr-2"></i>
                <span>Getting Started</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link 
                href="/" 
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-blue-700 hover:bg-gray-50 transition-colors"
              >
                <i className="fas fa-question-circle w-5 h-5 mr-2"></i>
                <span>FAQs</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link 
                href="/" 
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-blue-700 hover:bg-gray-50 transition-colors"
              >
                <i className="fas fa-download w-5 h-5 mr-2"></i>
                <span>Downloads</span>
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Contact */}
        <div>
          <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Help</h2>
          <ul>
            <li className="mb-1">
              <Link 
                href="/" 
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-blue-700 hover:bg-gray-50 transition-colors"
              >
                <i className="fas fa-envelope w-5 h-5 mr-2"></i>
                <span>Contact Support</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
