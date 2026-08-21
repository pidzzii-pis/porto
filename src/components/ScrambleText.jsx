import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

export default function ScrambleText({ text, className = "", delay = 300, speed = 30 }) {
    const [display, setDisplay] = useState(text.replace(/[^\s]/g, " "));
    const iterationRef = useRef(0);

    useEffect(() => {
        let interval;

        const startTimeout = setTimeout(() => {
            interval = setInterval(() => {
                setDisplay(
                    text
                        .split("")
                        .map((char, i) => {
                            if (char === " ") return " ";
                            if (i < iterationRef.current) return text[i];
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                if (iterationRef.current >= text.length) {
                    clearInterval(interval);
                }

                iterationRef.current += 1 / 3;
            }, speed);
        }, delay);

        return () => {
            clearTimeout(startTimeout);
            clearInterval(interval);
        };
    }, [text, delay, speed]);

    return <span className={className}>{display}</span>;
}
