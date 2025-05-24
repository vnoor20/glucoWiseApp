import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'How does GlucoWise protect my health data?',
      answer:
        'GlucoWise uses bank-level encryption to protect your data both on your device and in the cloud. We comply with HIPAA regulations and never share your personal information with third parties without your explicit consent. You can export or delete your data at any time.',
    },
    {
      question: 'Is GlucoWise available on both iOS and Android?',
      answer:
        "GlucoWise is currently available exclusively on iOS. We've focused our development on the iOS platform to provide the most seamless, secure, and optimized experience for users. By leveraging the advanced health and privacy features of iOS, GlucoWise ensures more accurate tracking and a smoother interface tailored specifically for Apple devices.n both iOS and Android platforms. The app is optimized for both phone and tablet devices, and data syncs seamlessly between multiple devices using the same account.",
    },

    {
      question: 'Is there a subscription fee to use GlucoWise?',
      answer:
        "Currently, GlucoWise is completely free to use. All features, including tracking tools and data insights, are available without any subscription fee. We're committed to making diabetes management accessible to everyone, which is why we’re offering the full experience at no cost—for now.",
    },
    {
      question: 'How accurate are the predictive glucose features?',
      answer:
        'Our predictive algorithms have been validated to provide approximately 85% accuracy for 30-minute predictions and 75% accuracy for 1-hour predictions. Accuracy improves over time as the system learns your unique patterns. However, predictions should be used as a supportive tool, not a replacement for regular monitoring.',
    },
    {
      question: 'Is GlucoWise suitable for managing Type 1 diabetes?',
      answer:
        'Yes, GlucoWise is designed with features specifically for Type 1 diabetes management. It supports insulin tracking, carbohydrate counting, real-time blood glucose logging, and personalized insights based on activity and meals. You can also sync data with your healthcare provider for better treatment decisions.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about GlucoWise and diabetes
            management.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-0"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-5 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-primary/5 rounded-xl p-6 flex flex-col sm:flex-row items-center">
            <div className="sm:w-2/3 mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-600">
                Our support team is here to help you with any questions about
                GlucoWise.
              </p>
            </div>
            <div className="sm:w-1/3 sm:text-right">
              <a
                href="#contact"
                className="inline-block bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
