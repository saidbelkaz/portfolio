import React from 'react';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/profileData';
import Section from './Section';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Expérience professionnelle">
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-blue-200 dark:border-blue-900 pl-8 ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="relative"
              style={{ 
                opacity: 0, 
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards` 
              }}
            >
              <div className="absolute -left-12 top-1 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
                <Briefcase size={16} className="text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 block mb-1">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {exp.position}
                </h3>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                  {exp.company}
                </h4>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                    {exp.location}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300">
                    {exp.type}
                  </span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;