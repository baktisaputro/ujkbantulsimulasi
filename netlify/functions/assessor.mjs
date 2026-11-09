// Netlify Function: secure server-side Gemini API proxy.
// Set GEMINI_API_KEY in Netlify environment variables.
// Optional: set GEMINI_MODEL (default: gemini-2.5-flash).
export default async (req) => {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return Response.json({ error: "GEMINI_API_KEY belum diatur." }, { status: 503 });
  try {
    const { question, topic, criteria, answer, previous = [] } = await req.json();
    if (!question || !answer) return Response.json({ error: "Pertanyaan dan jawaban wajib diisi." }, { status: 400 });
    const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
    const prompt = `
Kamu adalah AI assessor untuk SIMULASI LATIHAN uji kompetensi Digital Marketing dan Content Marketing.
Ini bukan penilaian resmi sertifikasi. Nilai secara kritis, adil, suportif, dan berdasarkan panduan berikut.
Topik: ${topic}
Pertanyaan: ${question}
Kriteria jawaban dari panduan belajar: ${criteria}
Jawaban peserta: ${answer}
Riwayat percakapan: ${JSON.stringify(previous).slice(0,5000)}

Berikan skor 0-100 berdasarkan empat indikator: ketepatan konsep, kelengkapan, contoh penerapan, dan kejelasan. Jangan mengarang persyaratan yang tidak ada di kriteria. Jika jawaban belum cukup, berikan satu pertanyaan pendalaman. Jangan menganggap jawaban salah hanya karena menggunakan istilah berbeda jika maknanya benar.
Keluarkan JSON valid saja dengan struktur:
{"score":0,"summary":"ringkasan evaluasi singkat","strengths":["hal yang sudah benar"],"improvements":["hal yang perlu diperbaiki"],"feedback":"respons percakapan yang hangat dan spesifik","followUp":"satu pertanyaan pendalaman atau string kosong"}
`;
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json", temperature: 0.35 }
      })
    });
    const payload = await response.json();
    if (!response.ok) return Response.json({ error: payload.error?.message || "Gemini API request gagal." }, { status: response.status });
    const raw = payload.candidates?.[0]?.content?.parts?.map(p => p.text || "").join("") || "{}";
    const result = JSON.parse(raw.replace(/^```json\\s*|```$/g, "").trim());
    result.score = Math.max(0, Math.min(100, Number(result.score) || 0));
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: "Gagal memproses jawaban: " + error.message }, { status: 500 });
  }
};
