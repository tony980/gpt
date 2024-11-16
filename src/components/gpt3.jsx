import React from 'react';

const Gpt3 = () => {
  return (
    <section className="bg-[#031B34] text-white py-16 px-6 md:px-20">
      {/* Main Card Container */}
      <div className="bg-[#042C54] p-6 md:p-8 lg:p-10 rounded-lg shadow-md max-w-4xl mx-auto">

        {/* Line Above "What is GPT-3" */}
        

        {/* "What is GPT-3" Section */}
        <div className="flex flex-col md:flex-row items-start mb-12">
          {/* Left side: "What is GPT-3" */}
          
          <div className="mx-4 md:mx-11">
          <div className="border-t-4 justify-start border-[#e19455] mx-4 md:mx-11 mb-6 w-16 "></div>
          
            <h3 className="text-white text-xl md:text-2xl font-bold mb-4">What is GPT-3</h3>
          </div>

          {/* Right side: Description */}
          <div className="flex-1 text-left pl-4 md:pl-8">
            <p className="text-white text-sm md:text-base leading-relaxed">
              GPT-3, or Generative Pretrained Transformer 3, is an advanced language model developed by OpenAI. 
              It can generate human-like text based on given prompts, making it capable of answering questions, 
              writing essays, creating poetry, and even generating code.
            </p>
          </div>
        </div>

        {/* "Possibilities" Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left mb-12">
          <div className="flex-1 mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#df92d2]">
              The possibilities<span className="text-[#f0ab7c]"> are beyond </span>your imagination
            </h2>
          </div>
          <div className="flex-1 text-center md:text-right">
            <a href="#explore" className="text-[#FF8A71] hover:underline">Explore The Library</a>
          </div>
        </div>

        {/* Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Feature */}
          <div className="bg-[#042C54] p-6 rounded-lg shadow-md">
            <div className="border-t-4 border-[#e19455] mb-4 w-5"></div>
            <h4 className="text-white text-left text-lg md:text-xl font-semibold mb-4">Chatbots</h4>
            <p className="text-white text-left text-sm md:text-base leading-relaxed">
              GPT-3 can be used to create advanced chatbots capable of understanding and responding to complex queries,
              simulating human-like conversations across multiple domains.
            </p>
          </div>

          {/* Second Feature */}
          <div className="bg-[#042C54] p-6 rounded-lg shadow-md">
            <div className="border-t-4 border-[#e19455] mb-4 w-5"></div>
            <h4 className="text-white text-left text-lg md:text-xl font-semibold mb-4">Knowledgebase</h4>
            <p className="text-white text-left text-sm md:text-base leading-relaxed">
              GPT-3 can be integrated with knowledgebase systems to provide dynamic, real-time answers from a wide array of
              information sources.
            </p>
          </div>

          {/* Third Feature */}
          <div className="bg-[#042C54] p-6 rounded-lg shadow-md">
            <div className="border-t-4 border-[#e19455] mb-4 w-5"></div>
            <h4 className="text-white text-left text-lg md:text-xl font-semibold mb-4">Education</h4>
            <p className="text-white text-left text-sm md:text-base leading-relaxed">
              GPT-3 can assist in education by providing personalized learning experiences, creating learning materials, 
              and generating quizzes or educational content.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gpt3;
