# KompetenAI — Prototype AI Assessor

Prototype web untuk latihan Uji Kompetensi Digital Marketing & Content Marketing, berisi 39 soal prediksi dari panduan belajar yang diberikan.

## Isi
- `index.html`, `styles.css`, `app.js`: frontend HTML/CSS/JavaScript.
- `netlify/functions/assessor.mjs`: backend proxy Gemini agar API key tidak terekspos ke browser.
- Mode demo: jika fungsi/API belum diatur, aplikasi menampilkan feedback heuristik lokal (bukan AI sungguhan).

## Menjalankan lokal
Cara termudah:
1. Install Node.js.
2. Di folder proyek, jalankan `npm install`.
3. Jalankan `npm run dev` (Netlify CLI akan menyediakan local functions).

Atau buka `index.html` langsung untuk melihat desain dan mode demo; pemanggilan fungsi Gemini membutuhkan Netlify Dev.

## Deploy ke Netlify
1. Upload folder proyek ke repository GitHub, lalu import repository di Netlify.
2. Tambahkan environment variables di Netlify:
   - `GEMINI_API_KEY` = API key dari Google AI Studio.
   - `GEMINI_MODEL` = nama model Gemini yang tersedia untuk akunmu (default di kode: `gemini-2.5-flash`).
3. Deploy ulang setelah mengatur environment variables.

## Catatan keamanan dan batasan
- Jangan pernah menaruh API key di `app.js`, HTML, atau kode frontend.
- Ini masih prototype: jawaban dan skor disimpan sementara di memori browser dan akan hilang saat halaman dimuat ulang. Supabase diperlukan bila ingin login, menyimpan riwayat lintas perangkat, dan dashboard admin.
- Evaluasi AI adalah umpan balik latihan, bukan keputusan kompeten/belum kompeten resmi. Rubrik perlu ditinjau instruktur/asesor.
- Periksa model Gemini yang tersedia pada Google AI Studio; ubah `GEMINI_MODEL` jika perlu.
