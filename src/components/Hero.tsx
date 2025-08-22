import React from 'react';
import { ArrowDown, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { personalInfo } from '../data/profileData';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 pt-16 pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-200 dark:bg-indigo-900/30 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 animate-fadeIn">Bonjour, je suis</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeInUp">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8 animate-fadeInUp animation-delay-100">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap gap-4 mb-8 animate-fadeInUp animation-delay-200">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={18} />
                <span>{personalInfo.contact.email}</span>
              </a>
              <a
                href={`https://linkedin.com/in/${personalInfo.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`https://github.com/${personalInfo.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <MapPin size={18} />
                <span>{personalInfo.contact.location}</span>
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={personalInfo.contact.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 w-fit bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all inline-block"
              >
                Télécharger mon CV Format PDF
              </a>
              <div className="space-x-4 animate-fadeInUp animation-delay-300">
                <a
                  href="#experience"
                  className="px-6 py-3 bg-white border border-gray-300 dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg shadow-md hover:shadow-lg transition-all inline-block"
                >
                  Mon parcours
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all inline-block"
                >
                  Me contacter
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl animate-fadeIn">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
          aria-label="Scroll to About Section"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;