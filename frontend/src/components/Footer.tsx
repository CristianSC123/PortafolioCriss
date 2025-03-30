import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";



export function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-[#00ff66]">
              <span className="text-white">Dev</span>Portfolio
            </Link>
            <p className="text-gray-500 mt-2">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#00ff66] transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00ff66] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00ff66] transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00ff66] transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}