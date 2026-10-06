import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { linksData } from '../data/links';
import { ExternalLink, Code, Video } from 'lucide-react';

export default function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-dark-card/50 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="Demo & Links" subtitle="프로젝트 시연 및 관련 링크" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="w-full aspect-video bg-black rounded-2xl border border-gray-800 overflow-hidden flex items-center justify-center">
             {linksData.youtubeUrl.startsWith("http") ? (
               <iframe 
                width="100%" 
                height="100%" 
                src={linksData.youtubeUrl} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
             ) : (
               <div className="text-center text-sub flex flex-col items-center gap-4">
                 <Video size={48} className="opacity-50" />
                 <p>{linksData.youtubeUrl}</p>
               </div>
             )}
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-light mb-2">Experience UNI:VERSE</h3>
            <p className="text-sub mb-8 leading-relaxed">
              대학 인증 기반 커뮤니티와 AI 안전 직거래 플랫폼의 모든 기능을 지금 바로 확인해보세요.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               {linksData.serviceUrl !== "TODO - 추후 입력" ? (
                 <a href={linksData.serviceUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl font-bold transition-colors w-full sm:w-auto">
                    <ExternalLink size={20} /> Service URL
                 </a>
               ) : (
                 <button disabled className="flex items-center justify-center gap-2 bg-gray-800 text-gray-500 px-8 py-4 rounded-xl font-bold cursor-not-allowed w-full sm:w-auto">
                    <ExternalLink size={20} /> Service URL (TODO)
                 </button>
               )}
               
               <a href={linksData.githubUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-dark-card border border-gray-700 hover:border-gray-500 text-light px-8 py-4 rounded-xl font-bold transition-colors w-full sm:w-auto">
                  <Code size={20} /> GitHub
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
