import React from 'react';
import styles from "../style";
import office from '../assets/office1.png'

const Hero = () => {
  return (
    <div id="about" className="bg-gray-100 px-10">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold font-poppins text-gray-800 mb-3 lg:mb-4 leading-snug">
              Innovating Office Spaces Since 1995
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold font-poppins text-gray-700 mb-3">
              Onkar Enterprises - Redefining Modern Workspace
            </h2>
            <p className="text-md lg:text-lg font-poppins text-gray-600">
              Beginning as Matharu & Sons and evolving into a market leader in modular office furniture, we pride ourselves on quality and innovation. Our modernized workshop and dedicated team are at the heart of our ability to deliver splendid solutions efficiently.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src={office} alt="Office Space" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;