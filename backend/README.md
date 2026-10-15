# Backend Laravel untuk Portofolio

Folder ini berisi file tambahan untuk Laravel (bukan project Laravel utuh).

## Pemasangan
1. Buat project Laravel baru (butuh PHP 8.2+ dan Composer):
   `composer create-project laravel/laravel portfolio-api`
2. Masuk ke folder tersebut, lalu aktifkan API: `php artisan install:api`
3. Salin isi folder `backend/` ini ke `portfolio-api/` (timpa jika diminta).
4. Tambahkan ke `config/services.php`, di dalam array return:
   ```php
   'contact' => ['receiver' => env('CONTACT_RECEIVER')],
   'admin'   => ['token' => env('ADMIN_TOKEN')],
   ```
5. Isi `.env`: koneksi database (MySQL), `CONTACT_RECEIVER=emailkamu@gmail.com`,
   `ADMIN_TOKEN=isi-token-rahasia`, dan pengaturan `MAIL_*` (SMTP, mis. Gmail App Password).
6. Jalankan `php artisan migrate`, lalu `php artisan serve` (default: http://localhost:8000).
7. Di folder React, buat file `.env` berisi `VITE_API_URL=http://localhost:8000`, lalu `npm run dev`.

## Endpoint
| Method | URL | Keterangan |
|---|---|---|
| GET | `/api/projects` | Daftar project (tampil di section Projects) |
| POST | `/api/contact` | Form kontak: `name`, `email`, `message` |
| POST | `/api/projects` | Tambah project (perlu token admin) |
| PUT | `/api/projects/{id}` | Ubah project (perlu token admin) |
| DELETE | `/api/projects/{id}` | Hapus project (perlu token admin) |

## Menambah project
```bash
curl -X POST http://localhost:8000/api/projects \
  -H "Authorization: Bearer isi-token-rahasia" \
  -H "Content-Type: application/json" -H "Accept: application/json" \
  -d '{"title":"Nama Project","description":"Deskripsi singkat","image":"/gambar.png",
       "url":"nama.vercel.app","accent":"indigo","tech":["React","Laravel"],
       "repo_link":"https://github.com/user/repo","status":"Completed"}'
```
Pesan dari form kontak tersimpan di tabel `messages` dan dikirim ke `CONTACT_RECEIVER`.
Jika `VITE_API_URL` kosong atau server mati, form otomatis memakai email biasa (mailto).
