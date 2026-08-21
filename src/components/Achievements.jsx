import { motion } from "motion/react";

const achievements = [
    {
        title: "-",
        issuer: "-",
        year: "",
        link: "",
    },
    {
        title: "-",
        issuer: "-",
        year: "-",
        link: "",
    },
    {
        title: "-",
        issuer: "-",
        year: "-",
        link: "",
    },
];

function MedalIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
            <circle cx="12" cy="8" r="5" />
            <path d="M8.5 12.5 6 21l6-3 6 3-2.5-8.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function Achievements() {
    return (
        <section
            id="achievements"
            className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-32 text-white md:px-12 lg:px-20"
        >
            <div className="pointer-events-none absolute -right-40 top-10 h-[400px] w-[400px] rounded-full bg-amber-500/[0.04] blur-[130px]" />

            <div className="relative mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                        Achievements
                    </p>

                    <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                       Certificate{" "}
                        <span className="text-zinc-500">& Achievement.</span>
                    </h2>

                    <p className="mt-4 max-w-xl leading-7 text-zinc-500">
                       Some of the certifications and achievements I have earned during my studies and competitions.
                    </p>
                </motion.div>

                <div className="mt-14 grid gap-5 md:grid-cols-3">
                    {achievements.map((item, index) => {
                        const Wrapper = item.link ? "a" : "div";
                        const linkProps = item.link
                            ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
                            : {};

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Wrapper
                                    {...linkProps}
                                    className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-500/10 text-amber-400 transition-transform duration-500 group-hover:scale-110">
                                            <MedalIcon />
                                        </div>

                                        <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                                            {item.year}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 text-lg font-medium leading-snug">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-zinc-500">
                                        {item.issuer}
                                    </p>

                                    {item.link && (
                                        <span className="mt-4 inline-flex items-center gap-1 text-xs text-zinc-600 transition duration-300 group-hover:text-amber-400">
                                           View certificate
                                            <span className="transition duration-500 group-hover:translate-x-1">→</span>
                                        </span>
                                    )}
                                </Wrapper>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}