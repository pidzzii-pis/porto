import { motion } from "motion/react";

function BrowserFrame({ src, alt, url, accent }) {
    const accentGlow = {
        indigo: "bg-violet-500/20",
        amber: "bg-violet-500/20",
    }[accent] || "bg-white/10";

    return (
        <div className="relative">
            {/* Glow di belakang frame, warna sesuai accent project */}
            <div
                className={`pointer-events-none absolute -inset-3 rounded-3xl ${accentGlow} opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100`}
            />

            {/* Browser window */}
            <div
                className="
                    relative overflow-hidden rounded-2xl
                    border border-white/10 bg-[#09090c]
                    shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]
                    transition-transform duration-700 ease-out
                    [transform:perspective(1000px)_rotateX(2deg)_rotateY(-2deg)_scale(0.98)]
                    group-hover:[transform:perspective(1000px)_rotateX(0deg)_rotateY(0deg)_scale(1)]
                "
            >
                {/* Top bar / chrome */}
                <div className="flex items-center gap-3 border-b border-white/10 bg-[#121216] px-4 py-3">
                    <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/40" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500/40" />
                    </div>

                    <div className="flex flex-1 items-center gap-2 rounded-md bg-white/[0.04] px-3 py-1.5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 flex-shrink-0 text-zinc-600">
                            <rect x="5" y="11" width="14" height="9" rx="2" />
                            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                        </svg>
                        <span className="truncate text-xs text-zinc-500">{url}</span>
                    </div>
                </div>

                {/* Viewport gambar */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0b0e]">
                    {src ? (
                        <img
                            src={src}
                            alt={alt}
                            className="h-full w-full object-cover object-top"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center">
                            <p className="text-xs uppercase tracking-[0.2em] text-zinc-700">
                                Preview coming soon
                            </p>
                        </div>
                    )}

                    {/* Vignette halus biar nyatu sama tema gelap */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]" />
                </div>
            </div>
        </div>
    );
}

// Isi project kamu di sini. Contoh format satu project:
// {
//     title: "Nama Project",
//     description: "Deskripsi singkat project.",
//     image: "/nama-gambar.png",   // taruh gambar di folder public/
//     url: "nama-project.vercel.app",
//     accent: "indigo",            // "indigo" atau "amber" (warna glow)
//     tech: ["React", "Tailwind CSS"],
//     repoLink: "https://github.com/username/repo",
//     liveLink: "",
//     status: "Ongoing",           // "Ongoing" atau "Completed"
// },
const projects = [];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#060608] px-6 py-32 text-white md:px-12 lg:px-20"
        >
            <div className="pointer-events-none absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-[130px]" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-500/[0.05] blur-[130px]" />

            <div className="relative mx-auto max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
                >
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                            Selected Work
                        </p>

                        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                            Projects
                        </h2>

                        <p className="mt-4 max-w-lg leading-7 text-zinc-500">
                           Some of the projects I have worked on,
                            ranging from school systems to personal applications.
                        </p>
                    </div>

                    <a
                        href="https://github.com/pidzzii-pis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-zinc-400 transition duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
                    >
                        See all on GitHub
                        <span className="transition duration-500 group-hover:translate-x-1">→</span>
                    </a>
                </motion.div>

                {projects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="mt-16 rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-20 text-center"
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">Coming soon</p>
                        <p className="mt-3 text-zinc-500">Projects will be added here.</p>
                    </motion.div>
                )}

                <div className="mt-16 grid gap-10 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group"
                        >
                            {/* Browser mockup untuk gambar */}
                            <BrowserFrame
                                src={project.image}
                                alt={project.title}
                                url={project.url}
                                accent={project.accent}
                            />

                            {/* Badge status + tech, di luar frame */}
                            <div className="mt-5 flex flex-wrap items-center gap-2">
                                <span
                                    className={`rounded-full border px-3 py-1 text-xs ${
                                        project.status === "Ongoing"
                                            ? "border-violet-400/20 bg-violet-500/10 text-violet-400"
                                            : "border-white/15 bg-white/[0.03] text-zinc-400"
                                    }`}
                                >
                                    {project.status}
                                </span>

                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-500"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <h3 className="mt-4 text-2xl font-medium">
                                {project.title}
                            </h3>

                            <p className="mt-3 max-w-md leading-7 text-zinc-400">
                                {project.description}
                            </p>

                            <div className="mt-5 flex items-center gap-5">
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition duration-300 hover:text-white"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.35.78 1.04.78 2.1v3.1c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                                    </svg>
                                    Repository
                                </a>

                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition duration-300 hover:text-white"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                                            <path d="M14 3h7v7" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 14 21 3" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}