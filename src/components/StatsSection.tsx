import React from 'react';

const stats = [
  { value: '16+', label: 'Years in IT Industry' },
  { value: '3', label: 'International Locations' },
  { value: '1000+', label: 'Students Trained' }, // Assuming 1000+ refers to students
  { value: '95%', label: 'Placement Rate' }, // Adding a common stat
];

const StatsSection = () => {
  return (
    <section className="py-16  bg-red-50 text-gray-800"> {/* Changed to red to match site accents */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
