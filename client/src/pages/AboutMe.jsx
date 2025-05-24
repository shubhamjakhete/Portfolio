import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />
      <main className="flex-1 pt-28 pb-12">
        <div className="max-w-5xl mx-auto bg-black/60 rounded-xl shadow-lg border border-white/10 p-10 animate-fade-in">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4 animate-slide-down">
            <div>
              <h1 className="text-4xl font-bold mb-2 hover:text-gray-300 transition-colors duration-300">Shubham Jakhete</h1>
              <h2 className="text-xl text-gray-400 font-medium hover:text-gray-300 transition-colors duration-300">Full Stack Developer</h2>
            </div>
          </div>
          <hr className="border-t border-white/20 my-8 animate-fade-in" />

          {/* Summary */}
          <section className="mb-8 animate-slide-up opacity-0" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-semibold text-white mb-2 tracking-wide hover:text-gray-300 transition-colors duration-300">Summary</h3>
            <p className="text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
               Skilled developer with a passion for building scalable web applications and working across the full stack. Adept at collaborating in fast-paced teams and delivering high-quality solutions.
            </p>
          </section>
          <hr className="border-t border-white/20 my-8 animate-fade-in" style={{ animationDelay: '300ms' }} />

          {/* Experience */}
          <section className="mb-8 animate-slide-up opacity-0" style={{ animationDelay: '400ms' }}>
            <h3 className="text-lg font-semibold text-white mb-2 tracking-wide hover:text-gray-300 transition-colors duration-300">Experience</h3>
            <div className="space-y-4">
              <div className="transform hover:scale-105 transition-transform duration-300 hover:bg-white/5 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Full Stack Web Developer</span>
                  <span className="text-gray-400 text-xs">2023 - 2024</span>
                </div>
                <div className="text-gray-400 text-sm mb-1">Beaver Ecoworks, Remote</div>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li className="hover:text-white transition-colors duration-300">Designed and managed a scalable data processing pipeline integrating real-time industrial automation data from PLC controllers to cloud-hosted MySQL.</li>
                  <li className="hover:text-white transition-colors duration-300">Developed ETL workflows for secure data transfer between on-premises PLC systems and cloud databases via FTP and Web APIs.</li>
                  <li className="hover:text-white transition-colors duration-300">Built and maintained REST APIs to retrieve and process industrial data, ensuring efficient query performance and structured data delivery.</li>
                  <li className="hover:text-white transition-colors duration-300">Implemented cloud-based monitoring solutions using Google Cloud to track real-time data pipeline performance.</li>
                  <li className="hover:text-white transition-colors duration-300">Optimized database indexing and query performance, reducing data retrieval time by 30%.</li>
                </ul>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300 hover:bg-white/5 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Web Developer</span>
                  <span className="text-gray-400 text-xs">2021 - 2021</span>
                </div>
                <div className="text-gray-400 text-sm mb-1">Stdygrp Tech, Pune</div>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li className="hover:text-white transition-colors duration-300">Developed and deployed a custom WordPress solution using PHP and advanced theme customization, increasing user engagement by 20% within two weeks.</li>
                  <li className="hover:text-white transition-colors duration-300">Implemented frontend performance optimizations including lazy loading, image compression, and CSS minification, reducing page load time by 40%.</li>
                  <li className="hover:text-white transition-colors duration-300">Integrated Google Analytics API and implemented SEO optimizations including meta tags, XML sitemaps, and schema markup, driving 30% growth in organic traffic.</li>
                </ul>
              </div>
            </div>
          </section>
          <hr className="border-t border-white/20 my-8 animate-fade-in" style={{ animationDelay: '500ms' }} />

          {/* Education */}
          <section className="mb-8 animate-slide-up opacity-0" style={{ animationDelay: '600ms' }}>
            <h3 className="text-lg font-semibold text-white mb-2 tracking-wide hover:text-gray-300 transition-colors duration-300">Education</h3>
            <div className="space-y-2">
              <div className="transform hover:scale-105 transition-transform duration-300 hover:bg-white/5 p-4 rounded-lg">
                <span className="font-bold">MS Computer Science</span> <span className="text-gray-400 text-xs">2024 - 2026</span>
                <div className="text-gray-400 text-sm">California State University, Fullerton</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300 hover:bg-white/5 p-4 rounded-lg">
                <span className="font-bold">BSc-MSc Computer Science</span> <span className="text-gray-400 text-xs">2015 - 2021</span>
                <div className="text-gray-400 text-sm">Savitribai Phule Pune University, Pune</div>
              </div>
            </div>
          </section>
          <hr className="border-t border-white/20 my-8 animate-fade-in" style={{ animationDelay: '700ms' }} />

          {/* Relevant Courses & Skills (Grid) */}
          <section className="mb-8 animate-slide-up opacity-0" style={{ animationDelay: '800ms' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Relevant Courses */}
              <div className="transform hover:scale-105 transition-transform duration-300 hover:bg-white/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2 tracking-wide hover:text-gray-300 transition-colors duration-300">Relevant Courses</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li className="hover:text-white transition-colors duration-300">CPSC 449 - Web Backend Engineering</li>
                  <li className="hover:text-white transition-colors duration-300">CPSC 535 - Advanced Algorithm</li>
                  <li className="hover:text-white transition-colors duration-300">CPSC 541 - Software Standards and Requirements</li>
                  <li className="hover:text-white transition-colors duration-300">CPSC 559 - Advanced Blockchain</li>
                  <li className="hover:text-white transition-colors duration-300">CPSC 585 - Artificial Neural Network</li>
                </ul>
              </div>
              {/* Skills */}
              <div className="transform hover:scale-105 transition-transform duration-300 hover:bg-white/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2 tracking-wide hover:text-gray-300 transition-colors duration-300">Skills</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                  <li className="hover:text-white transition-colors duration-300">Built responsive web apps using React, Next.js, Tailwind, Node.js, and deployed on GCP/AWS with Docker and Kubernetes.</li>
                  <li className="hover:text-white transition-colors duration-300">Applied ML models (CNNs, GANs, RL, GLMs) using Python libraries and built ETL pipelines with SQL, and NoSQL (MongoDB).</li>
                  <li className="hover:text-white transition-colors duration-300">Developed Ethereum smart contracts using Solidity, Web3.js, Truffle, and tested with MetaMask and Ganache.</li>
                  <li className="hover:text-white transition-colors duration-300">Strong in Python, Java, Scala, JavaScript, PHP with Git, and agile tools like Jira, Asana, and Confluence.</li>
                </ul>
              </div>
            </div>
          </section>
          <hr className="border-t border-white/20 my-8 animate-fade-in" style={{ animationDelay: '900ms' }} />

          {/* Contact */}
          <section className="mb-8 animate-slide-up opacity-0" style={{ animationDelay: '1000ms' }}>
            <h3 className="text-lg font-semibold text-white mb-2 tracking-wide hover:text-gray-300 transition-colors duration-300">Contact</h3>
            <div className="text-gray-400 text-sm space-y-1 transform hover:scale-105 transition-transform duration-300 hover:bg-white/5 p-4 rounded-lg">
              <div>Reach me at <a href="mailto:shubhamsjakhete@gmail.com" className="hover:text-white underline">shubhamsjakhete@gmail.com</a> or on LinkedIn at <a href="https://www.linkedin.com/in/shubham-jakhete" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">https://www.linkedin.com/in/shubham-jakhete"</a>. Lets connect and build something great together!</div>
              <div>Location: San Francisco, CA</div>
              <div>
                <a href="https://www.linkedin.com/in/shubham-jakhete" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">LinkedIn</a> |
                <a href="https://github.com/shubhamjakhete" target="_blank" rel="noopener noreferrer" className="hover:text-white underline ml-1">GitHub</a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe; 