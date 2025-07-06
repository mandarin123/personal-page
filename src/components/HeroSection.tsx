import React, { useRef, useEffect, useState, useMemo } from "react";

// --- TYPES ---
type Logo = {
  name: string;
  group: string;
  logo: string;
  logo2d: string;
};

// --- TOOLKIT LOGOS ---
const toolkitLogos: Logo[] = [
  { name: "React", group: "Web", logo: "https://cdn.iconscout.com/3d/premium/thumb/react-9294845-7574163.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Vue.js", group: "Web", logo: "https://cdn.iconscout.com/3d/premium/thumb/vue-js-9294857-7574175.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" },
  { name: "Svelte", group: "Web", logo: "https://cdn.iconscout.com/3d/premium/thumb/svelte-9294856-7574174.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg" },
  { name: "Bootstrap", group: "Web", logo: "https://cdn.iconscout.com/3d/premium/thumb/bootstrap-9294840-7574158.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" },
  { name: "Next.js", group: "Web", logo: "https://cdn.lordicon.com/3dicons/nextjs.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
  { name: "Angular", group: "Web", logo: "https://cdn.iconscout.com/3d/premium/thumb/angular-9294841-7574159.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" },

  { name: "Node.js", group: "Backend", logo: "https://cdn.iconscout.com/3d/premium/thumb/nodejs-9294848-7574166.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "Python", group: "Backend", logo: "https://cdn.iconscout.com/3d/premium/thumb/python-9294852-7574170.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "C++", group: "Backend", logo: "https://cdn.iconscout.com/3d/premium/thumb/c-plus-plus-9294842-7574160.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", group: "Backend", logo: "https://cdn.iconscout.com/3d/premium/thumb/java-9294847-7574165.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  { name: "Rust", group: "Backend", logo: "https://cdn.iconscout.com/3d/premium/thumb/rust-9294853-7574171.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg" },
  { name: "Golang", group: "Backend", logo: "https://cdn.iconscout.com/3d/premium/thumb/golang-9294847-7574165.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
  { name: "FastAPI", group: "Backend", logo: "https://cdn.lordicon.com/3dicons/fastapi.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" },

  { name: "AWS", group: "Cloud", logo: "https://cdn.iconscout.com/3d/premium/thumb/aws-9294843-7574161.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Azure", group: "Cloud", logo: "https://cdn.iconscout.com/3d/premium/thumb/azure-9294842-7574160.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },

  { name: "Docker", group: "DevOps", logo: "https://cdn.iconscout.com/3d/premium/thumb/docker-9294844-7574162.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
  { name: "Kubernetes", group: "DevOps", logo: "https://cdn.iconscout.com/3d/premium/thumb/kubernetes-9294850-7574168.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" },
  { name: "GitLab", group: "DevOps", logo: "https://cdn.iconscout.com/3d/premium/thumb/gitlab-9294849-7574167.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg" },
  { name: "Linux", group: "DevOps", logo: "https://cdn.iconscout.com/3d/premium/thumb/linux-9294851-7574169.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },

  { name: "TensorFlow", group: "ML", logo: "https://cdn.iconscout.com/3d/premium/thumb/tensorflow-9294854-7574172.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", group: "ML", logo: "https://cdn.lordicon.com/3dicons/pytorch.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg" },

  { name: "MySQL", group: "Database", logo: "https://cdn.iconscout.com/3d/premium/thumb/mysql-9294850-7574168.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", group: "Database", logo: "https://cdn.iconscout.com/3d/premium/thumb/postgresql-9294846-7574164.png", logo2d: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
];

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

// --- DUAL SLIDING CARD ---
type DualSlidingCardProps = {
  leftItems: Logo[];
  rightItems: Logo[];
  speed?: number;
};

function DualSlidingCardHorizontal({
  leftItems,
  rightItems,
  speed = 0.35,
}: DualSlidingCardProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const leftShow = [...leftItems, ...leftItems];
  const rightShow = [...rightItems, ...rightItems];

  useEffect(() => {
    let frame: number;
    let last = performance.now();
    const step = (now: number) => {
      if (leftRef.current && !isPaused) {
        const el = leftRef.current;
        const max = el.scrollHeight / 2;
        const delta = (now - last) * speed;
        el.scrollTop += delta;
        if (el.scrollTop >= max) el.scrollTop = 0;
      }
      last = now;
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [leftItems, isPaused, speed]);

  useEffect(() => {
    let frame: number;
    let last = performance.now();
    const step = (now: number) => {
      if (rightRef.current && !isPaused) {
        const el = rightRef.current;
        const max = el.scrollHeight / 2;
        const delta = (now - last) * speed;
        el.scrollTop -= delta;
        if (el.scrollTop <= 0) el.scrollTop = max;
      }
      last = now;
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [rightItems, isPaused, speed]);

  return (
    <div
      className="relative bg-gradient-to-br from-[#1a223f] via-[#1e1439] to-[#2a0a2a]
        rounded-3xl shadow-2xl border-4 border-cyan-500/30
        w-full max-w-4xl h-96 flex overflow-hidden ring-4 ring-cyan-400/10
        hover:ring-purple-500/20 transition-all duration-700"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-1/2 h-full overflow-hidden border-r-2 border-cyan-700/30">
        <div ref={leftRef} className="absolute inset-0 overflow-hidden">
          <div className="flex flex-col gap-4 py-4 px-3">
            {leftShow.map((logo, idx) => (
              <div
                key={`${logo.name}-left-${idx}`}
                className="flex items-center gap-3 px-3 py-2 bg-gradient-to-br
                  from-cyan-900/60 via-gray-900 to-black rounded-xl border
                  border-cyan-800/30 hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="w-10 h-10 object-contain drop-shadow-lg"
                />
                <img
                  src={logo.logo2d}
                  alt={`${logo.name}-2d`}
                  className="w-8 h-8 object-contain bg-white/5 rounded"
                />
                <div>
                  <div className="text-base font-semibold text-cyan-100">{logo.name}</div>
                  <div className="text-xs uppercase text-cyan-400">{logo.group}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-1/2 h-full overflow-hidden">
        <div ref={rightRef} className="absolute inset-0 overflow-hidden">
          <div className="flex flex-col gap-4 py-4 px-3">
            {rightShow.map((logo, idx) => (
              <div
                key={`${logo.name}-right-${idx}`}
                className="flex items-center gap-3 px-3 py-2 bg-gradient-to-br
                  from-purple-900/60 via-gray-900 to-black rounded-xl border
                  border-purple-800/30 hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="w-10 h-10 object-contain drop-shadow-lg"
                />
                <img
                  src={logo.logo2d}
                  alt={`${logo.name}-2d`}
                  className="w-8 h-8 object-contain bg-white/5 rounded"
                />
                <div>
                  <div className="text-base font-semibold text-purple-100">{logo.name}</div>
                  <div className="text-xs uppercase text-purple-400">{logo.group}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- HERO SECTION COMPONENT ---
export default function HeroSection() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [activeGroup, setActiveGroup] = useState("All");
  const fullText = "Full-Stack Dev | ML Innovator | UI Astronaut";
  const heroRef = useRef<HTMLDivElement>(null);
  const stars = useStars(120);

  const filtered = useMemo(() => {
    if (activeGroup === "All") return toolkitLogos;
    return toolkitLogos.filter((l) => l.group === activeGroup);
  }, [activeGroup]);

  const halfway = Math.ceil(filtered.length / 2);
  const leftLogos = filtered.slice(0, halfway);
  const rightLogos = filtered.slice(halfway);

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
  }, []);

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
        </div>

        {/* Right Pane: Filters + Sliding Cards */}
        <div className="space-y-6">
          {/* 🧭 Just a Heading */}
          <div className="text-center mb-6 select-none">
            <h3 className="text-xl font-semibold text-cyan-300 tracking-wide">
              Toolkit Universe
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Infinite cosmic scroll of tech skills :)
            </p>
          </div>

          {/* 🚀 Dual Sliding Toolkit Cards (always moving) */}
          <DualSlidingCardHorizontal
            leftItems={leftLogos}
            rightItems={rightLogos}
            speed={0.15} // slower speed
          />
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
