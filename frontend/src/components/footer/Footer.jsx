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
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between px-6">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-start">
          <img
            src="/images/spearspace-logo.png"
            className="w-60 pb-2"
            alt="SpearSpace Logo"
          />
          <h6 className="text-lg pl-2">Powering the Future of Space Travel.</h6>
        </div>

        {/* About Section */}
        <div className="flex flex-col mt-6 lg:mt-0">
          <h5 className="text-xl py-2">About</h5>
          <Link to="/about" className="text-sm py-1 hover:text-gray-400">
            Our Mission
          </Link>
          <Link to="/technology" className="text-sm py-1 hover:text-gray-400">
            Our Technology
          </Link>
          <Link to="/careers" className="text-sm py-1 hover:text-gray-400">
            Careers
          </Link>
          <Link to="/contact" className="text-sm py-1 hover:text-gray-400">
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col mt-6 lg:mt-0">
          <h5 className="text-xl py-2">Quick Links</h5>
          {["Home", "Rocket Motors", "Propulsion Systems", "Launch Schedule", "Investor Relations"].map((link, index) => (
            <p key={index} className="text-sm py-1 hover:text-gray-400 cursor-pointer">
              {link}
            </p>
          ))}
        </div>

        {/* Support Section */}
        <div className="flex flex-col mt-6 lg:mt-0">
          <h5 className="text-xl py-2">Support</h5>
          <Link to="/support#contact" className="text-sm py-1 hover:text-gray-400">
            Contact Support
          </Link>
          {["Privacy Policy", "Terms of Service", "FAQs", "Supplier Partnerships"].map((item, index) => (
            <p key={index} className="text-sm py-1 hover:text-gray-400 cursor-pointer">
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Manufacturing Locations */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-6 px-6">
        {[
          { title: "Manufacturing Hubs", cities: ["Houston, TX", "Los Angeles, CA", "Seattle, WA", "Cape Canaveral, FL"] },
          { title: "Testing & R&D", cities: ["Mojave, CA", "New Mexico", "Colorado Springs, CO", "Huntsville, AL"] },
          { title: "Global Distribution", cities: ["Berlin, Germany", "Tokyo, Japan", "Bangalore, India", "Dubai, UAE"] },
          { title: "Supplier Networks", cities: ["Montreal, Canada", "São Paulo, Brazil", "Sydney, Australia", "Paris, France"] }
        ].map((section, index) => (
          <div key={index} className="flex flex-col">
            <h5 className="text-lg py-2 text-gray-300">{section.title}</h5>
            {section.cities.map((city, i) => (
              <p key={i} className="text-sm py-1 hover:text-gray-400">{city}</p>
            ))}
          </div>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-6">
        {[Instagram, Facebook, X, LinkedIn, YouTube].map((Icon, index) => (
          <button key={index} className="p-3 rounded-full bg-gray-700 hover:bg-gray-600">
            <Icon className="text-white" />
          </button>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-4 text-gray-500">
        &copy; 2024 SpearSpace Rocket Motors. All rights reserved.
      </div>
    </footer>
  );
}
