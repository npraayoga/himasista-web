// Data 8 departemen HIMASISTA. DATA DUMMY — ganti desc/staff dengan data
// asli sebelum situs ini dipublikasikan.
//
// icon: isi <path>/<rect>/<circle> untuk ditaruh di dalam <svg viewBox="0 0 24 24">
// (lihat render/departemen-card.js & pages/departemen.js).

export const departemen = [
  {
    id: 'badan-pengawas',
    name: 'Badan Pengawas',
    icon: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"></path><path d="M9 12l2 2 4-4"></path>',
    desc: 'Badan Pengawas bertugas mengawasi jalannya roda organisasi, memastikan program kerja setiap departemen berjalan sesuai AD/ART, serta memberikan rekomendasi perbaikan kepada Badan Pengurus Harian.',
    prokerNames: ['Rapat Evaluasi Triwulan', 'Audit Program Kerja', 'Sidang Pertanggungjawaban'],
    staff: [
      { role: 'Ketua Badan Pengawas', name: 'Muhammad Rafi Ardiansyah' },
      { role: 'Sekretaris', name: 'Amanda Putri Lestari' },
      { role: 'Anggota', name: 'Yusuf Firmansyah' },
      { role: 'Anggota', name: 'Clara Angelina' },
      { role: 'Anggota', name: 'Reza Al Fatih' },
      { role: 'Anggota', name: 'Devina Kusuma' },
    ],
  },
  {
    id: 'bph',
    name: 'Badan Pengurus Harian',
    icon: '<path d="M3 21h18M5 21V9l7-5 7 5v12"></path><path d="M9 21v-6h6v6"></path>',
    desc: 'Badan Pengurus Harian mengoordinasikan seluruh departemen, menyusun kebijakan umum kabinet, dan menjadi penghubung utama HIMASISTA dengan program studi serta fakultas.',
    prokerNames: ['Rapat Kerja Kabinet', 'Konsolidasi Pengurus', 'SISFEST 2027'],
    staff: [
      { role: 'Ketua Umum', name: 'Bagas Wirawan' },
      { role: 'Wakil Ketua Umum', name: 'Nadia Ramadhani' },
      { role: 'Sekretaris Umum', name: 'Fitra Ananda' },
      { role: 'Bendahara Umum', name: 'Siti Khairunnisa' },
      { role: 'Staff Ahli', name: 'Doni Kurniawan' },
      { role: 'Staff Ahli', name: 'Meilani Putri' },
    ],
  },
  {
    id: 'media-kreatif',
    name: 'Media & Kreatif',
    icon: '<rect x="3" y="4" width="18" height="12" rx="2"></rect><path d="M8 20h8M12 16v4"></path><path d="M7 12c1.5-3 3-3 4.5 0s3 3 5 -1"></path>',
    desc: 'Departemen Media & Kreatif bertugas mengelola seluruh kanal informasi HIMASISTA, mendokumentasikan setiap kegiatan himpunan, serta merancang identitas visual dan konten publikasi agar kabar himpunan sampai ke mahasiswa dengan menarik.',
    prokerNames: ['Podcast SISTEKICAST', 'Lomba Desain Poster Digital', 'Konten Mingguan Instagram'],
    staff: [
      { role: 'Sekretaris Departemen', name: 'Alya Safitri' },
      { role: 'Anggota', name: 'Dimas Aditya' },
      { role: 'Kepala Departemen', name: 'Nabila Putri Ramadhani' },
      { role: 'Anggota', name: 'Salsabila Nur Aini' },
      { role: 'Bendahara Departemen', name: 'Farhan Maulana' },
      { role: 'Anggota', name: 'Bagus Wicaksono' },
    ],
  },
  {
    id: 'pendidikan',
    name: 'Pendidikan',
    icon: '<path d="M2 8l10-4 10 4-10 4L2 8z"></path><path d="M6 10v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"></path><path d="M22 8v5"></path>',
    desc: 'Departemen Pendidikan mengelola kegiatan belajar tambahan di luar perkuliahan, mulai dari kelas pemrograman dasar hingga pendampingan penulisan skripsi.',
    prokerNames: ['Kelas Algoritma Dasar', 'Bimbingan Skripsi Sebaya', 'Try Out Sertifikasi'],
    staff: [
      { role: 'Kepala Departemen', name: 'Arif Setiawan' },
      { role: 'Sekretaris', name: 'Putri Anggraeni' },
      { role: 'Bendahara', name: 'Ilham Nur Hidayat' },
      { role: 'Anggota', name: 'Zahra Amelia' },
      { role: 'Anggota', name: 'Wahyu Prasetyo' },
      { role: 'Anggota', name: 'Rani Oktaviani' },
    ],
  },
  {
    id: 'hubungan-eksternal',
    name: 'Hubungan Eksternal',
    icon: '<circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"></path>',
    desc: 'Departemen Hubungan Eksternal menjalin kerja sama dengan himpunan mahasiswa, komunitas, dan mitra industri, serta mewakili HIMASISTA dalam kegiatan lintas kampus.',
    prokerNames: ['Studi Banding Himpunan', 'Kunjungan Industri', 'Kerja Sama Komunitas Developer'],
    staff: [
      { role: 'Kepala Departemen', name: 'Galih Permana' },
      { role: 'Sekretaris', name: 'Intan Permatasari' },
      { role: 'Bendahara', name: 'Yoga Saputra' },
      { role: 'Anggota', name: 'Dea Anastasya' },
      { role: 'Anggota', name: 'Fajar Nugroho' },
      { role: 'Anggota', name: 'Larasati Wulandari' },
    ],
  },
  {
    id: 'keuangan-kewirausahaan',
    name: 'Keuangan & Kewirausahaan',
    icon: '<rect x="3" y="6" width="18" height="13" rx="2"></rect><path d="M3 10h18"></path><path d="M16 14.5h2"></path><path d="M7 6V4h10v2"></path>',
    desc: 'Departemen Keuangan & Kewirausahaan mengelola kas himpunan dan mengembangkan unit usaha mandiri untuk mendukung pendanaan program kerja HIMASISTA.',
    prokerNames: ['Merchandise HIMASISTA', 'Laporan Kas Bulanan', 'Pelatihan Kewirausahaan Mahasiswa'],
    staff: [
      { role: 'Kepala Departemen', name: 'Hendra Wijaya' },
      { role: 'Sekretaris', name: 'Citra Dewanti' },
      { role: 'Bendahara', name: 'Aditya Rahman' },
      { role: 'Anggota', name: 'Melati Sari' },
      { role: 'Anggota', name: 'Bimo Nugraha' },
      { role: 'Anggota', name: 'Sekar Ayu' },
    ],
  },
  {
    id: 'internal',
    name: 'Internal',
    icon: '<circle cx="9" cy="8" r="3"></circle><path d="M3 20c.8-3.2 3.2-5 6-5s5.2 1.8 6 5"></path><path d="M16 5a3 3 0 010 6"></path><path d="M18 15c1.6.6 2.7 2.2 3 5"></path>',
    desc: 'Departemen Internal menjaga kekompakan dan kesejahteraan seluruh pengurus HIMASISTA lewat kegiatan keakraban, apresiasi, dan komunikasi antaranggota.',
    prokerNames: ['Malam Keakraban SI', 'Apresiasi Pengurus Aktif', 'Gathering Bulanan'],
    staff: [
      { role: 'Kepala Departemen', name: 'Fadhil Rahman' },
      { role: 'Sekretaris', name: 'Olivia Marchella' },
      { role: 'Bendahara', name: 'Kevin Alamsyah' },
      { role: 'Anggota', name: 'Tasya Kamila' },
      { role: 'Anggota', name: 'Rico Hidayatullah' },
      { role: 'Anggota', name: 'Naila Zahra' },
    ],
  },
  {
    id: 'riset-teknologi',
    name: 'Riset & Teknologi',
    icon: '<path d="M4 20V11M9 20V7M14 20v-4"></path><circle cx="17.5" cy="9.5" r="3"></circle><path d="M19.7 11.7L22 14"></path>',
    desc: 'Departemen Riset & Teknologi mendorong eksplorasi teknologi terbaru lewat workshop, kompetisi, dan riset terapan yang relevan dengan dunia Sistem Informasi.',
    prokerNames: ['SI Hackathon 2026', 'Workshop Laravel & React', 'Podcast SISTEKICAST'],
    staff: [
      { role: 'Kepala Departemen', name: 'Rizky Pratama' },
      { role: 'Sekretaris', name: 'Anisa Fitriani' },
      { role: 'Bendahara', name: 'Teguh Prabowo' },
      { role: 'Anggota', name: 'Vania Chandra' },
      { role: 'Anggota', name: 'Faisal Akbar' },
      { role: 'Anggota', name: 'Gita Permatasari' },
    ],
  },
];

export function getDepartemenById(id) {
  return departemen.find((d) => d.id === id) || null;
}