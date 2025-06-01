import React from 'react';
import { Activity, Phone, Mail, MapPin } from 'lucide-react';
import PrivacyPolicy from '../PrivacyPolicy.tsx'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Activity className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold text-white">GlucoWise</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering people with diabetes to live healthier, more confident lives through intelligent tracking and personalized insights.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
            <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#about-us" className="text-gray-400 hover:text-primary transition-colors">Our Creators</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-primary transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-primary transition-colors">How It Works</a>
              </li>
              
              <li>
                <a href="#faq" className="text-gray-400 hover:text-primary transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Support Center</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-primary transition-colors">Device Compatibility</a>
              </li>
              <li>
                 <Link to="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
      Privacy Policy
    </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
              </li>
             
            </ul>
          </div>
          
          <div>
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-3">Download the App</h4>
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-2 flex items-center transition-colors">
                  <svg className="h-6 w-6 text-white mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 12.323C17.5 14.1095 16.5652 15.7722 15.1783 16.7838L16.5837 19.1234C16.751 19.4172 16.6168 19.7845 16.3168 19.9519C16.0168 20.1193 15.6495 19.9851 15.4821 19.6851L14.0305 17.2685C13.2642 17.668 12.3892 17.894 11.4644 17.894C10.5396 17.894 9.66428 17.668 8.89799 17.2685L7.44645 19.6851C7.27903 19.9851 6.9118 20.1193 6.6118 19.9519C6.3118 19.7845 6.17764 19.4172 6.345 19.1234L7.75042 16.7838C6.36349 15.7722 5.42873 14.1095 5.42873 12.323C5.42873 9.19249 8.13058 6.65991 11.4644 6.65991C14.7982 6.65991 17.5 9.19249 17.5 12.323Z" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} GlucoWise. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
               <Link to="/privacy-policy" className="text-gray-500 hover:text-primary text-sm transition-colors">
      Privacy Policy
    </Link>
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
