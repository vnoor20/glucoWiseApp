import React from 'react';
import { Activity, Pill, Clock, Dumbbell, Utensils, LineChart, Bell, Users, BookOpen, FileText } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Blood Glucose Tracking",
      description: "Log readings with color-coded insights, view trends in an interactive graph, and maintain a detailed logbook.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Mealtime Tagging",
      description: "Tag readings with meal times (breakfast, lunch, dinner, snacks) to identify patterns and optimize insulin timing.",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: "Exercise Integration",
      description: "Log workouts and monitor their impact on glucose levels to understand how different activities affect your body.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Diet Tracking",
      description: "Record meals with AI-based food recognition or manual input to learn how different foods affect your glucose levels.",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Predictive Analytics",
      description: "Forecast blood glucose levels based on your behavior patterns and receive personalized recommendations.",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Alerts and Reminders",
      description: "Set custom reminders for readings, medications, and appointments, with critical alerts for concerning values.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Data Export & Reports",
      description: "Generate comprehensive reports to share with your healthcare provider and export your data in multiple formats.",
      color: "bg-gray-100 text-gray-600",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Better <span className="text-primary">Diabetes Management</span>
          </h2>
          <p className="text-lg text-gray-600">
            GlucoWise combines comprehensive tracking tools with intelligent analytics to help you make informed decisions about your health.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Feature highlight */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Interactive Analytics Dashboard
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Visualize your health data with our intuitive dashboard that helps you identify patterns and make connections between different aspects of your diabetes management.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Customizable time ranges and data views</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Correlation analysis between different metrics</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Goal setting and progress tracking</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Shareable reports for healthcare providers</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-white rounded-xl shadow-xl p-4 lg:p-6 relative z-10">
                <div className="relative">
                  <div className="absolute -top-5 -right-5 bg-white shadow-lg rounded-lg py-2 px-3 text-sm font-medium text-primary">
                    Last 7 days
                  </div>
                  <h4 className="text-lg font-semibold mb-4">Glucose Trend</h4>
                  <div className="h-48 w-full relative">
                    {/* Chart mockup */}
                    <div className="absolute inset-0 flex items-end space-x-1">
                      <div className="h-full flex items-end justify-between w-full pb-6">
                        {[80, 95, 150, 110, 85, 130, 90].map((value, i) => {
                          const height = (value - 70) / 150 * 100;
                          return (
                            <div key={i} className="flex flex-col items-center w-full">
                              <div 
                                className={`w-full rounded-t-sm ${
                                  value > 140 ? 'bg-orange-400' : 
                                  value < 90 ? 'bg-primary' : 'bg-green-400'
                                }`} 
                                style={{height: `${height}%`}}
                              ></div>
                              <div className="text-xs text-gray-500 mt-1">{['M','T','W','T','F','S','S'][i]}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* Y-axis */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                      <div>200</div>
                      <div>150</div>
                      <div>100</div>
                      <div>70</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 rounded-lg p-3">
                    <p className="text-sm text-gray-500">Average</p>
                    <p className="text-xl font-semibold text-primary">118 mg/dL</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-gray-500">In Range</p>
                    <p className="text-xl font-semibold text-green-700">76%</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-32 w-32 bg-primary/20 rounded-full filter blur-3xl opacity-30"></div>
              <div className="absolute -bottom-8 -left-8 h-40 w-40 bg-primary/20 rounded-full filter blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;