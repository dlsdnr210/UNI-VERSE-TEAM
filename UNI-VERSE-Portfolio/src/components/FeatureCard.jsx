import React from 'react';
import * as Icons from 'lucide-react';

export default function FeatureCard({ title, description, icon }) {
  const IconComponent = Icons[icon] || Icons.Code;
  return (
    <div className="bg-dark-card p-6 rounded-xl border border-gray-800 hover:border-primary transition-colors flex flex-col items-start">
      <div className="bg-primary/10 p-3 rounded-lg text-primary mb-4">
        <IconComponent size={24} />
      </div>
      <h3 className="text-xl font-bold text-light mb-2">{title}</h3>
      <p className="text-sub leading-relaxed">{description}</p>
    </div>
  );
}
