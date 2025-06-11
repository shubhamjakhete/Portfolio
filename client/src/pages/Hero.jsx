import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/about-me');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Main content with proper spacing */}
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 hover:text-gray-300 transition-colors duration-300 leading-tight">
                Shubham Jakhete
              </h1>
              <p className="text-gray-400 text-xl lg:text-2xl mb-12 max-w-2xl leading-relaxed">
                Software Engineer | Full-Stack Developer | AI/ML Practitioner | 
                Exploring Knowledge Graphs, Ontologies & Semantic Web AI | 
                2026 Graduate
              </p>
              <button 
                onClick={handleGetStarted}
                className="border-2 border-white text-white px-10 py-4 rounded-md text-lg lg:text-xl 
                hover:bg-white hover:text-black transition-all duration-300 
                backdrop-blur-sm transform hover:scale-105">
                Let's get started →
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 border-white/10 
                            shadow-lg shadow-white/10 transform hover:scale-105 transition-all duration-500">
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
        <div className="py-16 lg:py-24 bg-white/5">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Tech Stack</h2>
            <div className="max-w-7xl mx-auto">
              <Marquee gradient={false} speed={50} className="py-8">
                <div className="flex space-x-16 mx-8">
                  <FaReact className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <FaJs className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <FaPython className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <FaNode className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <FaAws className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <FaDocker className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <FaGoogle className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <FaDatabase className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <FaBrain className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <SiMongodb className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <SiPostgresql className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <SiTailwindcss className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <SiScala className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <SiTensorflow className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                  <FaGithub className="w-12 h-12 lg:w-16 lg:h-16 text-white hover:text-gray-300 transition-colors duration-300" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hero; 