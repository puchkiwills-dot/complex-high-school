import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const galleryImages = [
    'https://iili.io/BsKP6Sp.png',
    'https://iili.io/Bsf7RTb.png',
    'https://iili.io/Bsf7Tve.png',
    'https://iili.io/Bsf7uyu.png'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Real Background Image */}
        <div className="absolute inset-0">
          <img 
            src={galleryImages[0]} 
            alt="Complex High School Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a2b48]/70"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl px-4 text-center">
          <div className="inline-block bg-[#d4af37] text-[#1a2b48] px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-widest uppercase">
            Est. 1952 • Excellence in Education
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
            Nurturing Excellence, <br />
            <span className="text-[#d4af37]">Building Futures.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            To develop well rounded, confident and responsible individuals through quality education.
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

      {/* Values Section */}
      <section className="py-24 bg-white">
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
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-b-4 border-[#d4af37]">
                <h3 className="text-2xl font-bold text-[#1a2b48] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a2b48] mb-4">Campus Gallery</h2>
            <div className="h-1.5 w-24 bg-[#d4af37] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative h-96 rounded-3xl overflow-hidden shadow-lg group">
                <img 
                  src={img} 
                  alt={`Complex High School ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-bold text-xl">Excellence in Every Corner</span>
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
