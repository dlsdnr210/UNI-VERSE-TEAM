import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

export default function TeamCard({ member }) {
  return (
    <div className="bg-dark-card rounded-xl overflow-hidden border border-gray-800 flex flex-col">
      <div className="p-6 flex-grow">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
            <ImagePlaceholder 
              src={member.profileImage} 
              alt={member.name}
              placeholderText={member.name[0]} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-light">{member.name}</h3>
            <p className="text-primary font-medium text-sm">{member.role}</p>
          </div>
        </div>
        <p className="text-sub text-sm mb-4 leading-relaxed line-clamp-3">
          {member.keyContribution}
        </p>
        <div>
          <h4 className="text-light text-xs font-bold uppercase tracking-wider mb-2">Responsibilities</h4>
          <div className="flex flex-wrap gap-2">
            {member.responsibilities.map(r => (
              <span key={r} className="text-xs text-sub bg-gray-800 px-2 py-1 rounded-md">{r}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
