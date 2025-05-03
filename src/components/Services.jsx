import { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { id: 1, title: 'CONTENT MARKETING', color: 'bg-red-500', textColor: '#ef4444' },
    { id: 2, title: 'INFLUENCER MARKETING', color: 'bg-cyan-400', textColor: '#22d3ee' },
    { id: 3, title: 'SEARCH ENGINE OPTIMIZATION', color: 'bg-orange-400', textColor: '#fb923c' },
    { id: 4, title: 'GRAPHICS DESIGNING', color: 'bg-green-600', textColor: '#16a34a' },
    { id: 5, title: 'SOCIAL MEDIA MARKETING', color: 'bg-pink-500', textColor: '#ec4899' },
    { id: 6, title: 'BRANDING', color: 'bg-red-800', textColor: '#991b1b' },
    { id: 7, title: 'VIDEO EDITING', color: 'bg-orange-500', textColor: '#f97316' },
    { id: 8, title: 'BUSINESS AUTOMATIONS', color: 'bg-blue-800', textColor: '#1e40af' },
    { id: 9, title: 'WEB DESIGN & DEVELOPMENT', color: 'bg-orange-400', textColor: '#fb923c' },
    { id: 10, title: 'LEAD GENERATION', color: 'bg-green-400', textColor: '#4ade80' },
    { id: 11, title: 'APP DEVELOPMENT', color: 'bg-orange-500', textColor: '#f97316' },
    { id: 12, title: 'SOCIAL MEDIA MANAGING', color: 'bg-cyan-400', textColor: '#22d3ee' },
  ];

  return (
    <section className="relative bg-blue-700 py-10 sm:py-20 md:py-24 px-4 md:px-8 lg:px-16 min-h-screen overflow-y-auto">
      {/* Black overlay for depth and contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-40 pointer-events-none"></div>

      {/* Section Header */}
      <div className="mb-8 sm:mb-12 md:mb-16 relative z-10">
        <div className="flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
          <div className="h-8 sm:h-10 md:h-12 bg-yellow-400 ml-0 flex items-center pl-2 sm:pl-4 md:pl-6 pr-8 sm:pr-16 md:pr-20 rounded-r-full shadow-lg">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-700">SERVICE WE PROVIDE</h2>
          </div>
        </div>
      </div>

      {/* Bento Grid Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pb-10 max-w-7xl mx-auto relative z-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative p-1 group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="bg-white rounded-lg shadow-lg sm:shadow-xl md:shadow-2xl p-4 sm:p-6 md:p-8 h-full relative overflow-hidden">
              {/* Colored Circle with Number */}
              <div className={`absolute -top-3 sm:-top-4 md:-top-5 -left-3 sm:-left-4 md:-left-5 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full ${service.color} flex items-center justify-center z-10`}>
                <div className="w-10 sm:w-14 md:w-18 h-10 sm:h-14 md:h-18 rounded-full bg-white flex items-center justify-center">
                  <span className="font-bold text-sm sm:text-lg md:text-xl" style={{
                    color: service.textColor,
                  }}>
                    {service.id.toString().padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Service Title */}
              <div className="pt-8 sm:pt-10 md:pt-12 pb-2 sm:pb-3 md:pb-4 text-center">
                <h3 className="text-sm sm:text-lg md:text-xl font-bold border-b-2 border-gray-300 pb-1 sm:pb-2 md:pb-3 inline-block text-gray-800">
                  {service.title}
                </h3>
              </div>

              {/* Color Border Effect */}
              <div className={`absolute top-0 left-0 h-full w-1 sm:w-1.5 md:w-2 ${service.color} rounded-l-lg`}></div>
              <div className={`absolute bottom-0 left-0 w-full h-1 sm:h-1.5 md:h-2 ${service.color} rounded-b-lg`}></div>
              <div className={`absolute top-0 right-0 h-full w-1 sm:w-1.5 md:w-2 ${service.color} rounded-r-lg`}></div>
              <div className={`absolute top-0 left-0 w-full h-1 sm:h-1.5 md:h-2 ${service.color} rounded-t-lg`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;