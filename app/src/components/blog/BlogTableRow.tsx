import React from 'react';
import { cn } from '@/lib/utils';

interface BlogTableRowProps {
  children: React.ReactNode;
  className?: string;
  header?: boolean;
}

export const BlogTableRow: React.FC<BlogTableRowProps> = ({ 
  children, 
  className,
  header = false
}) => {
  const baseClasses = header 
    ? "bg-slate-50 dark:bg-slate-800 font-semibold text-slate-900 dark:text-slate-100"
    : "hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors";

  return (
    <tr className={cn(baseClasses, className)}>
      {children}
    </tr>
  );
}; 