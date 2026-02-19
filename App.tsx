
import React from 'react';
import { 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Dumbbell, 
  Activity, 
  Zap, 
  ChevronRight, 
  ArrowRight,
  Shield,
  Coffee
} from 'lucide-react';
import Layout from './components/Layout';
import AIAssistant from './components/AIAssistant';
import { G4_INFO } from './types';

const App: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/449/1920/1080" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Gym background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Activity className="w-4 h-4" />
              Elite Fitness in Akure
            </div>
            <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter leading-[0.9] mb-8">
              UNLEASH YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">LIMITLESS</span> <br />
              POTENTIAL.
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-xl">
              Professional training, premium equipment, and a personal atmosphere designed to help you reach your peak performance. Join the community at G4 Fitness.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all group">
                START TRAINING <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-zinc-900 hover:bg-zinc-800 border border-white/10 px-8 py-4 rounded-xl font-bold transition-all">
                VIEW PRICING
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8 border-t border-white/5 pt-8">
              <div>
                <div className="flex items-center gap-1 text-emerald-500 mb-1">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-2xl font-bold text-white">{G4_INFO.rating}</span>
                </div>
                <div className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Google Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4.0+</div>
                <div className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Active Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section id="about" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors group">
              <div className="bg-emerald-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="text-emerald-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Opening Hours</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Currently <span className="text-emerald-500 font-bold">{G4_INFO.status}</span>. We close at {G4_INFO.closingTime}.
              </p>
              <div className="text-xs font-bold text-zinc-500 bg-zinc-800/50 p-3 rounded-xl border border-white/5">
                Pro tip: Best time for a quiet workout is early morning or late evening.
              </div>
            </div>

            <div className="bg-zinc-900 border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors group">
              <div className="bg-emerald-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="text-emerald-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Peak Times</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                Usually gets busy around <span className="text-white font-bold">{G4_INFO.popularTime}</span>.
              </p>
              <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold">
                Check Real-time Status <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-zinc-900 border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors group">
              <div className="bg-emerald-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="text-emerald-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Our Location</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                {G4_INFO.address}
              </p>
              <div className="flex items-center gap-2 text-emerald-500 text-sm font-bold">
                Get Directions <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-widest mb-4">Our Gym</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">WHAT YOU CAN EXPECT</h3>
              <p className="text-zinc-400 leading-relaxed">
                We provide the tools, you provide the work. Our facility is stocked with professional-grade equipment for all fitness levels.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-zinc-900 border border-white/5 p-4 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">Premium Equipment</div>
                  <div className="text-xs text-zinc-500">Always Maintained</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Dumbbell />, title: 'Weight Training', desc: 'Dumbbells, barbells, and custom benches for strength.' },
              { icon: <Zap />, title: 'Cardio Machines', desc: 'High-end treadmills, stationery bikes, and rowers.' },
              { icon: <Shield />, title: 'Personal Atmosphere', desc: 'Focused and motivating environment without the crowd.' },
              { icon: <Coffee />, title: 'Quick Inquiry', desc: 'WhatsApp support for fast answers and assistance.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-zinc-900/40 p-6 rounded-3xl border border-white/5 hover:bg-zinc-900 transition-all group">
                <div className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: 'w-10 h-10' })}
                </div>
                <h4 className="text-lg font-heading font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Playground */}
      <section id="ai-tools" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-4">Business Intelligence</h2>
            <h3 className="text-4xl font-heading font-bold mb-6">AI ASSISTANT FOR G4 PARTNERS</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Need to promote G4 Fitness or communicate with management? Our Gemini-powered AI suite creates professional content in seconds.
            </p>
          </div>
          <AIAssistant />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">READY TO TRANSFORM YOUR BODY?</h2>
                <p className="text-emerald-100 text-lg mb-12 max-w-md">
                  Have questions about membership, training, or our facility? Drop us a message and we'll get back to you immediately.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black/20 backdrop-blur rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-emerald-200 uppercase tracking-widest">Call or WhatsApp</div>
                      <div className="text-xl font-bold">{G4_INFO.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black/20 backdrop-blur rounded-2xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-emerald-200 uppercase tracking-widest">Location</div>
                      <div className="text-xl font-bold">House 19, Akure</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-1 rounded-3xl shadow-2xl overflow-hidden min-h-[400px]">
                <img 
                  src="https://picsum.photos/id/164/800/800" 
                  className="w-full h-full object-cover rounded-[1.4rem]"
                  alt="Training session"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default App;
