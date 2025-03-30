"use client"

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Informacion } from "@/types/informacion";

interface HeroSectionProps {
  information: Informacion | null | undefined;
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ information, scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#9900ff]/10 to-[#00ff66]/5 opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Hello, I am </span>
            <span className="text-[#00ff66]">{information?.full_name || 'Your Name'}</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-300">
            {information?.specialty || 'Full Stack Developer'}
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl">
            {information?.email || 'I build exceptional digital experiences with modern technologies.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              className="bg-[#00ff66] hover:bg-[#00ff66]/80 text-black font-medium"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
            <Button
              variant="outline"
              className="border-[#00ff66] text-[#00ff66] hover:bg-[#00ff66]/10"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
          </div>

          <div className="flex space-x-4 mt-12">
            {information?.socialLinks?.github && (
              <a href={information.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff66] transition-colors">
                <Github size={24} />
              </a>
            )}
            {information?.socialLinks?.linkedin && (
              <a href={information.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff66] transition-colors">
                <Linkedin size={24} />
              </a>
            )}
            {information?.socialLinks?.twitter && (
              <a href={information.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff66] transition-colors">
                <Twitter size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#00ff66]/5 blur-3xl rounded-full"></div>
    </section>
  );
}