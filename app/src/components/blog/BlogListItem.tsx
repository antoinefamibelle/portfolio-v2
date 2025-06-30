import React from 'react';
import { cn } from '@/lib/utils';

interface BlogListItemProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg';
}

export const BlogListItem: React.FC<BlogListItemProps> = ({ 
  children, 
  className,
  size = 'base'
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg'
  };

  const baseClasses = "text-slate-700 dark:text-slate-300 leading-relaxed";

  return (
    <li className={cn(
      baseClasses,
      sizeClasses[size],
      className
    )}>
      {children}
    </li>
  );
}; 