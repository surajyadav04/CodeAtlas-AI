"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#050505] overflow-hidden font-sans pb-8">
      {/* Atmosphere Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#98b090]/[0.03] blur-[150px] rounded-full pointer-events-none" />

      {/* 1. Final CTA Card */}
      <div className="relative z-10 w-[96%] max-w-[1536px] mx-auto mt-8 mb-16 lg:mb-24">
        <div className="w-full bg-[#0a0a0a] rounded-[24px] border border-[rgba(255,255,255,0.02)] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden relative">
          
          {/* Subtle Stars / Noise Background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '48px 48px' }} />
          
          {/* Subtle Glow inside the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#F3E4C9]/[0.01] blur-[100px] rounded-full pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 px-8 py-20 lg:py-32 flex flex-col items-center text-center">
            
            <span className="font-[family-name:var(--font-inter)] text-sm font-semibold text-[#98b090] uppercase tracking-[0.2em] mb-6 block">
              Ready to explore?
            </span>
            
            <h2 className="font-[family-name:var(--font-instrument)] text-5xl lg:text-7xl text-[#e3e2de] mb-6 font-normal tracking-[-0.02em] leading-tight max-w-4xl mx-auto">
              Navigate every repository <br className="hidden sm:block" /> with confidence.
            </h2>
            
            <p className="font-[family-name:var(--font-inter)] text-lg lg:text-xl text-[#a1a1aa] leading-relaxed max-w-[60ch] mx-auto mb-12">
              Understand architecture, generate documentation, and explore complex codebases with AI-powered insights.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                href="/signup" 
                className="group h-[56px] rounded-xl bg-[#F3E4C9] text-[#0a0a0a] hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_rgba(243,228,201,0.3)] px-10 font-[family-name:var(--font-inter)] font-semibold text-[15px] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                href="https://github.com/startup-inc/CodeAtlas-AI"
                target="_blank"
                className="h-[56px] rounded-xl border border-white/10 bg-white/[0.01] text-[#e3e2de] hover:bg-white/[0.04] hover:border-white/20 hover:-translate-y-0.5 px-10 font-[family-name:var(--font-inter)] font-medium text-[15px] transition-all duration-300 flex items-center justify-center"
              >
                View GitHub
              </Link>
            </div>
            
          </div>
        </div>
      </div>

      {/* 2. Footer Navigation */}
      <div className="relative z-10 w-[96%] max-w-[1536px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-[12px] group w-fit">
              <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-transparent border border-[#CCD67F]/40 transition-colors duration-300 group-hover:border-[#CCD67F]/70">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CCD67F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" className="origin-center transition-transform duration-500 ease-out group-hover:rotate-[-15deg]" />
                  <path d="M2 12h20" className="origin-center transition-transform duration-500 ease-out group-hover:rotate-[15deg]" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-inter)] text-[18px] font-bold text-[#F3E4C9] tracking-tight">
                CodeAtlas AI
              </span>
            </Link>
            <p className="font-[family-name:var(--font-inter)] text-[15px] text-[#8e9289] leading-[1.7] max-w-[320px]">
              Navigate, understand, and document repositories with AI.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-8 lg:pl-12">
            
            {/* Product */}
            <div className="flex flex-col gap-5">
              <span className="font-[family-name:var(--font-inter)] text-[13px] font-semibold text-[#e3e2de] mb-2 tracking-[0.05em]">
                Product
              </span>
              <Link href="#features" className="font-[family-name:var(--font-inter)] text-[14px] text-[#8e9289] hover:text-[#e3e2de] hover:-translate-y-[1px] transition-all duration-300 w-fit">AI Chat</Link>
              <Link href="#features" className="font-[family-name:var(--font-inter)] text-[14px] text-[#8e9289] hover:text-[#e3e2de] hover:-translate-y-[1px] transition-all duration-300 w-fit">Documentation</Link>
              <Link href="#features" className="font-[family-name:var(--font-inter)] text-[14px] text-[#8e9289] hover:text-[#e3e2de] hover:-translate-y-[1px] transition-all duration-300 w-fit">Repository Explorer</Link>
              <Link href="#features" className="font-[family-name:var(--font-inter)] text-[14px] text-[#8e9289] hover:text-[#e3e2de] hover:-translate-y-[1px] transition-all duration-300 w-fit">Insights</Link>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-5">
              <span className="font-[family-name:var(--font-inter)] text-[13px] font-semibold text-[#e3e2de] mb-2 tracking-[0.05em]">
                Resources
              </span>
              <Link href="/docs" className="font-[family-name:var(--font-inter)] text-[14px] text-[#8e9289] hover:text-[#e3e2de] hover:-translate-y-[1px] transition-all duration-300 w-fit">Docs</Link>
              <Link href="#" className="font-[family-name:var(--font-inter)] text-[14px] text-[#8e9289] hover:text-[#e3e2de] hover:-translate-y-[1px] transition-all duration-300 w-fit">Blog</Link>
              <Link href="#" className="font-[family-name:var(--font-inter)] text-[14px] text-[#8e9289] hover:text-[#e3e2de] hover:-translate-y-[1px] transition-all duration-300 w-fit">Changelog</Link>
              <Link href="#" className="font-[family-name:var(--font-inter)] text-[14px] text-[#8e9289] hover:text-[#e3e2de] hover:-translate-y-[1px] transition-all duration-300 w-fit">Roadmap</Link>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-5">
              <span className="font-[family-name:var(--font-inter)] text-[13px] font-semibold text-[#e3e2de] mb-2 tracking-[0.05em]">
                Company
              </span>
              <Link href="https://github.com/startup-inc/CodeAtlas-AI" target="_blank" className="font-[family-name:var(--font-inter)] text-[14px] text-[#8e9289] hover:text-[#e3e2de] hover:-translate-y-[1px] transition-all duration-300 w-fit">GitHub</Link>
              <Link href="#" className="font-[family-name:var(--font-inter)] text-[14px] text-[#8e9289] hover:text-[#e3e2de] hover:-translate-y-[1px] transition-all duration-300 w-fit">About</Link>
              <Link href="#" className="font-[family-name:var(--font-inter)] text-[14px] text-[#8e9289] hover:text-[#e3e2de] hover:-translate-y-[1px] transition-all duration-300 w-fit">Contact</Link>
              <Link href="#" className="font-[family-name:var(--font-inter)] text-[14px] text-[#8e9289] hover:text-[#e3e2de] hover:-translate-y-[1px] transition-all duration-300 w-fit">Privacy</Link>
              <Link href="#" className="font-[family-name:var(--font-inter)] text-[14px] text-[#8e9289] hover:text-[#e3e2de] hover:-translate-y-[1px] transition-all duration-300 w-fit">Terms</Link>
            </div>

          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col items-center">
          <p className="font-[family-name:var(--font-inter)] text-[13px] text-[#6b6e66]">
            &copy; {new Date().getFullYear()} CodeAtlas AI
          </p>
        </div>
      </div>
    </footer>
  );
}
