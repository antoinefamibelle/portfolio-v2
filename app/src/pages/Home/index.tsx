import { useContext, useState } from "react";
import { LoadingContext } from "@/context";

import { useTheme } from "@/context/theme";
import { useSportyStore } from "@/store";
import { ContainerScroll } from "@/components/ui/animated-container";
import { SparklesCore } from "@/components/ui/sparkles";
import EndlessImage from '@/assets/endless.png';
import Antoine from '@/assets/me.jpg';
import { isDark } from "@/lib/utils";
export const Homepage = () => {
    const { loading, setLoading } = useContext(LoadingContext);
    const { theme } = useTheme();
    const isDesktop = window.innerWidth > 1024;

    return(
        <div className="mx-2 h-screen">
            <div className="flex md:flex-row justify-center items-center md:mt-32 mt-8 md:mx-32 mx-4 flex-col ">
                <p className="text-5xl font-semibold text-black dark:text-white mb-8 text-start md:mr-32 mx-4">
                    Hi,
                    <div className="md:flex">
                        <p>My name is</p>
                        <p className="underline md:ml-2">Antoine</p>
                    </div>
                    <p>I'm a software engineer</p>
                    <p>and I love to build things.</p>
                </p>
                <img src={Antoine} alt="Endless" className="h-80 rounded-2xl" />
            </div>
            {/* 
             Section 1: Hero
             */}
           <ContainerScroll
             titleComponent={
                <>
                  <h1 className="text-4xl font-semibold text-black dark:text-white mb-8">
                    The only limit <br />
                    <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                     is your creativity.
                    </span>
                    <div className="h-40 relative mt-2">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                
                        {/* Core component */}
                        <SparklesCore
                            background={isDark(theme) ? "#000000" : "#FFFFFF"}
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#5464FC"
                        />
                
                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full  dark:bg-black bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                  </h1>
                </>
              }
           >
            <img
                src={EndlessImage}
                alt="Endless"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
            />
            </ContainerScroll>
        </div>
    );
};