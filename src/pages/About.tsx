import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#1a2b48] mb-8">About Complex High School</h1>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Founded in 1952, Complex High School has a long-standing tradition of academic excellence and 
          community involvement. Our mission is to provide a safe, supportive, and challenging learning 
          environment that empowers all students to reach their full potential.
        </p>
        <h2 className="text-2xl font-bold text-[#1a2b48] mt-10">Our Mission</h2>
        <p>
          To inspire curiosity, foster integrity, and prepare students for success in a rapidly changing world.
        </p>
        <h2 className="text-2xl font-bold text-[#1a2b48] mt-10">Message from the Principal</h2>
        <div className="bg-gray-50 p-8 border-l-4 border-[#d4af37] italic">
          "At Complex High, we believe that every student has unique talents and the capacity for greatness. 
          Our dedicated faculty and staff are committed to nurturing those talents and guiding our students 
          on their journey of discovery and growth."
          <div className="mt-4 font-bold text-[#1a2b48] not-italic">— Dr. Sarah Johnson, Principal</div>
        </div>
      </div>
    </div>
  );
};

export default About;
