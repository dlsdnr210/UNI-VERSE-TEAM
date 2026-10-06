import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TroubleCard from '../components/TroubleCard';
import { troubleshootingData } from '../data/troubleshooting';

export default function Troubleshooting() {
  return (
    <section id="troubleshooting" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="Troubleshooting" subtitle="실제 프로젝트 진행 중 발생한 문제 해결 경험" />
        <div className="grid md:grid-cols-2 gap-6">
          {troubleshootingData.map(item => (
            <TroubleCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
