// Render 2 kartu "Megaproker" di beranda (section #proker).
// Warna kartu berselang-seling: index genap → navy, ganjil → accent.

import { iconCalendar, iconLocation } from './icons.js';

function cardHtml(item, index) {
  const variant = index % 2 === 0 ? 'card-mega--navy' : 'card-mega--accent';
  return `
    <a href="program-kerja.html?id=${item.id}" class="card-mega ${variant} reveal">
      <span class="card-mega__go" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"></path></svg>
      </span>
      <img class="card-mega__watermark" src="assets/images/brand/logo-eclipse.png" alt="" aria-hidden="true">
      <span class="card-mega__badge">MEGAPROKER</span>
      <span class="card-mega__title">${item.name}</span>
      <span class="card-mega__desc">${item.desc}</span>
      <span class="card-mega__meta">
        <span class="card-mega__meta-item">${iconCalendar}${item.month}</span>
        <span class="card-mega__meta-item">${iconLocation}${item.location}</span>
      </span>
    </a>
  `;
}

// container: elemen <div data-js="mega-list">
export function renderMegaGrid(container, list) {
  container.innerHTML = list.map((item, i) => cardHtml(item, i)).join('');
}