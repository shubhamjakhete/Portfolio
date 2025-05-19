import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />
      <main className="flex-1 pt-28 pb-12">
        <div className="max-w-5xl mx-auto bg-black/60 rounded-xl shadow-lg border border-white/10 p-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Shubham Jakhete</h1>
              <h2 className="text-xl text-gray-400 font-medium">Full Stack Developer</h2>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              Experienced developer with a passion for building scalable web applications and working across the full stack. Adept at collaborating in fast-paced teams and delivering high-quality solutions.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">Experience</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Software Engineer</span>
                  <span className="text-gray-400 text-xs">2022 - Present</span>
                </div>
                <div className="text-gray-400 text-sm mb-1">Tech Company, Remote</div>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Developed and maintained full-stack web applications using React, Node.js, and MongoDB.</li>
                  <li>Collaborated with cross-functional teams to deliver new features and improvements.</li>
                </ul>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Frontend Developer</span>
                  <span className="text-gray-400 text-xs">2020 - 2022</span>
                </div>
                <div className="text-gray-400 text-sm mb-1">Startup, City</div>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Built responsive UI components with React and Tailwind CSS.</li>
                  <li>Worked closely with designers to implement pixel-perfect interfaces.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">Education</h3>
            <div className="space-y-2">
              <div>
                <span className="font-bold">MSc Computer Science</span> <span className="text-gray-400 text-xs">2020 - 2022</span>
                <div className="text-gray-400 text-sm">University Name</div>
              </div>
              <div>
                <span className="font-bold">BSc Information Technology</span> <span className="text-gray-400 text-xs">2017 - 2020</span>
                <div className="text-gray-400 text-sm">College Name</div>
              </div>
            </div>
          </section>

          {/* Relevant Courses & Skills (Grid) */}
          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Relevant Courses */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">Relevant Courses</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>CPSC 449 - Web Backend Engineering</li>
                  <li>CPSC 535 - Advanced Algorithm</li>
                  <li>CPSC 541 - Software Standards and Requirements</li>
                  <li>CPSC 559 - Advanced Blockchain</li>
                  <li>CPSC 585 - Artificial Neural Network</li>
                </ul>
              </div>
              {/* Skills */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">Skills</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                  <li>Built responsive web apps using React, Next.js, Tailwind, Node.js, and deployed on GCP/AWS with Docker and Kubernetes.</li>
                  <li>Applied ML models (CNNs, GANs, RL, GLMs) using Python libraries and built ETL pipelines with SQL, and NoSQL (MongoDB).</li>
                  <li>Developed Ethereum smart contracts using Solidity, Web3.js, Truffle, and tested with MetaMask and Ganache.</li>
                  <li>Strong in Python, Java, Scala, JavaScript, PHP with Git, and agile tools like Jira, Asana, and Confluence.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-2 tracking-wide">Contact</h3>
            <div className="text-gray-400 text-sm space-y-1">
              <div>Email: shubhamsjakhete@gmail.com</div>
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