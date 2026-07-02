"use client";

import { motion } from "framer-motion";
import { Database, Network, Shield, Zap, Brain, LayoutTemplate } from "lucide-react";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function RepositoryIntelligence() {
  return (
    <div className="relative w-full bg-[#0a0a0a] rounded-[24px] border border-[rgba(255,255,255,0.06)] overflow-visible flex flex-col shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          
          {/* Node Attached to Global Spine */}
          <motion.div 
            initial={{ borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}
            whileInView={{ borderColor: 'rgba(181,205,172,0.6)', boxShadow: '0 0 20px rgba(181,205,172,0.4)' }}
            viewport={{ margin: "-40% 0px -40% 0px" }}
            className="hidden lg:flex absolute top-1/2 -left-[60px] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#121411] border items-center justify-center z-30 transition-colors duration-700"
          >
            <Network className="h-[18px] w-[18px] text-[#b5cdac]" />
          </motion.div>

          {/* Atmosphere */}
          <div className="absolute inset-0 z-0 pointer-events-none rounded-[24px] overflow-hidden">
            <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-[#98b090]/[0.03] blur-[100px]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 lg:p-20 min-h-[600px] items-center">
            
            {/* Left: Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={item}>
                <div className="inline-flex items-center gap-2 h-[40px] px-4 rounded-full bg-[#121411] border border-[rgba(255,255,255,0.08)] shadow-sm mb-8">
                  <Brain className="h-4 w-4 text-[#b5cdac]" />
                  <span className="font-[family-name:var(--font-inter)] text-[13px] font-medium text-white/80 tracking-wide uppercase">Repository Intelligence</span>
                </div>
                <h2 className="font-[family-name:var(--font-instrument)] text-[48px] lg:text-[56px] text-white leading-[1.05] max-w-[550px] mb-6 font-normal tracking-[-0.01em]">
                  Understand your codebase at every level.
                </h2>
                <p className="font-[family-name:var(--font-inter)] text-[17px] text-[#a1a1aa] leading-[1.6] max-w-[500px] mb-10">
                  Transform complex repositories into searchable architectural knowledge with intelligent analysis, dependency mapping, and AI-powered exploration.
                </p>
              </motion.div>
            </div>

            {/* Right: Interactive Visualization */}
            <div className="lg:col-span-7 flex items-center justify-center relative w-full h-[500px] lg:h-[600px]">
              <motion.div 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} 
                className="w-full h-full bg-[#121411] rounded-[16px] border border-[rgba(255,255,255,0.06)] shadow-[0_15px_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden relative flex items-center justify-center"
              >
                {/* Connecting SVG Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 8px rgba(181,205,172,0.2))' }}>
                  <defs>
                    <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(152,176,144,0.1)" />
                      <stop offset="100%" stopColor="rgba(152,176,144,0.4)" />
                    </linearGradient>
                  </defs>
                  {/* Central to Top Right (Auth) */}
                  <motion.path 
                    d="M 50% 50% Q 65% 25% 75% 25%" 
                    fill="none" 
                    stroke="url(#lineGrad1)" 
                    strokeWidth="1.5" 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    strokeDasharray="4 4"
                  />
                  <motion.circle cx="75%" cy="25%" r="3" fill="#b5cdac" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.2 }} />

                  {/* Central to Bottom Right (DB) */}
                  <motion.path 
                    d="M 50% 50% Q 65% 75% 70% 75%" 
                    fill="none" 
                    stroke="url(#lineGrad1)" 
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                  />
                  <motion.circle cx="70%" cy="75%" r="3" fill="#b5cdac" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.4 }} />

                  {/* Central to Top Left (API) */}
                  <motion.path 
                    d="M 50% 50% Q 35% 20% 25% 30%" 
                    fill="none" 
                    stroke="url(#lineGrad1)" 
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                  />
                  <motion.circle cx="25%" cy="30%" r="3" fill="#b5cdac" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.6 }} />

                  {/* Central to Bottom Left (UI) */}
                  <motion.path 
                    d="M 50% 50% Q 30% 70% 20% 65%" 
                    fill="none" 
                    stroke="url(#lineGrad1)" 
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
                  />
                  <motion.circle cx="20%" cy="65%" r="3" fill="#b5cdac" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.8 }} />
                </svg>

                {/* Nodes */}
                {/* Central Engine Node */}
                <motion.div 
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#98b090]/10 border border-[#98b090]/30 shadow-[0_0_30px_rgba(152,176,144,0.15)] flex items-center justify-center backdrop-blur-md relative">
                    <div className="absolute inset-0 rounded-2xl border border-[#b5cdac]/30 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                    <Zap className="h-7 w-7 text-[#b5cdac]" />
                  </div>
                  <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-white/80 mt-3 tracking-wide">Atlas Engine</span>
                </motion.div>

                {/* Top Right: Auth Module */}
                <motion.div 
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-[25%] right-[15%] lg:right-[20%] z-10 flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center backdrop-blur-sm group hover:border-[#98b090]/50 transition-colors cursor-pointer relative">
                    <Shield className="h-5 w-5 text-white/50 group-hover:text-[#b5cdac] transition-colors" />
                    
                    {/* Floating Insight Panel */}
                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-[180px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-[#1a1c18] border border-[rgba(255,255,255,0.08)] rounded-lg p-3 shadow-xl">
                        <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#e3e2de] leading-relaxed">
                          <span className="text-[#b5cdac] font-semibold">3 dependencies</span> found in Auth Module. High complexity detected.
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/40 mt-2">Auth Module</span>
                </motion.div>

                {/* Bottom Right: DB Schema */}
                <motion.div 
                  animate={{ y: [3, -3, 3] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-[75%] right-[20%] lg:right-[25%] z-10 flex flex-col items-center -translate-y-1/2"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <Database className="h-5 w-5 text-white/50" />
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/40 mt-2">DB Schema</span>
                </motion.div>

                {/* Top Left: API Gateway */}
                <motion.div 
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-[30%] left-[15%] lg:left-[20%] z-10 flex flex-col items-center -translate-y-1/2"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <Network className="h-5 w-5 text-white/50" />
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/40 mt-2">API Gateway</span>
                </motion.div>

                {/* Bottom Left: UI Components */}
                <motion.div 
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute top-[65%] left-[10%] lg:left-[15%] z-10 flex flex-col items-center -translate-y-1/2"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <LayoutTemplate className="h-5 w-5 text-white/50" />
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/40 mt-2">Client Router</span>
                </motion.div>

              </motion.div>
            </div>

          </div>
        </div>
  );
}
