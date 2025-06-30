import { Highlight } from "@/components/ui/highlight";
import Antoine from '@/assets/me-min.jpg';

export const HeroSection = () => {
  return (
    <section 
      className="flex md:flex-row justify-center items-center md:mt-32 mt-8 md:mx-32 mx-4 flex-col"
      aria-labelledby="hero-heading"
    >
      <div className="text-5xl font-semibold text-black dark:text-white mb-8 text-start md:mr-32 mx-4">
        <h1 id="hero-heading" className="sr-only">
          Antoine Famibelle - Full-Stack Developer
        </h1>
        <p aria-label="Introduction">
          Hi,
          <span className="md:flex">
            <span>My name is</span>
            <Highlight className="md:ml-2">
              <span className="underline">Antoine</span>
            </Highlight>
          </span>
          <span>I'm a software engineer</span>
          <span>and I love to build things.</span>
        </p>
      </div>
      <img 
        src={Antoine} 
        alt="Antoine Famibelle, Full-Stack Developer" 
        className="md:h-80 rounded-2xl"
        loading="eager"
        width="320"
        height="320"
      />
    </section>
  );
};