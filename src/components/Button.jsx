import MagneticButton from "./MagneticButton.jsx";

const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

const variants = {
    primary: "bg-violet-600 text-white shadow-[0_0_24px_-10px_rgba(139,92,246,0.6)] hover:bg-violet-500",
    secondary: "border border-white/15 bg-white/[0.03] text-white hover:border-violet-300/40 hover:bg-white/[0.07]",
};

const sweepColor = {
    primary: "bg-violet-600 text-white shadow-[0_0_24px_-10px_rgba(139,92,246,0.6)] hover:bg-violet-500",
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
