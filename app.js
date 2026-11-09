const QUESTIONS = [
  {
    "topic": "Dasar komputer",
    "question": "Jelaskan cara kamu mengatur folder dan memberi nama file untuk hasil kerja uji ini. Sertakan alasan mengapa cara itu membantu saat hasil kerja diperiksa.",
    "criteria": "Struktur folder jelas; penamaan file konsisten; memudahkan pencarian dan pemeriksaan."
  },
  {
    "topic": "Dasar komputer",
    "question": "Jelaskan format file yang kamu gunakan untuk gambar, video, dan dokumen bukti, serta kegunaan masing-masing.",
    "criteria": "JPG untuk gambar/foto; MP4 untuk video; PDF untuk dokumen atau kumpulan bukti."
  },
  {
    "topic": "Dasar komputer",
    "question": "Jelaskan langkah mengambil screenshot di laptop dan di HP, lalu menggabungkannya ke satu PDF bersama link postingan.",
    "criteria": "Shortcut laptop; cara screenshot HP sesuai perangkat; menyalin link; menggabungkan dengan fitur/perangkat atau aplikasi aman."
  },
  {
    "topic": "Dasar komputer",
    "question": "Jelaskan mengapa video pendek sebaiknya disimpan dalam format MP4 dan bukan PDF.",
    "criteria": "MP4 adalah format video yang didukung media sosial; PDF adalah format dokumen dan tidak sesuai untuk video."
  },
  {
    "topic": "Mengenal produk dan pasar",
    "question": "Pilih satu produk yang kamu jual. Jelaskan pembeli sasarannya dari segi usia, jenis kelamin, dan lokasi.",
    "criteria": "Tiga aspek pembeli dijelaskan jelas dan sesuai karakter produk."
  },
  {
    "topic": "Mengenal produk dan pasar",
    "question": "Jelaskan cara kamu menetapkan harga jual produkmu.",
    "criteria": "Biaya per unit (bahan, kemasan, tenaga); keuntungan yang diinginkan; perbandingan dengan produk sejenis."
  },
  {
    "topic": "Mengenal produk dan pasar",
    "question": "Jelaskan perbedaan segmentasi, targeting, dan positioning dengan contoh dari produk kamu sendiri.",
    "criteria": "Segmentasi membagi pasar; targeting memilih kelompok prioritas; positioning menjelaskan cara produk dikenali."
  },
  {
    "topic": "Mengenal produk dan pasar",
    "question": "Jelaskan bagaimana bauran pemasaran berlaku untuk produkmu, dan sebutkan elemen-elemennya.",
    "criteria": "Produk, harga, tempat/distribusi, promosi; contoh sesuai produk peserta."
  },
  {
    "topic": "Riset pasar online",
    "question": "Jelaskan langkah yang kamu lakukan untuk mencari kata kunci yang berkaitan dengan produkmu.",
    "criteria": "Sumber kata kunci seperti saran Google, People also ask, AnswerThePublic, Google Trends, TikTok, YouTube; memilih kata kunci relevan."
  },
  {
    "topic": "Riset pasar online",
    "question": "Jelaskan cara membaca hasil Google Trends untuk produkmu, termasuk tren dan daerah yang paling berminat.",
    "criteria": "Pilih Indonesia; tentukan tren naik/stabil/turun; lihat related queries; sebutkan daerah peminat."
  },
  {
    "topic": "Riset pasar online",
    "question": "Jelaskan tiga jenis bisnis online: jualan sendiri, reseller, dan marketplace. Pilih satu yang paling cocok untuk produkmu dan jelaskan alasannya.",
    "criteria": "Definisi tiap jenis; alasan pilihan dikaitkan dengan produk dan pembeli sasaran."
  },
  {
    "topic": "Riset pasar online",
    "question": "Bagaimana temuan dari riset kata kunci dan Google Trends memengaruhi keputusanmu dalam promosi?",
    "criteria": "Kata kunci dipakai untuk judul, caption, hashtag; tren menentukan waktu dan daerah promosi."
  },
  {
    "topic": "Toko online",
    "question": "Jelaskan langkah membuka toko di Shopee dan mengunggah satu produk lengkap. Apa yang kamu lakukan agar produk mudah ditemukan?",
    "criteria": "Membuka toko; data produk lengkap; foto jelas; kata kunci tepat."
  },
  {
    "topic": "Toko online",
    "question": "Jelaskan langkah membuat Google Profil Bisnis untuk usahamu, termasuk verifikasi.",
    "criteria": "Nama usaha, kategori, lokasi/area layanan, jam operasional, nomor telepon, foto, dan verifikasi."
  },
  {
    "topic": "Toko online",
    "question": "Jelaskan cara membuat katalog di WhatsApp Business dan menyiapkan pesan otomatis.",
    "criteria": "Katalog dengan data produk lengkap; greeting message; away message; quick reply."
  },
  {
    "topic": "Toko online",
    "question": "Mengapa informasi produk di toko online harus lengkap dan konsisten di setiap platform?",
    "criteria": "Pembeli membandingkan informasi; konsistensi membangun kepercayaan; data berbeda membingungkan."
  },
  {
    "topic": "Membuat konten promosi",
    "question": "Jelaskan bagaimana kamu menyusun satu promosi dengan kerangka AIDA, dengan contoh untuk setiap tahap.",
    "criteria": "Attention, Interest, Desire, Action; contoh dari produk peserta."
  },
  {
    "topic": "Membuat konten promosi",
    "question": "Jelaskan cara memastikan tulisan promosimu orisinal.",
    "criteria": "Pemeriksaan dengan pemeriksa plagiarisme; tulis ulang bila kemiripan tinggi; simpan hasil sebagai bukti."
  },
  {
    "topic": "Membuat konten promosi",
    "question": "Jelaskan langkah membuat satu gambar promosi di Canva, mulai dari ukuran sampai penempatan informasi.",
    "criteria": "Ukuran sesuai kanal; jenis huruf dan warna konsisten; informasi utama mudah dibaca."
  },
  {
    "topic": "Membuat konten promosi",
    "question": "Jelaskan langkah membuat video pendek di CapCut atau Canva, dari naskah sampai ekspor.",
    "criteria": "Hook di tiga detik pertama; potongan padat; teks di layar; ekspor MP4 dengan rasio dan resolusi sesuai."
  },
  {
    "topic": "Membuat konten promosi",
    "question": "Apa yang dimaksud dengan kata kunci dan hashtag, dan di bagian mana keduanya digunakan dalam konten?",
    "criteria": "Kata kunci dan hashtag termasuk konten tertulis; digunakan untuk penelusuran dan jangkauan."
  },
  {
    "topic": "Promosi di media sosial",
    "question": "Jelaskan langkah menyiapkan akun bisnis Instagram dan TikTok untuk usahamu.",
    "criteria": "Pemilihan akun bisnis; pengisian profil (nama, deskripsi, kategori, tautan); pemeriksaan profil."
  },
  {
    "topic": "Promosi di media sosial",
    "question": "Jelaskan bagaimana kamu memilih hashtag dan menulis caption untuk satu postingan, dan mengapa itu penting untuk menjangkau pembeli sasaran.",
    "criteria": "Hashtag dari kata kunci riset; caption berisi manfaat dan CTA; relevan dengan pembeli sasaran."
  },
  {
    "topic": "Promosi di media sosial",
    "question": "Jelaskan cara kamu menyimpan tautan postingan sebagai bukti hasil kerja.",
    "criteria": "Menyalin tautan; menempelkannya di dokumen bukti; menggabungkan dengan screenshot dalam satu PDF."
  },
  {
    "topic": "Promosi di media sosial",
    "question": "Jelaskan bagaimana format dan algoritma platform memengaruhi cara kamu membuat konten.",
    "criteria": "Format sesuai platform; durasi dan rasio; penyesuaian konten dengan cara kerja algoritma."
  },
  {
    "topic": "Melayani pelanggan",
    "question": "Seorang pembeli mengirim keluhan bahwa pesanannya rusak. Jelaskan langkah yang kamu ambil, dari balasan pertama sampai penanganan selesai.",
    "criteria": "Mengakui masalah; meminta data/foto; menjaga privasi; meneruskan ke pihak berwenang; memberi kabar perkembangan."
  },
  {
    "topic": "Melayani pelanggan",
    "question": "Jelaskan mengapa data pribadi pembeli tidak boleh dibagikan di kolom komentar atau kanal publik.",
    "criteria": "Melindungi privasi; mencegah penyalahgunaan data; menjaga kepercayaan pembeli."
  },
  {
    "topic": "Melayani pelanggan",
    "question": "Jelaskan prinsip yang kamu gunakan saat membalas pertanyaan pembeli, dan bagaimana kamu menangani komentar negatif.",
    "criteria": "Cepat, sopan, sesuai merek; menjawab kebutuhan; menyampaikan kapan informasi diberikan; menanggapi komentar negatif sesuai prosedur."
  },
  {
    "topic": "Teori Content Marketing",
    "question": "Jelaskan perbedaan konten internal dan konten eksternal, serta platform yang cocok untuk masing-masing.",
    "criteria": "Konten internal untuk pihak dalam organisasi; konten eksternal untuk pembeli/publik; contoh platform."
  },
  {
    "topic": "Teori Content Marketing",
    "question": "Jelaskan manfaat konten kalender dan cara membuatnya.",
    "criteria": "Mengatur jadwal unggah; menjaga konsistensi; koordinasi; membuat jadwal berkala."
  },
  {
    "topic": "Teori Content Marketing",
    "question": "Jelaskan market funnel dan bagaimana penerapannya pada konten promosi produk kamu.",
    "criteria": "Tahap kesadaran, pertimbangan, keputusan; contoh konten tiap tahap."
  },
  {
    "topic": "Teori Content Marketing",
    "question": "Jelaskan manfaat konten pilar dan berikan contoh konten pilar untuk usahamu.",
    "criteria": "Tema utama berulang; contoh sesuai produk dan alasan."
  },
  {
    "topic": "Teori Content Marketing",
    "question": "Mengapa konten perlu disetujui sebelum diunggah, dan bagaimana prosesnya?",
    "criteria": "Mencegah kesalahan informasi; menjaga citra merek; proses persetujuan sesuai prosedur."
  },
  {
    "topic": "Teori Content Marketing",
    "question": "Jelaskan cara mengevaluasi performa sebuah konten dan langkah perbaikan yang kamu ambil.",
    "criteria": "Membaca metrik jangkauan dan engagement; membandingkan dengan tujuan; menentukan perbaikan."
  },
  {
    "topic": "Teori Content Marketing",
    "question": "Jelaskan langkah menyimpan dan mengamankan cadangan konten.",
    "criteria": "Pengarsipan berkala; cadangan di tempat terpisah; pengamanan akses."
  },
  {
    "topic": "Teori Content Marketing",
    "question": "Jelaskan konsep quality, cost, dan delivery, dan bagaimana ketiganya berkaitan dengan proses pemasaran.",
    "criteria": "Quality berkaitan dengan mutu; cost dengan biaya; delivery dengan ketepatan waktu penyampaian."
  },
  {
    "topic": "Teori Content Marketing",
    "question": "Jelaskan perbedaan diferensiasi dan positioning, serta berikan contoh untuk produkmu.",
    "criteria": "Diferensiasi adalah pembeda nyata dari pesaing; positioning adalah cara produk dikenali di benak pembeli."
  },
  {
    "topic": "Teori Content Marketing",
    "question": "Jelaskan apa yang dimaksud dengan brand equity dan sebutkan elemen pembentuknya.",
    "criteria": "Nilai merek di mata pembeli; elemen seperti kesadaran merek, kesan kualitas, dan loyalitas."
  },
  {
    "topic": "Teori Content Marketing",
    "question": "Jelaskan langkah membuat satu promosi merek, mulai dari rencana sampai ulasan penjualan.",
    "criteria": "Rencana komunikasi merek; pelaksanaan sesuai peran; pemantauan; ulasan hasil penjualan dengan laporan."
  }
];
const state = { current:0, filter:"Semua", answers:{}, scores:{}, busy:false, chat:[] };
const $ = (id)=>document.getElementById(id);
const topics = [...new Set(QUESTIONS.map(q=>q.topic))];

