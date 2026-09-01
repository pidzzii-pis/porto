import { motion } from "motion/react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-black px-6 py-32 text-white md:px-12 lg:px-20"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />
            <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-500/[0.05] blur-[120px]" />
            <div className="pointer-events-none absolute -right-32 bottom-20 h-[350px] w-[350px] rounded-full bg-pink-500/[0.04] blur-[120px]" />

            <div
                className="pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="relative mx-auto max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-zinc-400">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                        </span>
                        Available for opportunities
                    </div>

                    <p className="text-sm uppercase tracking-[0.35em] text-zinc-600">
                        Contact
                    </p>

                    <h2 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
                        Get In{" "}
                        <span className="text-zinc-500">
                            Touch.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-500 md:text-lg">
                        Find me on social media and check out my travels, projects, and current work.
                    </p>
                </motion.div>

                <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-3">

                    <motion.a
                        href="https://instagram.com/pidzzii"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
                    >
                        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-pink-500/[0.06] blur-3xl transition duration-500 group-hover:bg-pink-500/[0.12]" />

                        <div className="relative flex items-start justify-between">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black transition-all duration-500 group-hover:scale-110 group-hover:border-white/20">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-zinc-300 transition duration-500 group-hover:text-white">
                                    <rect x="3" y="3" width="18" height="18" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                </svg>
                            </div>

                            <span className="text-2xl text-zinc-700 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                                ↗
                            </span>
                        </div>

                        <div className="relative mt-10">
                            <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">Instagram</p>
                            <h3 className="mt-2 text-2xl font-medium">@pidzzii</h3>
                            <p className="mt-3 text-sm text-zinc-500">Follow my journey & daily updates.</p>
                        </div>

                        <div className="relative mt-8 h-px w-full bg-white/10">
                            <div className="h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />
                        </div>
                    </motion.a>

                    <motion.a
                        href="https://github.com/pidzzii-pis"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
                    >
                        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl transition duration-500 group-hover:bg-white/[0.09]" />

                        <div className="relative flex items-start justify-between">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black transition-all duration-500 group-hover:scale-110 group-hover:border-white/20">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-zinc-300 transition duration-500 group-hover:text-white">
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.35.78 1.04.78 2.1v3.1c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                                </svg>
                            </div>

                            <span className="text-2xl text-zinc-700 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                                ↗
                            </span>
                        </div>

                        <div className="relative mt-10">
                            <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">GitHub</p>
                            <h3 className="mt-2 text-2xl font-medium">@pidzzii-pis</h3>
                            <p className="mt-3 text-sm text-zinc-500">Explore my projects & source code.</p>
                        </div>

                        <div className="relative mt-8 h-px w-full bg-white/10">
                            <div className="h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />
                        </div>
                    </motion.a>

                    <motion.a
                        href="https://discord.com/users/pizzpnyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
                    >
                        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/[0.07] blur-3xl transition duration-500 group-hover:bg-indigo-500/[0.14]" />

                        <div className="relative flex items-start justify-between">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black transition-all duration-500 group-hover:scale-110 group-hover:border-white/20">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-zinc-300 transition duration-500 group-hover:text-white">
                                    <path d="M20.32 4.37a19.8 19.8 0 0 0-4.9-1.52.07.07 0 0 0-.08.04c-.21.38-.45.87-.61 1.26a18.3 18.3 0 0 0-5.48 0c-.17-.4-.4-.88-.62-1.26a.08.08 0 0 0-.08-.04c-1.7.29-3.36.8-4.9 1.52a.07.07 0 0 0-.03.03C.53 8.09-.32 11.7.1 15.26a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.23-2a.08.08 0 0 0-.04-.11 13 13 0 0 1-1.87-.9.08.08 0 0 1 0-.13c.13-.09.25-.19.37-.28a.07.07 0 0 1 .08 0c3.93 1.8 8.18 1.8 12.06 0a.07.07 0 0 1 .08 0c.12.1.24.19.37.28a.08.08 0 0 1 0 .13c-.6.35-1.22.65-1.87.9a.08.08 0 0 0-.04.11c.36.7.78 1.37 1.23 2a.08.08 0 0 0 .08.03 19.8 19.8 0 0 0 6.01-3.03.08.08 0 0 0 .03-.06c.5-4.1-.42-7.68-1.78-10.86a.06.06 0 0 0-.03-.03ZM8.02 13.08c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.41 2.15-2.41 1.21 0 2.17 1.1 2.15 2.41 0 1.34-.94 2.42-2.15 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.41 2.15-2.41 1.21 0 2.17 1.1 2.15 2.41 0 1.34-.93 2.42-2.15 2.42Z" />
                                </svg>
                            </div>

                            <span className="text-2xl text-zinc-700 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                                ↗
                            </span>
                        </div>

                        <div className="relative mt-10">
                            <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">Discord</p>
                            <h3 className="mt-2 text-2xl font-medium">@pidzzii</h3>
                            <p className="mt-3 text-sm text-zinc-500">Chat with me directly, anytime.</p>
                        </div>

                        <div className="relative mt-8 h-px w-full bg-white/10">
                            <div className="h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />
                        </div>
                    </motion.a>

                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-600 md:flex-row"
                >
                    <p>Let's build something meaningful.</p>
                    <p>© 2026 Hafidzy.</p>
                </motion.div>

            </div>
        </section>
    );
}
