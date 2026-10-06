import React from 'react';

export default function MetricCard({ label, value }) {
  return (
    <div className="bg-dark-card border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sub text-sm uppercase tracking-wider">{label}</div>
    </div>
  );
}
