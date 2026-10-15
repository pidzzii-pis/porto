import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

const CHARS = "01</>{}#$%&*+=~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const FRAGMENT_COUNT = 22;

function randomChars(len) {
    return Array.from(
        { length: len },
        () => CHARS[Math.floor(Math.random() * CHARS.length)]
    ).join("");
}

export default function Preloader({ loading, onFinish }) {
    const [phase, setPhase] = useState("scramble"); // "scramble" -> "reveal"
    const [texts, setTexts] = useState(() =>
        Array.from({ length: FRAGMENT_COUNT }, () => randomChars(3 + Math.floor(Math.random() * 3)))
    );

    const name = "Diana.";

    // Posisi awal tiap fragmen: tersebar dari berbagai arah (atas/bawah/kiri/kanan/diagonal)
    const fragments = useMemo(() => {
        return Array.from({ length: FRAGMENT_COUNT }, (_, i) => {
            const angle = (i / FRAGMENT_COUNT) * Math.PI * 2 + Math.random() * 0.4;
            const distance = 260 + Math.random() * 320;
            return {
                startX: Math.cos(angle) * distance,
                startY: Math.sin(angle) * distance,
                rotate: (Math.random() - 0.5) * 60,
                delay: Math.random() * 0.35,
                size: 12 + Math.random() * 10,
            };
        });
    }, []);

    useEffect(() => {
        if (!loading) return;

        document.body.style.overflow = "hidden";
        setPhase("scramble");

        const scrambleInterval = setInterval(() => {
            setTexts(
                Array.from({ length: FRAGMENT_COUNT }, () =>
                    randomChars(3 + Math.floor(Math.random() * 3))
                )
            );
        }, 90);

        const revealTimer = setTimeout(() => {
            clearInterval(scrambleInterval);
            setPhase("reveal");
        }, 1500);

        const finishTimer = setTimeout(() => {
            onFinish();
            document.body.style.overflow = "auto";
        }, 2800);

        return () => {
            clearInterval(scrambleInterval);
            clearTimeout(revealTimer);
            clearTimeout(finishTimer);
        };
    }, [loading, onFinish]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
                >
                    {/* Fragmen teks terbang dari berbagai arah */}
                    <AnimatePresence>
                        {phase === "scramble" &&
                            fragments.map((f, i) => (
                                <motion.span
                                    key={i}
                                    initial={{
                                        x: f.startX,
                                        y: f.startY,
                                        opacity: 0,
                                        rotate: f.rotate,
                                    }}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        opacity: 1,
                                        rotate: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.8,
                                        filter: "blur(4px)",
                                    }}
                                    transition={{
                                        duration: 1.1,
                                        delay: f.delay,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    style={{ fontSize: f.size }}
                                    className="pointer-events-none absolute select-none whitespace-nowrap font-mono font-bold text-zinc-300/60"
                                >
                                    {texts[i]}
                                </motion.span>
                            ))}
                    </AnimatePresence>

                    {/* Nama muncul rapi setelah fragmen menyatu */}
                    {phase === "reveal" && (
                        <div className="absolute flex flex-col items-center">
                            <div className="flex overflow-hidden text-3xl font-bold tracking-tight text-white md:text-4xl">
                                {name.split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        transition={{
                                            duration: 0.45,
                                            delay: i * 0.045,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </div>

                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="mt-6 h-px w-24 origin-left bg-violet-400/50"
                            />

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.55 }}
                                className="mt-4 text-xs uppercase tracking-[0.35em] text-zinc-600"
                            >
                                Portfolio
                            </motion.p>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
