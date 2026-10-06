import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { aiData } from '../data/ai';
import { ShieldAlert, ArrowDown } from 'lucide-react';

export default function AISection() {
  return (
    <section id="ai" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title={aiData.title} subtitle={aiData.purpose} />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Flow */}
          <div className="lg:col-span-1 bg-dark-card border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-light mb-6">Process Flow</h3>
            <div className="flex flex-col items-center">
              {aiData.flow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="bg-gray-800 text-light px-4 py-2 rounded-lg text-sm w-full text-center border border-gray-700">
                    {step}
                  </div>
                  {idx < aiData.flow.length - 1 && (
                    <ArrowDown className="text-gray-600 my-2" size={16} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl">
              <h3 className="text-red-400 font-bold text-lg mb-4 flex items-center gap-2">
                <ShieldAlert size={20} /> 차단 대상 위험 문구 (예시)
              </h3>
              <div className="flex flex-wrap gap-3">
                {aiData.riskExamples.map(risk => (
                  <span key={risk} className="bg-red-500/20 text-red-200 px-3 py-1 rounded-full text-sm">
                    {risk}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-dark-card border border-gray-800 p-6 rounded-xl">
                <h3 className="text-primary font-bold text-lg mb-4">현재 모델 및 개선</h3>
                <ul className="space-y-2 text-sub text-sm list-disc list-inside">
                  {aiData.models.map(m => <li key={m}>{m}</li>)}
                  {aiData.improvements.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
              <div className="bg-dark-card border border-gray-800 p-6 rounded-xl">
                <h3 className="text-secondary font-bold text-lg mb-4">향후 개선 과제</h3>
                <ul className="space-y-2 text-sub text-sm list-disc list-inside">
                  {aiData.futurePlans.map(plan => <li key={plan}>{plan}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
