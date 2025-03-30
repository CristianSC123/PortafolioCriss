import { Informacion } from "@/types/informacion";


export const fetchInformacion = async (): Promise<Informacion[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/informacion/`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();

};