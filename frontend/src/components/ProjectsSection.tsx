"use client";

import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Proyecto } from "@/types/proyecto";

interface Props {
  proyectos: Proyecto[];
}

export function ProjectsSection({ proyectos }: Props) {
  console.log(proyectos);
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

        <div className="text-justify grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.id}
              description={project.descripcion}
              tags={project.tecnologias.map((tec) => tec.nombre)}
              image={project.imagen}
              githubUrl={project.url_repositorio || "#"}
              liveUrl={project.url_demo || "#"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
