// types/strapi.ts
 
export interface StrapiImageFormat {
  url: string;
  width?: number;
  height?: number;
}
 
export interface StrapiImageData {
  data?: {
    id: number;
    attributes: {
      url: string;
      formats?: Record<string, StrapiImageFormat>;
    };
  };
}
 
export interface StrapiCourse {
  id: number;
  text: string;
  Slug: string;
  description: { type: string; children: { text: string }[] }[];
  rating: number;
  students: number;
  duration: string;
  badge?: string;
  badgeColor?: 'yellow'|'red'|'green'|'purple'|'blue';
  image: StrapiImageItem[];
  SyllabusFile?: StrapiFileItem[];
}
 
export interface StrapiImageItem {
  id: number;
  url: string;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  name: string;
  alternativeText?: string;
}
 
export interface KeyHighlight {
  highlight: string;
}
 
 
export interface StrapiFileItem {
  id: number;
  url: string;
  name: string;
  ext: string;
  mime: string;
  size: number;
}