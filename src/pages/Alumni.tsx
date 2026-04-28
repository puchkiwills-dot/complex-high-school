import React from 'react';

const Alumni: React.FC = () => {
  const alumniStories = [
    {
      name: 'Jane Doe',
      year: 'Class of 2015',
      story: 'After graduating from Complex High, Jane went on to study Medicine at the University of Nairobi. She is now a resident doctor at Kericho County Referral Hospital.',
    },
    {
      name: 'John Smith',
      year: 'Class of 2010',
      story: 'John pursued Engineering and is now a lead project manager at a top infrastructure firm in East Africa. He credits his leadership skills to his time in the Student Council.',
    },
    {
      name: 'Mary Wambui',
      year: 'Class of 2018',
      story: 'Mary is a rising star in the tech world, currently working as a software engineer at a global tech company. She was a member of the Robotics Club.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#1a2b48] py-20 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Alumni Network</h1>
        <div className="h-1.5 w-20 bg-[#d4af37] mx-auto"></div>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Celebrating the achievements of our graduates and maintaining lifelong connections.
        </p>
      </section>

      {/* Alumni Stories */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a2b48] mb-12 text-center">Inspirational Journeys</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {alumniStories.map((alumnus, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="text-[#d4af37] font-bold text-sm uppercase tracking-widest mb-2">{alumnus.year}</div>
              <h3 className="text-2xl font-bold text-[#1a2b48] mb-4">{alumnus.name}</h3>
              <p className="text-gray-600 leading-relaxed italic">
                "{alumnus.story}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Join the Network */}
      <section className="py-20 bg-[#d4af37]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1a2b48] mb-6">Stay in Touch</h2>
          <p className="text-gray-700 text-lg mb-10">
            Are you a former student of Complex High? We'd love to hear from you and include your 
            story in our network. Join our community to stay updated on school events and 
            mentorship opportunities.
          </p>
          <button className="bg-[#1a2b48] text-white font-bold py-4 px-10 rounded-xl hover:bg-white hover:text-[#1a2b48] transition-all shadow-lg">
            Register for Alumni Association
          </button>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
