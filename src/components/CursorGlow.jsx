import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorGlow() {
    const x = useMotionValue(-300);
    const y = useMotionValue(-300);

    const springX = useSpring(x, { stiffness: 50, damping: 20, mass: 0.5 });
    const springY = useSpring(y, { stiffness: 50, damping: 20, mass: 0.5 });

    useEffect(() => {
        const handleMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [x, y]);

    return (
        <motion.div
            style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%",
                background:
                    "radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.04) 35%, transparent 70%)",
            }}
            className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[600px] w-[600px] rounded-full md:block"
        />
    );
}
