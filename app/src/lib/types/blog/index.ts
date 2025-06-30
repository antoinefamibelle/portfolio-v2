export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  slug: string;
  coverImage?: string;
  featured?: boolean;
}

export interface BlogCardProps {
  post: BlogPost;
  className?: string;
}