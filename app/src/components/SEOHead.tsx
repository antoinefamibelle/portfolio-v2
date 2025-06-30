import { Helmet } from 'react-helmet-async';
import { SEOConfig, generateSEOTags, generateStructuredData, generateRobotsMeta } from '@/lib/seo';

interface SEOHeadProps {
  config: SEOConfig;
  lang?: 'fr' | 'en';
  baseUrl?: string;
  index?: boolean;
  follow?: boolean;
  additionalSchemas?: object[];
}

export function SEOHead({ 
  config, 
  lang = 'en', 
  baseUrl = '',
  index = true,
  follow = true,
  additionalSchemas = []
}: SEOHeadProps) {
  const seoTags = generateSEOTags(config, baseUrl);
  const structuredData = generateStructuredData(lang);
  const robotsMeta = generateRobotsMeta(index, follow);

  return (
    <Helmet>
      <html lang={lang} />
      <title>{seoTags.title}</title>
      
      {/* Standard meta tags */}
      {seoTags.meta.map((tag, index) => (
        <meta 
          key={index}
          {...(tag.name ? { name: tag.name } : { property: tag.property })}
          content={tag.content}
        />
      ))}
      
      {/* Robots meta tag */}
      <meta name="robots" content={robotsMeta} />
      <meta name="googlebot" content={robotsMeta} />
      
      {/* Additional SEO meta tags */}
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Link tags */}
      {seoTags.link.map((link, index) => (
        <link 
          key={index}
          rel={link.rel}
          {...(link.href && { href: link.href })}
          {...(link.hreflang && { hrefLang: link.hreflang })}
        />
      ))}
      
      {/* Main structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional schemas */}
      {additionalSchemas.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}