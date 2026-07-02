import { Footer } from "@/layout/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCards } from "@/components/FeatureCards";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050505]">
      <main className="flex-1">
        <HeroSection />
        <FeatureCards />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
