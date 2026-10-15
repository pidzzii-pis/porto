import { useState } from "react";
import { motion } from "motion/react";

const icons = {
    web: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
    design: <path d="M4 20l4-1 11-11a2.1 2.1 0 00-3-3L5 16l-1 4zM14 7l3 3" />,
    database: <path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />,
    frontend: <path d="M3 5h18v14H3zM3 9h18M7 7h.01M11 7h.01" />,
    desktop: <path d="M3 4h18v12H3zM8 20h8M12 16v4" />,
    server: <path d="M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01M12 7h4M12 17h4" />,
};

const interests = [
    { title: "Web Development", icon: "web" },
    { title: "UI/UX Design & Prototyping", icon: "design" },
    { title: "Database Management (MySQL)", icon: "database" },
    { title: "Frontend Development (HTML, CSS, JavaScript, Bootstrap)", icon: "frontend" },
    { title: "Desktop App Development (Java)", icon: "desktop" },
    { title: "Backend Development (PHP, Laravel)", icon: "server" },
];

export default function Interests() {
    const [active, setActive] = useState(null);

    const onMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
    };

    return (
        <section id="interests" className="relative overflow-hidden bg-black px-6 py-32">
            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[130px]" />

            <div className="relative mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                        Primary Interests & Specializations
                    </p>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
                        What I <span className="text-gradient">focus on.</span>
                    </h2>
                </motion.div>

                <div className="mt-14 flex flex-col gap-4" onMouseLeave={() => setActive(null)}>
                    {interests.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div
                                onMouseMove={onMove}
                                onMouseEnter={() => setActive(i)}
                                onClick={() => setActive(i)}
                                style={{ opacity: active === null || active === i ? 1 : 0.4 }}
                                className="group relative flex cursor-pointer items-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 transition duration-500 hover:translate-x-2 hover:border-violet-400/40 md:gap-6 md:px-7 md:py-6"
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

                                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-zinc-400 transition duration-500 group-hover:border-violet-400/40 group-hover:text-violet-300">
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

                                <h3 className="relative flex-1 text-lg font-medium text-zinc-200 transition duration-500 group-hover:text-white md:text-2xl">
                                    {item.title}
                                </h3>

                                <svg
                                    viewBox="0 0 24 24"
                                    className="relative hidden h-5 w-5 -translate-x-3 text-violet-300 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                </svg>

                                <span className="relative font-mono text-sm tracking-widest text-zinc-600 transition duration-500 group-hover:text-violet-300 md:text-base">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
