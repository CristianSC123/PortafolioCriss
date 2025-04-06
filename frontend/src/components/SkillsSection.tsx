"use client"

import { Code, Database, Smartphone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SkillCard } from "@/components/ui/SkillCard"
import { SkillCategory } from "@/types/skills"

export function SkillsSection({skills}:{skills: SkillCategory[]}) {
  if (!skills || skills.length < 3) {
    return (
      <section className="py-20 bg-zinc-950 text-center text-gray-300">
        <p>Loading skills...</p>
      </section>
    );
  }
  
  const frontend = skills[0]
  const backend = skills[1]
  const otherSkills = skills [2]
  const skillsData = [
    {
      icon: <Code size={42} />,
      title: frontend.nombre?? "nada",
      skills: frontend.skills.map((item)=>item.nombre),
      color: "#00ff66"
    },
    {
      icon: <Database size={42} />,
      title: backend.nombre ?? "nada",
      skills: backend.skills.map((item)=>item.nombre),
      color: "#9900ff"
    },
    {
      icon: <Smartphone size={42} />,
      title: otherSkills.nombre ?? "nada",
      skills: otherSkills.skills.map((item)=>item.nombre),
      color: "#ff00cc"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-zinc-950 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge className="mb-4 bg-[#00ff66]/10 text-[#00ff66] hover:bg-[#00ff66]/20">
            Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I have worked with a range of technologies in the web development world.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="w-full md:w-[300px]">
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                skills={skill.skills}
                color={skill.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}