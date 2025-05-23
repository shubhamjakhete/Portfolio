import React from 'react';
import { 
  FaNode, 
  FaAws, 
  FaDocker, 
  FaHtml5, 
  FaGoogle, 
  FaDatabase, 
  FaBrain,
  FaPython,
  FaReact,
  FaJs,
  FaGithub
} from 'react-icons/fa';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Marquee from 'react-fast-marquee';
import { 
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiScala,
  SiTensorflow
} from 'react-icons/si';
import profileImage from '../assets/SJ_Portfolio_Profile.png';

const Hero = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Main content with proper spacing */}
      <main className="pt-24">
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 hover:text-gray-300 transition-colors duration-300">Shubham Jakhete</h1>
              <p className="text-gray-400 text-lg mb-12 max-w-lg">
                Software Engineer | Full-Stack Developer | AI/ML Practitioner | Exploring Knowledge Graphs, Ontologies & Semantic Web AI | 2026 Graduate
              </p>
              <button className="border border-white text-white px-8 py-4 rounded-md text-lg 
                hover:bg-white hover:text-black transition-all duration-300 
                backdrop-blur-sm">
                Let's get started →
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-lg shadow-white/10 transform hover:scale-105 transition-all duration-500">
                <img 
                  src={profileImage}
                  alt="Shubham Jakhete" 
                  className="w-full h-full object-cover object-[65%_center] scale-125"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="container mx-auto px-6 py-20 border-t border-gray-800">
          <h3 className="text-gray-400 mb-12 text-center">Tech Stack</h3>
          <Marquee direction="right" speed={50} gradient={false}>
            <div className="flex space-x-16 mx-4">
              {/* Web Technologies */}
              <FaHtml5 className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              <FaJs className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              <FaReact className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              <FaNode className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              <SiTailwindcss className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              
              {/* AI/ML */}
              <SiTensorflow className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              <FaBrain className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              <FaPython className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              
              {/* Databases */}
              <SiMongodb className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              <SiPostgresql className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              <FaDatabase className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              
              {/* Cloud & DevOps */}
              <FaGoogle className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              <FaAws className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              <FaDocker className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              
              {/* Programming Languages */}
              <SiScala className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
              <FaGithub className="w-16 h-16 text-white hover:text-gray-300 transition-colors" />
            </div>
          </Marquee>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hero; 