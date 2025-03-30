"use client"

import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with product catalog and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#"
  },
  // Agrega más proyectos aquí
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-[#00ccff]/5 to-[#9900ff]/5 opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <Badge className="mb-4 bg-[#00ccff]/10 text-[#00ccff] hover:bg-[#00ccff]/20">Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}