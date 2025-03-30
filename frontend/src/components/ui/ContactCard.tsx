import { Card, CardContent } from "@/components/ui/card"

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
  color?: string;
}

export function ContactCard({ 
  icon, 
  title, 
  description, 
  link, 
  linkText,
  color = "#00ff66" 
}: ContactCardProps) {
  return (
    <Card className={`bg-zinc-900 p-6 rounded-lg border border-[${color}]/10 hover:border-[${color}]/30 transition-colors`}>
      <CardContent className="p-0">
        <div className="mb-4" style={{ color }}>{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`text-[${color}] hover:underline`}
          style={{ color }}
        >
          {linkText}
        </a>
      </CardContent>
    </Card>
  )
}