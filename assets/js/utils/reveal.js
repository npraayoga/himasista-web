// Animasi "muncul saat di-scroll" untuk semua elemen berclass .reveal.
// Dipanggil sekali di tiap halaman, SETELAH konten dinamis (kartu, dsb.)
// selesai dirender — supaya kartu yang baru ditambahkan lewat JS juga ikut
// diamati, bukan cuma elemen yang sudah ada di HTML sejak awal.

export function initReveal() {
  // Browser lama tanpa IntersectionObserver: lewati animasi, konten
  // tetap tampil normal (class "io" tidak pernah ditambahkan ke <body>,
  // jadi CSS utilities/animations.css tidak menyembunyikan apa pun).
  if (!('IntersectionObserver' in window)) return;

  const els = document.querySelectorAll('.reveal:not(.in)');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );

  els.forEach((el) => observer.observe(el));
  document.body.classList.add('io');
}