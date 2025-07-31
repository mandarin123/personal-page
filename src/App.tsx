import { useState, useEffect, useCallback } from "react";
import { Navigation } from "./components/Navigation";
import  HeroSection  from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";

const SECTIONS = ["home", "about", "skills", "projects", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Scrollspy: update activeSection based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = "home";
      for (const id of SECTIONS) {
        const elem = document.getElementById(id);
        if (elem) {
          const { offsetTop, offsetHeight } = elem;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation handler for smooth scroll
  const handleNavigate = useCallback((section: string) => {
    const elem = document.getElementById(section);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen scroll-smooth">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        <section id="home" className="min-h-screen" aria-label="Home">
          <HeroSection />
        </section>

        <section id="about" className="min-h-screen" aria-label="About">
          <AboutSection />
        </section>

        <section id="skills" className="min-h-screen" aria-label="Skills">
          <SkillsSection />
        </section>

        <section id="contact" className="min-h-screen" aria-label="Contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
