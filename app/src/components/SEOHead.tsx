import { Helmet } from 'react-helmet-async';
import { SEOConfig, generateSEOTags, generateStructuredData } from '@/lib/seo';

interface SEOHeadProps {
  config: SEOConfig;
  lang?: 'fr' | 'en';
  baseUrl?: string;
}

export function SEOHead({ config, lang = 'en', baseUrl = '' }: SEOHeadProps) {
  const seoTags = generateSEOTags(config, baseUrl);
  const structuredData = generateStructuredData(lang);

  return (
    <Helmet>
      <html lang={lang} />
      <title>{seoTags.title}</title>
      
      {seoTags.meta.map((tag, index) => (
        <meta 
          key={index}
          {...(tag.name ? { name: tag.name } : { property: tag.property })}
          content={tag.content}
        />
      ))}
      
      {seoTags.link.map((link, index) => (
        <link 
          key={index}
          rel={link.rel}
          {...(link.href && { href: link.href })}
          {...(link.hreflang && { hrefLang: link.hreflang })}
        />
      ))}
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}