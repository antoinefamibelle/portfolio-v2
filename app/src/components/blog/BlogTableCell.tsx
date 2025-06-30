import React from 'react';
import { cn } from '@/lib/utils';

interface BlogTableCellProps {
  children: React.ReactNode;
  className?: string;
  header?: boolean;
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
}

export const BlogTableCell: React.FC<BlogTableCellProps> = ({ 
  children, 
  className,
  header = false,
  align = 'left'
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const baseClasses = "px-4 py-3 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700";

  const Tag = header ? 'th' : 'td';

  return (
    <Tag className={cn(
      baseClasses,
      alignClasses[align],
      className
    )}>
      {children}
    </Tag>
  );
}; 