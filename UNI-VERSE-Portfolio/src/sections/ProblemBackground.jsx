import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { problemsData } from '../data/problems';
import { AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProblemBackground() {
  return (
    <section className="py-20 bg-dark-card/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="Background & Solution" subtitle="UNI:VERSE가 해결하고자 하는 문제" />
        
        <div className="space-y-8">
          {problemsData.map(item => (
            <div key={item.id} className="grid md:grid-cols-2 gap-6 items-center bg-dark border border-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-lg text-red-400 shrink-0">
                  <AlertCircle size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-bold mb-2 uppercase tracking-wide">Problem</h4>
                  <p className="text-light text-lg leading-relaxed">{item.problem}</p>
                </div>
              </div>
              <div className="hidden md:flex justify-center text-gray-700">
                 <ArrowRight size={24} />
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-500/10 p-3 rounded-lg text-green-400 shrink-0 md:hidden">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-primary text-sm font-bold mb-2 uppercase tracking-wide">Solution</h4>
                  <p className="text-sub text-lg leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
