import React from 'react';
import { Code, Play, ExternalLink } from 'lucide-react';
import { projectData } from '../data/project';
import { linksData } from '../data/links';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-6">
            {projectData.platform} • {projectData.version}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-light mb-6 tracking-tight">
            {projectData.projectName}
          </h1>
          <p className="text-xl md:text-2xl text-sub font-medium mb-4 leading-relaxed">
            {projectData.subtitle}
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-lg">
            "{projectData.description}"
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-sub bg-dark-card border border-gray-800 px-4 py-2 rounded-lg">
              <span className="font-semibold text-light">기간</span> {projectData.period}
            </div>
            <div className="flex items-center gap-2 text-sm text-sub bg-dark-card border border-gray-800 px-4 py-2 rounded-lg">
              <span className="font-semibold text-light">팀 규모</span> {projectData.teamSize}명
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#demo" className="flex items-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-primary/25">
              <Play size={18} fill="currentColor" /> Demo Video
            </a>
            <a href={linksData.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-light px-6 py-3 rounded-lg font-medium transition-colors">
              <Code size={18} /> GitHub
            </a>
            {linksData.releaseUrl !== "TODO - 추후 입력" && (
               <a href={linksData.releaseUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-transparent border border-gray-700 hover:border-gray-500 text-light px-6 py-3 rounded-lg font-medium transition-colors">
                <ExternalLink size={18} /> Release Notes
              </a>
            )}
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 scale-105" />
          <ImagePlaceholder 
            src="/images/hero/main.png" 
            alt="UNI:VERSE Service Preview" 
            placeholderText="UNI:VERSE Service Preview"
            className="w-full aspect-[4/3] object-top rounded-2xl shadow-2xl relative z-10 border border-gray-800"
          />
        </div>
      </div>
    </section>
  );
}
