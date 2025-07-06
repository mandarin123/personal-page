
import { useState } from 'react';
import { Star, Circle } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Origin', icon: Circle },
    { id: 'about', label: 'Explorer', icon: Star },
    { id: 'projects', label: 'Missions', icon: Circle },
    { id: 'skills', label: 'Arsenal', icon: Star },
    { id: 'contact', label: 'Transmission', icon: Circle },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 group ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon 
                    size={16} 
                    className={`transition-all duration-300 ${
                      isActive ? 'text-blue-400' : 'group-hover:text-blue-400'
                    }`} 
                  />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
