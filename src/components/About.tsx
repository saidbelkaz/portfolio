import React from 'react';
import { personalInfo } from '../data/profileData';
import Section from './Section';

const About: React.FC = () => {
  const paragraphs = personalInfo.about.split('\n\n');

  return (
    <Section id="about" title="À propos de moi">
      <div className="max-w-3xl mx-auto">
        {paragraphs.map((paragraph, index) => (
          <p 
            key={index} 
            className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
};

export default About;