import { motion } from "motion/react";
import Counter from "./Counter.jsx";

const timeline = [
    {
        period: "EDUCATION",
        title: "SMP Negeri 1 Batu",
        status: "Completed",
        description:
            "The period of junior high school was the beginning of my educational journey.",
        link: "https://smpnegeri01batu.sch.id/",
    },
    {
        period: "EDUCATION",
        title: "SMK PGRI 3 MALANG RPL",
        status: "Ongoing",
        description:
            "Learning programming, web development, databases, mobile development, and application development..",
        link: "https://smkpgri3-mlg.sch.id/",
    },
];

export default function Career() {
    return (
        <section
            id="career"
            className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-32 text-white md:px-12 lg:px-20"
        >
            <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-violet-500/[0.05] blur-[130px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-[130px]" />

            <div className="relative mx-auto max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                        My Journey
                    </p>

                    <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                        About{" "}
                        <span className="text-gradient">Me.</span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                       I am a student with an interest in technology and software development. My journey began in high school and continues to this day as I study Software Engineering.
                    </p>

                    <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
                        <Counter value={2} suffix="+" label="Academic Year" />
                        <Counter value={10} suffix="+" label="Technology" />
                        <Counter value={5} suffix="+" label="Project" />
                    </div>
                </motion.div>

                <div className="relative mt-20">

                    <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent md:left-[19px]" />

                    <div className="space-y-14">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative flex gap-6 pl-0 md:gap-8"
                            >
                                <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-black md:h-10 md:w-10">
                                    <div
                                        className={`h-2.5 w-2.5 rounded-full ${
                                            item.status === "Ongoing"
                                                ? "bg-violet-400"
                                                : "bg-zinc-500"
                                        }`}
                                    />
                                </div>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex-1 rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] md:p-8"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                                                {item.period}
                                            </span>

                                            <span
                                                className={`rounded-full px-3 py-1 text-xs ${
                                                    item.status === "Ongoing"
                                                        ? "bg-violet-500/10 text-violet-400"
                                                        : "bg-white/5 text-zinc-400"
                                                }`}
                                            >
                                                {item.status}
                                            </span>
                                        </div>

                                        <span className="mt-1 flex-shrink-0 text-lg text-zinc-600 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                                            ↗
                                        </span>
                                    </div>

                                    <h3 className="mt-3 text-2xl font-medium md:text-3xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 max-w-xl leading-7 text-zinc-400">
                                        {item.description}
                                    </p>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
