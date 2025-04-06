"use client"

import { Award, BadgeCheck, Briefcase, GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SkillCard } from "@/components/ui/SkillCard"
import { Educacion } from "@/types/educacion";
import { Certificado } from "@/types/educacion";
import { useState } from "react";
import { Experiencia } from "@/types/experiencia";

export function ExperienceEducationSection({ educacion, certificado, experiencia }: { educacion: Educacion[], certificado: Certificado[], experiencia: Experiencia[] }) {
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  if (!educacion || educacion.length < 6) {
    return (
      <section className="py-20 bg-zinc-950 text-center text-gray-300">
        <p>Loading Educations...</p>
      </section>
    );
  }

  if (!certificado || certificado.length < 11) {
    return (
      <section className="py-20 bg-zinc-950 text-center text-gray-300">
        <p>Loading Certificates...</p>
      </section>
    );
  }

  if (!experiencia || experiencia.length < 3) {
    return (
      <section className="py-20 bg-zinc-950 text-center text-gray-300">
        <p>Loading Experiences...</p>
      </section>
    );
  }

  const universidades = educacion.filter((item) => item.tipo === "universidad")
  const otros = educacion.filter((item) => item.tipo !== "universidad")

  const universidadesData = [
    {
      icon: <GraduationCap size={42} />,
      title: "Professional Education",
      skills: universidades.map((item) => item.institucion),
      color: "#00ff66"
    }
  ]

  const otrosData = [
    {
      icon: <BadgeCheck size={42} />,
      title: "Other Education",
      skills: otros.map((item) => item.institucion),
      color: "#00ff66"
    }
  ]

  const displayedCertificates = showAllCertificates
    ? certificado
    : certificado.slice(0, 2);

  const certificadosData = [
    {
      icon: <Award size={42} />,
      title: "Certificates",
      color: "#9900ff",
      skills: displayedCertificates.map((item) =>
        `${item.nombre} - ${item.educacion.institucion} (${new Date(item.fecha_emision).getFullYear()})`),
      action: certificado.length > 2 && (
        <button
          onClick={() => setShowAllCertificates(!showAllCertificates)}
          className="text-xm mt-1 text-[#ffffff] hover:underline"
        >
          {showAllCertificates ? 'Show less' : `Show more (${certificado.length - 2})`}
        </button>
      )
    }
  ]

  const experienciaData = [
    {
      icon: <Briefcase size={42} />,
      title: "Work Experience",
      skills: experiencia.map((item) =>
        `${item.empresa} (${new Date(item.fecha_inicio).getFullYear()} - ${item.fecha_fin ? new Date(item.fecha_fin).getFullYear() : 'Present'})`
      ),
      color: "#00ccff"
    }
  ];


  type DataItem = {
    icon: React.ReactNode;
    title: string;
    skills: string[];
    color: string;
    action?: React.ReactNode;
  };

  const combinedData: DataItem[] = [...universidadesData, ...otrosData, ...certificadosData, ...experienciaData];


  return (
    <section id="skills" className="py-20 bg-zinc-950 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge className="mb-4 bg-[#00ff66]/10 text-[#00ff66] hover:bg-[#00ff66]/20">
            Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My experience & education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I am a passionate developer with a strong foundation in web technologies. I am
            Systems Engineer and English teacher, and I have a solid understanding of both front-end and back-end development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {combinedData.map((item, index) => (
            <div key={index} className="w-full md:w-[280px]">
              <SkillCard
                icon={item.icon}
                title={item.title}
                skills={item.skills}
                color={item.color}
                action={item.action}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}