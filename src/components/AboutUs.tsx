import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const AboutUs = () => {
  const creators = [
    {
      name: 'Harnoor Kaur',
      email: 'virknoor20@gmail.com',
      linkedin: 'https://www.linkedin.com/in/harnoor-k-246308104',
      image:
        'https://res.cloudinary.com/dhwihk4fq/image/upload/b_rgb:FFFFFF/c_crop,w_1200,h_1200,g_auto,e_improve,e_sharpen/v1748014210/WhatsApp_Image_2025-05-23_at_20.50.16_s2fl55.jpg',
      github: 'https://github.com/vnoor20',
    },
    {
      name: 'Himanshu Kholia',
      email: 'himanshukholia188@gmail.com',
      linkedin: 'https://in.linkedin.com/in/himanshu-kholi-37b105295',
      image:
        'https://res.cloudinary.com/dhwihk4fq/image/upload/v1748013362/WhatsApp_Image_2025-05-23_at_20.37.58_bxa0py.jpg',
      github: 'https://github.com/himanshukholia',
    },
    {
      name: 'Manav Gupta',
      email: 'manavgupta2678@gmail.com',
      linkedin: 'https://www.linkedin.com/in/l-manav-gupta/',
      image:
        'https://res.cloudinary.com/dhwihk4fq/image/upload/v1748013519/WhatsApp_Image_2025-05-23_at_20.36.31_v8obll.jpg',
      github: 'https://github.com/manavgupta26',
    },
    {
      name: 'Sehdev Singh Saini',
      email: 'creator4@example.com',
      linkedin:
        'https://www.linkedin.com/in/sehdev-singh-saini-08138025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      image:
        'https://res.cloudinary.com/dhwihk4fq/image/upload/v1748022023/WhatsApp_Image_2025-05-23_at_20.33.21_cca1nk.jpg',
      github: 'https://github.com/sehdevvv',
    },
  ];

  return (
    <section
      id="about-us"
      className="py-24 lg:py-40 bg-gradient-to-b from-white to-primary/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet the Creators of <span className="text-primary">GlucoWise</span>
          </h2>
          <p className="text-lg text-gray-600">
            Passionate developers committed to empowering diabetes management
            through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {creators.map((creator, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <img
                src={creator.image}
                alt={creator.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {creator.name}
              </h3>
              <div className="flex justify-center gap-4 mt-3">
                <a
                  href={`mailto:${creator.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  <Mail className="w-8 h-8" />
                </a>
                <a
                  href={creator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a
                  href={creator.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary"
                >
                  <Github className="w-8 h-8" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
