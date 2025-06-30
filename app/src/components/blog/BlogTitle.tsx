import React from 'react';
import { cn } from '@/lib/utils';

interface BlogTitleProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const BlogTitle: React.FC<BlogTitleProps> = ({ 
  children, 
  className, 
  level = 1 
}) => {
  const baseClasses = "font-bold text-slate-900 dark:text-slate-100 leading-tight";
  
  const sizeClasses = {
    1: "text-4xl md:text-5xl lg:text-6xl mb-6",
    2: "text-3xl md:text-4xl lg:text-5xl mb-5",
    3: "text-2xl md:text-3xl lg:text-4xl mb-4",
    4: "text-xl md:text-2xl lg:text-3xl mb-3",
    5: "text-lg md:text-xl lg:text-2xl mb-2",
    6: "text-base md:text-lg lg:text-xl mb-2"
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(baseClasses, sizeClasses[level], className)}>
      {children}
    </Tag>
  );
}; 