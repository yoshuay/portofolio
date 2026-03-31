
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  details?: string[];
  imageUrl: string;
  tags: string[];
  links?: { label: string; url: string }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Media {
  title: string;
  description: string;
  url: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  note?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
