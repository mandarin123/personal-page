
import { useState, useEffect } from 'react';
import { SpaceScene } from '@/components/SpaceScene';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scrolling and section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-black text-white overflow-x-hidden">
      {/* 3D Background Scene */}
      <SpaceScene />
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      {/* Main Content */}
      <div className="relative z-10">
        <div id="home" className="min-h-screen">
          <HeroSection />
        </div>
        
        <div id="about" className="min-h-screen flex items-center">
          <AboutSection />
        </div>
        
        <div id="skills" className="min-h-screen flex items-center">
          <SkillsSection />
        </div>
        
        <div id="contact" className="min-h-screen flex items-center">
          <ContactSection />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Alex Cosmos. Crafted with passion across the digital universe.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
