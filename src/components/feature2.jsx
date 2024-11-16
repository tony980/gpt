import React from 'react';

const Feature2 = () => {
  return (
    <section className="py-16 px-6 md:px-20 flex justify-center items-center">
      <div className="w-full max-w-4xl mx-4 md:mx-8">
        {/* Feature Card */}
        <div className="w-full h-auto bg-gradient-to-r from-[#df92d2] to-[#f0ab7c] rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-[#0f0904]">Request Early Access to Get Started</p>
            <p className="text-lg text-[#0f0904] font-bold">
              Register today & start exploring the endless possibilities.
            </p>
          </div>
          <button className="bg-[#0f0904] text-white px-6 py-2 rounded-full hover:bg-[#df92d2]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
