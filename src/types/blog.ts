// types/blog.ts
 
export interface StrapiBlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  author: string;
  content: string;
  excerpt?: string;
  metaDescription?: string;
  metaTitle?: string;
  readTime?: number;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featuredImage?: Array<{
    id: number;
    documentId: string;
    name: string;
    alternativeText?: string;
    url: string;
    width: number;
    height: number;
  }>;
  tags?: Array<{
    id: number;
    documentId: string;
    Name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }>;
}
 
export interface FormattedBlogPost {
  id: number;
  title: string;
  slug: string;
  author: string;
  content: string;
  excerpt?: string;
  metaDescription?: string;
  createdAt: string;
  featuredImage?: {
    url: string;
    alternativeText?: string;
  };
}
 
export interface StrapiTag {
  id: number;
  documentId: string;
  Name: string;
  slug?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}