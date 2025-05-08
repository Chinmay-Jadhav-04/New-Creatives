import { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { id: 1, title: 'CONTENT MARKETING' },
    { id: 2, title: 'INFLUENCER MARKETING' },
    { id: 3, title: 'SEARCH ENGINE OPTIMIZATION' },
    { id: 4, title: 'GRAPHICS DESIGNING' },
    { id: 5, title: 'SOCIAL MEDIA MARKETING' },
    { id: 6, title: 'BRANDING' },
    { id: 7, title: 'VIDEO EDITING' },
    { id: 8, title: 'BUSINESS AUTOMATIONS' },
    { id: 9, title: 'WEB DESIGN & DEVELOPMENT' },
    { id: 10, title: 'LEAD GENERATION' },
    { id: 11, title: 'APP DEVELOPMENT' },
    { id: 12, title: 'SOCIAL MEDIA MANAGING' },
  ];

  return (
    <section className="relative w-full overflow-x-hidden overflow-y-auto" style={{ minHeight: 'auto' }}>

      {/* Content container */}
      <div className="relative z-10 pt-6 pb-0 sm:pt-10 sm:pb-0 md:pt-16 md:pb-0 px-3 sm:px-4 md:px-8 lg:px-16 w-full">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16 relative z-10">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="h-12 sm:h-14 md:h-16 bg-blue-900/30 backdrop-blur-md flex items-center justify-center px-10 sm:px-16 md:px-20 rounded-full shadow-lg border-2 border-white/30 transition-all duration-300 min-w-[280px] sm:min-w-[350px] md:min-w-[400px]">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-center mx-auto">WHAT WE DO IN SKZ-CREATIVES</h2>
            </div>
          </div>
        </div>

        {/* Bento Grid Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pb-0 mb-0 max-w-7xl mx-auto">
          {services.map((service) => (
            <ServiceBlock
              key={service.id}
              service={service}
              isHovered={hoveredService === service.id}
              onHover={() => setHoveredService(service.id)}
              onLeave={() => setHoveredService(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceBlock = ({ service, onHover, onLeave }) => {
  return (
    <motion.div
      className="transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="h-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg overflow-hidden">
        <div className="relative p-4 sm:p-6 h-full flex flex-col">
          {/* Service Number */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 bg-blue-900/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg">
            <span className="font-bold text-sm sm:text-lg text-white">
              {service.id.toString().padStart(2, '0')}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center pt-4">
            <h3 className="text-base sm:text-xl font-bold text-center mt-2 sm:mt-4 mb-2 text-white">
              {service.title}
            </h3>

            {/* Decorative elements */}
            <div className="mx-auto w-16 h-1 bg-white/30 mt-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;