import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getPostBySlug } from '@/data/blog';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { blogSEO, detectLanguage } from '@/lib/seo';
import {
  BlogTitle,
  BlogSubtitle,
  BlogParagraph,
  BlogList,
  BlogListItem,
  BlogQuote,
  BlogCode,
  BlogInlineCode,
  BlogDivider,
  BlogLink,
  BlogImage,
  BlogTable,
  BlogTableRow,
  BlogTableCell
} from '@/components/blog';
import 'highlight.js/styles/github-dark.css';

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const userLang = detectLanguage();
  const seoConfig = {
    ...blogSEO[userLang],
    title: `${post.title} | Antoine Famibelle`,
    description: post.excerpt,
    url: `/blog/${slug}`,
    image: post.coverImage || undefined
  };

  return (
    <>
      <SEOHead 
        config={seoConfig} 
        lang={userLang}
        baseUrl="https://antoinefamibelle.dev"
      />
      <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <header className="mb-8 not-prose">
            <BlogTitle level={1} className="mb-4">
              {post.title}
            </BlogTitle>
            
            <BlogParagraph size="xl" className="mb-6">
              {post.excerpt}
            </BlogParagraph>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime} min read
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-strong:text-slate-900 dark:prose-strong:text-slate-100 text-start">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                h1: ({ children }) => <BlogTitle level={1}>{children}</BlogTitle>,
                h2: ({ children }) => <BlogSubtitle level={2}>{children}</BlogSubtitle>,
                h3: ({ children }) => <BlogSubtitle level={3}>{children}</BlogSubtitle>,
                h4: ({ children }) => <BlogSubtitle level={4}>{children}</BlogSubtitle>,
                h5: ({ children }) => <BlogSubtitle level={5}>{children}</BlogSubtitle>,
                h6: ({ children }) => <BlogSubtitle level={6}>{children}</BlogSubtitle>,
                p: ({ children }) => <BlogParagraph>{children}</BlogParagraph>,
                ul: ({ children }) => <BlogList>{children}</BlogList>,
                ol: ({ children }) => <BlogList ordered>{children}</BlogList>,
                li: ({ children }) => <BlogListItem>{children}</BlogListItem>,
                blockquote: ({ children }) => <BlogQuote>{children}</BlogQuote>,
                code: ({ inline, className, children, ...props }: { inline: boolean, className: string, children: React.ReactNode, [key: string]: unknown }) => {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <BlogCode language={match[1]} className={className} {...props}>
                      {children}
                    </BlogCode>
                  ) : (
                    <BlogInlineCode {...props}>
                      {children}
                    </BlogInlineCode>
                  );
                },
                hr: () => <BlogDivider />,
                a: ({ href, children }) => (
                  <BlogLink href={href || '#'} external={href?.startsWith('http')}>
                    {children}
                  </BlogLink>
                ),
                img: ({ src, alt, title }) => (
                  <BlogImage src={src || ''} alt={alt || ''} caption={title} />
                ),
                table: ({ children }) => <BlogTable>{children}</BlogTable>,
                thead: ({ children }) => <thead>{children}</thead>,
                tbody: ({ children }) => <tbody>{children}</tbody>,
                tr: ({ children, ...props }) => <BlogTableRow {...props}>{children}</BlogTableRow>,
                th: ({ children, ...props }) => <BlogTableCell header {...props}>{children}</BlogTableCell>,
                td: ({ children, ...props }) => <BlogTableCell {...props}>{children}</BlogTableCell>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};