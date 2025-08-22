import React from 'react';
import { deployment, security, skills, technologies } from '../data/profileData';
import Section from './Section';

const Skills: React.FC = () => {
  const renderSkillItem = (item: string, categoryIndex: number, itemIndex: number) => {
    return (
      <div
        key={`${categoryIndex}-${itemIndex}`}
        className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700"
        style={{
          opacity: 0,
          animation: `fadeIn 0.5s ease-out ${(categoryIndex * 0.1) + (itemIndex * 0.05)}s forwards`
        }}
      >
        <span className="text-gray-800 dark:text-gray-200">{item}</span>
      </div>
    );
  };

  return (
    <Section id="skills" title="Compétences techniques">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            Langages & Frameworks
          </h3>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {skills.map((category, categoryIndex) => (
                <div key={category.id}>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item, itemIndex) =>
                      renderSkillItem(item, categoryIndex, itemIndex)
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            Technologies & Outils
          </h3>

          <div className="space-y-8">
            {technologies.map((category, categoryIndex) => (
              <div key={category.id}>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, itemIndex) =>
                    renderSkillItem(item, categoryIndex, itemIndex)
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            Sécurité & Pentest
          </h3>
          <div className="space-y-8">
            {security.map((category, categoryIndex) => (
              <div key={category.id}>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, itemIndex) =>
                    renderSkillItem(item, categoryIndex, itemIndex)
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            Déploiement & Publication
          </h3>
          <div className="space-y-8">
            {deployment.map((category, categoryIndex) => (
              <div key={category.id}>
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, itemIndex) =>
                    renderSkillItem(item, categoryIndex, itemIndex)
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;