import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import './App.css';

// Pages
const Home = () => (
  <div className="container">
    <h1>Welcome to the Full Stack App</h1>
    <p>This is a sample home page built with React and Node.js.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 