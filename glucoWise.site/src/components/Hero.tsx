import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 lg:pt-24 pb-16 lg:pb-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute w-full h-full bg-[radial-gradient(#6CAB9C_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="block">Take Charge of Diabetes,</span>
              <span className="text-primary">One Reading at a Time.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
              GlucoWise is your intelligent companion for diabetes management, helping you track glucose levels, medications, diet, and exercise all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                <Download size={20} className="mr-2" />
                Download App
              </button>
              <button className="border border-primary text-primary hover:bg-primary/5 py-3 px-6 rounded-lg transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden p-2 max-w-md mx-auto">
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="GlucoWise App Dashboard" 
                className="rounded-2xl w-full"
              />
              {/* Floating cards animation */}
              <div className="absolute -right-8 -top-4 bg-white rounded-2xl shadow-lg p-4 transform rotate-6 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">98</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Glucose Level</p>
                    <p className="text-sm font-semibold text-gray-900">In Range</p>
                  </div>
                </div>
              </div>
              <div className="absolute -left-10 bottom-16 bg-white rounded-2xl shadow-lg p-4 transform -rotate-6 animate-float-delayed">
                <div className="h-16 w-32">
                  <p className="text-xs text-gray-500">Weekly Average</p>
                  <div className="flex items-end mt-1 space-x-1 h-8">
                    <div className="w-2 bg-primary/20 rounded-t h-3"></div>
                    <div className="w-2 bg-primary/30 rounded-t h-4"></div>
                    <div className="w-2 bg-primary/40 rounded-t h-6"></div>
                    <div className="w-2 bg-primary/50 rounded-t h-5"></div>
                    <div className="w-2 bg-primary/60 rounded-t h-7"></div>
                    <div className="w-2 bg-primary/70 rounded-t h-8"></div>
                    <div className="w-2 bg-primary/40 rounded-t h-6"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/4 -right-10 h-40 w-40 bg-primary/20 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute bottom-1/4 -left-12 h-32 w-32 bg-primary/40 rounded-full filter blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;