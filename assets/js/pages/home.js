// Entry point index.html (Beranda). Merender grid Departemen, kartu
// Megaproker, dan carousel berita utama, lalu mengaktifkan menu mobile
// dan animasi scroll-reveal.

import { qs } from '../utils/dom.js';
import { initMobileMenu } from '../components/mobile-menu.js';
import { initReveal } from '../utils/reveal.js';
import { departemen } from '../data/departemen.js';
import { getMegaProker } from '../data/proker.js';
import { getFeaturedBerita } from '../data/berita.js';
import { renderDepartemenGrid } from '../render/departemen-card.js';
import { renderMegaGrid } from '../render/mega-card.js';
import { initCarousel } from '../render/carousel.js';

function init() {
  initMobileMenu();

  const depList = qs('[data-js="departemen-list"]');
  if (depList) renderDepartemenGrid(depList, departemen);

  const megaList = qs('[data-js="mega-list"]');
  if (megaList) renderMegaGrid(megaList, getMegaProker());

  const carouselRoot = qs('[data-js="carousel"]');
  if (carouselRoot) initCarousel(carouselRoot, getFeaturedBerita());

  // Dipanggil terakhir supaya kartu yang baru dirender di atas ikut diamati.
  initReveal();
}

document.addEventListener('DOMContentLoaded', init);