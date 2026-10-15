import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

// Foto profil dengan efek tilt 3D mengikuti kursor + glow ungu.
export default function ProfilePhoto({ src, alt }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 15 });

    const onMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => { x.set(0); y.set(0); };

    return (
        <div style={{ perspective: 1000 }} onMouseMove={onMove} onMouseLeave={onLeave}>
            <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="group relative">
                <div className="absolute -inset-6 rounded-full bg-violet-600/15 blur-3xl transition duration-700 group-hover:bg-violet-500/25" />
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-violet-400/40 via-transparent to-white/15" />
                <img
                    src={src}
                    alt={alt}
                    className="relative h-64 w-64 rounded-3xl object-cover grayscale shadow-2xl transition duration-700 group-hover:grayscale-0 md:h-80 md:w-80 lg:h-96 lg:w-96"
                />
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-violet-600/10 mix-blend-color transition duration-700 group-hover:opacity-0" />
            </motion.div>
        </div>
    );
}
