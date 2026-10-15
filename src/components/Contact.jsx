import { useState } from "react";
import { motion } from "motion/react";

// GANTI dengan alamat email kamu, form akan membuka aplikasi email ke alamat ini.
const EMAIL = "emailkamu@gmail.com";

const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition duration-300 focus:border-violet-400/50 focus:bg-violet-500/[0.06] focus:shadow-[0_0_30px_-10px_rgba(168,85,247,0.6)]";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
        const body = encodeURIComponent(
            `${form.message}\n\n— ${form.name} (${form.email})`
        );
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-black px-6 py-32 text-white md:px-12 lg:px-20"
        >
            <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />
            <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/[0.05] blur-[120px]" />
            <div className="pointer-events-none absolute -right-32 bottom-20 h-[350px] w-[350px] rounded-full bg-purple-500/[0.04] blur-[120px]" />

            <div
                className="pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(167,139,250,0.25) 1px, transparent 1px)",
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
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
                        </span>
                        Available for opportunities
                    </div>

                    <p className="text-sm uppercase tracking-[0.35em] text-zinc-600">
                        Contact
                    </p>

                    <h2 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
                        Get In{" "}
                        <span className="text-gradient">
                            Touch.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-500 md:text-lg">
                        Find me on social media and check out my travels, projects, and current work.
                    </p>
                </motion.div>

                <div className="mx-auto mt-20 grid max-w-3xl gap-6 md:grid-cols-2">

                    <motion.a
                        href="https://instagram.com/diiaanaana"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
                    >
                        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/[0.06] blur-3xl transition duration-500 group-hover:bg-purple-500/[0.12]" />

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
                            <h3 className="mt-2 text-2xl font-medium">@diiaanaana</h3>
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
                </div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
                >
                    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/[0.12] blur-3xl" />

                    <p className="relative text-sm uppercase tracking-[0.2em] text-zinc-600">
                        Send a message
                    </p>
                    <h3 className="relative mt-2 text-2xl font-medium">
                        Prefer email? <span className="text-gradient">Write to me.</span>
                    </h3>

                    <div className="relative mt-8 grid gap-4 md:grid-cols-2">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className={inputClass}
                        />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            required
                            className={inputClass}
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            rows={5}
                            required
                            className={`${inputClass} resize-none md:col-span-2`}
                        />
                    </div>

                    <button
                        type="submit"
                        className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-violet-600 hover:bg-violet-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(168,85,247,0.7)] transition-all duration-300 hover:shadow-[0_0_40px_-6px_rgba(168,85,247,0.95)] active:scale-95"
                    >
                        Send via Email
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-600 md:flex-row"
                >
                    <p>Let's build something meaningful.</p>
                    <p>© 2026 Diana.</p>
                </motion.div>

            </div>
        </section>
    );
}
