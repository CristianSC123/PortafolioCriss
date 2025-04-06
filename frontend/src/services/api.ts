import { Certificado, Educacion } from "@/types/educacion";
import { Experiencia } from "@/types/experiencia";
import { Informacion } from "@/types/informacion";
import { SkillsResponse } from "@/types/skills";
import { SocialMediaItem} from "@/types/social_media";


export const fetchInformacion = async (): Promise<Informacion[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/informacion/`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();

};

export const fetchSocialMedia = async (): Promise<SocialMediaItem[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/social_media/`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();

}

export const fetchSkills = async (): Promise<SkillsResponse>=>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills/`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export const fetchEducacion = async (): Promise<Educacion[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/educacion/`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export const fetchCertificado = async (): Promise<Certificado[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/certificados/`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export const fetchExperiencia = async (): Promise<Experiencia[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experiencia/`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

