import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br -mt-1.5 from-gray-900 via-gray-800 to-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">About</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">How it works</a></li>
              <li><a href="#">Trust & Safety</a></li>
              <li><a href="#">Help Centre</a></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Discover</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">Guides</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">TalentDesk</a></li>
              <li><a href="#">Business Cost Calculator</a></li>
              <li><a href="#">Startup Cities</a></li>
            </ul>
          </div>

          {/* Browse */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Browse</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">Freelance Services</a></li>
              <li><a href="#">Freelance Services By Country</a></li>
              <li><a href="#">Freelance Skills</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <ul className="flex justify-center space-x-6 mb-3">
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Company Details</a></li>
          </ul>
          <p>© 2025 People Per Hour Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
