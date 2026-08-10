import React from "react";
import { Link } from "react-router-dom";
import { 
  Instagram, 
  Facebook, 
  X, 
  LinkedIn, 
  YouTube 
} from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        
        {/* 1️⃣ Logo and Tagline */}
        <div className="col-span-2 md:col-span-1">
          <img
            src="/images/spearspace-logo.png"
            className="w-48 mb-2"
            alt="SpearSpace Logo"
          />
          <p className="text-gray-600 text-sm">
            Powering the Future of Space Travel.
          </p>
        </div>

        {/* 2️⃣ About Section */}
        <div>
          <h5 className="text-lg font-semibold pb-2">About</h5>
          <ul className="space-y-2 text-gray-900 text-sm">
            <li><Link to="/about" className="hover:text-gray-900 transition">Our Mission</Link></li>
            <li><Link to="/technology" className="hover:text-gray-900 transition">Our Technology</Link></li>
            <li><Link to="/careers" className="hover:text-gray-900 transition">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-gray-900 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* 3️⃣ Quick Links */}
        <div>
          <h5 className="text-lg font-semibold pb-2">Quick Links</h5>
          <ul className="space-y-2 text-gray-900 text-sm">
            {["Home", "About", "Service", "Contact Us"].map((link, index) => (
              <li key={index} className="hover:text-gray-900 cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ Support Section */}
        <div>
          <h5 className="text-lg font-semibold pb-2">Support</h5>
          <ul className="space-y-2 text-gray-900 text-sm">
            <li><Link to="/support#contact" className="hover:text-gray-900">Contact Support</Link></li>
            {["Privacy Policy", "Terms of Service", "FAQs"].map((item, index) => (
              <li key={index} className="hover:text-gray-900 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🌐 Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-6">
        {[Instagram, Facebook, X, LinkedIn, YouTube].map((Icon, index) => (
          <button key={index} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200">
            <Icon className="text-gray-700" />
          </button>
        ))}
      </div>

      {/* 📌 Copyright Section */}
      <div className="text-center text-xs mt-6 text-gray-500 border-t border-gray-300 py-4">
        &copy; {new Date().getFullYear()} SpearSpace Rocket Motors. All rights reserved.
      </div>
    </footer>
  );
}
