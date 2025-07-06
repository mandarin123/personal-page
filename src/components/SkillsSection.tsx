import { useEffect, useRef, useState, useMemo } from "react";

// Star background generator
function useStars(count = 80) {
  return useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 1.5 + 0.7,
        duration: Math.random() * 2 + 1.5,
        delay: Math.random() * 4,
        opacity: Math.random() * 0.5 + 0.5,
      })),
    [count]
  );
}

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Three.js/WebGL", level: 85 },
        { name: "Tailwind CSS", level: 92 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "GraphQL", level: 78 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Figma", level: 75 },
      ],
    },
  ];

  // Animate skill bars on scroll
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stars = useStars(90);

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Leading development of complex web applications using React and Three.js",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Built scalable web applications and APIs for various client projects",
    },
    {
      title: "Junior Developer",
      company: "StartUp Studios",
      period: "2019 - 2020",
      description:
        "Contributed to multiple projects focusing on modern web technologies",
    },
  ];

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at 60% 20%, rgba(60,60,120,0.18) 0%, transparent 60%)," +
          "radial-gradient(ellipse at 10% 80%, rgba(80,60,140,0.12) 0%, transparent 70%)," +
          "radial-gradient(ellipse at 80% 70%, rgba(120,80,200,0.10) 0%, transparent 80%)," +
          "linear-gradient(135deg, #090a1a 0%, #0a0820 100%)",
      }}
    >
      {/* Animated Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: "50%",
              background: "white",
              opacity: star.opacity,
              filter: `drop-shadow(0 0 6px #fff)`,
              animation: `starTwinkle ${star.duration}s infinite alternate`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
      {/* Nebula Glow Effects */}
      <div className="absolute z-0 pointer-events-none">
        <div className="absolute left-[30%] top-[10%] w-96 h-96 bg-purple-900 opacity-10 rounded-full blur-3xl" />
        <div className="absolute right-[15%] bottom-[10%] w-72 h-72 bg-blue-900 opacity-10 rounded-full blur-2xl" />
        <div className="absolute left-[60%] bottom-[20%] w-60 h-60 bg-pink-900 opacity-10 rounded-full blur-2xl" />
      </div>
      {/* Content */}
      <div
        ref={sectionRef}
        className="relative z-10 w-full max-w-7xl px-6 py-20"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide" style={{ fontFamily: "monospace" }}>
            Internships & Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Technical skills and professional experience across various domains
          </p>
        </div>
        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg"
              style={{ boxShadow: "0 4px 48px 0 rgba(40,40,80,0.4)" }}
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-300 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                          transitionDelay: visible
                            ? `${(categoryIndex * 4 + index) * 100}ms`
                            : "0ms",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Professional Experience
          </h3>
          <div className="relative space-y-6 before:absolute before:left-2.5 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-700/30 before:to-purple-700/10 before:rounded-full before:z-0">
            {experience.map((job, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 shadow"
                style={{ marginLeft: "1.5rem" }}
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-7 top-7 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-white/10 shadow-lg animate-timeline-dot`} />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">{job.title}</h4>
                  <span className="text-blue-400 font-medium">{job.period}</span>
                </div>
                <p className="text-purple-300 mb-2">{job.company}</p>
                <p className="text-gray-400">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes starTwinkle {
          0% { opacity: 0.7; transform: scale(1);}
          50% { opacity: 1; transform: scale(1.2);}
          100% { opacity: 0.7; transform: scale(1);}
        }
        .animate-timeline-dot {
          animation: timelineDotPulse 2s infinite alternate;
        }
        @keyframes timelineDotPulse {
          0% { box-shadow: 0 0 0 0 #60a5fa44, 0 0 0 0 #a78bfa33; }
          100% { box-shadow: 0 0 8px 6px #60a5fa44, 0 0 16px 12px #a78bfa33; }
        }
      `}</style>
    </section>
  );
}
