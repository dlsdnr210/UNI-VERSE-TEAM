import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { projectData } from '../data/project';

export default function ProjectOverview() {
  return (
    <section id="overview" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="Project Overview" subtitle="프로젝트 핵심 정보" />
        <div className="bg-dark-card border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "프로젝트명", value: projectData.projectName },
              { label: "플랫폼", value: projectData.platform },
              { label: "개발 방식", value: projectData.methodology },
              { label: "Version", value: projectData.version }
            ].map(item => (
              <div key={item.label} className="border-l-2 border-primary/30 pl-4">
                <div className="text-sub text-sm mb-1">{item.label}</div>
                <div className="text-light font-semibold text-lg">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
