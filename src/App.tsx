/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Cpu } from "lucide-react";

export default function App() {
  const logoSrc = "/src/assets/images/expert_ai_official_logo_1778552501547.png";

  return (
    <div className="h-screen w-full bg-[#020617] text-white flex flex-col items-center justify-center overflow-hidden relative selection:bg-navy-500/30">
      {/* Dynamic Background Animations */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-navy-600/20 blur-[140px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05],
          x: [0, -60, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[140px] rounded-full pointer-events-none" 
      />

      {/* Grid Pattern Overlay with Pulse */}
      <motion.div 
        animate={{ opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Scanning Line Effect */}
      <motion.div 
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-navy-500/10 to-transparent z-[1] pointer-events-none"
      />

      <nav className="absolute top-0 w-full p-8 flex justify-between items-start z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-4 group cursor-default"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 p-1 bg-white/5 rounded-2xl border border-white/10 group-hover:border-navy-400/50 transition-all duration-500 overflow-hidden shadow-2xl relative">
             <img 
              src={logoSrc} 
              alt="Expert AI Logo" 
              className="w-full h-full object-contain filter brightness-110" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-bold tracking-tight text-xl md:text-2xl uppercase">
              Expert <span className="text-white/40">AI</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/20 whitespace-nowrap">
              Intelligence Redefined
            </span>
          </div>
        </motion.div>
      </nav>

      <main className="relative z-10 px-6 text-center max-w-4xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-8">
            KỶ NGUYÊN <br />
            <span className="italic text-white">AI MỚI</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-xl text-white/50 font-light max-w-xl mx-auto mb-12 leading-relaxed"
          >
            Đồng hành cùng <span className="text-white font-medium">Expert AI</span> để kiến tạo tương lai số thông minh và đột phá ngay hôm nay.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-sm font-mono text-white/30 uppercase tracking-[0.4em]">
            Expertise & AI
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/10" />
        </motion.div>
      </main>

      {/* Decorative vertical rail text */}
      <div className="absolute right-8 bottom-8 hidden lg:block overflow-hidden">
        <motion.span 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="block [writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.5em] font-medium text-white/10"
        >
          © 2026 Expert AI — Next Gen Platform
        </motion.span>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-navy-500/10 to-transparent" />
    </div>
  );
}
