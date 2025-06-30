import React from 'react';
import { cn } from '@/lib/utils';

interface BlogListProps {
  children: React.ReactNode;
  className?: string;
  ordered?: boolean;
  spacing?: 'tight' | 'normal' | 'loose';
}

export const BlogList: React.FC<BlogListProps> = ({ 
  children, 
  className,
  ordered = false,
  spacing = 'normal'
}) => {
  const spacingClasses = {
    tight: 'space-y-1',
    normal: 'space-y-2',
    loose: 'space-y-3'
  };

  const baseClasses = "text-slate-700 dark:text-slate-300 mb-4";
  const listClasses = ordered 
    ? "list-decimal list-inside marker:text-slate-500 dark:marker:text-slate-400"
    : "list-disc list-inside marker:text-slate-500 dark:marker:text-slate-400";

  const Tag = ordered ? 'ol' : 'ul';

  return (
    <Tag className={cn(
      baseClasses,
      listClasses,
      spacingClasses[spacing],
      className
    )}>
      {children}
    </Tag>
  );
}; 