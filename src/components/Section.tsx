import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-900 ${className}`}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white relative">
          {title}
          <span className="block h-1 w-20 bg-blue-600 dark:bg-blue-500 mx-auto mt-4"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;