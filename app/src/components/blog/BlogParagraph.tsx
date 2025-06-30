import React from 'react';
import { cn } from '@/lib/utils';

interface BlogParagraphProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  leading?: 'tight' | 'normal' | 'relaxed' | 'loose';
}

export const BlogParagraph: React.FC<BlogParagraphProps> = ({ 
  children, 
  className,
  size = 'base',
  leading = 'relaxed'
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const leadingClasses = {
    tight: 'leading-tight',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose'
  };

  const baseClasses = "text-slate-700 dark:text-slate-300 mb-4";

  return (
    <p className={cn(
      baseClasses,
      sizeClasses[size],
      leadingClasses[leading],
      className
    )}>
      {children}
    </p>
  );
}; 