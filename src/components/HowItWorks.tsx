import React from 'react';
import { Smartphone, BarChart2, BookCheck, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Track Your Data",
      description: "Log glucose readings, meals, medications, and exercise either manually or through connected devices.",
      color: "bg-primary/10 text-primary",
      image: "https://res.cloudinary.com/dhwihk4fq/image/upload/v1748021558/xow5UtsvsnwaLBoCEB2WxJ_sv5fs2.jpg"
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Gain Insights",
      description: "View personalized analytics and trends to understand how different factors affect your glucose levels.",
      color: "bg-green-100 text-green-600",
      image: "https://res.cloudinary.com/dhwihk4fq/image/upload/v1748022533/Gemini_Generated_Image_a530u4a530u4a530_ctxijs.png"
    },
    {
      icon: <BookCheck className="h-6 w-6" />,
      title: "Take Action",
      description: "Receive personalized recommendations and set goals to improve your diabetes management.",
      color: "bg-purple-100 text-purple-600",
      image: "https://res.cloudinary.com/dhwihk4fq/image/upload/v1748022718/Gemini_Generated_Image_lv42rulv42rulv42_zimkvo.png"
    }
  ];
  
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-primary">GlucoWise</span> Works
          </h2>
          <p className="text-lg text-gray-600">
            A simple, effective approach to managing your diabetes with intelligent technology and personalized insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6 flex-grow">
                <div className={`inline-flex p-3 rounded-lg ${step.color} mb-4`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
              </div>
              
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-12 w-12 text-primary/40" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Onboarding process */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white p-8">
            <h3 className="text-2xl font-bold mb-2">Getting Started is Easy</h3>
            <p className="text-primary-100">Set up your GlucoWise account in minutes and start tracking right away</p>
          </div>
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6 mb-6 md:mb-0">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mr-3">
                    1
                  </div>
                  <h4 className="text-lg font-semibold">Download the App</h4>
                </div>
                <p className="text-gray-600">
                  Available on iOS and Android. Free to download with premium features available.
                </p>
              </div>
              
              <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:px-6 mb-6 md:mb-0">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mr-3">
                    2
                  </div>
                  <h4 className="text-lg font-semibold">Create Your Profile</h4>
                </div>
                <p className="text-gray-600">
                  Set up your personal profile with your diabetes type, treatment plan, and goals.
                </p>
              </div>
              
              <div className="md:w-1/3 md:pl-6">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mr-3">
                    3
                  </div>
                  <h4 className="text-lg font-semibold">Connect Devices</h4>
                </div>
                <p className="text-gray-600">
                  Pair with your glucose monitor, fitness tracker, or smartwatch for automatic data syncing.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;