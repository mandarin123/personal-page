import { useEffect, useRef, useState } from 'react';

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { label: 'Years Experience', value: '4+', icon: '🚀' },
    { label: 'Projects Delivered', value: '10+', icon: '🌌' },
    { label: 'Technologies', value: '25+', icon: '⚡' },
    { label: 'Happy Clients', value: '10+', icon: '✨' },
  ];

  const expertise = [
    {
      icon: '🧠',
      title: 'Front-End Development',
      description: 'Crafting responsive, pixel-perfect interfaces with clean, modular code using React, Next.js, and modern CSS frameworks',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🎨',
      title: 'UI Integration & Styling',
      description: 'Translating Figma and design systems into flexible, scalable, and accessible UIs using Tailwind, Styled Components, and SASS',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '⚙️',
      title: 'Performance & Optimization',
      description: 'Improving app performance, accessibility, and maintainability through smart rendering strategies and optimized state management',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: '🤝',
      title: 'Team Collaboration',
      description: 'Working closely with backend teams, designers, and product managers to ship high-quality features on time in agile environments',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '📦',
      title: 'Component Architecture',
      description: 'Designing scalable, reusable, and maintainable UI components with state isolation and clear separation of concerns in React apps',
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      icon: '🛰️',
      title: 'Real-World Projects',
      description: 'Delivering robust front-end solutions in production environments, from AI-powered chat platforms to media streaming and e-commerce',
      gradient: 'from-indigo-500 to-violet-500'
    },
    {
      icon: '🧪',
      title: 'Testing & Reliability',
      description: 'Building confidence through unit and integration testing using Jest and React Testing Library for stable, scalable codebases',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: '🚀',
      title: 'Rapid Prototyping',
      description: 'Transforming ideas into functional interfaces quickly using modern toolchains like Vite, Tailwind, and component-driven development',
      gradient: 'from-cyan-600 to-blue-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Gradient overlays for smooth transitions */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#090a1a] via-[#090a1a]/70 to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#090a1a] via-[#090a1a]/70 to-transparent pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🌌 Core <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-500/20 blur-xl animate-pulse" />
          </div>
          <p className="text-gray-300 text-base max-w-3xl mx-auto leading-relaxed">
            Creating seamless, performant, and user-focused digital experiences through modern front-end technologies
          </p>
        </div>
        
        {/* Enhanced Stats Grid with 3D effect */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative text-center bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/70 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-2xl mb-2 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 animate-pulse">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Expertise Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          {expertise.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-gradient-to-br from-black/40 via-gray-900/40 to-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center hover:border-cyan-500/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`} />
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${item.gradient} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000`}
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.3}s`,
                      animation: 'float 3s ease-in-out infinite'
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="text-3xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              {/* Glowing border effect */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} 
                   style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
