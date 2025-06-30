import { EducationCard } from "@/components/ui/education-card";
import { educationData } from "@/data/education";

export const EducationSection = () => {
  return (
    <section 
      className="md:mx-32 mx-8 mb-32"
      aria-labelledby="education-heading"
    >
      <div className="pb-20">
        <h2 
          id="education-heading"
          className="text-5xl md:text-7xl font-bold text-black dark:text-white max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
        >
          Education & <br />
          <span className="text-4xl md:text-6xl">Certifications</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-neutral-600 dark:text-neutral-200 max-w-sm mx-auto text-center">
          My academic journey and professional certifications that shaped my expertise in software engineering.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((item, index) => (
          <article key={index} className="w-full">
            <EducationCard
              title={item.title}
              description={item.description}
              date={item.date}
              location={item.location}
            />
          </article>
        ))}
      </div>
    </section>
  );
};