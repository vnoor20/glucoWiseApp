import React from 'react';
import { Brain, CloudRain, Activity, Smartphone, Zap } from 'lucide-react';

const Technology = () => {
  return (
    <section id="technology" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Technology{' '}
            <span className="text-primary">Behind GlucoWise</span>
          </h2>
          <p className="text-lg text-gray-600">
            Powered by cutting-edge technology to deliver accurate insights and
            personalized recommendations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center mb-20">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -z-10 -inset-1 rounded-3xl bg-gradient-to-r from-primary to-primary-dark opacity-30 blur-xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 lg:p-8 overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Brain className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold">AI-Powered Analysis</h3>
                  </div>
                  <div className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    Advanced
                  </div>
                </div>

                <div className="relative mt-4 mb-8">
                  <div className="h-48 bg-gradient-to-b from-primary/5 to-white rounded-xl p-4">
                    <div className="text-sm text-gray-500 mb-2">
                      Pattern Recognition
                    </div>
                    <div className="flex flex-col h-32 justify-between">
                      <div className="flex items-center">
                        <div className="w-20 text-xs text-gray-500">
                          Breakfast
                        </div>
                        <div className="h-4 bg-primary/20 rounded-sm w-4/5"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-20 text-xs text-gray-500">Lunch</div>
                        <div className="h-4 bg-primary/30 rounded-sm w-3/5"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-20 text-xs text-gray-500">Dinner</div>
                        <div className="h-4 bg-primary/40 rounded-sm w-4/6"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-20 text-xs text-gray-500">
                          Exercise
                        </div>
                        <div className="h-4 bg-green-300 rounded-sm w-2/3"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-20 text-xs text-gray-500">Sleep</div>
                        <div className="h-4 bg-purple-300 rounded-sm w-1/2"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 right-4 bg-white shadow-lg rounded-lg p-3">
                    <div className="text-sm text-gray-600 mb-1">
                      Glucose Impact Factors
                    </div>
                    <div className="text-xl font-bold text-primary">
                      85% Accuracy
                    </div>
                  </div>
                </div>

                <p className="text-gray-600">
                  Our advanced machine learning algorithms analyze your data to
                  identify patterns and predict glucose fluctuations with
                  remarkable accuracy.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Smart Technology for Better Health
            </h3>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Predictive Analytics
                  </h4>
                  <p className="text-gray-600">
                    Our predictive algorithms analyze your historical data to
                    forecast glucose trends and help you make proactive
                    adjustments to your routine.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Activity className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">
                    Smart Algorithms
                  </h4>
                  <p className="text-gray-600">
                    Our proprietary algorithms provide personalized insights
                    that improve over time as they learn your unique patterns
                    and responses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
