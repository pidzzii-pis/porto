import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

export default function Counter({ value, suffix = "", label, duration = 1.5 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, value, {
            duration,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => setDisplay(Math.floor(v)),
        });

        return () => controls.stop();
    }, [isInView, value, duration]);

    return (
        <div ref={ref}>
            <p className="text-4xl font-semibold text-white md:text-5xl">
                {display}
                {suffix}
            </p>
            <p className="mt-2 text-sm text-zinc-500">{label}</p>
        </div>
    );
}
