import React from 'react';
import space from '../../assets/rocket.jpg';

import Footer from '../footer/Footer';
import Categories from '../categories/Categories';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full min-h-screen bg-gradient-to-r from-[#0a0a2a] via-[#1a0048] to-[#33006e] flex flex-col lg:flex-row items-center justify-center pt-10 px-6">
        
        {/* Left Section - Text Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left flex flex-col items-center lg:items-start px-4">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
            SpearSpace Powering India's Rocket Motor Revolution
          </h1>
          <p className="text-md lg:text-lg mt-4 text-gray-300 max-w-lg">
            We are committed to developing cutting-edge rocket motor manufacturing solutions, ensuring  
            <strong> Performance, Precision, and Safety</strong> for the future of space exploration in India.  
            Driving innovation, one launch at a time. 🚀
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <button className="px-6 py-3 bg-white text-[#6f02b8] font-semibold rounded-full hover:bg-[#6f02b8] hover:text-white transition">
              🌍 Explore Our Technology
            </button>
            <button className="px-6 py-3 border border-gray-300 text-white font-semibold rounded-full hover:bg-[#6f02b8] transition">
              🚀 Partner With Us
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 w-full flex justify-center mt-10 lg:mt-0">
          <img 
            src={space} 
            className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-auto rounded-lg shadow-xl" 
            alt="Rocket Motor" 
          />
        </div>
      </div>

      {/* Categories & Footer */}
      <div className="mt-12">
        <Categories/>
        <Footer />
      </div>
    </>
  );
};

export default Home;
