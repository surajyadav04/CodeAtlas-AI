"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <div className="relative w-[96%] max-w-[1536px] mx-auto bg-[#0a0a0a] rounded-[24px] border border-[rgba(255,255,255,0.06)] overflow-hidden flex flex-col items-center justify-center py-32 lg:py-48 shadow-[0_0_80px_rgba(0,0,0,0.8)] mt-12 mb-12">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[60%] h-[60%] rounded-full bg-[#98b090]/[0.05] blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <h2 className="font-[family-name:var(--font-instrument)] text-[56px] lg:text-[72px] text-white leading-[1.05] max-w-[800px] mb-6 font-normal tracking-[-0.02em]">
          Everything you need to understand your codebase.
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-[18px] lg:text-[20px] text-[#a1a1aa] leading-[1.6] mb-12 font-light tracking-wide">
          Start exploring today.
        </p>
        
        <button className="h-[52px] px-8 bg-white text-black rounded-full font-[family-name:var(--font-inter)] text-[15px] font-semibold tracking-wide hover:bg-[#e3e2de] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center gap-2 group">
          Get Started for Free
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>
    </div>
  );
}
