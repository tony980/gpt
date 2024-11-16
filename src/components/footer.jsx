import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#031B34] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h3 className="text-2xl font-bold mb-4">GPT-3</h3>
          <p className="text-sm">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>

        {/* Links Section */}
        <div className="text-center">
          <h4 className="text-lg font-bold mb-4">Social Links</h4>
          <ul className="flex justify-center space-x-6">
            <li className="flex items-center justify-center group">
              <div className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-blue-900 group-hover:border-blue-900">
                <FaFacebook className="text-white text-xl group-hover:text-white" />
              </div>
            </li>
            <li className="flex items-center justify-center group">
              <div className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-blue-900 group-hover:border-blue-900">
                <FaTwitter className="text-white text-xl group-hover:text-white" />
              </div>
            </li>
            <li className="flex items-center justify-center group">
              <div className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-blue-900 group-hover:border-blue-900">
                <FaInstagram className="text-white text-xl group-hover:text-white" />
              </div>
            </li>
            <li className="flex items-center justify-center group">
              <div className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-white group-hover:bg-blue-900 group-hover:border-blue-900">
                <FaLinkedin className="text-white text-xl group-hover:text-white" />
              </div>
            </li>
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <h4 className="text-lg font-bold mb-2">Get in touch</h4>
          <ul className="space-y-2">
            <li className="flex justify-center items-center gap-2">
              Crechterwoord K12
            </li>
            <li className="flex justify-center items-center gap-2">
              182 DK Alknjkcb
            </li>
            <li className="flex justify-center items-center gap-2">
              07008754000
            </li>
            <li className="flex justify-center items-center gap-2">
              info@payme.net
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-sm">
        © 2024 GPT-3. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
