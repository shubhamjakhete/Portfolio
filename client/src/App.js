import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import RecentWork from './pages/RecentWork';
import AboutMe from './pages/AboutMe';
import './App.css';

// Placeholder components for new routes
const Testimonials = () => (
  <div className="min-h-screen bg-black text-white pt-24">
    <div className="container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">Testimonials</h1>
      <p className="text-gray-400">Coming soon...</p>
    </div>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-black text-white pt-24">
    <div className="container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
      <p className="text-gray-400">Coming soon...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/recent-work" element={<RecentWork />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 