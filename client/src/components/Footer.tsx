import { Link } from "wouter";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="bg-neutral text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">MinistryTech</h3>
            <p className="text-gray-400 text-sm">Empowering your ministry with technology solutions and support.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Topics</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/category/${category.slug}`} 
                    className="hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Getting Started</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Downloads</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Tutorials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><Link href="/" className="hover:text-white transition-colors">Newsletter</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} MinistryTech Documentation. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
