import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Modal from '../components/Modal';

export default function Screenshots() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    { src: '/images/screenshots/회원가입.png', label: "회원가입 화면" },
    { src: '/images/screenshots/로그인.png', label: "로그인 화면" },
    { src: '/images/screenshots/커뮤니티.png', label: "커뮤니티 화면" },
    { src: '/images/screenshots/중고거래_상세.png', label: "중고거래 상세 화면" },
    { src: '/images/screenshots/채팅.png', label: "채팅 화면" },
    { src: '/images/screenshots/AI위험문구.png', label: "AI 위험문구 차단 화면" }
  ];

  return (
    <section className="py-20 bg-dark-card/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="Service Screens" subtitle="실제 서비스 구현 화면" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <div key={i} className="cursor-pointer group" onClick={() => setSelectedImage(img)}>
              <div className="overflow-hidden rounded-xl border border-gray-800 group-hover:border-primary/50 transition-all">
                <ImagePlaceholder 
                  src={img.src} 
                  alt={img.label} 
                  placeholderText={img.label}
                  className="w-full aspect-video object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center text-sub mt-4 font-medium">{img.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <ImagePlaceholder 
            src={selectedImage.src} 
            alt={selectedImage.label} 
            placeholderText={selectedImage.label}
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        )}
      </Modal>
    </section>
  );
}
