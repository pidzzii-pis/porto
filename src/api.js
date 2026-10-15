// Alamat backend Laravel. Isi VITE_API_URL di file .env (contoh: http://localhost:8000)
export const API_URL = import.meta.env.VITE_API_URL || "";

export async function api(path, options = {}) {
    const res = await fetch(API_URL + path, {
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        ...options,
    });
    if (!res.ok) throw new Error(`Request failed: ${res.status}`);
    return res.json();
}
