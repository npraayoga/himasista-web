// Render kartu untuk grid "Program Kerja Lainnya" di halaman Detail Program Kerja.

import { iconCalendar } from './icons.js';

const STATUS_CLASS = {
  Rencana: 'chip--rencana',
  Berjalan: 'chip--berjalan',
  Selesai: 'chip--selesai',
};

function cardHtml(item) {
  return `
    <li>
      <a href="program-kerja.html?id=${item.id}" class="card-proker reveal">
        <div class="card-proker__head">
          <span class="card-proker__dep">${item.dep}</span>
          <span class="chip ${STATUS_CLASS[item.status] || ''}">${item.status}</span>
        </div>
        <span class="card-proker__title">${item.name}</span>
        <span class="card-proker__desc">${item.desc}</span>
        <div class="card-proker__divider"></div>
        <div class="card-proker__foot">
          <span class="card-proker__month">${iconCalendar}${item.month}</span>
          <span class="card-proker__cta">Detail</span>
        </div>
      </a>
    </li>
  `;
}

// container: elemen <ul data-js="proker-list">
export function renderProkerGrid(container, list) {
  container.innerHTML = list.map(cardHtml).join('');
}