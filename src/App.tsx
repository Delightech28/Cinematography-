/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Camera, Film, Video, Play, SkipForward, Layers, Award, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

// Color Palette: Cinematic Noir & Gold
// Black: #0A0A0A
// Gold: #D4AF37
// Secondary: #1A1A1A
// Text Muted: #8E9299

export default function App() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* "Bad" Camera Animation in the Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-10">
        <motion.div
          animate={{
            x: [0, 1000, -200, 500, 0],
            y: [0, -100, 300, -50, 0],
            rotate: [0, 45, -30, 180, 0],
            scale: [1, 1.5, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear", // Using linear to make it feel less "smooth" and more jerky
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          className="absolute top-1/4 left-1/4"
        >
          <Camera size={200} className="text-[#D4AF37]" strokeWidth={1} />
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-sm bg-black/50 sticky top-0">
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="p-1 bg-[#D4AF37] text-black rounded"
          >
            <Video size={20} />
          </motion.div>
          <span className="font-bold tracking-tighter text-xl text-white">GRAIN & FRAME</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest text-[#8E9299]">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Portfolio</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Equipment</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">The Lab</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Contact</a>
        </div>
        <button className="px-4 py-2 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors cursor-pointer">
          Book Session
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-6">
            WE CAPTURE <span className="text-[#D4AF37]">TIME</span> IN MOTION.
          </h1>
          <p className="text-[#8E9299] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Boutique cinematography for visionaries who demand more than just a lens. 
            From narrative features to high-concept commercials.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button 
              className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase text-sm tracking-widest hover:pl-10 transition-all cursor-pointer"
            >
              <Play size={20} fill="currentColor" /> 
              View Reel
            </button>
            <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase text-sm tracking-widest hover:bg-white/5 transition-all cursor-pointer">
              Our Studio
            </button>
          </div>
        </motion.div>

        {/* The "Bad" Camera Animation Header Version */}
        <motion.div
          animate={{
            translateX: isHovering ? 20 : -20,
            rotateZ: isHovering ? 5 : -5,
          }}
          transition={{
            duration: 0.1, // Super fast and shaky
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="mt-16 relative cursor-crosshair"
        >
          <div className="absolute -inset-4 bg-[#D4AF37]/20 blur-2xl rounded-full"></div>
          <Camera size={120} className="text-[#D4AF37] relative z-10" />
          <div className="mt-4 text-[10px] font-mono text-[#D4AF37] animate-pulse uppercase tracking-[0.5em]">
            {isHovering ? "!! CAMERA SHAKE !!" : "Stabilizing..."}
          </div>
        </motion.div>
      </header>

      {/* Featured Work Grid */}
      <section className="relative z-10 px-8 py-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter uppercase mb-2">Featured Works</h2>
              <div className="h-1 w-20 bg-[#D4AF37]"></div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[#8E9299] text-xs font-mono">
              <SkipForward size={14} /> PERSPECTIVE / 2024
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative aspect-video bg-zinc-900 overflow-hidden border border-white/5"
              >
                <img 
                  src={`https://picsum.photos/seed/cinema-${i}/800/450`} 
                  alt={`Work ${i}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100 opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-mono text-[#D4AF37] block mb-1">PROJECT 00{i}</span>
                  <h3 className="text-xl font-bold tracking-tighter group-hover:text-[#D4AF37] transition-colors uppercase">
                    {["The Long Silence", "Neon Pulse", "Echoes of Gold", "Frame by Frame", "Midnight Noir", "Shattered Lens"][i-1]}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-black">
                    <Play size={16} fill="currentColor" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 px-8 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-black tracking-tighter uppercase mb-8 leading-none">
              Beyond the <br/><span className="text-[#D4AF37]">Standard Frame.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <Film size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase mb-2">Narrative Storytelling</h4>
                  <p className="text-[#8E9299] text-sm italic">Crafting visuals that breathe life into your script. We don't just record scenes; we build worlds.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <Layers size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase mb-2">Post-Production Mastery</h4>
                  <p className="text-[#8E9299] text-sm italic">Color grading and editing that defines the aesthetic of your vision.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1A1A1A] p-8 aspect-square border border-white/5 flex flex-col justify-between">
              <Award className="text-[#D4AF37]" size={32} />
              <div className="text-3xl font-black tracking-tighter">12+</div>
              <div className="text-[10px] font-mono text-[#8E9299] uppercase tracking-widest">Industry Awards</div>
            </div>
            <div className="bg-[#D4AF37] p-8 aspect-square flex flex-col justify-between text-black">
              <Users size={32} />
              <div className="text-3xl font-black tracking-tighter">450+</div>
              <div className="text-[10px] font-mono uppercase tracking-widest font-bold">Collaborations</div>
            </div>
            <div className="col-span-2 bg-[#1A1A1A] p-8 border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest mb-1">Next Session</div>
                <div className="text-2xl font-black uppercase tracking-tighter">Limited Availability</div>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#8E9299] hover:text-white transition-colors cursor-pointer">
                <SkipForward size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-12 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1 bg-[#D4AF37] text-black rounded">
                <Video size={16} />
              </div>
              <span className="font-bold tracking-tighter text-lg">GRAIN & FRAME</span>
            </div>
            <p className="text-[#8E9299] text-xs font-mono">EST. 2018 / MADE WITH INTENTIONAL NOISE</p>
          </div>
          
          <div className="flex gap-6">
            {['Instagram', 'Vimeo', 'Twitter', 'YouTube'].map(social => (
              <a key={social} href="#" className="text-xs uppercase font-bold tracking-widest text-[#8E9299] hover:text-[#D4AF37] transition-colors">
                {social}
              </a>
            ))}
          </div>

          <div className="text-[10px] font-mono text-[#8E9299] italic opacity-50">
            © 2024 G&F. All frames reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
