import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


interface FooterProps {
  name?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  email?: string;
  phone?: string;
}


export function Footer({ name, linkedin, twitter, github, email, phone}: FooterProps) {
  return (
    <footer className="py-8 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-[#00ff66]">
              <span className="text-white">Criss</span>Portfolio
            </Link>
            <p className="text-gray-500 mt-2">
              © {new Date().getFullYear()} . {name} All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href={github} className="text-gray-400 hover:text-[#00ff66] transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href={linkedin} className="text-gray-400 hover:text-[#00ff66] transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href={twitter} className="text-gray-400 hover:text-[#00ff66] transition-colors" target="_blank">
              <Twitter size={20} />
            </a>
            <a href={`mailto:${email}`} className="text-gray-400 hover:text-[#00ff66] transition-colors" target="_blank">
              <Mail size={20} />
            </a>
            <a href={`https://wa.me/591${phone}`} className="text-gray-400 hover:text-[#00ff66] transition-colors" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}