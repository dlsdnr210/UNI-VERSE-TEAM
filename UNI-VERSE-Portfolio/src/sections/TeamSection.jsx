import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TeamCard from '../components/TeamCard';
import { teamData } from '../data/team';

export default function TeamSection() {
  return (
    <section id="team" className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="Our Team" subtitle="UNI:VERSE 프로젝트를 만든 사람들" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map(member => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
