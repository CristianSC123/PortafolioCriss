"use client"

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchInformacion, fetchSocialMedia, fetchSkills, fetchEducacion, fetchCertificado, fetchExperiencia, fetchProyectos} from "@/services/api";
import { handleScroll, scrollToSection } from "@/utils/scrollUtils";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ExperienceEducationSection } from "@/components/ExperienceEducationSection";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");

  const { data: informacion, isLoading, error } = useQuery({
    queryKey: ['informacion'],
    queryFn: fetchInformacion,
    staleTime: 60 * 1000
  });

  const { data: socialMedia } = useQuery({
    queryKey: ['socialMedia'],
    queryFn: fetchSocialMedia,
    staleTime: 60 * 1000
  })

  const { data: skills, isLoading: isSkillsLoading, error: skillsError } = useQuery({
    queryKey: ['skills'],
    queryFn: fetchSkills,
    staleTime: 60 * 1000,
  });

  const { data: educacion, isLoading: isEducacionLoading, error: educacionError } = useQuery({
    queryKey: ['educacion'],
    queryFn: fetchEducacion,
    staleTime: 60 * 1000,
  });

  const {data: certificado, isLoading: isCertificadoLoading, error: certificadoError} = useQuery({
    queryKey: ['certificado'],
    queryFn: fetchCertificado,
    staleTime: 60 * 1000,
  })


  const {data: experiencia, isLoading: isExperienciaLoading, error: experienciaError} = useQuery({
    queryKey: ['experiencia'],
    queryFn: fetchExperiencia,
    staleTime: 60 * 1000,
  })

  const {data: proyectos, isLoading: isProyectosLoading, error: proyectosError} = useQuery({
    queryKey: ['proyectos'],
    queryFn: fetchProyectos,
    staleTime: 60 * 1000,
  })


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

  if (isLoading || isSkillsLoading || isEducacionLoading || 
    isCertificadoLoading || isExperienciaLoading || isProyectosLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-[#00ff66]">Loading portfolio...</div>
      </div>
    );
  }

  if (error || skillsError || educacionError || certificadoError || experienciaError || proyectosError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-red-500">
          Error: {error || skillsError?.message}
        </div>
      </div>
    );
  }


  return (

    <div className="min-h-screen bg-black text-white">
      <Header
        activeSection={activeSection}
        scrollToSection={handleScrollToSection}
      />
      <HeroSection
        information={informacion?.[0]}
        scrollToSection={handleScrollToSection}
        linkedin={socialMedia?.[1].url}
        twitter={socialMedia?.[0].url}
        github={socialMedia?.[2].url}
      />

      <SkillsSection skills={skills ?? []} />
      <ExperienceEducationSection 
      educacion={educacion ?? []} 
      certificado={certificado??[]}
      experiencia={experiencia ?? []}
      />
      <ProjectsSection proyectos={proyectos??[]}/>
      <ContactSection linkedin={socialMedia?.[1]}
        email={informacion?.[0]?.email}
      />
      <Footer 
        name={informacion?.[0].full_name}
        phone={informacion?.[0].phone}
        linkedin={socialMedia?.[1].url}
        twitter={socialMedia?.[0].url}
        github={socialMedia?.[2].url}
        email={informacion?.[0].email}
      />
    </div>
  );
}