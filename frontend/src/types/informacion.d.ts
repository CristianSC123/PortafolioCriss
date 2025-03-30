export interface Informacion {
    full_name: string;
    bio: string;
    avatar: string;
    specialty: string;
    email: string;
    phone: string;
    urlWeb: string;
    socialLinks?: {
      github?: string;
      linkedin?: string;
      twitter?: string;
    };
  }