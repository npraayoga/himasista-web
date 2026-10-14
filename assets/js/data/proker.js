// Data 10 program kerja HIMASISTA. DATA DUMMY — ganti dengan data asli
// sebelum situs ini dipublikasikan.
//
// status: 'Rencana' | 'Berjalan' | 'Selesai' — dipakai untuk warna chip
// (lihat chip--rencana/--berjalan/--selesai di components/chip.css) dan
// untuk menentukan status tiap tahap di steps (lihat render/timeline.js).
// isMega: true untuk 2 program kerja unggulan yang tampil sebagai kartu
// besar "Megaproker" di beranda.

export const proker = [
  {
    id: 'si-hackathon-2026',
    isMega: true,
    dep: 'Riset & Teknologi',
    status: 'Berjalan',
    name: 'SI Hackathon 2026',
    month: 'Oktober 2026',
    date: '17–18 Oktober 2026',
    location: 'Aula Fakultas Teknik',
    pic: 'Rizky Pratama',
    target: 'Mahasiswa aktif SI (tim 3 orang)',
    desc: 'Kompetisi membangun solusi digital selama 24 jam untuk masalah nyata di lingkungan kampus.',
    summary: 'Kompetisi membangun solusi digital selama 24 jam untuk masalah nyata di lingkungan kampus. Terbuka untuk seluruh mahasiswa Sistem Informasi, dari mahasiswa baru sampai tingkat akhir.',
    about: 'Peserta bekerja dalam tim beranggotakan tiga orang untuk menjawab tantangan dari unit-unit kampus, misalnya layanan akademik dan perpustakaan. Setiap tim didampingi mentor, lalu mempresentasikan prototipe di hadapan juri dari praktisi industri dan dosen Sistem Informasi.',
    goals: [
      'Melatih kemampuan problem solving dan kerja tim di bawah tekanan waktu.',
      'Menghasilkan prototipe solusi yang bisa dipakai langsung oleh unit di kampus.',
      'Mempertemukan mahasiswa dengan mentor dari industri dan alumni.',
    ],
    steps: [
      { status: 'done', title: 'Persiapan & Open Recruitment Panitia', date: 'Agustus 2026', desc: 'Pembentukan panitia, penyusunan TOR, dan pencarian sponsor.' },
      { status: 'now', title: 'Pelaksanaan', date: 'September – Oktober 2026', desc: 'Pendaftaran tim, technical meeting, dan hari kompetisi.' },
      { status: 'upcoming', title: 'Evaluasi & Laporan Pertanggungjawaban', date: 'November 2026', desc: 'Evaluasi kepanitiaan dan penyusunan LPJ untuk BPH.' },
    ],
  },
  {
    id: 'sisfest-2027',
    isMega: true,
    dep: 'Badan Pengurus Harian',
    status: 'Rencana',
    name: 'SISFEST 2027',
    month: 'Februari 2027',
    date: '20–22 Februari 2027',
    location: 'Kampus Untag Surabaya',
    pic: 'Bagas Wirawan',
    target: 'Mahasiswa & umum',
    desc: 'Festival tahunan Sistem Informasi: seminar nasional, pameran karya mahasiswa, dan rangkaian lomba.',
    summary: 'Festival tahunan Sistem Informasi: seminar nasional, pameran karya mahasiswa, dan rangkaian lomba antar-kampus se-Jawa Timur.',
    about: 'SISFEST menghadirkan pembicara nasional, pameran karya tugas akhir mahasiswa, serta kompetisi coding dan UI/UX terbuka untuk pelajar dan mahasiswa se-Jawa Timur.',
    goals: [
      'Menjadi etalase karya mahasiswa Sistem Informasi ke publik.',
      'Membangun jejaring dengan kampus dan komunitas teknologi lain.',
      'Meningkatkan animo calon mahasiswa terhadap program studi SI.',
    ],
    steps: [
      { status: 'now', title: 'Perencanaan & Pencarian Sponsor', date: 'Oktober – Desember 2026', desc: 'Penyusunan proposal, TOR, dan penjajakan kerja sama sponsor.' },
      { status: 'upcoming', title: 'Pelaksanaan Acara', date: 'Februari 2027', desc: 'Seminar, pameran karya, dan rangkaian lomba selama 3 hari.' },
      { status: 'upcoming', title: 'Evaluasi & Laporan Pertanggungjawaban', date: 'Maret 2027', desc: 'Evaluasi kepanitiaan dan penyusunan LPJ untuk BPH.' },
    ],
  },
  {
    id: 'kelas-algoritma-dasar',
    dep: 'Pendidikan',
    status: 'Selesai',
    name: 'Kelas Algoritma Dasar',
    month: 'Agustus 2026',
    date: '3–28 Agustus 2026',
    location: 'Laboratorium Komputer Fakultas Teknik',
    pic: 'Arif Setiawan',
    target: 'Mahasiswa baru SI angkatan 2026',
    desc: 'Kelas mingguan pemrograman dasar untuk mahasiswa baru.',
    summary: 'Kelas mingguan pemrograman dasar untuk mahasiswa baru, membekali logika algoritma sebelum masuk ke mata kuliah pemrograman inti.',
    about: 'Diselenggarakan 4 kali pertemuan, kelas ini membahas dasar logika pemrograman, struktur kontrol, dan latihan soal algoritma sederhana.',
    goals: [
      'Menyiapkan mahasiswa baru menghadapi mata kuliah pemrograman dasar.',
      'Membiasakan cara berpikir algoritmik sejak semester awal.',
      'Membuka ruang tanya-jawab dengan kakak tingkat.',
    ],
    steps: [
      { status: 'done', title: 'Persiapan Materi & Pendaftaran', date: 'Juli 2026', desc: 'Penyusunan modul dan pembukaan pendaftaran peserta.' },
      { status: 'done', title: 'Pelaksanaan Kelas', date: 'Agustus 2026', desc: '4 pertemuan mingguan di laboratorium komputer.' },
      { status: 'done', title: 'Evaluasi & Laporan', date: 'September 2026', desc: 'Survei kepuasan peserta dan penyusunan LPJ.' },
    ],
  },
  {
    id: 'lomba-desain-poster-digital',
    dep: 'Media & Kreatif',
    status: 'Rencana',
    name: 'Lomba Desain Poster Digital',
    month: 'November 2026',
    date: '9–23 November 2026',
    location: 'Daring (online)',
    pic: 'Nabila Putri Ramadhani',
    target: 'Mahasiswa se-Surabaya',
    desc: 'Lomba desain terbuka untuk mahasiswa se-Surabaya.',
    summary: 'Lomba desain poster digital dengan tema seputar kampus dan teknologi, terbuka untuk mahasiswa se-Surabaya.',
    about: 'Peserta mengunggah karya lewat formulir daring, dinilai oleh juri internal HIMASISTA dan praktisi desain, dengan pengumuman pemenang lewat SISTEKINEWS.',
    goals: [
      'Menyalurkan minat desain mahasiswa SI dan kampus lain.',
      'Memperluas jejaring HIMASISTA ke luar kampus.',
      'Menghasilkan arsip karya untuk materi publikasi himpunan.',
    ],
    steps: [
      { status: 'now', title: 'Persiapan & Publikasi Lomba', date: 'Oktober 2026', desc: 'Penyusunan TOR, poster lomba, dan pembukaan pendaftaran.' },
      { status: 'upcoming', title: 'Periode Pengumpulan Karya', date: 'November 2026', desc: 'Pengumpulan karya dan penjurian oleh tim internal & eksternal.' },
      { status: 'upcoming', title: 'Pengumuman & Evaluasi', date: 'Desember 2026', desc: 'Pengumuman pemenang dan penyusunan LPJ.' },
    ],
  },
  {
    id: 'studi-banding-himpunan',
    dep: 'Hubungan Eksternal',
    status: 'Berjalan',
    name: 'Studi Banding Himpunan',
    month: 'September 2026',
    date: '14 September 2026',
    location: 'Kampus mitra (menyusul)',
    pic: 'Galih Permana',
    target: 'Pengurus inti HIMASISTA',
    desc: 'Kunjungan dan diskusi dengan himpunan kampus mitra.',
    summary: 'Kunjungan dan diskusi dengan himpunan mahasiswa Sistem Informasi dari kampus mitra untuk bertukar praktik baik pengelolaan organisasi.',
    about: 'Delegasi HIMASISTA berdiskusi seputar penyusunan program kerja, sistem administrasi digital, dan pengelolaan kaderisasi anggota.',
    goals: [
      'Bertukar praktik baik pengelolaan himpunan mahasiswa.',
      'Membuka peluang kolaborasi program kerja lintas kampus.',
      'Memperluas jejaring pengurus HIMASISTA.',
    ],
    steps: [
      { status: 'done', title: 'Penjajakan & Komunikasi Kampus Mitra', date: 'Agustus 2026', desc: 'Koordinasi jadwal dan agenda kunjungan.' },
      { status: 'now', title: 'Pelaksanaan Kunjungan', date: 'September 2026', desc: 'Diskusi dan tukar cendera mata dengan himpunan mitra.' },
      { status: 'upcoming', title: 'Evaluasi & Tindak Lanjut', date: 'Oktober 2026', desc: 'Penyusunan hasil diskusi dan rencana kolaborasi lanjutan.' },
    ],
  },
  {
    id: 'malam-keakraban-si',
    dep: 'Internal',
    status: 'Selesai',
    name: 'Malam Keakraban SI',
    month: 'Juli 2026',
    date: '20 Juli 2026',
    location: 'Bumi Perkemahan Trawas',
    pic: 'Fadhil Rahman',
    target: 'Seluruh mahasiswa SI',
    desc: 'Ajang keakraban mahasiswa lintas angkatan.',
    summary: 'Ajang keakraban mahasiswa Sistem Informasi lintas angkatan lewat games, api unggun, dan sharing session bersama alumni.',
    about: 'Kegiatan berlangsung semalam, diisi permainan kelompok, penampilan bakat, dan sesi berbagi pengalaman dari alumni dan kakak tingkat.',
    goals: [
      'Mempererat hubungan mahasiswa lintas angkatan.',
      'Membuka ruang cerita pengalaman dari alumni.',
      'Menjadi ajang penyegaran di tengah kesibukan kuliah.',
    ],
    steps: [
      { status: 'done', title: 'Persiapan & Survei Lokasi', date: 'Juni 2026', desc: 'Survei lokasi, penyusunan rundown, dan pendaftaran peserta.' },
      { status: 'done', title: 'Pelaksanaan Malam Keakraban', date: 'Juli 2026', desc: 'Kegiatan berlangsung semalam di lokasi perkemahan.' },
      { status: 'done', title: 'Evaluasi & Laporan', date: 'Agustus 2026', desc: 'Survei kepuasan peserta dan penyusunan LPJ.' },
    ],
  },
  {
    id: 'merchandise-himasista',
    dep: 'Keuangan & Kewirausahaan',
    status: 'Rencana',
    name: 'Merchandise HIMASISTA',
    month: 'Desember 2026',
    date: 'Desember 2026 – Januari 2027',
    location: 'Prapenjualan daring',
    pic: 'Hendra Wijaya',
    target: 'Mahasiswa & umum',
    desc: 'Produksi dan penjualan merchandise resmi himpunan.',
    summary: 'Produksi dan penjualan merchandise resmi HIMASISTA (kaos, totebag, stiker) untuk mendukung kas himpunan dan memperkuat identitas kabinet ECLIPSE.',
    about: 'Penjualan dibuka lewat sistem prapesan daring dengan desain yang disayembarakan lebih dulu ke departemen Media & Kreatif.',
    goals: [
      'Menambah pemasukan kas himpunan secara mandiri.',
      'Memperkuat identitas visual Kabinet ECLIPSE di kalangan mahasiswa.',
      'Melatih pengurus mengelola unit usaha kecil.',
    ],
    steps: [
      { status: 'now', title: 'Desain & Survei Minat', date: 'Oktober – November 2026', desc: 'Penentuan desain, harga, dan survei minat calon pembeli.' },
      { status: 'upcoming', title: 'Prapenjualan & Produksi', date: 'Desember 2026', desc: 'Pembukaan prapesan daring dan proses produksi.' },
      { status: 'upcoming', title: 'Distribusi & Laporan', date: 'Januari 2027', desc: 'Distribusi ke pembeli dan penyusunan laporan keuangan.' },
    ],
  },
  {
    id: 'bimbingan-skripsi-sebaya',
    dep: 'Pendidikan',
    status: 'Rencana',
    name: 'Bimbingan Skripsi Sebaya',
    month: 'Januari 2027',
    date: 'Januari – Maret 2027',
    location: 'Ruang diskusi Fakultas Teknik',
    pic: 'Arif Setiawan',
    target: 'Mahasiswa tingkat akhir SI',
    desc: 'Pendampingan penulisan skripsi oleh kakak tingkat.',
    summary: 'Program pendampingan penulisan skripsi bagi mahasiswa tingkat akhir, didampingi kakak tingkat yang sudah lulus sidang.',
    about: 'Peserta dikelompokkan sesuai topik penelitian dan bertemu rutin dengan pendamping sebaya untuk berdiskusi metodologi, sistematika, dan progres penulisan.',
    goals: [
      'Membantu mahasiswa tingkat akhir menuntaskan skripsi tepat waktu.',
      'Membangun budaya saling membantu antar-angkatan.',
      'Mengurangi rasa terisolasi selama proses penulisan.',
    ],
    steps: [
      { status: 'now', title: 'Perekrutan Pendamping & Peserta', date: 'November – Desember 2026', desc: 'Perekrutan kakak tingkat pendamping dan pendaftaran peserta.' },
      { status: 'upcoming', title: 'Pelaksanaan Pendampingan', date: 'Januari – Maret 2027', desc: 'Sesi diskusi rutin sesuai kelompok topik penelitian.' },
      { status: 'upcoming', title: 'Evaluasi & Laporan', date: 'April 2027', desc: 'Survei progres peserta dan penyusunan LPJ.' },
    ],
  },
  {
    id: 'workshop-laravel-react',
    dep: 'Riset & Teknologi',
    status: 'Selesai',
    name: 'Workshop Laravel & React',
    month: 'Agustus 2026',
    date: '8–9 Agustus 2026',
    location: 'Laboratorium Komputer Fakultas Teknik',
    pic: 'Rizky Pratama',
    target: 'Mahasiswa baru SI (60 peserta)',
    desc: 'Pelatihan dasar pengembangan aplikasi web modern.',
    summary: 'Workshop dua hari untuk 60 mahasiswa baru Sistem Informasi, membahas dasar pembuatan aplikasi web dengan Laravel dan React.',
    about: 'Hari pertama membahas backend (Laravel, routing, REST API sederhana); hari kedua membahas frontend (komponen React, state, konsumsi API) sehingga terbentuk satu aplikasi utuh.',
    goals: [
      'Membekali mahasiswa baru dasar membangun aplikasi web modern.',
      'Memberi pengalaman membangun aplikasi utuh sejak semester awal.',
      'Menjaring calon panitia SI Hackathon 2026.',
    ],
    steps: [
      { status: 'done', title: 'Persiapan Materi & Pendaftaran', date: 'Juli 2026', desc: 'Penyusunan modul workshop dan pembukaan pendaftaran peserta.' },
      { status: 'done', title: 'Pelaksanaan Workshop', date: 'Agustus 2026', desc: 'Workshop 2 hari: backend Laravel lalu frontend React.' },
      { status: 'done', title: 'Evaluasi & Laporan', date: 'September 2026', desc: 'Survei kepuasan peserta dan penyusunan LPJ.' },
    ],
  },
  {
    id: 'podcast-sistekicast',
    dep: 'Media & Kreatif',
    status: 'Berjalan',
    name: 'Podcast SISTEKICAST',
    month: 'Oktober 2026',
    date: 'Tayang tiap 2 minggu',
    location: 'Studio mini Sekretariat HIMASISTA',
    pic: 'Alya Safitri',
    target: 'Mahasiswa & umum',
    desc: 'Podcast dua mingguan seputar teknologi dan kampus.',
    summary: 'Podcast dua mingguan seputar teknologi, dunia kampus, dan cerita alumni, tayang di kanal YouTube dan Spotify HIMASISTA.',
    about: 'Tiap episode menghadirkan narasumber bergantian: dosen, alumni, atau mahasiswa berprestasi, membahas topik seputar Sistem Informasi dan dunia kerja.',
    goals: [
      'Membangun kanal informasi alternatif yang santai dan mudah diakses.',
      'Memperkenalkan sosok dosen, alumni, dan mahasiswa berprestasi.',
      'Melatih kemampuan produksi konten audio-visual pengurus.',
    ],
    steps: [
      { status: 'done', title: 'Persiapan Format & Peralatan', date: 'Agustus 2026', desc: 'Penentuan format acara dan penyiapan peralatan rekam.' },
      { status: 'now', title: 'Produksi Episode Rutin', date: 'September 2026 – seterusnya', desc: 'Rekaman dan penayangan episode tiap 2 minggu.' },
      { status: 'upcoming', title: 'Evaluasi Semester', date: 'Januari 2027', desc: 'Evaluasi jumlah penonton dan rencana episode semester berikutnya.' },
    ],
  },
];

export function getProkerById(id) {
  return proker.find((p) => p.id === id) || null;
}

export function getMegaProker() {
  return proker.filter((p) => p.isMega);
}

// Daftar untuk "Program Kerja Lainnya": semua proker KECUALI yang sedang
// dibuka (excludeId), supaya halaman detail tidak menampilkan dirinya sendiri.
export function getOtherProker(excludeId) {
  return proker.filter((p) => p.id !== excludeId);
}

// Daftar departemen unik, dipakai untuk membangun chip filter departemen.
export function getProkerDepartments() {
  return [...new Set(proker.map((p) => p.dep))];
}