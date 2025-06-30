import React from 'react';
import { cn } from '@/lib/utils';

interface BlogSubtitleProps {
  children: React.ReactNode;
  className?: string;
  level?: 2 | 3 | 4 | 5 | 6;
}

export const BlogSubtitle: React.FC<BlogSubtitleProps> = ({ 
  children, 
  className, 
  level = 2 
}) => {
  const baseClasses = "font-semibold text-slate-800 dark:text-slate-200 leading-tight";
  
  const sizeClasses = {
    2: "text-2xl md:text-3xl lg:text-4xl mb-4 mt-8",
    3: "text-xl md:text-2xl lg:text-3xl mb-3 mt-6",
    4: "text-lg md:text-xl lg:text-2xl mb-2 mt-4",
    5: "text-base md:text-lg lg:text-xl mb-2 mt-3",
    6: "text-sm md:text-base lg:text-lg mb-1 mt-2"
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(baseClasses, sizeClasses[level], className)}>
      {children}
    </Tag>
  );
}; 