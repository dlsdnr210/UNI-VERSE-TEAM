import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { processData } from '../data/process';
import { GitBranch, RefreshCw, Rocket } from 'lucide-react';

export default function DevelopmentProcess() {
  return (
    <section id="process" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="Development Process" subtitle={`${processData.methodology} 기반의 체계적인 개발`} />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-dark-card border border-gray-800 p-8 rounded-2xl">
            <div className="flex items-center gap-3 text-xl font-bold text-light mb-6">
              <RefreshCw className="text-primary" /> Scrum Flow
            </div>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
              {processData.flow.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-dark-card text-sub shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-primary group-hover:text-primary transition-colors z-10">
                    {idx + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-800 bg-dark group-hover:border-primary/50 transition-colors">
                    <p className="font-semibold text-light text-sm">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-dark-card border border-gray-800 p-8 rounded-2xl">
             <div className="flex items-center gap-3 text-xl font-bold text-light mb-6">
              <GitBranch className="text-secondary" /> Git Flow
            </div>
            <div className="flex flex-col gap-4">
              {processData.gitFlow.map((step, idx) => (
                <div key={idx} className="bg-gray-800/50 p-4 rounded-xl text-center text-light font-medium border border-gray-700">
                  {step}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-dark-card border border-gray-800 p-8 rounded-2xl">
             <div className="flex items-center gap-3 text-xl font-bold text-light mb-6">
              <Rocket className="text-green-400" /> Release Flow
            </div>
             <div className="flex flex-col gap-4">
              {processData.release.map((step, idx) => (
                <div key={idx} className="bg-gray-800/50 p-4 rounded-xl text-center text-light font-medium border border-gray-700">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
