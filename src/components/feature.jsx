import React from 'react';
import FeatureImage from '../images/Feature Image.png'; // Adjust path based on your project structure

const Feature = () => {
  return (
    <section className="bg-[#031B34] text-white py-16 px-6 md:px-20 flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center max-w-6xl space-y-8 md:space-y-0 md:space-x-12">

        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img 
            src={FeatureImage} 
            alt="Feature"
            className="w-full md:w-3/4 lg:w-2/3 object-cover"
          />
        </div>

        {/* Right Section - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-0">
          <div className="md:mt-20 mt-10">
            <p className="text-sm md:text-base text-left text-[#7c9df0]">Request Early Access to Get Started</p>
            <h2 className="text-2xl md:text-3xl font-bold text-left text-[#df92d2]">
              The possibilities<span className="text-[#f0ab7c]"> are <br /> beyond </span>your imagination
            </h2>
            <p className="text-sm md:text-base text-left text-[#7c9df0]">
            Let's explore new possibilities and push the boundaries of what's possible with cutting-edge AI technology.
            GPT-3 can help turn your ideas into reality with unprecedented ease and creativity. Join us and be part of this exciting journey.
            </p>
            <p className="text-sm md:text-base text-left text-[#f0ab7c]">Request Early Access to Get Started</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Feature;
