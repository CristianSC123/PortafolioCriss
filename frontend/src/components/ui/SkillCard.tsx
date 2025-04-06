import { Card, CardContent } from "@/components/ui/card";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color?: string;
  action?: React.ReactNode;
}

export function SkillCard({ icon, title, skills, color = "#00ff66", action }: SkillCardProps) {
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

        {action && (
          <div className="mt-4 text-center">
          <button
            type="button"
            className="!text-white bg-gradient-to-br from-[#9900ff] to-purple-700 hover:from-purple-800 hover:to-[#9900ff] focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {action}
          </button>
        </div>
        )}
      </CardContent>
    </Card>
  );
}
