import React from 'react';
import { cn } from '@/lib/utils';

interface BlogInlineCodeProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg';
}

export const BlogInlineCode: React.FC<BlogInlineCodeProps> = ({ 
  children, 
  className,
  size = 'base'
}) => {
  const sizeClasses = {
    sm: 'text-xs px-1.5 py-0.5',
    base: 'text-sm px-2 py-1',
    lg: 'text-base px-2.5 py-1.5'
  };

  const baseClasses = "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded font-mono font-medium";

  return (
    <code className={cn(
      baseClasses,
      sizeClasses[size],
      className
    )}>
      {children}
    </code>
  );
}; 