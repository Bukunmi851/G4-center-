
import React from 'react';
import { Dumbbell, MapPin, Phone, Instagram, Clock } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Dumbbell className="text-emerald-500 w-8 h-8" />
              <span className="font-heading text-xl font-bold tracking-tighter">G4 FITNESS</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
              <a href="#facilities" className="hover:text-emerald-400 transition-colors">Facilities</a>
              <a href="#ai-tools" className="hover:text-emerald-400 transition-colors">AI Tools</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
              JOIN NOW
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-zinc-950 border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="text-emerald-500 w-6 h-6" />
                <span className="font-heading text-lg font-bold tracking-tighter">G4 FITNESS</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering the Akure community through professional fitness training and a supportive atmosphere since day one.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-emerald-500 mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Trainers</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-emerald-500 mb-6">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} G4 Fitness Center Akure. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
