import { useEffect, useState } from "react";
import { smoothScrollTo } from "./scrollTo.js";

const sections = [
    { id: "home", label: "Home" },
    { id: "career", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "interests", label: "Interests" },
    { id: "achievements", label: "Achievements" },
    { id: "technologies", label: "Technologies" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

// Indikator section di sisi kanan: menandai section aktif & bisa diklik.
export default function SectionDots() {
    const [active, setActive] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-50% 0px -50% 0px" }
        );
        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex">
            {sections.map((s) => (
                <button
                    key={s.id}
                    onClick={() => smoothScrollTo(s.id)}
                    aria-label={s.label}
                    className="group flex items-center gap-3"
                >
                    <span className="pointer-events-none translate-x-2 text-xs text-violet-200 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        {s.label}
                    </span>
                    <span
                        className={`block rounded-full transition-all duration-300 ${
                            active === s.id
                                ? "h-3 w-3 bg-violet-400 shadow-[0_0_14px_rgba(168,85,247,0.9)]"
                                : "h-2 w-2 bg-zinc-600 group-hover:bg-violet-300"
                        }`}
                    />
                </button>
            ))}
        </div>
    );
}
