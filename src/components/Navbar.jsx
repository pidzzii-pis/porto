import React, { useState, useEffect, useRef } from "react";
import Button from "./Button.jsx";

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 80) {
                setVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
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
                    className="text-xl font-bold text-white transition-transform duration-300 hover:scale-105 hover:text-zinc-300"
                >
                    Hafidzy.
                </button>

                <div className="hidden items-center gap-7 md:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="group relative text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
                        >
                            {link.label}
                            <span className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full" />
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
            </div>
        </nav>
    );
}
