import { Highlight } from "@/components/ui/highlight";
import { useTheme } from "@/context/theme";
import { SparklesCore } from "@/components/ui/sparkles";
import EndlessImage from '@/assets/endless.png';
import EndlessCustomerApp from '@/assets/endless-customer-app.png';
import EndlessCustomerArea from '@/assets/customer-area.jpg';
import Nudiet from '@/assets/nudiet.png';
import Leclerc from '@/assets/leclerc.png';
import Pertimm from '@/assets/pertimm.png';
import Vetapp from '@/assets/vetapp.png';
import Buddy from '@/assets/buddy.png';
import ClickNLerins from '@/assets/clicknlerins.png';
import Hospitalidee from '@/assets/hospitalidee.png';
import IntranetInside from '@/assets/intranet-inside.png';
import AntoineFamibelleDev from '@/assets/antoine-dev.png';
import BlingBling from '@/assets/blingbling.png';
import Antoine from '@/assets/me.jpg';
import { isDark } from "@/lib/utils";
import { MacbookScroll } from "@/components/ui/macbook";
import { GridBackgroundDemo } from "@/components/ui/gradien-bg";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ThreeDCardDemo } from "@/components/ui/3d-card";
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
        title: 'Antoine Famibelle (v1)',
        link: 'https://antoinefamibelle-dev.com',
        thumbnail: AntoineFamibelleDev,
        techno: [
            'vue',
            'ts',
        ]

    },
    {
        title: 'Endless (Mobile App)',
        link: 'https://endless.com',
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
        link: 'https://endless.com',
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
        link: 'https://endless.com',
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
                <img src={Antoine} alt="Endless" className="md:h-80 rounded-2xl" />
            </div>
            {/* 
             Section 1: Macbook Scroll
             */}
             <div className="md:h-[150vh] h-[125vh] overflow-hidden md:pb-50">
                <MacbookScroll
                    src={EndlessImage}
                    title={
                        <>
                        <h1 className="md:text-[4rem] text-4xl font-semibold text-black dark:text-white">
                            The only limit <br />
                            <span className="md:text-[6rem] text-4xl font-bold mt-1 leading-none">
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
                        Let met take you to my story
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
                {workProjects.map((project) => {
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
            <div>
                <h1 className="text-4xl font-semibold text-black dark:text-white text-center mt-8">
                    Some stuff that I'm proud off
                </h1>
                <p className="text-center text-xl dark:text-neutral-200 my-12 mx-12">
                    I have been working on my final master project for more than 2 years.
                    At the end of my studies a jury of professionals evaluated my work and gave me the grade of 20/20 and allowed me to present my project to a national contest.
                    My project ended 4th out of the 16th in the national contest and 4th out of 100th overall.
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
            <div>
                <h1 className="text-4xl font-semibold text-black dark:text-white text-center mt-8">
                    Let's work together
                </h1>
                <p className="text-center text-xl dark:text-neutral-200 mt-8">
                    I'm always looking for new opportunities and challenges.
                    <br/>
                    If you think we could work together, feel free to contact me.
                </p>
            </div>
        </div>
    );
};