import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TechBadge from '../components/TechBadge';
import { techStackData } from '../data/techStack';

export default function TechStack() {
  return (
    <section id="tech" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="Tech Stack" subtitle="프로젝트에 사용된 기술 스택" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStackData.map(category => (
            <div key={category.category} className="bg-dark border border-gray-800 p-6 rounded-xl">
              <h3 className="text-primary font-bold text-lg mb-6 flex items-center gap-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map(tech => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
