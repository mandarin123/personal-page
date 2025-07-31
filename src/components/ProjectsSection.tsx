import { useMemo } from 'react';
import { ExternalLink, Github } from 'lucide-react';

function useStars(count = 70) {
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

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Thirumathi Kart',
      description: 'A women-focused e-commerce platform featuring dynamic cart, wishlist, seller integration, and a sleek React + Golang ecosystem.',
      image: '/images/thirumathi-kart.jpg',
      technologies: ['React.js', 'TailwindCSS', 'Golang', 'PostgreSQL'],
      liveUrl: 'https://thirumathikart.vercel.app', // or actual hosted URL
      githubUrl: 'https://github.com/dhanasekar-m/thirumathi-kart'
    },
    {
      id: 2,
      title: 'GoodFiction',
      description: 'A story-sharing platform built for passionate writers, featuring JWT auth, story browsing, and profile personalization.',
      image: '/images/goodfiction.jpg',
      technologies: ['React.js', 'Framer Motion', 'Golang', 'JWT', 'PostgreSQL'],
      liveUrl: 'https://goodfiction.vercel.app',
      githubUrl: 'https://github.com/dhanasekar-m/goodfiction'
    },
    {
      id: 3,
      title: 'ML Salary Predictor',
      description: 'A Machine Learning-based web app that predicts salary using user input and regression models, with detailed project report.',
      image: '/images/salary-predictor.jpg',
      technologies: ['Python', 'Scikit-Learn', 'Flask', 'React.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/dhanasekar-m/ml-salary-predictor'
    },
    {
      id: 4,
      title: 'Narcotic Drug Detector',
      description: 'A dual-mode system using iris scanning and environmental sensing to detect drug abuse, powered by IoT & ML.',
      image: '/images/narcotic-detector.jpg',
      technologies: ['Python', 'OpenCV', 'ML Models', 'IoT', 'Flask'],
      liveUrl: '#',
      githubUrl: 'https://github.com/dhanasekar-m/narcotic-detector'
    }
  ];

  const stars = useStars(90);

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(ellipse at 60% 20%, rgba(60,60,120,0.18) 0%, transparent 60%),' +
          'radial-gradient(ellipse at 10% 80%, rgba(80,60,140,0.12) 0%, transparent 70%),' +
          'radial-gradient(ellipse at 80% 70%, rgba(120,80,200,0.10) 0%, transparent 80%),' +
          'linear-gradient(135deg, #090a1a 0%, #0a0820 100%)'
      }}
    >
      {/* Animated Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: '50%',
              background: 'white',
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

      {/* Gradient overlays for smooth transitions */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#090a1a] via-[#090a1a]/70 to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#090a1a] via-[#090a1a]/70 to-transparent pointer-events-none z-20" />

      <div className="relative z-10 w-full max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide" style={{ fontFamily: 'monospace' }}>
            Project Showcase
          </h2>
          <p className="text-gray-400 text-lg">
            A selection of my recent work and creative explorations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 shadow-lg transition-all duration-300 group flex flex-col"
              style={{ boxShadow: '0 4px 48px 0 rgba(40,40,80,0.4)' }}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                <span className="text-5xl animate-pulse-slow select-none">🚀</span>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Star Twinkle Animation */}
      <style>{`
        @keyframes starTwinkle {
          0% { opacity: 0.7; transform: scale(1);}
          50% { opacity: 1; transform: scale(1.2);}
          100% { opacity: 0.7; transform: scale(1);}
        }
        .animate-pulse-slow {
          animation: pulseSlow 2.5s infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.7; transform: scale(1);}
          50% { opacity: 1; transform: scale(1.08);}
        }
      `}</style>
    </section>
  );
}
