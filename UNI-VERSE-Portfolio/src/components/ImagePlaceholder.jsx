import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function ImagePlaceholder({ src, alt, placeholderText, className }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-dark-card border border-gray-800 rounded-lg text-sub ${className}`}>
        <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
        <span className="text-sm font-medium">{placeholderText || alt}</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      onError={() => setError(true)} 
      className={`object-cover rounded-lg ${className}`} 
    />
  );
}
