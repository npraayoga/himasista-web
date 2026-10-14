// Render grid kartu Departemen di beranda (section #departemen).

import { iconArrowRight } from './icons.js';

function cardHtml(dept) {
  return `
    <a href="departemen.html?id=${dept.id}" class="card-departemen reveal">
      <span class="card-departemen__icon">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${dept.icon}</svg>
      </span>
      <span class="card-departemen__title">${dept.name}</span>
      <span class="card-departemen__link">Selengkapnya ${iconArrowRight}</span>
    </a>
  `;
}

// container: elemen <ul data-js="departemen-list">
export function renderDepartemenGrid(container, list) {
  container.innerHTML = list.map((dept) => `<li>${cardHtml(dept)}</li>`).join('');
}