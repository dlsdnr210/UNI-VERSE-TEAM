import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import ProjectOverview from './sections/ProjectOverview';
import ProblemBackground from './sections/ProblemBackground';
import CoreFeatures from './sections/CoreFeatures';
import Screenshots from './sections/Screenshots';
import Architecture from './sections/Architecture';
import TechStack from './sections/TechStack';
import AISection from './sections/AISection';
import TeamSection from './sections/TeamSection';
import RoleSection from './sections/RoleSection';
import DevelopmentProcess from './sections/DevelopmentProcess';
import CI_CDSection from './sections/CI_CDSection';
import Troubleshooting from './sections/Troubleshooting';
import Results from './sections/Results';
import DemoSection from './sections/DemoSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-light selection:bg-primary/30 font-sans">
      <Header />
      <main>
        <Hero />
        <ProjectOverview />
        <ProblemBackground />
        <CoreFeatures />
        <Screenshots />
        <Architecture />
        <TechStack />
        <AISection />
        <TeamSection />
        <RoleSection />
        <DevelopmentProcess />
        <CI_CDSection />
        <Troubleshooting />
        <Results />
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
