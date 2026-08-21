import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function MagneticButton({
    children,
    className = "",
    as = "button",
    strength = 0.35,
    ...props
}) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        x.set(relX * strength);
        y.set(relY * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const MotionTag = motion[as];

    return (
        <MotionTag
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={className}
            {...props}
        >
            {children}
        </MotionTag>
    );
}
