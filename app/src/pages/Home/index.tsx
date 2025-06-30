import { SEOHead } from "@/components/SEOHead";
import { defaultSEO, detectLanguage } from "@/lib/seo";
import { GridBackgroundDemo } from "@/components/ui/gradien-bg";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  EducationSection,
  BlogSection,
  ContactSection
} from "@/components/sections";

export const Homepage = () => {
  const userLang = detectLanguage();

  return (
    <>
      <SEOHead 
        config={defaultSEO[userLang]} 
        lang={userLang}
        baseUrl="https://antoinefamibelle.dev"
      />
      
      <main className="mx-2">
        {/* Hero Section */}
        <div className="h-screen">
          <HeroSection />
          
          {/* About Section with MacBook scroll */}
          <AboutSection />
        </div>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Background Grid */}
        <GridBackgroundDemo>
          <div className="h-20"></div>
        </GridBackgroundDemo>

        {/* Education Section */}
        <EducationSection />

        {/* Blog Section */}
        <BlogSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="flex md:justify-start justify-center pb-8" role="contentinfo">
          <span className="text-neutral-600 dark:text-neutral-400">
            Made with ❤️ by Antoine Famibelle
          </span>
        </footer>
      </main>
    </>
  );
};