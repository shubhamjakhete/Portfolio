import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);

    } catch (error) {
      console.error('Error:', error);
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navigation />
      <main className="flex-1 pt-28 pb-12">
        <div className="max-w-3xl mx-auto bg-black/60 rounded-xl shadow-lg border border-white/10 p-10 animate-fade-in">
          {/* Header */}
          <div className="text-center mb-12 animate-slide-down">
            <h1 className="text-4xl font-bold mb-4 hover:text-gray-300 transition-colors duration-300">Get In Touch</h1>
            <p className="text-gray-400 text-lg">
              Have a question or want to work together? Let's connect!
            </p>
          </div>

          <hr className="border-t border-white/20 my-8 animate-fade-in" />

          {/* Status Messages */}
          {status.submitted && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center animate-fade-in">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status.error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center animate-fade-in">
              {status.error}
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up opacity-0" style={{ animationDelay: '200ms' }}>
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.submitting}
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white 
                  focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent
                  transition-all duration-300 hover:bg-black/40 disabled:opacity-50"
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.submitting}
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white 
                  focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent
                  transition-all duration-300 hover:bg-black/40 disabled:opacity-50"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status.submitting}
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white 
                  focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent
                  transition-all duration-300 hover:bg-black/40 resize-none disabled:opacity-50"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full px-8 py-4 rounded-lg bg-white text-black font-semibold
                  hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.02]
                  focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50
                  disabled:hover:scale-100 disabled:hover:bg-white"
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          <hr className="border-t border-white/20 my-8 animate-fade-in" style={{ animationDelay: '400ms' }} />

          {/* Additional Contact Info */}
          <div className="text-center space-y-4 animate-slide-up opacity-0" style={{ animationDelay: '600ms' }}>
            <p className="text-gray-400">
              You can also reach me directly at{' '}
              <a href="mailto:shubhamsjakhete@gmail.com" className="text-white hover:text-gray-300 underline transition-colors duration-300">
                shubhamsjakhete@gmail.com
              </a>
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/shubham-jakhete"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 underline transition-colors duration-300"
              >
                LinkedIn
              </a>
              <span className="text-gray-500">|</span>
              <a
                href="https://github.com/shubhamjakhete"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 underline transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 