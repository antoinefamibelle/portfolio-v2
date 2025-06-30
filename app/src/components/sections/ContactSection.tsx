import { Github, LinkedinIcon } from "lucide-react";
import { BottomGradient } from "@/components/ui/input";

export const ContactSection = () => {
  return (
    <section 
      className="md:mx-32 mx-8 mb-32"
      aria-labelledby="contact-heading"
    >
      <div className="pb-20">
        <h2 
          id="contact-heading"
          className="text-5xl md:text-7xl font-bold text-black dark:text-white max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
        >
          Let's <br />
          <span className="text-4xl md:text-6xl">Connect</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-neutral-600 dark:text-neutral-200 max-w-sm mx-auto text-center">
          Ready to discuss your next project? Let's build something amazing together.
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/antoinefamibelle"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-6 py-2 hover:scale-105 transition-transform duration-200"
          aria-label="View Antoine Famibelle's GitHub profile"
        >
          <div className="flex items-center justify-center gap-2">
            <Github className="w-4 h-4" aria-hidden="true" />
            GitHub
          </div>
          <BottomGradient />
        </a>

        <a
          href="https://linkedin.com/in/antoinefamibelle"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br relative group/btn from-blue-600 dark:from-blue-700 dark:to-blue-800 to-blue-700 block dark:bg-blue-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] px-6 py-2 hover:scale-105 transition-transform duration-200"
          aria-label="Connect with Antoine Famibelle on LinkedIn"
        >
          <div className="flex items-center justify-center gap-2">
            <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
            LinkedIn
          </div>
          <BottomGradient />
        </a>
      </div>
    </section>
  );
};