import React, { useState, useEffect } from 'react';
import { MdBuild, MdOutlineSpaceDashboard, MdDesignServices, MdOutlineChair, MdOutlineMeetingRoom, MdOutlinePolymer } from 'react-icons/md';

const Services = () => {
  const [showOnScroll, setShowOnScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setShowOnScroll(true);
    } else {
      setShowOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="services" className={`container mx-auto px-4 py-16 transition-opacity duration-100 ${showOnScroll ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="text-4xl font-bold font-poppins text-center text-gray-800 mb-12">
        Our Services
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      <ServiceCard
          icon={<MdBuild size="1.5em" />}
          title="Project Management"
          description="One-stop shop for design, build, and management of complex office furniture projects."
        />

        <ServiceCard
          icon={<MdOutlineSpaceDashboard size="1.5em" />}
          title="Office Fit Outs"
          description="Transforming spaces into beautiful, practical, and functional work environments."
        />

        <ServiceCard
          icon={<MdDesignServices size="1.5em" />}
          title="Design & Consultancy"
          description="Tailored design planning to create the perfect office space that suits your needs."
        />

        <ServiceCard
          icon={<MdOutlineChair size="1.5em" />}
          title="Custom Made Furniture"
          description="Bespoke furniture solutions that complement your office space and style."
        />

        <ServiceCard
          icon={<MdOutlineMeetingRoom size="1.5em" />}
          title="Joinery"
          description="Quality joinery materials and services to complement and enhance your office space."
        />

        <ServiceCard
          icon={<MdOutlinePolymer size="1.5em" />}
          title="Corian®"
          description="Versatile solid surface solutions that can be shaped and colored to fit any design concept."
        />

      </div>
    </div>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="font-poppins text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="font-poppins text-gray-600 text-center">{description}</p>
    </div>
  );
};
export default Services;
