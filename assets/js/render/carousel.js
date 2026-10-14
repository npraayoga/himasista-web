// Carousel berita utama di beranda: render slide, lalu jalankan navigasi
// (prev/next/dot), auto-putar tiap 5 detik, dan jeda otomatis saat di-hover
// atau disentuh supaya tidak mengganggu pengunjung yang sedang membaca.
//
// Pergeseran pakai viewport.scrollTo() (scroll HORIZONTAL di dalam carousel
// saja). Sengaja TIDAK pakai scrollIntoView(), karena method itu juga
// menggulung halaman secara vertikal — halaman akan "loncat" ke carousel
// setiap kali slide berganti.

import { qs, qsa } from '../utils/dom.js';
import { iconCalendar } from './icons.js';

const AUTOPLAY_MS = 5000;
const TOUCH_RESUME_MS = 4000; // jeda setelah jari dilepas sebelum auto-putar lanjut

function slideHtml(item) {
  return `
    <li class="carousel__card">
      <div class="carousel__card-body">
        <span class="chip chip--blue">${item.category}</span>
        <span class="carousel__card-title">${item.title}</span>
        <span class="carousel__card-date">${iconCalendar}${item.date}</span>
        <p class="carousel__card-excerpt">${item.excerpt}</p>
        <a href="berita.html?id=${item.id}" class="btn btn--primary btn--sm">
          Selengkapnya
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>
        </a>
      </div>
      <div class="media carousel__card-media media--kenburns">
        <img src="assets/images/berita/${item.id}.jpg" alt="" loading="lazy">
      </div>
    </li>
  `;
}

// root: elemen <div data-js="carousel"> yang membungkus seluruh carousel.
export function initCarousel(root, slides) {
  if (!slides.length) return;

  const track = qs('[data-js="carousel-track"]', root);
  const viewport = qs('.carousel__viewport', root);
  const dotsWrap = qs('[data-js="carousel-dots"]', root);
  const prevBtn = qs('[data-js="carousel-prev"]', root);
  const nextBtn = qs('[data-js="carousel-next"]', root);
  if (!track || !viewport) return;

  track.innerHTML = slides.map(slideHtml).join('');
  if (dotsWrap) {
    dotsWrap.innerHTML = slides
      .map((s, i) => `<button type="button" class="carousel__dot" aria-label="Tampilkan berita ${i + 1}"></button>`)
      .join('');
  }

  const cards = qsa('.carousel__card', track);
  const dots = dotsWrap ? qsa('.carousel__dot', dotsWrap) : [];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = 0;
  let paused = false;
  let resumeTimer = null;

  // Tandai kartu & dot aktif (opacity/scale kartu diatur carousel.css).
  function setActive(i) {
    index = i;
    cards.forEach((card, ci) => card.classList.toggle('is-active', ci === i));
    dots.forEach((dot, di) => dot.classList.toggle('is-active', di === i));
  }

  // Hitung posisi scroll supaya titik tengah kartu = titik tengah viewport.
  // Pakai titik tengah (bukan tepi kiri) karena kartu non-aktif di-scale 0.92,
  // dan scale tidak menggeser titik tengah.
  function offsetFor(card) {
    const vp = viewport.getBoundingClientRect();
    const c = card.getBoundingClientRect();
    return viewport.scrollLeft + (c.left + c.width / 2) - (vp.left + vp.width / 2);
  }

  function goTo(i, smooth = true) {
    const target = (i + cards.length) % cards.length;
    setActive(target);
    viewport.scrollTo({ left: offsetFor(cards[target]), behavior: smooth && !reduceMotion ? 'smooth' : 'auto' });
  }

  // Sinkronkan dot saat pengunjung menggeser (swipe) carousel manual:
  // kartu yang paling dekat ke tengah viewport dianggap aktif.
  let scrollRaf = null;
  viewport.addEventListener('scroll', () => {
    cancelAnimationFrame(scrollRaf);
    scrollRaf = requestAnimationFrame(() => {
      const vp = viewport.getBoundingClientRect();
      const center = vp.left + vp.width / 2;
      let nearest = 0;
      let best = Infinity;
      cards.forEach((card, ci) => {
        const r = card.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - center);
        if (d < best) { best = d; nearest = ci; }
      });
      if (nearest !== index) setActive(nearest);
    });
  }, { passive: true });

  prevBtn?.addEventListener('click', () => goTo(index - 1));
  nextBtn?.addEventListener('click', () => goTo(index + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  // Jeda auto-putar: selama pointer di atas carousel (desktop), dan selama
  // disentuh + beberapa detik sesudahnya (HP).
  root.addEventListener('mouseenter', () => { paused = true; });
  root.addEventListener('mouseleave', () => { paused = false; });
  viewport.addEventListener('touchstart', () => {
    paused = true;
    clearTimeout(resumeTimer);
  }, { passive: true });
  viewport.addEventListener('touchend', () => {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { paused = false; }, TOUCH_RESUME_MS);
  }, { passive: true });

  // Ukuran kartu berubah saat layar di-resize/rotate → rapikan posisi ulang.
  window.addEventListener('resize', () => goTo(index, false));

  setInterval(() => {
    if (!paused && !document.hidden) goTo(index + 1);
  }, AUTOPLAY_MS);

  goTo(0, false);
}