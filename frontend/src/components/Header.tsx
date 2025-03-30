"use client"

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ["home", "skills", "projects", "contact"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#00ff66]/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#00ff66]">
          <span className="text-white">Criss</span>Portfolio
        </Link>

        <nav className="hidden md:flex space-x-8">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-sm uppercase tracking-wider hover:text-[#00ff66] transition-colors ${
                activeSection === item ? "text-[#00ff66]" : "text-gray-400"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-white hover:text-[#00ff66]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-[#00ff66]/10 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className={`text-sm uppercase tracking-wider py-2 hover:text-[#00ff66] transition-colors ${
                  activeSection === item ? "text-[#00ff66]" : "text-gray-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}