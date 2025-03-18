import { Link } from "wouter";
import { categories } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ministry Tech</h3>
            <p className="text-slate-400">Technical resources and support for ministry teams.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-slate-400 hover:text-white" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-white" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-white" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-slate-400 hover:text-white" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.slug}>
                  <Link href={`/category/${category.slug}`}>
                    <a className="text-slate-400 hover:text-white">{category.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-slate-400 hover:text-white">Getting Started</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-slate-400 hover:text-white">Tutorials</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-slate-400 hover:text-white">Troubleshooting</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-slate-400 hover:text-white">Equipment Guides</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter for the latest tech tips and resources.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full py-2 px-3 rounded text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Ministry Tech Documentation. Built with ❤️ for ministry tech teams.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
