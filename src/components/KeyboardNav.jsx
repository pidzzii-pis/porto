import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { smoothScrollTo } from "./scrollTo.js";

const sections = [
    { key: "1", id: "home", label: "Home" },
    { key: "2", id: "career", label: "Career" },
    { key: "3", id: "skills", label: "Skills" },
    { key: "4", id: "achievements", label: "Achievements" },
    { key: "5", id: "technologies", label: "Technologies" },
    { key: "6", id: "projects", label: "Projects" },
    { key: "7", id: "contact", label: "Contact" },
];

export default function KeyboardNav() {
    const [hint, setHint] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const tag = e.target.tagName;
            if (tag === "INPUT" || tag === "TEXTAREA") return;

            const match = sections.find((s) => s.key === e.key);
            if (!match) return;

            smoothScrollTo(match.id);
            setHint(match.label);

            setTimeout(() => setHint(null), 1200);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <AnimatePresence>
            {hint && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-full border border-white/10 bg-black/80 px-5 py-2.5 text-sm text-white backdrop-blur-xl"
                >
                    {hint}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
