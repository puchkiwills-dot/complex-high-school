import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-[#1a2b48] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#d4af37] rounded-full flex items-center justify-center font-bold text-[#1a2b48] text-lg md:text-xl">
                C
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight hidden sm:block">
                COMPLEX HIGH
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 lg:space-x-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="hover:text-[#d4af37] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
             <button 
               onClick={() => setIsOpen(!isOpen)}
               className="text-white hover:text-[#d4af37] p-2"
               aria-label="Toggle menu"
             >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#1a2b48] border-t border-gray-700 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="block hover:bg-[#d4af37] hover:text-[#1a2b48] px-3 py-4 rounded-md text-base font-medium transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
