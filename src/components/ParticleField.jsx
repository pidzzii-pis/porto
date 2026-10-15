import { useEffect, useRef } from "react";

// Kanvas partikel ungu yang saling terhubung dan bereaksi pada kursor.
export default function ParticleField() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const mouse = { x: -9999, y: -9999 };
        let w = 0, h = 0, dots = [], raf;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = canvas.clientWidth;
            h = canvas.clientHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const count = Math.min(90, Math.floor((w * h) / 14000));
            dots = Array.from({ length: count }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: 1 + Math.random() * 1.6,
            }));
        };

        const onMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            for (let i = 0; i < dots.length; i++) {
                const d = dots[i];
                const dx = d.x - mouse.x, dy = d.y - mouse.y;
                const dist = Math.hypot(dx, dy);
                if (dist < 140 && dist > 0) {
                    d.x += (dx / dist) * 0.8;
                    d.y += (dy / dist) * 0.8;
                }
                if (!reduced) { d.x += d.vx; d.y += d.vy; }
                if (d.x < 0 || d.x > w) d.vx *= -1;
                if (d.y < 0 || d.y > h) d.vy *= -1;

                ctx.beginPath();
                ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(228,228,231,0.6)";
                ctx.fill();

                for (let j = i + 1; j < dots.length; j++) {
                    const o = dots[j];
                    const l = Math.hypot(d.x - o.x, d.y - o.y);
                    if (l < 120) {
                        ctx.strokeStyle = `rgba(168,85,247,${0.28 * (1 - l / 120)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(d.x, d.y);
                        ctx.lineTo(o.x, o.y);
                        ctx.stroke();
                    }
                }

                // garis terang menuju kursor
                if (dist < 180) {
                    ctx.strokeStyle = `rgba(167,139,250,${0.5 * (1 - dist / 180)})`;
                    ctx.beginPath();
                    ctx.moveTo(d.x, d.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
            raf = requestAnimationFrame(draw);
        };

        resize();
        draw();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMove);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMove);
        };
    }, []);

    return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full" />;
}
