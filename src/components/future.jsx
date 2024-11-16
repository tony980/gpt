import React from 'react';

const Future = () => {
  return (
    <div className="flex flex-wrap bg-[#042C54] min-h-screen text-white">
      {/* First Section */}
      <div className="w-full md:w-1/3 p-4">
        <p className="text-2xl ml-11 text-left font-bold">
          <span className="text-[#df92d2]">The Future is Now</span>
          <span className="text-[#f0ab7c]"> and </span><br />
          <span className="text-[#df92d2]">You Just Need to</span>
          <span className="text-[#f0ab7c]"> Realize</span><br />
          <span className="text-[#df92d2]">It. Step into Future</span>
          <span className="text-[#f0ab7c]"> Today</span><br />
          <span className="text-[#df92d2]"> & Make it Happen</span>
          
        </p>
        <p className="text-sm mt-7 text-left ml-11 text-[#f0ab7c]">Request Early Access to Get Started</p>
      </div>

      {/* Second Section - Titles with Short Line Above */}
      <div className="w-full md:w-2/3 p-4 space-y-8">
        {[
          { title: "Instantly Overcome Distrust", description: "By making quick and confident decisions, trust is built faster, leading to greater collaboration and success." },
          { title: "Become the Leader You Aspire to Be", description: "Seize every opportunity, motivate your team, and grow as an influential and proactive leader." },
          { title: "Clear Communication Makes the Difference", description: "Effective communication is key to building strong relationships, solving problems, and achieving mutual goals." },
          { title: "Turning Challenges into Opportunities", description: "Embrace challenges as opportunities for growth, innovation, and success in any area of life." },
        ].map((item, index) => (
          <div key={index} className="mb-4">
            {/* Short Line directly above title */}
            <div className="border-t-4 border-[#e19455] w-3 mb-2"></div>
            {/* Title and Description */}
            <div className="flex flex-col md:flex-row items-start text-left space-y-2 md:space-y-0 md:space-x-4">
              {/* Title */}
              <p className="text-lg font-bold w-full md:w-1/3">{item.title}</p>
              {/* Description */}
              <p className="text-lg w-full md:w-2/3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Future;
