import React from 'react';
import { cn } from '@/lib/utils';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  width?: number;
  height?: number;
}

export const BlogImage: React.FC<BlogImageProps> = ({ 
  src, 
  alt,
  className,
  caption,
  width,
  height
}) => {
  return (
    <figure className="my-8">
      <div className="relative overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "w-full h-auto object-cover",
            className
          )}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-center text-slate-600 dark:text-slate-400 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}; 