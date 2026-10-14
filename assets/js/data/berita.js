// Data 11 berita SISTEKINEWS. DATA DUMMY — ganti dengan berita asli
// sebelum situs ini dipublikasikan.
//
// featured: true → 5 berita ini yang muncul di carousel beranda.
// prokerId (opsional): kalau berita terkait sebuah program kerja, kartu
// "Sekilas" di halaman detail akan menaut ke program-kerja.html?id=...

export const berita = [
  {
    id: 'workshop-laravel-react',
    featured: true,
    category: 'Kegiatan',
    title: 'Workshop Laravel & React untuk Mahasiswa Baru',
    date: '9 Agustus 2026',
    author: 'Departemen Media & Kreatif',
    location: 'Laboratorium Komputer Fakultas Teknik',
    excerpt: 'Workshop dua hari ini membekali mahasiswa baru dengan dasar membangun aplikasi web modern, dari routing sampai integrasi API.',
    lead: 'Departemen Riset & Teknologi HIMASISTA menggelar workshop dua hari untuk 60 mahasiswa baru Sistem Informasi, membahas dasar pembuatan aplikasi web dengan Laravel dan React.',
    body: [
      'Hari pertama berfokus pada backend: instalasi Laravel, konsep MVC, routing, dan membuat REST API sederhana untuk data mahasiswa. Peserta langsung mempraktikkan setiap materi di laptop masing-masing.',
      'Hari kedua beralih ke frontend. Peserta belajar komponen React, state, dan cara mengambil data dari API yang dibuat sehari sebelumnya, sehingga terbentuk satu aplikasi utuh.',
    ],
    quote: 'Kami ingin mahasiswa baru merasakan membangun aplikasi utuh sejak semester awal, bukan hanya belajar teori.',
    quoteName: 'Rizky Pratama',
    quoteRole: 'Kepala Departemen Riset & Teknologi',
    closing: 'Di akhir sesi, lima peserta terbaik mendapat kesempatan mengikuti kelas lanjutan dan menjadi calon panitia SI Hackathon 2026. HIMASISTA berencana menjadikan workshop ini agenda rutin setiap awal tahun ajaran.',
    event: 'Workshop Laravel & React',
    organizer: 'Riset & Teknologi',
    eventDate: '8–9 Agustus 2026',
    prokerId: 'workshop-laravel-react',
  },
  {
    id: 'studi-banding-himpunan-si',
    featured: true,
    category: 'Kolaborasi',
    title: 'Studi Banding Bersama Himpunan SI Kampus Mitra',
    date: '12 September 2026',
    author: 'Departemen Hubungan Eksternal',
    location: 'Kampus mitra',
    excerpt: 'Pengurus HIMASISTA bertukar praktik baik pengelolaan himpunan, dari penyusunan program kerja sampai sistem administrasi digital organisasi.',
    lead: 'Delegasi pengurus inti HIMASISTA melakukan kunjungan studi banding ke himpunan mahasiswa Sistem Informasi kampus mitra untuk bertukar pengalaman pengelolaan organisasi.',
    body: [
      'Diskusi membahas penyusunan program kerja tahunan, sistem administrasi digital, hingga cara menjaga keaktifan anggota sepanjang periode kepengurusan.',
      'Kedua himpunan sepakat membuka peluang kolaborasi program kerja bersama pada periode mendatang, termasuk kemungkinan pertukaran pembicara pada kegiatan masing-masing.',
    ],
    closing: 'Hasil diskusi akan dirangkum menjadi rekomendasi perbaikan internal yang dibahas pada rapat kerja kabinet berikutnya.',
    event: 'Studi Banding Himpunan',
    organizer: 'Hubungan Eksternal',
    eventDate: '14 September 2026',
    prokerId: 'studi-banding-himpunan',
  },
  {
    id: 'pelantikan-kabinet-eclipse',
    featured: true,
    category: 'Kegiatan',
    title: 'Pelantikan Pengurus Kabinet ECLIPSE 2026/2027',
    date: '2 September 2026',
    author: 'Departemen Media & Kreatif',
    location: 'Aula Fakultas Teknik',
    excerpt: 'Sebanyak 48 pengurus resmi dilantik dan siap menjalankan program kerja selama satu periode ke depan bersama seluruh mahasiswa Sistem Informasi.',
    lead: 'Sebanyak 48 pengurus HIMASISTA periode 2026/2027 resmi dilantik dalam acara yang turut dihadiri jajaran dosen Program Studi Sistem Informasi.',
    body: [
      'Acara diisi dengan pembacaan sumpah jabatan, sambutan Ketua Umum terpilih, dan pemaparan singkat arah gerak Kabinet ECLIPSE selama satu periode ke depan.',
      'Ketua Umum menekankan tiga fokus utama kabinet: penguatan kompetensi anggota, kolaborasi dengan pihak luar, dan pengelolaan organisasi yang lebih rapi lewat sistem digital.',
    ],
    closing: 'Pelantikan ini menjadi awal resmi bagi seluruh departemen untuk mulai menjalankan program kerja yang telah disusun.',
    event: 'Pelantikan Kabinet ECLIPSE',
    organizer: 'Badan Pengurus Harian',
    eventDate: '2 September 2026',
  },
  {
    id: 'juara-2-lomba-uiux-nasional',
    featured: true,
    category: 'Prestasi',
    title: 'Tim HIMASISTA Juara 2 Lomba UI/UX Tingkat Nasional',
    date: '25 Agustus 2026',
    author: 'Departemen Media & Kreatif',
    location: 'Daring (final nasional)',
    excerpt: 'Tiga mahasiswa angkatan 2024 merancang aplikasi antrean puskesmas dan berhasil meraih juara kedua dari 120 tim peserta.',
    lead: 'Tim mahasiswa Sistem Informasi angkatan 2024 berhasil meraih juara kedua pada kompetisi UI/UX tingkat nasional yang diikuti 120 tim dari seluruh Indonesia.',
    body: [
      'Karya yang diusung berupa rancangan aplikasi antrean puskesmas yang menyederhanakan proses pendaftaran pasien dan mengurangi waktu tunggu.',
      'Tim menjalani proses seleksi berjenjang mulai dari penyisihan proposal, presentasi semifinal, hingga sesi tanya-jawab final di hadapan juri praktisi UI/UX nasional.',
    ],
    closing: 'Prestasi ini menjadi motivasi bagi mahasiswa SI lain untuk lebih aktif mengikuti kompetisi desain dan teknologi tingkat nasional.',
    event: 'Lomba UI/UX Tingkat Nasional',
    organizer: 'Mahasiswa SI Angkatan 2024',
    eventDate: 'Agustus 2026',
  },
  {
    id: 'sistem-mengajar-literasi-digital',
    featured: true,
    category: 'Pengabdian',
    title: 'SISTEM Mengajar: Literasi Digital untuk Siswa SMP',
    date: '18 Agustus 2026',
    author: 'Departemen Internal',
    location: 'SMP mitra binaan',
    excerpt: 'Dua puluh relawan HIMASISTA mengajarkan dasar keamanan akun, etika bermedia sosial, dan cara mengenali hoaks kepada siswa SMP.',
    lead: 'Dua puluh relawan HIMASISTA turun langsung ke sekolah mitra untuk mengajarkan literasi digital dasar kepada siswa SMP.',
    body: [
      'Materi mencakup cara membuat kata sandi yang aman, etika bermedia sosial, dan langkah sederhana mengenali berita hoaks.',
      'Kegiatan dikemas dengan permainan interaktif agar siswa lebih mudah memahami materi yang cukup teknis bagi usia mereka.',
    ],
    closing: 'Program ini direncanakan berlanjut ke sekolah mitra lain pada semester berikutnya sebagai bagian dari pengabdian masyarakat rutin HIMASISTA.',
    event: 'SISTEM Mengajar',
    organizer: 'Internal',
    eventDate: '18 Agustus 2026',
  },
  {
    id: 'makrab-si-2026',
    featured: false,
    category: 'Kegiatan',
    title: 'Makrab Sistem Informasi 2026 Berlangsung Meriah',
    date: '20 Juli 2026',
    author: 'Departemen Internal',
    location: 'Bumi Perkemahan Trawas',
    excerpt: 'Malam keakraban mempertemukan mahasiswa lintas angkatan dalam games dan sharing session.',
    lead: 'Malam Keakraban (Makrab) Sistem Informasi 2026 mempertemukan mahasiswa lintas angkatan dalam satu malam penuh permainan dan cerita.',
    body: [
      'Selain games kelompok, acara diisi sesi sharing session bersama alumni yang berbagi pengalaman dunia kerja dan tips menghadapi tugas akhir.',
    ],
    closing: 'Peserta menyampaikan harapan agar kegiatan serupa terus diadakan tiap tahun sebagai ajang mempererat kekeluargaan mahasiswa SI.',
    event: 'Malam Keakraban SI',
    organizer: 'Internal',
    eventDate: '20 Juli 2026',
    prokerId: 'malam-keakraban-si',
  },
  {
    id: 'medali-perak-data-science',
    featured: false,
    category: 'Prestasi',
    title: 'Mahasiswa SI Raih Medali Perak Kompetisi Data Science',
    date: '14 Juli 2026',
    author: 'Departemen Riset & Teknologi',
    location: 'Daring (final nasional)',
    excerpt: 'Model prediksi harga pangan buatan tim SI dinilai paling aplikatif oleh juri.',
    lead: 'Tim mahasiswa Sistem Informasi meraih medali perak pada kompetisi data science nasional lewat model prediksi harga bahan pangan.',
    body: [
      'Model yang dikembangkan mampu memprediksi fluktuasi harga sejumlah komoditas pangan dengan tingkat akurasi yang dinilai juri paling aplikatif dibanding tim lain.',
    ],
    closing: 'HIMASISTA berencana mendorong lebih banyak mahasiswa mengikuti kompetisi serupa lewat pelatihan data science internal.',
    event: 'Kompetisi Data Science Nasional',
    organizer: 'Mahasiswa SI',
    eventDate: 'Juli 2026',
  },
  {
    id: 'gandeng-komunitas-developer',
    featured: false,
    category: 'Kolaborasi',
    title: 'HIMASISTA Gandeng Komunitas Developer Lokal',
    date: '3 Juli 2026',
    author: 'Departemen Hubungan Eksternal',
    location: 'Coworking space mitra',
    excerpt: 'Kerja sama ini membuka akses mentoring dan meetup bulanan untuk anggota himpunan.',
    lead: 'HIMASISTA menjalin kerja sama dengan komunitas developer lokal untuk membuka akses mentoring bagi mahasiswa Sistem Informasi.',
    body: [
      'Lewat kerja sama ini, anggota HIMASISTA bisa mengikuti meetup bulanan komunitas dan mendapat kesempatan mentoring langsung dari praktisi software engineer.',
    ],
    closing: 'Kolaborasi ini diharapkan menjadi jembatan bagi mahasiswa untuk lebih siap terjun ke industri teknologi setelah lulus.',
    event: 'Kerja Sama Komunitas Developer',
    organizer: 'Hubungan Eksternal',
    eventDate: 'Juli 2026',
  },
  {
    id: 'baksos-warga-sekitar-kampus',
    featured: false,
    category: 'Pengabdian',
    title: 'Bakti Sosial Bersama Warga Sekitar Kampus',
    date: '26 Juni 2026',
    author: 'Departemen Internal',
    location: 'Lingkungan sekitar kampus',
    excerpt: 'Pengurus membagikan 150 paket sembako dan membuka layanan cek kesehatan gratis.',
    lead: 'HIMASISTA menggelar bakti sosial dengan membagikan 150 paket sembako kepada warga sekitar kampus.',
    body: [
      'Selain pembagian sembako, kegiatan juga menghadirkan layanan cek kesehatan gratis bekerja sama dengan unit kesehatan kampus.',
    ],
    closing: 'Kegiatan ini menjadi wujud kepedulian HIMASISTA terhadap lingkungan sekitar kampus di luar kegiatan akademik.',
    event: 'Bakti Sosial',
    organizer: 'Internal',
    eventDate: '26 Juni 2026',
  },
  {
    id: 'talkshow-karier-business-analyst',
    featured: false,
    category: 'Kegiatan',
    title: 'Talkshow Karier: Menjadi Business Analyst di Era AI',
    date: '19 Juni 2026',
    author: 'Departemen Pendidikan',
    location: 'Aula Fakultas Teknik',
    excerpt: 'Alumni SI berbagi pengalaman memetakan proses bisnis di perusahaan teknologi.',
    lead: 'Talkshow karier menghadirkan alumni Sistem Informasi yang kini berkarier sebagai business analyst di perusahaan teknologi.',
    body: [
      'Narasumber berbagi pengalaman memetakan proses bisnis, berkomunikasi dengan tim teknis, dan bagaimana peran business analyst beradaptasi di era AI.',
    ],
    closing: 'Sesi tanya-jawab berlangsung interaktif, terutama seputar kesiapan skill yang dibutuhkan mahasiswa SI untuk masuk ke jalur karier ini.',
    event: 'Talkshow Karier',
    organizer: 'Pendidikan',
    eventDate: '19 Juni 2026',
  },
  {
    id: 'dua-proposal-pkm-lolos-pendanaan',
    featured: false,
    category: 'Prestasi',
    title: 'Dua Proposal PKM Mahasiswa SI Lolos Pendanaan',
    date: '5 Juni 2026',
    author: 'Departemen Riset & Teknologi',
    location: '—',
    excerpt: 'Kedua tim akan mengembangkan aplikasi pencatatan UMKM dan sistem antrean klinik.',
    lead: 'Dua proposal Program Kreativitas Mahasiswa (PKM) dari mahasiswa Sistem Informasi dinyatakan lolos pendanaan tahun ini.',
    body: [
      'Tim pertama akan mengembangkan aplikasi pencatatan keuangan sederhana untuk UMKM, sementara tim kedua mengembangkan sistem antrean digital untuk klinik kesehatan.',
    ],
    closing: 'HIMASISTA akan mengawal kedua tim lewat pendampingan rutin dari Departemen Riset & Teknologi hingga tahap monitoring dan evaluasi.',
    event: 'Program Kreativitas Mahasiswa',
    organizer: 'Riset & Teknologi',
    eventDate: 'Juni 2026',
  },
];

export function getBeritaById(id) {
  return berita.find((b) => b.id === id) || null;
}

export function getFeaturedBerita() {
  return berita.filter((b) => b.featured);
}

// Daftar untuk "Berita Lainnya": semua berita KECUALI yang sedang dibuka.
export function getOtherBerita(excludeId) {
  return berita.filter((b) => b.id !== excludeId);
}

export function getBeritaCategories() {
  return [...new Set(berita.map((b) => b.category))];
}