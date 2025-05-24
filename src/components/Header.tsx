import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'

      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold text-primary">GlucoWise</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#technology"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Technology
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </a>
            <a
              href="#about-us"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About Us
            </a>
            
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              <a
                href="#about"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#technology"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Technology
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
