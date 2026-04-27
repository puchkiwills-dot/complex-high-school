import React from 'react';

const StudentLife: React.FC = () => {
  const activities = [
    { title: 'Athletics', description: 'Over 20 varsity sports including basketball, soccer, and track.' },
    { title: 'Clubs & Societies', description: 'From Robotics to Debate, find your passion among 40+ student-led clubs.' },
    { title: 'Arts & Music', description: 'Award-winning choir, orchestra, and vibrant visual arts programs.' },
    { title: 'Leadership', description: 'Student Council and mentorship programs to develop tomorrow\'s leaders.' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2b48] mb-4">Student Life</h1>
          <div className="h-1.5 w-24 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Education at Complex High School extends far beyond the classroom. 
            We offer a rich tapestry of experiences that help students discover their 
            talents and build lifelong friendships.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {activities.map((act, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:bg-white hover:shadow-xl transition-all group">
              <h3 className="text-xl font-bold text-[#1a2b48] mb-3">{act.title}</h3>
              <p className="text-gray-600">{act.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Section - Athletics */}
        <div className="bg-[#1a2b48] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 h-64 lg:h-auto bg-gray-800 relative">
             {/* Decorative pattern for athletics */}
             <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-[#d4af37] to-transparent"></div>
             <div className="absolute inset-0 flex items-center justify-center text-white opacity-10">
                <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
             </div>
          </div>
          <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-6">Home of the Gladiators</h2>
            <p className="text-gray-300 text-lg mb-8">
              Our athletics program emphasizes teamwork, discipline, and sportsmanship. 
              With state-of-the-art facilities and experienced coaches, our teams 
              consistently compete at the highest levels.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-[#d4af37]/20 text-[#d4af37] px-4 py-2 rounded-full font-medium border border-[#d4af37]/30">15+ State Titles</span>
              <span className="bg-[#d4af37]/20 text-[#d4af37] px-4 py-2 rounded-full font-medium border border-[#d4af37]/30">Elite Facilities</span>
              <span className="bg-[#d4af37]/20 text-[#d4af37] px-4 py-2 rounded-full font-medium border border-[#d4af37]/30">Scholarship Focus</span>
            </div>
          </div>
        </div>

        {/* Clubs Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-[#1a2b48] mb-12 text-center">Popular Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Robotics Team', 'Model United Nations', 'Drama Society', 'Chess Club', 'Eco-Warriors', 'Creative Writing'].map((club, idx) => (
              <div key={idx} className="flex items-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                <div className="w-3 h-3 bg-[#d4af37] rounded-full mr-4"></div>
                <span className="text-lg font-medium text-gray-700">{club}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;
