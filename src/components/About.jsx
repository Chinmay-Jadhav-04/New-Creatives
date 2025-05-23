'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/20/solid';
import {
  Clapperboard,
  Users,
  MessageSquare,
  TrendingUp,
  Share2,
  Award
} from 'lucide-react';
import { useRouter } from 'next/navigation';

// Service card component with glassmorphism effect matching video colors
const ServiceCard = ({ icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={slideInFromLeft(delay)}
      initial="hidden"
      animate="visible"
      className="w-full md:w-[300px] h-[220px] md:h-[250px] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-full h-full transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'
        }`}>
        <div className="absolute w-full h-full bg-[#33103e80] backdrop-blur-lg rounded-lg p-5 flex flex-col items-center justify-center gap-3 border border-[#e7a4ff60] hover:border-[#84d6ff] transition-all">
          <div className="text-3xl bg-gradient-to-r from-[#ff9a8b] to-[#84d6ff] p-3 rounded-full">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff9a8b] to-[#84d6ff]">
            {title}
          </h3>
          <p className="text-gray-200 text-center text-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};



const About = () => {
  const router = useRouter();
  const sectionRef = useRef(null);

  // Services data
  const services = [
    {
      icon: <Users className="text-white h-6 w-6" />,
      title: "Talent Management",
      description: "Representing India's most creative and influential talents, we provide personalized career development and growth opportunities.",
      delay: 0.1
    },
    {
      icon: <TrendingUp className="text-white h-6 w-6" />,
      title: "Influencer Marketing",
      description: "Connect your brand with our diverse network of influencers to create authentic campaigns that resonate with target audiences.",
      delay: 0.2
    },
    {
      icon: <MessageSquare className="text-white h-6 w-6" />,
      title: "PR & Communications",
      description: "Strategic public relations services that enhance brand reputation and increase visibility across multiple platforms.",
      delay: 0.3
    },
    {
      icon: <Share2 className="text-white h-6 w-6" />,
      title: "Social Media Management",
      description: "Comprehensive social media strategy, content creation, and community management to build and engage your online audience.",
      delay: 0.4
    },
    {
      icon: <Clapperboard className="text-white h-6 w-6" />,
      title: "Video Production",
      description: "End-to-end video content creation from conceptualization to post-production for all digital and traditional platforms.",
      delay: 0.5
    },
    {
      icon: <Award className="text-white h-6 w-6" />,
      title: "Brand Partnerships",
      description: "Curated brand collaborations that align with your values and objectives to create meaningful connections with audiences.",
      delay: 0.6
    }
  ];





  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden py-16" id="about" ref={sectionRef}>



      {/* Content Container */}
      <div className="relative z-[4] flex flex-col items-center w-full px-4 md:px-20 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-2 px-4 border border-[#e7a4ff60] opacity-[0.9] mb-4"
        >
          <SparklesIcon className="text-[#84d6ff] mr-2 h-5 w-5 inline-block" />
          <h1 className="text-sm inline-flex items-center">
            <span>About Us</span>
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9a8b] via-[#e7a4ff] to-[#84d6ff]">
            SKZ-Creatives
          </span>
        </motion.h2>

        {/* Description */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl text-center mb-12"
        >
          <p className="text-gray-100 text-lg md:text-xl mb-4">
            The home of India's best creative talents
          </p>
          <p className="text-gray-200 text-base md:text-lg">
            SKZ-Creatives is a full-service media company providing talent management, influencer marketing, PR, social media management, and video production services. We bridge the gap between creators and brands, curating authentic partnerships that deliver exceptional results.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={slideInFromLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: "200+", label: "Creators" },
            { value: "500+", label: "Campaigns" },
            { value: "50M+", label: "Audience Reach" },
            { value: "100+", label: "Brand Partners" }
          ].map((stat, index) => (
            <div key={index} className="bg-[#33103e80] backdrop-blur-lg rounded-lg border border-[#e7a4ff60] p-4 text-center">
              <h3 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff9a8b] to-[#84d6ff]">
                {stat.value}
              </h3>
              <p className="text-gray-200 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.h3
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-8"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9a8b] to-[#84d6ff]">
            Our Services
          </span>
        </motion.h3>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>



        {/* CTA Section */}
        <motion.div
          variants={slideInFromLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-2xl bg-gradient-to-r from-[#33103e90] to-[#271b5090] backdrop-blur-lg rounded-lg border border-[#e7a4ff40] p-8 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ff9a8b] to-[#84d6ff]">
            Ready to collaborate?
          </h3>
          <p className="text-gray-200 mb-6">
            Whether you're a creator looking for representation or a brand seeking partnerships,
            we'd love to hear from you.
          </p>
          <button onClick={() => router.push('/#contact')} className="px-6 py-3 bg-gradient-to-r from-[#ff9a8b] to-[#84d6ff] hover:opacity-90 text-[#33103e] font-medium rounded-full transition-all duration-300">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
