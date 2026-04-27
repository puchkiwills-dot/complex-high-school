import React from 'react';

const Admissions: React.FC = () => {
  const steps = [
    { title: 'Inquiry', description: 'Contact our admissions office or attend an open house.' },
    { title: 'Application', description: 'Submit the online application form and required documents.' },
    { title: 'Interview', description: 'Prospective students and parents meet with our admissions team.' },
    { title: 'Testing', description: 'Complete the entrance examination (if applicable).' },
    { title: 'Decision', description: 'Receive notification of the admissions decision.' },
  ];

  return (
    <div className="py-20 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-[#1a2b48] mb-8 text-center">Admissions Process</h1>
      
      <div className="mt-16 relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#d4af37] opacity-20"></div>
        
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2"></div>
              <div className="z-10 bg-[#d4af37] text-[#1a2b48] w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 md:mb-0">
                {idx + 1}
              </div>
              <div className={`md:w-1/2 p-6 bg-white border border-gray-100 rounded-xl shadow-sm ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <h3 className="text-xl font-bold text-[#1a2b48] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-2xl font-bold text-[#1a2b48] mb-6">Ready to join our community?</h2>
        <button className="bg-[#1a2b48] text-white font-bold py-4 px-10 rounded-full hover:bg-[#d4af37] hover:text-[#1a2b48] transition-all shadow-lg">
          Start Your Application Today
        </button>
      </div>
    </div>
  );
};

export default Admissions;
