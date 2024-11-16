import React from 'react';
import Illustration from '../images/Illustration.png'; // Adjust the path if needed

const Header = () => {
  return (
    <header className="bg-[#052D56] text-white py-20 px-8 md:px-20 flex flex-col md:flex-row items-center">
      {/* Text Section */}
      <div className="md:w-3/4 space-y-8 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-[#df92d2]">Let’s Build</span><span className="text-[#f0ab7c]"> Something </span><br />
          <span className="text-[#df92d2]">amazing with</span><span className="text-[#f0ab7c] "> GPT-3 </span><br />
          <span className="text-[#FF66E5]">OpenAI</span>
        </h1>
        <p className="text-[#81AFDD]">
        Let's explore new possibilities and push the boundaries of what's possible with cutting-edge AI technology.
        GPT-3 can help turn your ideas into reality with unprecedented ease and creativity. Join us and be part of this exciting journey.
          
        </p>

        {/* Email Form */}
        <div className="flex items-center justify-center md:justify-start space-x-2 w-full">
          <input
            type="email"
            placeholder="Your Email Address"
            className="p-3 bg-[#2667a9] text-white placeholder-gray-400 rounded-l-md focus:outline-none w-full md:w-3/4"
          />
          <button className="px-6 py-3 bg-[#FF4820] text-white font-bold rounded-r-md hover:bg-[#D93C1A] w-full md:w-auto">
            Get Started
          </button>
        </div>
      </div>

      {/* Image Section (to the right, occupying all available space, pushed up) */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={Illustration}
          alt="GPT-3 AI face"
          className="w-full h-auto md:h-full object-cover md:mt-0 mt-8"
        />
      </div>
    </header>
  );
};

export default Header;
