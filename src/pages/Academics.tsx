import React from 'react';

const Academics: React.FC = () => {
  const departments = [
    { name: 'Science & Technology', description: 'Exploring the natural world and the latest in innovation.' },
    { name: 'Mathematics', description: 'Developing logical reasoning and problem-solving skills.' },
    { name: 'Humanities & Social Sciences', description: 'Understanding human history, culture, and society.' },
    { name: 'English & Languages', description: 'Mastering communication and literary analysis.' },
    { name: 'Fine Arts', description: 'Cultivating creativity through visual and performing arts.' },
    { name: 'Physical Education', description: 'Promoting health, wellness, and teamwork.' },
  ];

  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-[#1a2b48] mb-4">Academic Programs</h1>
      <div className="h-1.5 w-20 bg-[#d4af37] mb-12"></div>
      
      <p className="text-xl text-gray-700 mb-16 max-w-3xl">
        Our rigorous curriculum is designed to challenge students and prepare them for the 
        demands of higher education and beyond.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, idx) => (
          <div key={idx} className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-xl font-bold text-[#1a2b48] mb-3">{dept.name}</h3>
            <p className="text-gray-600">{dept.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-[#1a2b48] text-white p-12 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-6">KCSE Excellence</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          We follow the Kenya Certificate of Secondary Education (KCSE) curriculum, consistently 
          achieving top results and preparing students for university placement.
        </p>
        <button className="bg-[#d4af37] text-[#1a2b48] font-bold py-3 px-6 rounded-lg hover:bg-white transition-colors">
          View Subject Offerings
        </button>
      </div>
    </div>
  );
};

export default Academics;
