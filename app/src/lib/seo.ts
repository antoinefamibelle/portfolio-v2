export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  locale?: string;
  alternateLocales?: string[];
}

export const defaultSEO: {
  fr: SEOConfig;
  en: SEOConfig;
} = {
  fr: {
    title: "Antoine Famibelle - Développeur Full-Stack | Ingénieur Logiciel",
    description: "Développeur Full-Stack passionné avec 5+ ans d'expérience. Spécialisé en React, TypeScript, Node.js et architectures cloud. Diplômé d'Epitech Paris.",
    keywords: [
      "développeur full-stack",
      "ingénieur logiciel",
      "React",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "développement web",
      "architecture cloud",
      "AWS",
      "frontend",
      "backend",
      "développeur React",
      "développeur JavaScript",
      "Epitech",
      "Paris",
      "France",
      "portfolio développeur",
      "développeur freelance",
      "consultant technique"
    ],
    type: "website",
    locale: "fr_FR",
    alternateLocales: ["en_US"]
  },
  en: {
    title: "Antoine Famibelle - Full-Stack Developer | Software Engineer",
    description: "Passionate Full-Stack Developer with 5+ years of experience. Specialized in React, TypeScript, Node.js and cloud architectures. Epitech Paris graduate.",
    keywords: [
      "full-stack developer",
      "software engineer",
      "React",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "web development",
      "cloud architecture",
      "AWS",
      "frontend",
      "backend",
      "React developer",
      "JavaScript developer",
      "Epitech",
      "Paris",
      "France",
      "developer portfolio",
      "freelance developer",
      "technical consultant"
    ],
    type: "website",
    locale: "en_US",
    alternateLocales: ["fr_FR"]
  }
};

export const blogSEO: {
  fr: Partial<SEOConfig>;
  en: Partial<SEOConfig>;
} = {
  fr: {
    title: "Blog | Antoine Famibelle - Développeur Full-Stack",
    description: "Articles et retours d'expérience sur le développement web, React, TypeScript et les technologies modernes.",
    keywords: [
      "blog développement",
      "articles techniques",
      "React",
      "TypeScript",
      "développement web",
      "retour d'expérience",
      "tutoriels",
      "bonnes pratiques"
    ],
    type: "article"
  },
  en: {
    title: "Blog | Antoine Famibelle - Full-Stack Developer",
    description: "Articles and experience feedback on web development, React, TypeScript and modern technologies.",
    keywords: [
      "development blog",
      "technical articles",
      "React",
      "TypeScript",
      "web development",
      "experience feedback",
      "tutorials",
      "best practices"
    ],
    type: "article"
  }
};

export function generateSEOTags(config: SEOConfig, baseUrl: string = ""): {
  title: string;
  meta: Array<{ name?: string; property?: string; content: string; }>;
  link: Array<{ rel: string; href?: string; hreflang?: string; }>;
} {
  const fullUrl = config.url ? `${baseUrl}${config.url}` : baseUrl;
  const imageUrl = config.image ? `${baseUrl}${config.image}` : `${baseUrl}/memoji.png`;

  return {
    title: config.title,
    meta: [
      // Basic meta tags
      { name: "description", content: config.description },
      ...(config.keywords ? [{ name: "keywords", content: config.keywords.join(", ") }] : []),
      { name: "author", content: "Antoine Famibelle" },
      { name: "language", content: config.locale?.split('_')[0] || "en" },
      
      // Open Graph
      { property: "og:title", content: config.title },
      { property: "og:description", content: config.description },
      { property: "og:type", content: config.type || "website" },
      { property: "og:url", content: fullUrl },
      { property: "og:image", content: imageUrl },
      { property: "og:image:alt", content: "Antoine Famibelle - Full-Stack Developer" },
      { property: "og:locale", content: config.locale || "en_US" },
      { property: "og:site_name", content: "Antoine Famibelle Portfolio" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: config.title },
      { name: "twitter:description", content: config.description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: "Antoine Famibelle - Full-Stack Developer" },
      
      // Additional SEO tags
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
      { name: "theme-color", content: "#000000" },
      { name: "msapplication-TileColor", content: "#000000" },
      
      // Structured data hints
      { name: "profile:first_name", content: "Antoine" },
      { name: "profile:last_name", content: "Famibelle" },
      { name: "profile:username", content: "antoinefamibelle" }
    ],
    link: [
      { rel: "canonical", href: fullUrl },
      ...(config.alternateLocales?.map(locale => ({
        rel: "alternate",
        hreflang: locale.toLowerCase().replace('_', '-'),
        href: fullUrl
      })) || [])
    ]
  };
}

// Helper to detect user's preferred language
export function detectLanguage(): 'fr' | 'en' {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('fr')) return 'fr';
  
  return 'en';
}

// Schema.org structured data
export function generateStructuredData(lang: 'fr' | 'en' = 'en') {
  const isEnglish = lang === 'en';
  
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Antoine Famibelle",
    "jobTitle": isEnglish ? "Full-Stack Developer" : "Développeur Full-Stack",
    "description": isEnglish 
      ? "Passionate Full-Stack Developer with 5+ years of experience specialized in React, TypeScript, Node.js and cloud architectures."
      : "Développeur Full-Stack passionné avec 5+ ans d'expérience spécialisé en React, TypeScript, Node.js et architectures cloud.",
    "url": "https://antoinefamibelle.dev",
    "image": "https://antoinefamibelle.dev/memoji.png",
    "sameAs": [
      "https://github.com/antoinefamibelle",
      "https://linkedin.com/in/antoinefamibelle"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Epitech Paris",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "addressCountry": "France"
      }
    },
    "knowsAbout": [
      "React", "TypeScript", "JavaScript", "Node.js", "AWS", 
      "Full-Stack Development", "Software Engineering", "Web Development"
    ],
    "nationality": "French",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "France"
    }
  };
}