function init(){
  $("totalCount").textContent=QUESTIONS.length;
  renderFilters(); renderQuestionList(); renderQuestion(); renderGuide(); updateStats();
  document.querySelectorAll(".nav-item").forEach(btn=>btn.addEventListener("click",()=>switchView(btn.dataset.view)));
  $("sendBtn").addEventListener("click",sendAnswer);
  $("answerInput").addEventListener("input",()=>{$("charCount").textContent=$("answerInput").value.length+" karakter";});
  $("answerInput").addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendAnswer();}});
  $("resetBtn").addEventListener("click",resetCurrent);
  $("menuBtn").addEventListener("click",()=>$("sidebar").classList.toggle("open"));
}
function renderFilters(){
  const wrap=$("topicFilter");
  wrap.innerHTML="";
  ["Semua",...topics].forEach(topic=>{
    const b=document.createElement("button"); b.className="filter-chip"+(state.filter===topic?" selected":"");b.textContent=topic;b.dataset.topic=topic;
    b.onclick=()=>{state.filter=topic;renderFilters();renderQuestionList();};wrap.appendChild(b);
  });
}
function renderQuestionList(){
  const list=$("questionList");list.innerHTML="";
  QUESTIONS.forEach((q,i)=>{
    if(state.filter!=="Semua"&&q.topic!==state.filter)return;
    const row=document.createElement("div");row.className="q-item"+(i===state.current?" active":"");
    row.innerHTML=`<div class="q-number">${String(i+1).padStart(2,"0")}</div><div class="q-info"><b>${escapeHTML(q.question)}</b><small>${escapeHTML(q.topic)}</small></div>${state.scores[i]!==undefined?'<span class="q-status">✓</span>':""}`;
    row.onclick=()=>selectQuestion(i);list.appendChild(row);
  });
}
function renderQuestion(){
  const q=QUESTIONS[state.current];
  $("questionCounter").textContent=String(state.current+1).padStart(2,"0")+" / "+QUESTIONS.length;
  $("topicLabel").textContent=q.topic.toUpperCase();$("questionText").textContent=q.question;
  $("answerInput").value=state.answers[state.current]||"";$("charCount").textContent=$("answerInput").value.length+" karakter";
  $("chatStream").innerHTML=`<div class="message ai-message"><div class="mini-avatar">✦</div><div class="bubble-wrap"><span class="sender">AI Assessor</span><div class="bubble">Mari kita bahas pertanyaan ini. Jawab dengan bahasamu sendiri dan sertakan contoh dari produk atau usaha yang kamu pilih. Saya akan membantu mengevaluasi pemahamanmu.</div><time>Siap membantu</time></div></div>`;
  if(state.chat[state.current]) state.chat[state.current].forEach(m=>appendMessage(m.role,m.text,m.feedback));
  renderQuestionList();updateStats();
}
function selectQuestion(i){state.current=i;renderQuestion();}
function appendMessage(role,text,feedback){
  const stream=$("chatStream"),el=document.createElement("div");el.className="message "+(role==="user"?"user-message":"ai-message");
  const safe=escapeHTML(text).replace(/\n/g,"<br>");
  el.innerHTML=role==="user"?`<div class="bubble-wrap"><span class="sender">Kamu</span><div class="bubble">${safe}</div><time>Jawaban peserta</time></div>`:`<div class="mini-avatar">✦</div><div class="bubble-wrap"><span class="sender">AI Assessor</span><div class="bubble">${safe}</div>${feedback?renderFeedback(feedback):""}<time>Evaluasi latihan</time></div>`;
  stream.appendChild(el);stream.scrollTop=stream.scrollHeight;
}
function renderFeedback(f){
  const strengths=(f.strengths||[]).map(x=>`<li>${escapeHTML(x)}</li>`).join("");
  const improvements=(f.improvements||[]).map(x=>`<li>${escapeHTML(x)}</li>`).join("");
  return `<div class="feedback-card"><div class="feedback-head"><b>Ringkasan evaluasi</b><span class="score">${Number(f.score)||0}/100</span></div><p>${escapeHTML(f.summary||"Evaluasi jawaban selesai.")}</p>${strengths?`<p><b>Yang sudah baik</b></p><ul>${strengths}</ul>`:""}${improvements?`<p><b>Yang perlu ditingkatkan</b></p><ul>${improvements}</ul>`:""}</div>`;
}
async function sendAnswer(){
  const answer=$("answerInput").value.trim();if(!answer||state.busy)return;
  state.answers[state.current]=answer;state.busy=true;$("sendBtn").disabled=true;$("sendBtn").innerHTML="Menilai... <span>◌</span>";
  appendMessage("user",answer);
  const q=QUESTIONS[state.current];
  try{
    const res=await fetch("/.netlify/functions/assessor",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:q.question,topic:q.topic,criteria:q.criteria,answer,previous:state.chat[state.current]||[]})});
    if(!res.ok) throw new Error("AI endpoint belum tersedia");
    const data=await res.json();
    const feedback={score:data.score??0,summary:data.summary||"Jawaban sudah dianalisis.",strengths:data.strengths||[],improvements:data.improvements||[]};
    state.scores[state.current]=feedback.score;
    const reply=(data.feedback||feedback.summary)+(data.followUp?"\n\nPertanyaan pendalaman: "+data.followUp:"");
    appendMessage("ai",reply,feedback);
    state.chat[state.current]=[...(state.chat[state.current]||[]),{role:"user",text:answer},{role:"assistant",text:reply,feedback}];
    updateStats();renderQuestionList();renderHistory();
  }catch(err){
    const demo=localEvaluation(answer,q);
    state.scores[state.current]=demo.score;
    const reply="Mode demo aktif: koneksi AI belum tersedia. "+demo.summary+"\n\n"+demo.followUp;
    appendMessage("ai",reply,demo);
    state.chat[state.current]=[...(state.chat[state.current]||[]),{role:"user",text:answer},{role:"assistant",text:reply,feedback:demo}];
    updateStats();renderQuestionList();renderHistory();
    showToast("Feedback demo ditampilkan. Atur Gemini API untuk evaluasi AI sungguhan.");
  }finally{state.busy=false;$("sendBtn").disabled=false;$("sendBtn").innerHTML='Kirim jawaban <span>➤</span>';}
}
function localEvaluation(answer,q){
  const words=answer.split(/\s+/).filter(Boolean).length;
  const mentions= q.criteria.toLowerCase().split(/[;,]/).filter(s=>s.trim().length>3).filter(s=>answer.toLowerCase().includes(s.trim().split(" ").slice(0,2).join(" "))).length;
  const score=Math.min(90,Math.max(25,Math.round(25+Math.min(words,100)*.35+mentions*8)));
  return {score,summary:words<20?"Jawaban masih terlalu singkat untuk menunjukkan pemahaman yang utuh.": "Jawaban sudah memberikan gambaran awal. Periksa kembali apakah semua aspek panduan sudah dijelaskan.",strengths:words>=20?["Peserta sudah memberikan uraian dengan kata-kata sendiri."]:["Peserta sudah mulai menjawab pertanyaan."],improvements:["Lengkapi poin-poin utama: "+q.criteria,"Tambahkan contoh konkret dari produk atau usaha yang dipilih."],followUp:"Bisakah kamu memberikan contoh penerapan jawaban tersebut pada usaha yang kamu pilih?"};
}
function resetCurrent(){delete state.chat[state.current];delete state.answers[state.current];delete state.scores[state.current];renderQuestion();renderHistory();showToast("Jawaban untuk pertanyaan ini direset.");}
function updateStats(){
  const done=Object.keys(state.scores).length,vals=Object.values(state.scores),avg=vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):null,pct=Math.round(done/QUESTIONS.length*100);
  $("answeredCount").textContent=done;$("averageScore").textContent=avg===null?"—":avg;$("progressLabel").textContent=pct+"%";$("progressBar").style.width=pct+"%";
  $("progressAnswered").textContent=done+" / "+QUESTIONS.length;$("progressAverage").textContent=avg===null?"—":avg+"/100";
}
function renderHistory(){
  const wrap=$("historyTable"),items=Object.keys(state.scores).map(Number).sort((a,b)=>a-b);
  if(!items.length){wrap.innerHTML='<div class="empty-state">Belum ada jawaban. Mulai latihan untuk melihat hasilnya di sini.</div>';return;}
  wrap.innerHTML=items.map(i=>`<div class="history-row"><div class="q-number">${i+1}</div><div><b>${escapeHTML(QUESTIONS[i].question)}</b><small>${escapeHTML(QUESTIONS[i].topic)}</small></div><div class="history-score">${state.scores[i]}/100</div></div>`).join("");
}
function renderGuide(){
  const counts={};QUESTIONS.forEach(q=>counts[q.topic]=(counts[q.topic]||0)+1);
  $("guideGrid").innerHTML=Object.entries(counts).map(([topic,count],i)=>`<article class="guide-card"><div class="guide-num">${String(i+1).padStart(2,"0")}</div><h3>${escapeHTML(topic)}</h3><p>Latihan konsep, langkah kerja, dan penerapan sesuai panduan bank soal.</p><small>${count} pertanyaan latihan →</small></article>`).join("");
}
function switchView(view){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));$(view+"View").classList.add("active");
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  $("crumb").textContent=({practice:"Simulasi ujian",progress:"Progres belajar",guide:"Panduan kompetensi"})[view];
  if(view==="progress")renderHistory();$("sidebar").classList.remove("open");
}
function showToast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),3500);}
function escapeHTML(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
init();
