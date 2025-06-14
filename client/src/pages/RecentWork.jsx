import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CustomArrow = ({ direction, onClick }) => {
  const arrowClass = `absolute z-10 top-1/2 transform -translate-y-1/2 
    ${direction === 'left' ? '-left-12' : '-right-12'}
    w-12 h-12 flex items-center justify-center
    bg-black/50 hover:bg-black/80 text-white rounded-full
    border border-white/20 cursor-pointer transition-all duration-300
    backdrop-blur-sm`;

  return (
    <div className={arrowClass} onClick={onClick}>
      {direction === 'left' ? 
        <FaArrowLeft className="w-6 h-6" /> : 
        <FaArrowRight className="w-6 h-6" />
      }
    </div>
  );
};

const RecentWork = () => {
  const projects = [
    {
      id: 1,
      title: "Blockchain-Based Disk Space Rental",
      description: "A decentralized web application (dApp) that allows users to rent out or lease disk space using Ethereum smart contracts. Built with React, Next.js, Solidity, and Web3.js.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
      link: "https://github.com/shubhamjakhete/Blockchain_Disk_Space_Rental"
    },
    {
      id: 2,
      title: "SmartSky - Flight Booking Website Application",
      description: "A flight booking website application built with React, Node.js, and MongoDB. It allows users to search for flights, book tickets, and manage their bookings.",
      image: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
      link: "https://github.com/shubhamjakhete/SmartSky"
    },
    {
      id: 3,
      title: "Hotel Booking Analytics",
      description: "Big data analysis platform for hotel bookings using Python, Spark, and Machine Learning. Developed predictive models for booking patterns and pricing optimization.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
      link: "https://github.com/shubhamjakhete/MSc_big_data_Hotel_booking"
    },
    {
      id: 4,
      title: "IMDB Movie Visualization",
      description: "Interactive data visualization dashboard for IMDB movie data using Preswald Visualisation Library. Created insightful visualizations for movie trends and ratings analysis.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100",
      link: "https://github.com/shubhamjakhete/IMDB_movie_preswald_visualization"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Main content with proper spacing */}
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
          {/* Header Section with animations */}
          <div className="text-center mb-20 opacity-0 animate-fade-in max-w-4xl mx-auto" 
               style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 transform translate-y-10 animate-slide-up hover:text-gray-300 transition-colors duration-300" 
                style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              Recent Work
            </h1>
            <div className="overflow-hidden">
              <p className="text-gray-400 text-xl lg:text-2xl leading-relaxed transform translate-y-10 animate-slide-up" 
                 style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                Exploring innovative solutions through technology. Here are some of my recent projects 
                that showcase my expertise in full-stack development, blockchain, and data analytics.
              </p>
            </div>
          </div>

          {/* Projects Slider with animations */}
          <div className="relative max-w-7xl mx-auto px-8 lg:px-16 opacity-0 animate-fade-in" 
               style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <Slider {...settings} className="h-full">
              {projects.map((project, index) => (
                <div key={project.id} 
                     className="outline-none px-4 h-full flex flex-col opacity-0 animate-fade-in" 
                     style={{ animationDelay: `${1000 + index * 200}ms`, animationFillMode: 'forwards' }}>
                  <div className="bg-black/30 rounded-xl p-6 lg:p-8 h-full backdrop-blur-sm border border-white/10 
                                flex flex-col flex-1 transform transition-all duration-500 
                                hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 hover:border-white/20">
                    <div className="relative overflow-hidden rounded-xl mb-8 group aspect-video">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-all duration-500 
                                 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="text-left flex flex-col flex-1 transform transition-transform duration-500">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-6 group-hover:translate-x-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-lg lg:text-xl mb-8 flex-1 group-hover:translate-x-2 
                                  transition-transform duration-500 delay-100 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mt-auto">
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-3 text-lg text-white border-2 border-white 
                                   px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 
                                   transform hover:translate-x-2 hover:scale-105"
                        >
                          <span>View Project</span>
                          <FaArrowRight className="w-5 h-5 transform transition-transform duration-300 
                                                 group-hover:translate-x-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecentWork; 