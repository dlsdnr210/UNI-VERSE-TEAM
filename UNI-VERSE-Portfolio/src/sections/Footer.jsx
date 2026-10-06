import React from 'react';
import { projectData } from '../data/project';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-light mb-2">
            <span className="text-primary">UNI:VERSE</span>
          </h2>
          <p className="text-sub text-sm">Bootcamp Final Team Project</p>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-sub font-medium">
          <a href={projectData.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          {projectData.releaseUrl !== "TODO - 추후 입력" && (
             <a href={projectData.releaseUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Release</a>
          )}
        </div>
        
        <div className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} UNI:VERSE Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
