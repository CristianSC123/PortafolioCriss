import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl
}: ProjectCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-[#00ccff]/30 transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-black/50 text-[#00ccff] border-[#00ccff]/30">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-3">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff66] transition-colors">
            <Github size={20} />
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ccff] transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}