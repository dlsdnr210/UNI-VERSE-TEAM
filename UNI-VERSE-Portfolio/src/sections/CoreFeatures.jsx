import React from 'react';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import { featuresData } from '../data/features';

export default function CoreFeatures() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="Core Features" subtitle="안전하고 신뢰할 수 있는 교내 소통/거래 기능" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map(feature => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
