export type Skill = {
    nombre: string;
    nivel: number;
    icono: string;
    orden: number;
  };
  
  export type SkillCategory = {
    nombre: string;
    orden: number;
    skills: Skill[];
  };

  export type SkillsResponse = SkillCategory[];
  