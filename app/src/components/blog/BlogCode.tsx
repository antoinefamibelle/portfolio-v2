import React from 'react';
import { cn } from '@/lib/utils';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface BlogCodeProps {
  children: React.ReactNode;
  className?: string;
  language?: string;
  filename?: string;
}

export const BlogCode: React.FC<BlogCodeProps> = ({ 
  children, 
  className,
  language,
  filename
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof children === 'string') {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="my-6">
      {(filename || language) && (
        <div className="flex items-center justify-between bg-slate-800 dark:bg-slate-900 px-4 py-2 rounded-t-lg border-b border-slate-700 dark:border-slate-600">
          <div className="flex items-center gap-2 text-sm text-slate-300 dark:text-slate-400">
            {filename && <span className="font-medium">{filename}</span>}
            {filename && language && <span>•</span>}
            {language && <span className="uppercase text-xs bg-slate-700 dark:bg-slate-600 px-2 py-1 rounded">{language}</span>}
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-xs">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      <pre className={cn(
        "bg-slate-900 dark:bg-slate-800 rounded-lg p-4 overflow-x-auto",
        !filename && !language && "rounded-lg",
        filename || language ? "rounded-b-lg rounded-t-none" : "",
        className
      )}>
        <code className={cn(
          "text-slate-100 text-sm leading-relaxed",
          language && `language-${language}`
        )}>
          {children}
        </code>
      </pre>
    </div>
  );
}; 