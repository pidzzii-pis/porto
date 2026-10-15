import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { API_URL, api } from "../api.js";

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
const localProjects = [
    {
        // ====== GANTI BAGIAN INI SAJA ======
        title: "Peminjaman Kamera dan Tripod",                                // judul card
        description: "A team project built with PHP Native, MySQL, and Bootstrap. I contributed to the Data Master module, focusing on equipment data management and CRUD operations.", // deskripsi
        tech: ["PHP", "CSS"],                 // bahasa/teknologi (tambah/hapus bebas)
        // ----- opsional -----
        image: "/kamera.jpeg",                                                  // contoh: "/project1.png" (taruh gambar di folder public/)
        url: "",                              // tampil di address bar mockup
        repoLink: "https://github.com/gausvsvs-dotcom/ProjectPeminjaman-kamera-tripod",                 // link GitHub project
        liveLink: "",                                               // KOSONG = tombol ke repo. Isi link deploy = tombol otomatis ke project
        buttonLabel: "",                                            // opsional, teks tombol sendiri (kosong = otomatis)
        status: "Ongoing",                                          // "Ongoing" atau "Completed"
        accent: "indigo",                                           // warna glow: "indigo" atau "amber"
    },
];

// ====== PENGATURAN CARD KIRI-KANAN (samar) ======
// Kalau project cuma 1, card samar muncul di kiri & kanan supaya card utama ada di tengah.
// Mau dimatikan? Ubah jadi false. Otomatis hilang kalau project sudah lebih dari 1.
const SHOW_GHOST_CARDS = true;
const GHOST_LABEL = "Coming soon";

function GhostCard() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none hidden select-none scale-95 opacity-25 blur-[1.5px] md:block"
        >
            <BrowserFrame src="" alt="" url="coming-soon" accent="" />
            <div className="mt-5 flex justify-center">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-500">
                    {GHOST_LABEL}
                </span>
            </div>
            <div className="mx-auto mt-4 h-5 w-2/3 rounded bg-white/10" />
            <div className="mx-auto mt-3 h-3 w-5/6 rounded bg-white/[0.06]" />
            <div className="mx-auto mt-2 h-3 w-3/5 rounded bg-white/[0.06]" />
        </div>
    );
}

export default function Projects() {
    // Data dari backend Laravel (GET /api/projects); jika belum diatur, pakai localProjects.
    const [projects, setProjects] = useState(localProjects);

    useEffect(() => {
        if (!API_URL) return;
        api("/api/projects").then(setProjects).catch(() => {});
    }, []);

    const single = SHOW_GHOST_CARDS && projects.length === 1;

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
                        href="https://github.com/gausvsvs-dotcom/"
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

                <div
                    className={
                        single
                            ? "mt-16 grid items-center gap-10 md:grid-cols-[1fr_1.5fr_1fr]"
                            : "mt-16 grid gap-10 md:grid-cols-2"
                    }
                >
                    {single && <GhostCard />}
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`group ${single ? "text-center" : ""}`}
                        >
                            {/* Browser mockup untuk gambar */}
                            <BrowserFrame
                                src={project.image}
                                alt={project.title}
                                url={project.url}
                                accent={project.accent}
                            />

                            {/* Badge status + tech, di luar frame */}
                            <div className={`mt-5 flex flex-wrap items-center gap-2 ${single ? "justify-center" : ""}`}>
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

                            <p className={`mt-3 max-w-md leading-7 text-zinc-400 ${single ? "mx-auto" : ""}`}>
                                {project.description}
                            </p>

                            {/* Tombol utama: otomatis ke Live Demo kalau liveLink diisi, kalau kosong ke Repository */}
                            {(project.liveLink || project.repoLink) && (
                                <div className={`mt-6 flex ${single ? "justify-center" : ""}`}>
                                    <a
                                        href={project.liveLink || project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-6 py-3 text-sm font-medium text-violet-200 transition duration-300 hover:border-violet-400/60 hover:bg-violet-500/20 hover:text-white"
                                    >
                                        {project.buttonLabel ||
                                            (project.liveLink ? "Lihat Project" : "Lihat Repository")}
                                        <span className="transition duration-500 group-hover/btn:translate-x-1">→</span>
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                    {single && <GhostCard />}
                </div>

            </div>
        </section>
    );
}