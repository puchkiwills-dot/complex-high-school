import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center bg-[#1a2b48] text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}></div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4af37]/10 to-transparent skew-x-12 transform translate-x-1/4"></div>
        
        <div className="relative z-10 max-w-5xl px-4 text-center">
          <div className="inline-block bg-[#d4af37] text-[#1a2b48] px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-widest uppercase">
            Est. 1952 • Excellence in Education
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
            Nurturing Excellence, <br />
            <span className="text-[#d4af37]">Building Futures.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            To develop well-rounded, confident and responsible individuals through quality education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/admissions" className="bg-[#d4af37] hover:bg-white text-[#1a2b48] font-bold py-5 px-10 rounded-xl transition-all text-lg shadow-2xl transform hover:-translate-y-1">
              Apply for 2026
            </Link>
            <Link to="/about" className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-bold py-5 px-10 rounded-xl transition-all text-lg backdrop-blur-sm">
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative z-20 -mt-12 mx-4 md:mx-auto max-w-6xl rounded-3xl shadow-2xl border border-gray-100">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center border-r border-gray-100 last:border-0">
              <div className="text-5xl font-extrabold text-[#1a2b48] mb-3">1,200+</div>
              <div className="text-gray-500 font-semibold tracking-wide uppercase text-sm">Students</div>
            </div>
            <div className="text-center border-r border-gray-100 last:border-0">
              <div className="text-5xl font-extrabold text-[#1a2b48] mb-3">95+</div>
              <div className="text-gray-500 font-semibold tracking-wide uppercase text-sm">Faculty</div>
            </div>
            <div className="text-center border-r border-gray-100 last:border-0">
              <div className="text-5xl font-extrabold text-[#1a2b48] mb-3">15:1</div>
              <div className="text-gray-500 font-semibold tracking-wide uppercase text-sm">Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-[#1a2b48] mb-3">98%</div>
              <div className="text-gray-500 font-semibold tracking-wide uppercase text-sm">Grad Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2b48] mb-4">Our Core Values</h2>
            <div className="h-1.5 w-24 bg-[#d4af37] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { title: 'Integrity', desc: 'Upholding the highest moral standards in all our actions.' },
              { title: 'Transparency', desc: 'Maintaining openness and honesty in everything we do.' },
              { title: 'Teamwork', desc: 'Collaborating to achieve common goals and excellence.' },
              { title: 'Efficiency', desc: 'Optimal use of resources to achieve the best results.' },
              { title: 'Fairness', desc: 'Treating everyone with equity and justice.' },
              { title: 'Punctuality', desc: 'Valuing time as a critical resource for success.' },
              { title: 'Hardwork', desc: 'Diligence and persistence in the pursuit of excellence.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-b-4 border-[#d4af37]">
                <h3 className="text-2xl font-bold text-[#1a2b48] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b48]">Campus Highlights</h2>
              <p className="text-gray-500 mt-2">Stay updated with the latest happenings at Complex High</p>
            </div>
            <a href="#" className="bg-[#1a2b48] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#d4af37] hover:text-[#1a2b48] transition-all">View All News</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                   <div className="absolute bottom-4 left-4 text-white font-bold bg-[#d4af37] px-3 py-1 rounded text-sm">
                     {item === 1 ? 'Academics' : item === 2 ? 'Athletics' : 'Arts'}
                   </div>
                </div>
                <div className="p-8">
                  <div className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">May {item + 10}, 2026</div>
                  <h3 className="text-2xl font-bold text-[#1a2b48] mb-4 group-hover:text-[#d4af37] transition-colors">
                    {item === 1 ? 'Annual Science & Tech Fair' : item === 2 ? 'Gladiators Win Regional Finals' : 'Spring Theater Production'}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    Our students continue to demonstrate exceptional talent and dedication across all departments...
                  </p>
                  <a href="#" className="text-[#1a2b48] font-bold hover:text-[#d4af37] flex items-center transition-colors">
                    Read Full Story <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#1a2b48] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4af37] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Community Voices</h2>
          <div className="bg-white/5 backdrop-blur-lg p-12 rounded-3xl border border-white/10 italic text-xl md:text-2xl leading-relaxed">
            "Choosing Complex High was the best decision for my daughter's future. The balance between 
            academic rigor and personal support is truly unique. She has grown not just as a student, 
            but as a confident leader."
            <div className="mt-8 not-italic">
              <div className="font-bold text-[#d4af37]">Dee Williams</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest mt-1">Community Voice</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
