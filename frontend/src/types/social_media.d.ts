export interface SocialMediaItem {
    id: string;
    platform: string;
    url: string;
    username: string;
    is_active: boolean;
    order: number;
    embedding: null | string;
    informacion: string;
  }
  
export interface SocialMediaLinks {
    github?: string;
    linkedin?: string;
    twitter?: string;
  }