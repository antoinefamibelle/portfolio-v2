import { useState, useRef } from "react";
import { useTheme } from "@/context/theme";
import { isDark } from "@/lib/utils";
import { ArrowDown, ArrowUp, Github, LinkedinIcon } from "lucide-react";

// Components
import { SparklesCore } from "@/components/ui/sparkles";
import { Highlight } from "@/components/ui/highlight";
import { MacbookScroll } from "@/components/ui/macbook";
import { GridBackgroundDemo } from "@/components/ui/gradien-bg";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ThreeDCardDemo } from "@/components/ui/3d-card";
import { BottomGradient } from "@/components/ui/input";

// Assets
import EndlessImage from '@/assets/endless-min.png';
import EndlessCustomerApp from '@/assets/endless-customer-app-min.png';
import EndlessCustomerArea from '@/assets/customer-area-min.jpg';
import Nudiet from '@/assets/nudiet-min.png';
import Leclerc from '@/assets/leclerc-min.png';
import Pertimm from '@/assets/pertimm-min.png';
import Vetapp from '@/assets/vetapp-min.png';
import Buddy from '@/assets/buddy-min.png';
import ClickNLerins from '@/assets/clicknlerins-min.png';
import Hospitalidee from '@/assets/hospitalidee-min.png';
import IntranetInside from '@/assets/intranet-inside-min.png';
import AntoineFamibelleDev from '@/assets/antoine-dev-min.png';
import BlingBling from '@/assets/blingbling-min.png';
import Antoine from '@/assets/me-min.jpg';


const content = [
    {
      title: "Master of expert of informatic system",
      description:
        "Studied computer science and software engineering at Epitech Paris for 5 years.",
      date: "2018 - 2023",
      location: "Paris, France",
    },
    {
      title: "Certificate of Advanced English Program",
      description:
        "Studied English at California State University, Long Beach for 1 year. To improve and certify my English skills.",
      date: "2021-2022",
      location: "Long Beach, California",
    },
    {
      title: "Tepitech 880 (TOEIC)",
      description:
        "Certified with a score of 880/990 on the TOEIC exam. This certification is a proof of my English proficiency.",
      date: "2018-2023",
      location: "Paris, France",
    },
    {
        title: "Baccalaureat Scientifique Option Informatique",
        description:
          "French high school diploma in science with a specialization in computer science.",
        date: "2018",
        location: "Paris, France",
      },
];

const workProjects = [
    {
        title: 'VetApp',
        link: '',
        thumbnail: Vetapp,
        techno: [
            'react',
            'ts',
            'node',
            'postgres',
            'sql',
        ]
    },
    {
        title: 'Pertimm',
        link: 'https://www.pertimm.com/',
        thumbnail: Pertimm,
        techno: [
            'vue',
            'ts',
            'redis',
            'node',
            'mongo',
        ]
    },
    {
        title: 'Nudiet',
        link: 'https://nudiet.fr/',
        thumbnail: Nudiet,
        techno: [
            'react',
            'ts',
            'node',
            'postgres',
            'sql',
            'prisma'
        ]
    },
    {
        title: 'Antoine Famibelle (v1)',
        link: 'https://portfolio-v1.antoinefamibelle-dev.com',
        thumbnail: AntoineFamibelleDev,
        techno: [
            'vue',
            'ts',
        ]
    },
    {
        title: 'Endless (Mobile App)',
        link: '',
        thumbnail: EndlessCustomerApp,
        isMobile: true,
        techno: [
            'react',
            'ts',
            'redis',
            'node',
            'postgres',
            'sql',
            'sentry',
            'expo',
            'kafka'
        ]
    },
    {
        title: 'Buddy (Mobile)',
        link: '',
        thumbnail: Buddy,
        techno: [
            'react',
            'expo',
            'ts',
            'node',
            'postgres',
            'sql',
            'redis',
            'prisma'
        ]
    },
    {
        title: 'Endless',
        link: 'https://endless.com',
        thumbnail: EndlessImage,
        techno: [
            'react',
            'ts',
            'sentry'
        ]
    },
    {
        title: 'Hospitalidee',
        link: 'https://www.hospitalidee.fr/',
        thumbnail: Hospitalidee,
        techno: [
            'react',
            'ts',
            'node',
            'postgres',
            'sql',
        ]
    },
    {
        title: 'Intranet Inside',
        link: 'https://www.intranet-inside.com/lp/solution-intranet/',
        thumbnail: IntranetInside,
        techno: [
            'vue',
            'ts',
            'node',
            'postgres',
            'sql',
        ]
    },
    {
        title: 'Endless (showcase website)',
        link: 'https://endless.com',
        thumbnail: EndlessImage,
        techno: [
            'react',
            'ts',
            'sentry'
        ]
    },
    {
        title: 'Endless (E-commerce v1)',
        link: '',
        thumbnail: BlingBling,
        techno: [
            'react',
            'ts',
            'redis',
            'node',
            'postgres',
            'sql',
            'sentry'
        ]

    },
    {
        title: 'Endless (E-commerce v2)',
        link: 'https://my.endless.fr/login',
        thumbnail: EndlessCustomerArea,
        techno: [
            'react',
            'ts',
            'redis',
            'node',
            'postgres',
            'sql',
            'sentry',
            'kafka',
            'prisma'
        ]

    },
    {
        title: 'Click N Lerins',
        link: '',
        thumbnail: ClickNLerins,
        techno: [
            'vue',
            'ts',
            'node',
            'postgres',
            'sql',
        ]
    },
    {
        title: 'Buddy',
        link: '',
        thumbnail: Buddy,
        techno: [
            'vue',
            'ts',
            'node',
            'postgres',
            'sql',
        ]
    },
    {
        title: 'Leclerc',
        link: '',
        thumbnail: Leclerc,
        techno: [
            'vue',
            'ts',
            'node',
            'postgres',
            'sql',
        ]
    },
];

