import React from 'react';

const About: React.FC = () => {
  const leadership = [
    { name: 'Dr. Sarah Johnson', role: 'Principal', image: '👩‍🏫' },
    { name: 'Michael Chen', role: 'Vice Principal, Academics', image: '👨‍🏫' },
    { name: 'Elizabeth Smith', role: 'Dean of Students', image: '👩‍💼' },
    { name: 'Robert Wilson', role: 'Athletic Director', image: '👨‍コーチ' },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#1a2b48] py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <div className="h-1.5 w-20 bg-[#d4af37] mx-auto"></div>
      </section>

      {/* Mission & History */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2b48] mb-6 border-l-8 border-[#d4af37] pl-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded in 1952, Complex High School has a long-standing tradition of academic excellence and 
              community involvement. Our mission is to provide a safe, supportive, and challenging learning 
              environment that empowers all students to reach their full potential.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe in the power of curiosity, the importance of integrity, and the value of 
              service. Our graduates go on to attend some of the world's most prestigious universities 
              and lead impactful careers.
            </p>
          </div>
          <div className="bg-gray-100 h-80 rounded-3xl relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1a2b48 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             <div className="text-8xl">🏫</div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b48] mb-4">Our Leadership</h2>
            <div className="h-1 w-20 bg-[#d4af37] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  {person.image}
                </div>
                <h3 className="text-xl font-bold text-[#1a2b48] mb-1">{person.name}</h3>
                <p className="text-[#d4af37] font-medium">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="bg-[#1a2b48] rounded-3xl p-10 md:p-16 text-white relative shadow-2xl">
          <div className="absolute -top-6 -left-6 text-8xl text-[#d4af37] opacity-20">"</div>
          <p className="text-xl md:text-2xl italic leading-relaxed mb-8 relative z-10">
            "At Complex High, we believe that every student has unique talents and the capacity for greatness. 
            Our dedicated faculty and staff are committed to nurturing those talents and guiding our students 
            on their journey of discovery and growth. We don't just teach subjects; we build characters."
          </p>
          <div className="flex items-center">
            <div className="w-16 h-1 bg-[#d4af37] mr-4"></div>
            <div>
              <div className="text-xl font-bold">Dr. Sarah Johnson</div>
              <div className="text-[#d4af37]">Principal</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
