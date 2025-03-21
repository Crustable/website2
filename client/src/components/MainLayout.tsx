import { useState, useEffect } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Add toggle button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-10 top-4 bg-white p-2 rounded-r shadow-md"
          aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          <i className={`fas fa-chevron-${isSidebarOpen ? 'left' : 'right'}`}></i>
        </button>
        
        {/* Existing sidebar content */}
        // ...existing code...
      </div>

      {/* Main content */}
      <div className={`transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'lg:pl-64' : 'lg:pl-0'
      }`}>
        {children}
      </div>
    </div>
  );
}
