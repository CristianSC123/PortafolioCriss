import { Card, CardContent } from "@/components/ui/card";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color?: string;
}

export function SkillCard({ icon, title, skills, color = "#00ff66" }: SkillCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-[#00ff66]/30 transition-all duration-300">
      <CardContent className="p-6">
        <div className="mb-4" style={{ color }}>{icon}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="text-gray-400 flex items-center">
              <span 
                className="w-1.5 h-1.5 rounded-full mr-2" 
                style={{ backgroundColor: color }}
              ></span>
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}