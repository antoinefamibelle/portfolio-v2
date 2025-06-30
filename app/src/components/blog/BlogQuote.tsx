import React from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface BlogQuoteProps {
  children: React.ReactNode;
  className?: string;
  author?: string;
  source?: string;
}

export const BlogQuote: React.FC<BlogQuoteProps> = ({ 
  children, 
  className,
  author,
  source
}) => {
  return (
    <blockquote className={cn(
      "relative border-l-4 border-slate-300 dark:border-slate-600 pl-6 py-4 my-6 bg-slate-50 dark:bg-slate-900/50 rounded-r-lg",
      className
    )}>
      <Quote className="absolute -top-2 -left-2 w-6 h-6 text-slate-400 dark:text-slate-500 bg-white dark:bg-black" />
      
      <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed italic mb-2">
        {children}
      </div>
      
      {(author || source) && (
        <footer className="text-sm text-slate-500 dark:text-slate-400 not-italic">
          {author && <span className="font-semibold">{author}</span>}
          {author && source && <span className="mx-1">•</span>}
          {source && <span>{source}</span>}
        </footer>
      )}
    </blockquote>
  );
}; 