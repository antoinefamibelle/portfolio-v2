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
          <HeroSection />

        {/* About Section with MacBook scroll - Full height container for scroll effect */}
        <section className="md:min-h-[300vh] min-h-[150vh] relative">
          <AboutSection />
        </section>

        {/* Projects Section - Starts after MacBook scroll completes */}
        <section className="min-h-screen pt-20">
          <ProjectsSection />
        </section>

        {/* Background Grid - Visual separator */}
        <section className="py-20">
          <GridBackgroundDemo>
            <div className="h-20"></div>
          </GridBackgroundDemo>
        </section>

        {/* Education Section */}
        <section>
          <EducationSection />
        </section>

        {/* Blog Section */}
        <section>
          <BlogSection />
        </section>

        {/* Contact Section */}
        <section>
          <ContactSection />
        </section>

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