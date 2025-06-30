import { MacbookScroll } from "@/components/ui/macbook";
import { SparklesCore } from "@/components/ui/sparkles";
import { isDark } from "@/lib/utils";
import { useTheme } from "@/context/theme";
import Nudiet from '@/assets/nudiet-min.png';

export const AboutSection = () => {
  const { theme } = useTheme();

  return (
    <section 
      aria-labelledby="about-heading"
      className="mt-0 pt-0"
    >
      <MacbookScroll
        src={Nudiet}
        title={
          <>
            <h2 id="about-heading" className="text-[4rem] font-semibold text-black dark:text-white">
              The only limit <br />
              <span className="text-[6rem] font-bold mt-1 leading-none">
                is your creativity.
              </span>
            </h2>
            <div className="h-40 relative mt-2">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor={isDark(theme) ? "#FFFFFF" : "#000000"}
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-slate-50 dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </>
        }
      />
    </section>
  );
};