import React, { useRef, useEffect, useState, useMemo } from "react";

// --- STAR HOOK ---
function useStars(count: number = 120) {
  return useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2.5 + 1.2,
        duration: Math.random() * 2 + 1.5,
        delay: Math.random() * 4,
        opacity: Math.random() * 0.5 + 0.5,
      })),
    [count]
  );
}

export function AnimatedToolkits() {
  const toolkits = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-400' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-orange-400' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-indigo-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-red-400' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-purple-600' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-teal-500' },
    { name: 'GraphQL', icon: '📊', color: 'from-pink-400 to-purple-500' },
    { name: 'Kubernetes', icon: '⚙️', color: 'from-blue-500 to-cyan-500' },
    { name: 'TensorFlow', icon: '🧠', color: 'from-orange-500 to-yellow-500' },
    { name: 'Git', icon: '📝', color: 'from-red-400 to-pink-400' }
  ];

  return (
    <div className="relative h-96 overflow-hidden rounded-2xl w-full max-w-2xl mx-auto">
      {/* First column - moving up */}
      <div className="absolute left-0 w-1/3 h-full">
        <div className="animate-[slideUp_20s_linear_infinite] flex flex-col gap-4 py-4">
          {[...toolkits, ...toolkits].map((toolkit, index) => (
            <div
              key={`col1-${index}`}
              className={`bg-gradient-to-r ${toolkit.color} p-4 rounded-xl text-white text-center mx-2 min-h-[80px] flex flex-col items-center justify-center shadow-lg`}
            >
              <div className="text-2xl mb-1">{toolkit.icon}</div>
              <div className="text-sm font-semibold">{toolkit.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Second column - moving down */}
      <div className="absolute left-1/3 w-1/3 h-full">
        <div className="animate-[slideDown_25s_linear_infinite] flex flex-col gap-4 py-4">
          {[...toolkits.slice(4), ...toolkits.slice(4), ...toolkits.slice(4)].map((toolkit, index) => (
            <div
              key={`col2-${index}`}
              className={`bg-gradient-to-r ${toolkit.color} p-4 rounded-xl text-white text-center mx-2 min-h-[80px] flex flex-col items-center justify-center shadow-lg`}
            >
              <div className="text-2xl mb-1">{toolkit.icon}</div>
              <div className="text-sm font-semibold">{toolkit.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Third column - moving up */}
      <div className="absolute right-0 w-1/3 h-full">
        <div className="animate-[slideUp_30s_linear_infinite] flex flex-col gap-4 py-4">
          {[...toolkits.slice(8), ...toolkits.slice(8), ...toolkits.slice(8)].map((toolkit, index) => (
            <div
              key={`col3-${index}`}
              className={`bg-gradient-to-r ${toolkit.color} p-4 rounded-xl text-white text-center mx-2 min-h-[80px] flex flex-col items-center justify-center shadow-lg`}
            >
              <div className="text-2xl mb-1">{toolkit.icon}</div>
              <div className="text-sm font-semibold">{toolkit.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-transparent pointer-events-none z-10" />


      {/* Custom keyframes for sliding */}
      <style>{`
        @keyframes slideUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes slideDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}


// --- HERO SECTION ---
export default function HeroSection() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full-Stack Dev | ML Innovator | UI Astronaut";
  const heroRef = useRef<HTMLDivElement>(null);
  const stars = useStars(120);

  useEffect(() => {
    let idx = 0;
    const t = setInterval(() => {
      setText(fullText.slice(0, idx));
      idx++;
      if (idx > fullText.length) {
        clearInterval(t);
        setInterval(() => setShowCursor((v) => !v), 500);
      }
    }, 65);
    return () => clearInterval(t);
  }, [fullText]);

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-16"
      style={{
        background:
          "radial-gradient(ellipse at 60% 20%, rgba(60,60,120,0.22) 0%, transparent 60%)," +
          "radial-gradient(ellipse at 10% 80%, rgba(80,60,140,0.18) 0%, transparent 70%)," +
          "radial-gradient(ellipse at 80% 70%, rgba(120,80,200,0.16) 0%, transparent 80%)," +
          "linear-gradient(135deg, #090a1a 0%, #0a0820 100%)",
      }}
    >
      {/* Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: s.left,
              top: s.top,
              width: `${s.size}px`,
              height: `${s.size}px`,
              borderRadius: "50%",
              background: "white",
              opacity: s.opacity,
              filter: `drop-shadow(0 0 6px #fff)`,
              animation: `starTwinkle ${s.duration}s infinite alternate`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Cosmic Glows */}
      <div className="absolute z-0 pointer-events-none">
        <div className="absolute left-[30%] top-[10%] w-[32rem] h-[32rem] bg-purple-900 opacity-20 rounded-full blur-3xl" />
        <div className="absolute right-[15%] bottom-[10%] w-[24rem] h-[24rem] bg-blue-900 opacity-20 rounded-full blur-2xl" />
        <div className="absolute left-[60%] bottom-[20%] w-[20rem] h-[20rem] bg-pink-900 opacity-20 rounded-full blur-2xl" />
      </div>

      <div ref={heroRef} className="relative z-10 max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Pane */}
        <div className="space-y-8">
          <h5 className="text-4xl md:text-5xl font-bold text-white">Hi, I'm</h5>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Dhanasekar
          </h1>
          <p className="text-xl text-cyan-300 font-light tracking-wider">
            {text}
            <span className={`text-cyan-400 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>
              |
            </span>
          </p>
          <div className="flex items-center space-x-3 animate-slide-in-right">
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse" />
            <p className="text-lg text-gray-300"> Trichy, India</p>
          </div>
          <p className="text-base text-gray-300 leading-relaxed max-w-lg">
            I build immersive, intelligent web systems using React, Golang, PostgreSQL, and Python.
            From cosmic interfaces to machine learning galaxies — I orbit around creativity and impact.
          </p>
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 text-white rounded-lg hover:scale-105 transition-transform">
              View My Galaxy
            </button>
            <button className="border border-cyan-400 px-6 py-3 text-cyan-300 rounded-lg hover:bg-cyan-500/10 transition-all">
              Let's Collaborate
            </button>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            {[
              { label: 'Production Projects', value: '10+' },
              { label: 'Tech Stack Depth', value: '20+' },
              { label: 'Space UI Missions', value: '∞' },
            ].map((stat) => (
              <div key={stat.label} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 animate-pulse">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Pane: Animated Toolkits Card */}
        <div className="space-y-6 flex flex-col items-center justify-center">
          <div className="text-center mb-4 select-none">
            <h3 className="text-xl font-semibold text-cyan-300 tracking-wide">
              Toolkit Universe
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Infinite cosmic scroll of tech skills :)
            </p>
          </div>
          <AnimatedToolkits />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Twinkle Keyframes */}
      <style>{`
        @keyframes starTwinkle {
          0% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.7; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
