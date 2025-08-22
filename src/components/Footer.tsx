import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/profileData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">Said BELKAZ</h2>
            <p className="text-gray-400 mt-2">Développeur Web & Mobile</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href={`https://linkedin.com/in/${personalInfo.contact.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`https://github.com/${personalInfo.contact.github}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href={`mailto:${personalInfo.contact.email}`} 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Said BELKAZ. Tous droits réservés.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Accueil
            </a>
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">
              À propos
            </a>
            <a href="#experience" className="text-gray-400 hover:text-white text-sm transition-colors">
              Expérience
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;