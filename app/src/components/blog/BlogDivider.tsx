import React from 'react';
import { cn } from '@/lib/utils';

interface BlogDividerProps {
  className?: string;
  style?: 'solid' | 'dashed' | 'dotted';
  color?: 'light' | 'medium' | 'dark';
}

export const BlogDivider: React.FC<BlogDividerProps> = ({ 
  className,
  style = 'solid',
  color = 'medium'
}) => {
  const styleClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted'
  };

  const colorClasses = {
    light: 'border-slate-200 dark:border-slate-700',
    medium: 'border-slate-300 dark:border-slate-600',
    dark: 'border-slate-400 dark:border-slate-500'
  };

  const baseClasses = "border-t my-8";

  return (
    <hr className={cn(
      baseClasses,
      styleClasses[style],
      colorClasses[color],
      className
    )} />
  );
}; 