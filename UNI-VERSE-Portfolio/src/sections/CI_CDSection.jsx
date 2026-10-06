import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Settings, Server, Code, CheckCircle } from 'lucide-react';

export default function CI_CDSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="CI / CD Pipeline" subtitle="반복적인 작업의 자동화 및 안정적인 배포 환경 구축" />
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-dark-card border border-gray-800 p-6 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Settings size={100} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <Code /> Continuous Integration
            </h3>
            <p className="text-sub text-sm mb-6 line-clamp-2">
              PR 발생 시 코드 통합 전에 정상적으로 Build/Test 되는지 확인합니다.
            </p>
            <div className="space-y-3 relative z-10">
              <div className="bg-gray-800/80 p-3 rounded-lg flex items-center gap-3 text-sm text-light">
                <CheckCircle size={16} className="text-green-400" /> Push / Pull Request
              </div>
              <div className="bg-gray-800/80 p-3 rounded-lg flex items-center gap-3 text-sm text-light">
                <CheckCircle size={16} className="text-green-400" /> GitHub Actions Workflow
              </div>
              <div className="bg-gray-800/80 p-3 rounded-lg flex items-center gap-3 text-sm text-light">
                <CheckCircle size={16} className="text-green-400" /> Automated Test
              </div>
              <div className="bg-gray-800/80 p-3 rounded-lg flex items-center gap-3 text-sm text-light">
                <CheckCircle size={16} className="text-green-400" /> Build Check
              </div>
            </div>
          </div>
          
          <div className="bg-dark-card border border-gray-800 p-6 rounded-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
              <Server size={100} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
              <Server /> Continuous Deployment
            </h3>
            <p className="text-sub text-sm mb-6 line-clamp-2">
              main Merge 시 Docker Image 생성부터 AWS ECS 배포까지 자동화합니다.
            </p>
            <div className="space-y-3 relative z-10">
               <div className="bg-gray-800/80 p-3 rounded-lg flex items-center gap-3 text-sm text-light">
                <CheckCircle size={16} className="text-green-400" /> main branch Merge
              </div>
              <div className="bg-gray-800/80 p-3 rounded-lg flex items-center gap-3 text-sm text-light">
                <CheckCircle size={16} className="text-green-400" /> Docker Build
              </div>
              <div className="bg-gray-800/80 p-3 rounded-lg flex items-center gap-3 text-sm text-light">
                <CheckCircle size={16} className="text-green-400" /> Push to Amazon ECR
              </div>
              <div className="bg-gray-800/80 p-3 rounded-lg flex items-center gap-3 text-sm text-light">
                <CheckCircle size={16} className="text-green-400" /> Redeploy to ECS Fargate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
