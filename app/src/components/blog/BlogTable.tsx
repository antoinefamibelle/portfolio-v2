import React from 'react';
import { cn } from '@/lib/utils';

interface BlogTableProps {
  children: React.ReactNode;
  className?: string;
  striped?: boolean;
}

export const BlogTable: React.FC<BlogTableProps> = ({ 
  children, 
  className,
  striped = true
}) => {
  const baseClasses = "w-full border-collapse my-6";
  const stripedClasses = striped ? "divide-y divide-slate-200 dark:divide-slate-700" : "";

  return (
    <div className="overflow-x-auto">
      <table className={cn(
        baseClasses,
        stripedClasses,
        className
      )}>
        {children}
      </table>
    </div>
  );
}; 