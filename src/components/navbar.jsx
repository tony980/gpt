import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#052D56] text-white relative">
      {/* Logo */}
      <div className="text-2xl font-bold">GPT-3</div>

      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Menu Items - Hidden on small screens */}
      <ul className={`md:flex space-x-8 text-sm hidden`}>
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#what-is-gpt" className="hover:underline">What is GPT?</a></li>
        <li><a href="#openai" className="hover:underline">OpenAI</a></li>
        <li><a href="#case-studies" className="hover:underline">Case Studies</a></li>
        <li><a href="#library" className="hover:underline">Library</a></li>
      </ul>

      {/* Action Buttons - Hidden on small screens */}
      <div className="md:flex items-center space-x-4 hidden">
        <button className="text-sm font-semibold">Sign In</button>
        <button className="bg-orange-500 px-4 py-2 rounded text-sm font-semibold hover:bg-orange-600">Try Demo</button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#052D56] text-center md:hidden">
          <ul className="space-y-4 py-4 text-sm">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#what-is-gpt" className="hover:underline">What is GPT?</a></li>
            <li><a href="#openai" className="hover:underline">OpenAI</a></li>
            <li><a href="#case-studies" className="hover:underline">Case Studies</a></li>
            <li><a href="#library" className="hover:underline">Library</a></li>
            <li><button className="text-sm font-semibold">Sign In</button></li>
            <li><button className="bg-orange-500 px-4 py-2 rounded text-sm font-semibold hover:bg-orange-600">Try Demo</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
