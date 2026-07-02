"use client";

import { RepoIndexForm } from "@/components/repository/RepoIndexForm";
import { AnalyzeDashboard } from "@/components/repository/AnalyzeDashboard";
import { Navbar } from "@/layout/Navbar";
import Image from "next/image";
import { useRepoStore } from "@/store/repo-store";
import { AppShell } from "@/layout/AppShell";

export default function AnalyzePage() {
  const { activeRepo } = useRepoStore();

  if (activeRepo) {
    return <AppShell namespace={activeRepo.namespace} />;
  }

  return (
    <div className="w-full bg-[#050505] min-h-screen relative pt-[98px] pb-0 font-sans">
      <Navbar />

      <section className="relative flex w-[96%] max-w-[1536px] mx-auto min-h-[calc(100vh-140px)] flex-col items-center overflow-hidden bg-[#0a0a0a] rounded-[24px] border border-[rgba(255,255,255,0.02)] mb-10">
        {/* Background Image */}
        <div className="absolute inset-0 z-[0] pointer-events-none">
          <Image 
            src="/hero-bg.png" 
            alt="CodeAtlas Background" 
            fill
            priority
            className="object-cover object-center opacity-50"
          />
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-[10] pointer-events-none bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a] mix-blend-multiply" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center w-full flex-1 px-6 md:px-12 lg:px-20 py-16 md:py-24">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[#F3E4C9] mb-5 tracking-tight">
              Connect Repository
            </h1>
            <p className="text-[#A77F60] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Initialize the Atlas Engine to parse, vector-index, and trace your codebase architecture instantly.
            </p>
          </div>

          {/* Form Card */}
          <div className="w-full max-w-lg mb-16">
            <RepoIndexForm />
          </div>

          {/* Dashboard — full width with generous spacing */}
          <div className="w-full max-w-[1100px] mb-20">
            <AnalyzeDashboard />
          </div>

          {/* Real Features Section */}
          <div className="w-full mt-10 border-t border-[rgba(255,255,255,0.05)] pt-16 max-w-[1100px] mx-auto">
            <h2 className="text-2xl font-[family-name:var(--font-display)] text-[#F3E4C9] mb-8 text-center tracking-tight">
              Atlas Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Codebase Canvas",
                  desc: "Interactive node-graph mapping out pages, components, hooks, and services.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#CCD67F] mb-3" stroke="currentColor" strokeWidth="1.5">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  )
                },
                {
                  title: "Dependency Tracking",
                  desc: "Animated edges showing exact import/export relationships between files.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#A77F60] mb-3" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                    </svg>
                  )
                },
                {
                  title: "Context-Aware Chat",
                  desc: "Query your codebase using RAG with AI that understands your file structure.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#98b090] mb-3" stroke="currentColor" strokeWidth="1.5">
                      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                    </svg>
                  )
                },
                {
                  title: "Metrics Dashboard",
                  desc: "Overview of your repository stats, file types, and component counts.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#8172B3] mb-3" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  )
                }
              ].map((feat, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-xl hover:bg-white/[0.04] transition-colors">
                  {feat.icon}
                  <h3 className="text-[#e3e2de] font-medium text-sm mb-2">{feat.title}</h3>
                  <p className="text-[#8e9289] text-xs leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
