import React from 'react';
import { Target, Heart, UserCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-primary">GlucoWise</span>
          </h2>
          <p className="text-lg text-gray-600">
            GlucoWise is designed to simplify diabetes management through intuitive tracking, insightful analytics, and personalized recommendations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 transition-transform duration-300 hover:-translate-y-2">
            <div className="inline-block p-3 bg-primary/10 rounded-lg text-primary mb-4">
              <Target size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">For People with Diabetes</h3>
            <p className="text-gray-600">
              Whether you have Type 1 or Type 2 diabetes, GlucoWise provides the tools you need to manage your condition effectively and make informed decisions about your health.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 transition-transform duration-300 hover:-translate-y-2">
            <div className="inline-block p-3 bg-primary/10 rounded-lg text-primary mb-4">
              <Heart size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">For Caregivers</h3>
            <p className="text-gray-600">
              Stay connected with your loved ones' health data through secure sharing features. Receive alerts and gain peace of mind knowing you can provide support when needed.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 transition-transform duration-300 hover:-translate-y-2">
            <div className="inline-block p-3 bg-primary/10 rounded-lg text-primary mb-4">
              <UserCheck size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">For Healthcare Providers</h3>
            <p className="text-gray-600">
              Access comprehensive patient data with detailed reports and trends. Make more informed treatment decisions based on accurate, real-time information.
            </p>
          </div>
        </div>
        
        <div className="mt-16 lg:mt-24 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Approach to Diabetes Management
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We believe effective diabetes management should be:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-800">Personalized</p>
                  <p className="text-gray-600">Tailored insights based on your unique patterns and health profile</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-800">Proactive</p>
                  <p className="text-gray-600">Predictive alerts help prevent episodes before they occur</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-800">Comprehensive</p>
                  <p className="text-gray-600">Integrating all aspects of diabetes care in one convenient platform</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-800">Empowering</p>
                  <p className="text-gray-600">Giving you the knowledge and tools to take control of your health</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/7088481/pexels-photo-7088481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Person using GlucoWise app" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;