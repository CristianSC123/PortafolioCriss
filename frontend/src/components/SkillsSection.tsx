"use client"

import { Code, Database, Layers, Smartphone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SkillCard } from "@/components/ui/SkillCard"

export function SkillsSection() {
  const skillsData = [
    {
      icon: <Code size={32} />,
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
      color: "#00ff66"
    },
    {
      icon: <Database size={32} />,
      title: "Backend Development",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
      color: "#9900ff"
    },
    {
      icon: <Layers size={32} />,
      title: "UI/UX Design",
      skills: ["Figma", "Responsive Design", "User Experience", "Wireframing"],
      color: "#00ccff"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Other Skills",
      skills: ["Git/GitHub", "CI/CD", "Testing", "Performance Optimization"],
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
            Ive worked with a range of technologies in the web development world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              skills={skill.skills}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}