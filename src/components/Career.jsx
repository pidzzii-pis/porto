import { useState } from "react";
import { motion } from "motion/react";
import Counter from "./Counter.jsx";

const icons = {
    web: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
    database: <path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />,
    frontend: <path d="M3 5h18v14H3zM3 9h18M7 7h.01M11 7h.01" />,
    desktop: <path d="M3 4h18v12H3zM8 20h8M12 16v4" />,
    server: <path d="M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01M12 7h4M12 17h4" />,
};

const interests = [
    { title: "Web Development", icon: "web" },
    { title: "Database Management (MySQL)", icon: "database" },
    { title: "Frontend Development (HTML, CSS, JavaScript, Bootstrap)", icon: "frontend" },
    { title: "Desktop App Development (Java)", icon: "desktop" },
    { title: "Backend Development (PHP, Laravel)", icon: "server" },
];

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
    const [active, setActive] = useState(null);

    const onMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
    };

    return (
        <section
            id="career"
            className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-32 text-white md:px-12 lg:px-20"
        >
            <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-violet-500/[0.05] blur-[130px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-[130px]" />

            <div className="relative mx-auto max-w-6xl">

                <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
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
                            Hi! I'm Diana, an aspiring software developer from Indonesia with a growing interest in web and application development. I like understanding how software is built and finding ways to turn ideas into useful digital solutions.
                        </p>

                        <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                            My experience so far includes creating web-based systems using PHP and MySQL, working with HTML, CSS, and JavaScript, and learning Laravel and Android development with Java. Each project gives me a chance to deepen my understanding of programming, tackle new challenges, and explore different approaches to writing better code.
                        </p>

                        <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
                            <Counter value={2} suffix="+" label="Academic Year" />
                            <Counter value={10} suffix="+" label="Technology" />
                            <Counter value={3} suffix="+" label="Project" />
                        </div>
                    </motion.div>

                    {/* INTERESTS (digabung ke About, di sisi kanan) */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="text-sm uppercase tracking-[0.3em] text-zinc-500"
                        >
                            Primary Interests & Specializations
                        </motion.p>

                        <div className="mt-6 flex flex-col gap-3" onMouseLeave={() => setActive(null)}>
                            {interests.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div
                                        onMouseMove={onMove}
                                        onMouseEnter={() => setActive(i)}
                                        onClick={() => setActive(i)}
                                        style={{ opacity: active === null || active === i ? 1 : 0.4 }}
                                        className="group relative flex cursor-pointer items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition duration-500 hover:-translate-x-1 hover:border-violet-400/40 md:gap-5 md:px-5"
                                    >
                                        {/* spotlight yang mengikuti kursor */}
                                        <div
                                            className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                                            style={{
                                                background:
                                                    "radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(139,92,246,0.16), transparent 70%)",
                                            }}
                                        />
                                        {/* garis aksen kiri */}
                                        <div className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-violet-500 transition duration-500 group-hover:scale-y-100" />

                                        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-zinc-400 transition duration-500 group-hover:border-violet-400/40 group-hover:text-violet-300">
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="h-5 w-5"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                {icons[item.icon]}
                                            </svg>
                                        </div>

                                        <h3 className="relative flex-1 text-base font-medium text-zinc-200 transition duration-500 group-hover:text-white md:text-lg">
                                            {item.title}
                                        </h3>

                                        <span className="relative font-mono text-sm tracking-widest text-zinc-600 transition duration-500 group-hover:text-violet-300">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

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
