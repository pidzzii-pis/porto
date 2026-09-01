// Utility scroll terpusat: pakai Lenis kalau sudah aktif,
// fallback ke scrollIntoView native kalau belum (misal saat SSR/awal render).
export function smoothScrollTo(id) {
    const target = document.getElementById(id);
    if (!target) return;

    if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -20, duration: 1.2 });
    } else {
        target.scrollIntoView({ behavior: "smooth" });
    }
}
