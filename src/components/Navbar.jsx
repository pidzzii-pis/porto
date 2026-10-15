import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import Button from "./Button.jsx";
import { smoothScrollTo } from "./scrollTo.js";

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 80) {
                setVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setVisible(false);
                setMenuOpen(false);
            } else {
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        setMenuOpen(false);
        smoothScrollTo(id);
    };

    const navLinks = [
        { id: "career", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "achievements", label: "Achievements" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50
                border-b border-white/5
                bg-black/70
                backdrop-blur-xl
                transition-transform duration-300 ease-out
                ${visible ? "translate-y-0" : "-translate-y-full"}
            `}
        >
            <div
                className="
                    mx-auto flex h-20 max-w-7xl
                    items-center justify-between
                    px-6 md:px-12 lg:px-20
                "
            >
                <button
                    onClick={() => scrollTo("home")}
                    className="text-xl font-bold text-white transition-transform duration-300 hover:scale-105 hover:text-violet-300"
                >
                    Diana.
                </button>

                <div className="hidden items-center gap-7 md:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="group relative text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
                        >
                            {link.label}
                            <span className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-violet-400 transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Button
                        variant="primary"
                        icon
                        strength={0.4}
                        onClick={() => scrollTo("contact")}
                        className="px-5 py-2.5"
                    >
                        Get In Touch
                    </Button>
                </div>

                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    className="relative flex h-9 w-9 items-center justify-center md:hidden"
                >
                    <motion.span
                        animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
                        transition={{ duration: 0.25 }}
                        className="absolute h-[1.5px] w-5 bg-white"
                    />
                    <motion.span
                        animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute h-[1.5px] w-5 bg-white"
                    />
                    <motion.span
                        animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
                        transition={{ duration: 0.25 }}
                        className="absolute h-[1.5px] w-5 bg-white"
                    />
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden border-t border-white/5 bg-black/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col gap-1 px-6 py-4">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25, delay: index * 0.04 }}
                                    onClick={() => scrollTo(link.id)}
                                    className="rounded-lg px-3 py-3 text-left text-sm text-zinc-400 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                                >
                                    {link.label}
                                </motion.button>
                            ))}

                            <div className="mt-2 px-3">
                                <Button
                                    variant="primary"
                                    icon
                                    onClick={() => scrollTo("contact")}
                                    className="w-full justify-center"
                                >
                                    Get In Touch
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
