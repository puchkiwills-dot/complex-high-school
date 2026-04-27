import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-[#1a2b48] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           {/* Placeholder for hero image pattern/gradient */}
           <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Nurturing Excellence, <br />
            <span className="text-[#d4af37]">Building Futures.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200">
            Welcome to Complex High School, where students are challenged to think critically, 
            lead with integrity, and serve with compassion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#d4af37] hover:bg-[#c4a027] text-[#1a2b48] font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-xl">
              Apply Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#1a2b48] text-white font-bold py-4 px-8 rounded-lg transition-all text-lg">
              Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1a2b48] mb-2">1,200+</div>
              <div className="text-gray-600 font-medium">Current Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1a2b48] mb-2">95+</div>
              <div className="text-gray-600 font-medium">Expert Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1a2b48] mb-2">40+</div>
              <div className="text-gray-600 font-medium">Sports & Clubs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1a2b48] mb-2">98%</div>
              <div className="text-gray-600 font-medium">College Acceptance</div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b48]">Upcoming Events</h2>
              <div className="h-1.5 w-20 bg-[#d4af37] mt-4"></div>
            </div>
            <a href="#" className="text-[#1a2b48] font-bold hover:underline mb-2">View All Events &rarr;</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="text-sm font-bold text-[#d4af37] mb-2 uppercase tracking-wider">May {item + 10}, 2026</div>
                  <h3 className="text-xl font-bold text-[#1a2b48] mb-3">Academic Showcase & Career Fair</h3>
                  <p className="text-gray-600 mb-4">
                    Join us for an evening of showcasing our students' projects and meeting with local industry professionals.
                  </p>
                  <a href="#" className="text-[#1a2b48] font-medium hover:text-[#d4af37] flex items-center">
                    Learn More <span className="ml-2">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
