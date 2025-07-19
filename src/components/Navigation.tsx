import { useState } from 'react';
import { Star, Circle, Rocket, Satellite, Telescope, Zap, MessageSquare } from 'lucide-react'; // Added more icons for variety

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Origin', icon: Rocket }, // Changed icon to Rocket
    { id: 'about', label: 'Explorer', icon: Telescope }, // Changed icon to Telescope
    { id: 'projects', label: 'Missions', icon: Satellite }, // Changed icon to Satellite
    { id: 'skills', label: 'Arsenal', icon: Zap }, // Changed icon to Zap
    { id: 'contact', label: 'Transmission', icon: MessageSquare }, // Changed icon to MessageSquare
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gradient-to-br from-gray-900/70 to-zinc-900/70 backdrop-blur-xl border border-blue-600/20 rounded-full px-5 py-2.5 shadow-lg"> {/* Enhanced background and border */}
        <div className="flex items-center space-x-2"> {/* Increased spacing */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-5 py-2 rounded-full transition-all duration-500 ease-out group 
                  ${isActive 
                    ? 'bg-gradient-to-r from-blue-700 to-purple-800 text-white shadow-md transform scale-105' // More vibrant active state, subtle scale
                    : 'text-gray-400 hover:text-white hover:bg-white/10' // Improved hover state
                  }
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-60`} // Added focus styles
              >
                <div className="flex items-center space-x-2">
                  <Icon 
                    size={18} // Slightly larger icons
                    className={`transition-all duration-300 
                      ${isActive ? 'text-blue-300 animate-pulse' : 'group-hover:text-blue-400'}
                      group-hover:scale-110`} // Icon animation on hover and active pulse
                  />
                  <span className="text-sm font-semibold tracking-wide">{item.label}</span> {/* More emphasis on text */}
                </div>
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-white/10 ring-2 ring-blue-500/50 animate-ping-once" /> // Subtle active glow
                )}
                {/* Subtle light streak on hover */}
                <span className="absolute inset-0 block rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent 70%)' }}>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}