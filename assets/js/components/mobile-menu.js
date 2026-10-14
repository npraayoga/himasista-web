// Tombol hamburger di navbar: buka/tutup panel menu mobile.
// Dipakai sama persis di keempat halaman.

import { qs } from '../utils/dom.js';

export function initMobileMenu() {
  const toggle = qs('[data-js="menu-toggle"]');
  const panel = qs('[data-js="menu-panel"]');
  if (!toggle || !panel) return;

  const close = () => {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  };
  const open = () => {
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? close() : open();
  });

  // Klik link di dalam panel → tutup panel (biar tidak menutupi konten
  // setelah pengguna pindah ke section/halaman lain).
  panel.addEventListener('click', (e) => {
    if (e.target.closest('a')) close();
  });

  // Tekan Escape → tutup panel, kembalikan fokus ke tombol hamburger.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      close();
      toggle.focus();
    }
  });
}