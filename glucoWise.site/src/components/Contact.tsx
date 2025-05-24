import React, { useState } from 'react';
import { Mail, MessageSquare,Send } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    subscribe: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message, subscribe } = formData;

    const { error } = await supabase.from('contact_messages').insert([
      {
        name,
        email,
        subject,
        message,
        subscribe,
      },
    ]);

    if (error) {
      console.error('Error saving message:', error.message);
      alert('Something went wrong. Please try again.');
      return;
    }

    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      subscribe: false,
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-gray-600">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary-dark text-white p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-light/30 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-100">Email</p>
                      <p className="font-medium">support@glucowise.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-light/30 flex items-center justify-center mr-4">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-100">Live Chat</p>
                      <p className="font-medium">Available 9am-5pm EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 p-8">
                {formSubmitted ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                        required
                      >
                        <option value="">Select a topic</option>
                        <option value="support">Technical Support</option>
                        <option value="feature">Feature Request</option>
                        <option value="billing">Billing Question</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center">
                        <input
                          id="subscribe"
                          name="subscribe"
                          type="checkbox"
                          checked={formData.subscribe}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-700">
                          Subscribe to our newsletter for diabetes management tips and app updates
                        </label>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-lg shadow-md transition-colors flex items-center"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* Newsletter signup */}
          <div className="mt-16 bg-primary rounded-2xl shadow-xl p-8 lg:p-12 text-white">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-2/3 mb-6 lg:mb-0">
                <h3 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-primary-100">
                  Get the latest diabetes management tips, app updates, and exclusive content delivered to your inbox.
                </p>
              </div>
              <div className="lg:w-1/3 w-full">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow rounded-l-lg px-4 py-3 text-gray-900 focus:outline-none"
                  />
                  <button className="bg-primary-dark hover:bg-primary-900 text-white rounded-r-lg px-4 py-3 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
