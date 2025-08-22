import React, { useState } from 'react';
import { BookOpen, X, Loader2 } from 'lucide-react';
import { education, certifications } from '../data/profileData';
import Section from './Section';

const Education: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<{ name: string; link: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Section id="education" title="Formation & Certifications">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <BookOpen size={20} className="text-blue-600 dark:text-blue-400" />
            <span>Éducation</span>
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={edu.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                style={{ 
                  opacity: 0, 
                  animation: `fadeInLeft 0.5s ease-out ${index * 0.2}s forwards` 
                }}
              >
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 block mb-2">
                  {edu.period}
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {edu.degree}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {edu.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
            </svg>
            <span>Certifications</span>
          </h3>
          
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div 
                key={cert.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
                style={{ 
                  opacity: 0, 
                  animation: `fadeInRight 0.5s ease-out ${index * 0.1}s forwards` 
                }}
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {cert.name}
                </h4>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    {cert.issuer}
                  </p>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {cert.date}
                  </span>
                </div>
                {cert.link && (
                  <button 
                    onClick={() => setSelectedCert({ name: cert.name, link: cert.link })}
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-1"
                  >
                    Voir certificat
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl relative">
            <button
              onClick={() => {
                setSelectedCert(null);
                setIsLoading(true);
              }}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={24} />
            </button>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {selectedCert.name}
              </h3>
              <div className="relative" style={{ paddingTop: '75%' }}>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600 dark:text-blue-400" />
                  </div>
                )}
                <iframe
                  src={selectedCert.link}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  onLoad={() => setIsLoading(false)}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Education;