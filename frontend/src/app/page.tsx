"use client"

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchInformacion } from "@/services/api";
import { handleScroll, scrollToSection } from "@/utils/scrollUtils";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");

  const { data: informacion, isLoading, error } = useQuery({
    queryKey: ['informacion'],
    queryFn: fetchInformacion,
    staleTime: 60 * 1000 
  });

  useEffect(() => {
    const scrollListener = () => handleScroll(setActiveSection);
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId, setActiveSection);
  };

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-[#00ff66]">Loading portfolio...</div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-red-500">Error: {error.message}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        activeSection={activeSection} 
        scrollToSection={handleScrollToSection} 
      />
      
      <HeroSection 
        information={informacion?.[0]} 
        scrollToSection={handleScrollToSection} 
      />
      
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      <Footer />
    </div>
  );
}