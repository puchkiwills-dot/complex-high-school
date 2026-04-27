import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a2b48] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center font-bold text-[#1a2b48]">
                C
              </div>
              <span className="text-xl font-bold tracking-tight">COMPLEX HIGH SCHOOL</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Empowering students to achieve excellence through a rigorous academic curriculum, 
              diverse extracurricular activities, and a supportive community environment.
            </p>
          </div>
          <div>
            <h3 className="text-[#d4af37] font-bold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/student-life" className="hover:text-white transition-colors">Student Life</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#d4af37] font-bold mb-4 uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Chepseon, Kipkelion East, Kericho County</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@complexhigh.edu</li>
              <li>Office Hours: 8:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Complex High School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
