import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ImagePlaceholder from '../components/ImagePlaceholder';

export default function Architecture() {
  return (
    <section id="architecture" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="AWS 아키텍처" subtitle="AWS 및 컨테이너 기반 인프라 구조" />
        <div className="bg-white/5 rounded-2xl p-4 md:p-8 border border-gray-800 max-w-5xl mx-auto">
           <ImagePlaceholder 
            src="/images/architecture/Awsv2.png" 
            alt="AWS Architecture" 
            placeholderText="AWS Architecture Flow Diagram"
            className="w-full aspect-[16/9] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
