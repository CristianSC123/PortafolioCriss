"use client"

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Informacion } from "@/types/informacion";
import Image from "next/image";

interface HeroSectionProps {
  information: Informacion | null | undefined;
  github?: string;
  linkedin?: string;
  twitter?: string;
  scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ information, scrollToSection, github, linkedin, twitter}: HeroSectionProps) {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#9900ff]/10 to-[#00ff66]/5 opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-8">
          {}
          <div className="order-1 md:order-none flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Hello, I am </span>
              <span className="text-[#00ff66]">{information?.full_name || 'Cristian Santa Cruz'}</span>
            </h1>
            
            <div className="md:hidden flex justify-center my-6">
              <div className="relative w-48 h-48">
                <Image
                  src="/avatar.jpg"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover border-4 border-[#00ff66]/30 shadow-lg"
                  priority
                />
              </div>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-300">
              {information?.specialty || 'Full Stack Developer'}
            </h2>
            <p className="text-lg text-gray-400 text-justify mb-8 ">
              {information?.bio || 'I am a Full Stack Developer with experience in React / Next.js, Django, and SQL/NoSQL databases. I am passionate about building efficient and scalable web solutions. Additionally, I am an English teacher, combining my interest in education with technology.'}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
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

            <div className="flex justify-center md:justify-start space-x-4 mt-12">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff66] transition-colors">
                  <Github size={24} />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff66] transition-colors">
                  <Linkedin size={24} />
                </a>
              )}
              {twitter && (
                <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff66] transition-colors">
                  <Twitter size={24} />
                </a>
              )}
            </div>
          </div>

          {}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative w-90 h-90 md:w-100 md:h-100">
              <Image
                src="/avatar.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover border-4 border-[#00ff66]/30 shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#00ff66]/5 blur-3xl rounded-full"></div>
    </section>
  );
}