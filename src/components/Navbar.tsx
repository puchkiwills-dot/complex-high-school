import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#1a2b48] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center font-bold text-[#1a2b48] text-xl">
                C
              </div>
              <span className="text-xl font-bold tracking-tight hidden sm:block">
                COMPLEX HIGH SCHOOL
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-[#d4af37] px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link to="/about" className="hover:text-[#d4af37] px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
              <Link to="/academics" className="hover:text-[#d4af37] px-3 py-2 rounded-md text-sm font-medium transition-colors">Academics</Link>
              <Link to="/admissions" className="hover:text-[#d4af37] px-3 py-2 rounded-md text-sm font-medium transition-colors">Admissions</Link>
              <Link to="/contact" className="hover:text-[#d4af37] px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
             {/* Mobile menu button could go here */}
             <button className="text-white hover:text-[#d4af37]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
