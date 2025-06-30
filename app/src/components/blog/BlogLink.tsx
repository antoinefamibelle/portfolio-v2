import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface BlogLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  external?: boolean;
  size?: 'sm' | 'base' | 'lg';
}

export const BlogLink: React.FC<BlogLinkProps> = ({ 
  children, 
  href,
  className,
  external = false,
  size = 'base'
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg'
  };

  const baseClasses = "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-blue-300 dark:decoration-blue-600 hover:decoration-blue-500 dark:hover:decoration-blue-400 transition-colors duration-200";

  return (
    <a 
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        baseClasses,
        sizeClasses[size],
        "inline-flex items-center gap-1",
        className
      )}
    >
      {children}
      {external && <ExternalLink className="w-3 h-3" />}
    </a>
  );
}; 