export const Homepage = () => {
    const [showAll, setShowAll] = useState<boolean>(false);
    
    const inputRef = useRef<HTMLAnchorElement>();

    const { theme } = useTheme();
    const isDesktop = window.innerWidth > 1024;

    return(
        <div className="mx-2 h-screen">
            <div className="flex md:flex-row justify-center items-center md:mt-32 mt-8 md:mx-32 mx-4 flex-col ">
                <p className="text-5xl font-semibold text-black dark:text-white mb-8 text-start md:mr-32 mx-4">
                    Hi,
                    <div className="md:flex">
                        <p>My name is</p>
                        <Highlight className="md:ml-2">
                            <p className="underline">Antoine</p>
                        </Highlight>
                        
                    </div>
                    <p>I'm a software engineer</p>
                    <p>and I love to build things.</p>
                </p>
                <img src={Antoine} alt="Antoine Famibelle" className="md:h-80 rounded-2xl" />
            </div>
            {/* 
             Section 1: Macbook Scroll
             */}
             <div className="md:h-[150vh] h-[125vh] overflow-hidden md:pb-50">
                <MacbookScroll
                    src={EndlessImage}
                    title={
                        <>
                        <h1 className="text-[4rem] font-semibold text-black dark:text-white">
                            The only limit <br />
                            <span className="text-[6rem] font-bold mt-1 leading-none">
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
                    showGradient={false}
                />
             </div> 
             {/* 
                Section 2: Cursus
              */}
            <div className="md:mx-24 md:pt-8">
                <GridBackgroundDemo>
                    <span className="text-4xl md:text-[5rem] font-semi-bold leading-none md:mb-8">
                        Let me take you to my story
                    </span>
                    <div className="md:mt-12">
                        {content.map((item) => (
                            <div className="relative pl-8 sm:pl-32 py-6 group">
                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-24 h-6 mb-3 sm:mb-0 rounded-full">
                                        <Highlight className="p-1">{item.date}</Highlight>
                                    </time>
                                    <div className="flex flex-col justify-start items-start"> 
                                        <div className="text-2xl font-bold text-slate-900 dark:text-white">{item.title}</div>
                                        <div className="text-xl font-bold text-slate-900 dark:text-white underline">{item.location}</div>
                                    </div>
                                
                                </div>
                                <div className="text-slate-500 dark:text-white text-start">{item.description}</div>
                            </div>
                        ))}
                    </div>
                </GridBackgroundDemo>
               
            </div>
            {/* 
                Section 3: Projects / Works
             */}
            <div className="md:h-[125vh] h-[100vh] overflow-hidden overflow-x-hidden">
                <HeroParallax
                    products={workProjects}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {workProjects.map((project, index) => {
                    if (index >= 3 && !showAll) return null;
                    return (
                        <ThreeDCardDemo
                            title={project.title}
                            description="This is a description"
                            image={project.thumbnail}
                            link={project.link}
                            techno={project.techno}
                        />
                    );
                })}
               
            </div>
                {/* 
                // Section 4: View more
                 */}
            <div className='flex w-full justify-center aligns-center'>
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        {!showAll ? 'View more of my work' : 'View less of my work'}
                        {!showAll ? <ArrowDown className="w-5 h-5 ml-2" /> : <ArrowUp className="w-5 h-5 ml-2" />}
                    </span>
                </button>
            </div>

                {/* 
                // Section 5: Some stuff that I'm proud off
                 */}
            <div>
                <h1 className="text-4xl font-semibold text-black dark:text-white text-center mt-8">
                    Some stuff that I'm proud off
                </h1>
                <p className="text-center text-xl dark:text-neutral-200 my-12 mx-12">
                I have dedicated over two years to the development and execution of my final Master's project.
                Upon completion, a panel of industry professionals assessed my work, resulting in an exceptional grade of 20/20.
                This achievement granted me the opportunity to showcase my project in a national competition.
                Amongst a pool of 16 finalists,my project secured a notable 4th place, and in the overall ranking of 100 participants,
                it consistently maintained its 4th position.
                    <br/>
                    <br/>
                    Here is a video of my live presentation during the national contest in front of the jury and the public.
                </p>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        width={isDesktop ? 560 : 280}
                        height="315"
                        className="rounded-xl ml-auto mr-auto"
                        src="https://www.youtube.com/embed/657GsKkFwUQ?si=Uean2cRwa_JonBrc&amp;start=5502"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            </div>

            {
                /* 
                // Section 6: My Tech blog
                 */
            }
            <div>
                <h1 className="text-4xl font-semibold text-black dark:text-white text-center mt-8">
                    My Tech blog
                </h1>
                <p className="text-center text-xl dark:text-neutral-200 my-12 mx-12">
                I have dedicated over two years to the development and execution of my final Master's project.
                Upon completion, a panel of industry professionals assessed my work, resulting in an exceptional grade of 20/20.
                This achievement granted me the opportunity to showcase my project in a national competition.
                Amongst a pool of 16 finalists,my project secured a notable 4th place, and in the overall ranking of 100 participants,
                it consistently maintained its 4th position.
                    <br/>
                    <br/>
                    Here is a video of my live presentation during the national contest in front of the jury and the public.
                </p>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        width={isDesktop ? 560 : 280}
                        height="315"
                        className="rounded-xl ml-auto mr-auto"
                        src="https://www.youtube.com/embed/657GsKkFwUQ?si=Uean2cRwa_JonBrc&amp;start=5502"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            </div>
            {/* 
            // Section 7: Let's work together
             */}
            <div className="pb-12">
                <h1 className="text-4xl font-semibold text-black dark:text-white text-center mt-8">
                    Let's work together
                </h1>
                <p className="text-center text-xl dark:text-neutral-200 mt-8">
                    I'm always looking for new opportunities and challenges.
                    <br/>
                    If you think we could work together, feel free to contact me.
                </p>
                <div className="flex justify-center aligns-center">
                    <button
                        onClick={() => inputRef.current.click()}
                        className="mt-4 bg-gradient-to-br w-1/2 md:w-1/3 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-white bg-black w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    >
                        <a href="mailto:antoinefamibelle@gmail.com" ref={inputRef}/>
                            Send me an email &rarr;
                        <BottomGradient />
                    </button>
                </div>
                <p className="text-center text-xl dark:text-neutral-200 my-4">
                        Or you can contact me on social media
                    </p>
                <div className="flex justify-center aligns-center mt-4">
                    <a href="https://github.com/antoinefamibelle" target="_blank" rel="noreferrer">
                        <Github className="w-8 h-8 mr-4"/>
                    </a>
                    <a href="https://fr.linkedin.com/in/antoine-famibelle-13a7b717a/" target="_blank" rel="noreferrer">
                        <LinkedinIcon className="w-8 h-8"/>
                    </a>
                </div>
            </div>

            <div className='flex md:justify-start justify-center'>
             <span>
                Made with ❤️ by Antoine Famibelle
             </span>
            </div>
        </div>
    );
};