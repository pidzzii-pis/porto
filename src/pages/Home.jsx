import React from "react";
import { motion } from "motion/react";
import Button from "../components/Button.jsx";
import ScrambleText from "../components/ScrambleText.jsx";
import ProfilePhoto from "../components/ProfilePhoto.jsx";
import ParticleField from "../components/ParticleField.jsx";
import { smoothScrollTo } from "../components/scrollTo.js";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Home() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-black px-6 pt-20 text-white md:px-12 lg:px-20"
        >
            {/* Suasana baru: aurora ungu + partikel interaktif */}
            <div className="animate-aurora pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-violet-600/12 blur-[130px]" />
            <div className="animate-aurora pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[130px] [animation-delay:-7s]" />
            <ParticleField />

            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 md:grid-cols-2">
                {/* TEXT */}
                <div>
                    <motion.p
                        {...fadeUp(0.1)}
                        className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-400 md:text-base"
                    >
                        Software Engineering Student
                    </motion.p>

                    <motion.h1
                        {...fadeUp(0.2)}
                        className="text-5xl font-bold leading-tight tracking-tight md:text-7xl"
                    >
                        Hi, I'm{" "}
                        <span className="text-gradient">
                            <ScrambleText text="Diana Pramudita" />
                        </span>
                    </motion.h1>

                    <motion.p
                        {...fadeUp(0.35)}
                        className="mt-6 max-w-xl text-base leading-8 text-zinc-400 md:text-lg"
                    >
                        I am a Software Engineering student interested in web development, mobile applications, and modern technology.
                    </motion.p>

                    {/* BUTTON */}
                    <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-4">
                        <Button variant="primary" icon onClick={() => smoothScrollTo("projects")}>
                            View Projects
                        </Button>
                        <Button variant="secondary" onClick={() => smoothScrollTo("career")}>
                            About Me
                        </Button>
                    </motion.div>
                </div>

                {/* FOTO */}
                <motion.div
                    {...fadeUp(0.4)}
                    className="flex justify-center pb-6 md:justify-end md:pb-0"
                >
                    <ProfilePhoto src="/pio.jpeg" alt="Diana" />
                </motion.div>
            </div>

            {/* Petunjuk scroll */}
            <button
                onClick={() => smoothScrollTo("career")}
                aria-label="Scroll down"
                className="absolute bottom-6 left-1/2 z-10 hidden h-12 w-px -translate-x-1/2 overflow-hidden bg-white/10 md:block"
            >
                <span className="block h-full w-full bg-violet-400 [animation:scrollHint_1.8s_ease-in-out_infinite]" />
            </button>
        </section>
    );
}
