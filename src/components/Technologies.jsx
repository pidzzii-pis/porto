import React, { useEffect, useRef } from "react";

const technologies = [
    {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
        name: "Android",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
    },
];

export default function Technologies() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
            section.classList.add("tech-visible");
            observer.disconnect(); // hanya trigger sekali
        }
    },
    { threshold: 0.15 }
);

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="technologies"
            className="tech-section relative min-h-[650px] overflow-hidden bg-black text-white"
        >

            {/* ================================================= */}
            {/* BACKGROUND */}
            {/* ================================================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {/* BARIS 1 */}
                <div className="logo-row logo-row-one">
                    {[...technologies, ...technologies].map(
                        (tech, index) => (
                            <img
                                key={`row-one-${index}`}
                                src={tech.icon}
                                alt=""
                                className="background-logo"
                            />
                        )
                    )}
                </div>

                {/* BARIS 2 */}
                <div className="logo-row logo-row-two">
                    {[...technologies, ...technologies].map(
                        (tech, index) => (
                            <img
                                key={`row-two-${index}`}
                                src={tech.icon}
                                alt=""
                                className="background-logo"
                            />
                        )
                    )}
                </div>

                {/* BARIS 3 */}
                <div className="logo-row logo-row-three">
                    {[...technologies, ...technologies].map(
                        (tech, index) => (
                            <img
                                key={`row-three-${index}`}
                                src={tech.icon}
                                alt=""
                                className="background-logo"
                            />
                        )
                    )}
                </div>

                {/* OVERLAY GELAP */}
                <div className="absolute inset-0 bg-black/80" />

                {/* RADIAL GRADIENT */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_75%)]" />

                {/* VIGNETTE */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),transparent_30%,transparent_70%,rgba(0,0,0,0.7))]" />

            </div>


            {/* ================================================= */}
            {/* CONTENT */}
            {/* ================================================= */}

            <div className="relative z-10 flex min-h-[650px] items-center justify-center px-6 py-32">

                <div className="tech-content w-full max-w-4xl text-center">

                    {/* Label */}
                    <p className="text-sm uppercase tracking-[0.4em] text-zinc-600">
                        Technologies
                    </p>

                    {/* Title */}
                    <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">
                        Tools I{" "}
                        <span className="text-zinc-500">
                            work with.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-zinc-500 md:text-lg">
                        Technologies I use to build   
<br />
                        websites, applications, and various projects.
                    </p>


                    {/* TECHNOLOGY LIST */}

                    <div className="mt-12 flex flex-wrap justify-center gap-3">

                        {technologies.slice(0, 8).map((tech) => (
                            <span
                                key={tech.name}
                                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-500 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                            >
                                {tech.name}
                            </span>
                        ))}

                    </div>


                    {/* SMALL TEXT */}

                    <p className="mt-12 text-xs uppercase tracking-[0.3em] text-zinc-700">
                        Always learning. Always building.
                    </p>

                </div>

            </div>


            {/* ================================================= */}
            {/* CSS ANIMATION */}
            {/* ================================================= */}

            <style>
                {`

                /* ============================================= */
                /* SECTION SCROLL ANIMATION */
                /* ============================================= */

                .tech-section {
                    opacity: 0;
                    transform:
                        translateY(80px)
                        scale(0.98);

                    transition:
                        opacity 1.4s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 1.4s cubic-bezier(0.22, 1, 0.36, 1);
                }

                .tech-section.tech-visible {
                    opacity: 1;
                    transform:
                        translateY(0)
                        scale(1);
                }


                /* ============================================= */
                /* CONTENT ANIMATION */
                /* ============================================= */

                .tech-content {
                    opacity: 0;

                    transform:
                        translateY(55px)
                        scale(0.96);

                    filter: blur(8px);

                    transition:
                        opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.15s,
                        transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.15s,
                        filter 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
                }

                .tech-visible .tech-content {
                    opacity: 1;

                    transform:
                        translateY(0)
                        scale(1);

                    filter: blur(0);
                }


                /* ============================================= */
                /* BACKGROUND LOGO ROW */
                /* ============================================= */

                .logo-row {
                    position: absolute;

                    display: flex;

                    align-items: center;

                    gap: 120px;

                    width: max-content;

                    white-space: nowrap;
                }


                /* ============================================= */
                /* BACKGROUND LOGO */
                /* ============================================= */

                .background-logo {
                    width: 100px;
                    height: 100px;

                    flex-shrink: 0;

                    object-fit: contain;

                    filter:
                        grayscale(100%)
                        brightness(0.45);

                    opacity: 0.30;

                    user-select: none;

                    transition:
                        transform 0.8s ease,
                        opacity 0.8s ease;
                }


                /* ============================================= */
                /* ROW 1 */
                /* ============================================= */

                .logo-row-one {
                    top: 5%;
                    left: 0;

                    opacity: 0.65;

                    animation:
                        technologyMoveLeft
                        60s
                        linear
                        infinite;
                }


                /* ============================================= */
                /* ROW 2 */
                /* ============================================= */

                .logo-row-two {
                    top: 42%;
                    left: -700px;

                    opacity: 0.40;

                    animation:
                        technologyMoveRight
                        75s
                        linear
                        infinite;
                }


                /* ============================================= */
                /* ROW 3 */
                /* ============================================= */

                .logo-row-three {
                    top: 78%;
                    left: -300px;

                    opacity: 0.35;

                    animation:
                        technologyMoveLeft
                        70s
                        linear
                        infinite;
                }


                /* ============================================= */
                /* MOVE LEFT */
                /* ============================================= */

                @keyframes technologyMoveLeft {

                    0% {
                        transform: translateX(0);
                    }

                    100% {
                        transform: translateX(-50%);
                    }

                }


                /* ============================================= */
                /* MOVE RIGHT */
                /* ============================================= */

                @keyframes technologyMoveRight {

                    0% {
                        transform: translateX(-50%);
                    }

                    100% {
                        transform: translateX(0);
                    }

                }


                /* ============================================= */
                /* MOBILE */
                /* ============================================= */

                @media (max-width: 768px) {

                    .tech-section {
                        min-height: 600px;
                    }

                    .logo-row {
                        gap: 70px;
                    }

                    .background-logo {
                        width: 65px;
                        height: 65px;
                    }

                    .logo-row-one {
                        animation-duration: 45s;
                    }

                    .logo-row-two {
                        animation-duration: 55s;
                    }

                    .logo-row-three {
                        animation-duration: 50s;
                    }

                }


                /* ============================================= */
                /* REDUCED MOTION */
                /* ============================================= */

                @media (prefers-reduced-motion: reduce) {

                    .logo-row {
                        animation: none;
                    }

                    .tech-section,
                    .tech-content {
                        opacity: 1;
                        transform: none;
                        filter: none;
                        transition: none;
                    }

                }

                `}
            </style>

        </section>
    );
}