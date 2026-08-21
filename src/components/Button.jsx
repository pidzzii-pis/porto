import MagneticButton from "./MagneticButton.jsx";

const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300";

const variants = {
    primary: "bg-white text-black",
    secondary: "border border-white/15 bg-white/[0.02] text-white hover:border-white/30 hover:bg-white/[0.06]",
};

const sweepColor = {
    primary: "via-black/10",
    secondary: "via-white/20",
};

export default function Button({
    children,
    variant = "primary",
    icon = false,
    className = "",
    strength = 0.35,
    ...props
}) {
    return (
        <MagneticButton
            strength={strength}
            whileTap={{ scale: 0.96 }}
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        >
            {/* Shine sweep saat hover */}
            <span
                className={`pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent ${sweepColor[variant]} to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full`}
            />

            <span className="relative z-10 flex items-center gap-2">
                {children}
                {icon && (
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    >
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </span>
        </MagneticButton>
    );
}
