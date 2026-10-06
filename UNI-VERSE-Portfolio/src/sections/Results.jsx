import React from 'react';
import SectionTitle from '../components/SectionTitle';
import MetricCard from '../components/MetricCard';
import { resultsData } from '../data/results';
import { ArrowRight } from 'lucide-react';

export default function Results() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="Results & Improvements" subtitle="MVP 출시 후 피드백 및 개선 성과" />
        
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            {resultsData.flow.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-primary/20 text-primary border border-primary/30 px-6 py-3 rounded-full font-bold shadow-lg shadow-primary/10">
                  {step}
                </div>
                {idx < resultsData.flow.length - 1 && (
                  <ArrowRight className="text-gray-600 hidden md:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
           {resultsData.metrics.map(m => (
             <MetricCard key={m.label} label={m.label} value={m.value} />
           ))}
        </div>
        
        <div className="bg-dark-card border border-gray-800 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-light mb-6 text-center">주요 진행 및 개선 사항</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {resultsData.improvements.map(item => (
              <span key={item} className="bg-gray-800 text-sub px-4 py-2 rounded-lg text-sm border border-gray-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
