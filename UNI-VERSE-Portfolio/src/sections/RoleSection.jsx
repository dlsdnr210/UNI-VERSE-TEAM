import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { responsibilitiesData } from '../data/responsibilities';
import { Check } from 'lucide-react';

export default function RoleSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl overflow-x-auto">
        <SectionTitle title="Roles & Responsibilities" subtitle="팀원별 담당 영역 (Matrix)" />
        <div className="min-w-[800px] bg-dark-card border border-gray-800 rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800/50">
                <th className="p-4 border-b border-gray-700 text-light">Team Member</th>
                {responsibilitiesData.columns.map(col => (
                  <th key={col} className="p-4 border-b border-gray-700 text-sub text-center text-sm font-medium">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {responsibilitiesData.roles.map(role => (
                <tr key={role.name} className="hover:bg-gray-800/20 transition-colors">
                  <td className="p-4 border-b border-gray-800 text-light font-semibold">{role.name}</td>
                  {responsibilitiesData.columns.map(col => (
                    <td key={col} className="p-4 border-b border-gray-800 text-center">
                      {role[col] ? <Check className="inline-block text-primary" size={20} /> : <span className="text-gray-700">-</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
