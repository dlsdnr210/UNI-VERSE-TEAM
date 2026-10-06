import React from 'react';

export default function TechBadge({ name }) {
  return (
    <span className="px-3 py-1 bg-gray-800/50 text-light text-sm rounded-full border border-gray-700">
      {name}
    </span>
  );
}
