// Entry point program-kerja.html (Detail Program Kerja). Baca ?id=,
// tampilkan detailnya, lalu render grid "Program Kerja Lainnya" yang bisa
// difilter status + departemen sekaligus (kombinasi AND).

import { qs, getParam, fillFields } from '../utils/dom.js';
import { initMobileMenu } from '../components/mobile-menu.js';
import { initReveal } from '../utils/reveal.js';
import { getProkerById, getOtherProker, getProkerDepartments } from '../data/proker.js';
import { renderTimeline } from '../render/timeline.js';
import { renderProkerGrid } from '../render/proker-card.js';
import { createFilterGroup } from '../render/filter.js';

const STATUS_OPTIONS = ['Semua', 'Rencana', 'Berjalan', 'Selesai'];

function renderGallery(container, id) {
  const shots = [1, 2, 3, 4];
  container.innerHTML = shots
    .map((n, i) => `
      <figure class="media${i === 0 ? ' media--kenburns' : ''}">
        <img src="assets/images/proker/${id}-doc-${n}.jpg" alt="" loading="lazy">
      </figure>
    `)
    .join('');
}

function init() {
  initMobileMenu();

  const item = getProkerById(getParam('id'));
  const content = qs('[data-js="proker-content"]');
  const listSection = qs('.proker-list');
  const notFound = qs('[data-js="not-found"]');

  if (!item) {
    if (content) content.hidden = true;
    if (listSection) listSection.hidden = true;
    if (notFound) notFound.hidden = false;
    initReveal();
    return;
  }

  document.title = `${item.name} — HIMASISTA Untag Surabaya`;

  fillFields(document, {
    'proker-dep': item.dep,
    'proker-name': item.name,
    'proker-summary': item.summary,
    'proker-date': item.date,
    'proker-location': item.location,
    'proker-pic': item.pic,
    'proker-target': item.target,
    'proker-about': item.about,
  });

  const statusChip = qs('[data-js="proker-status"]');
  if (statusChip) {
    const statusClass = { Rencana: 'chip--rencana', Berjalan: 'chip--berjalan', Selesai: 'chip--selesai' }[item.status];
    statusChip.textContent = item.status;
    statusChip.classList.add(statusClass);
  }

  const registerBtn = qs('[data-js="proker-register"]');
  if (registerBtn) registerBtn.href = '#kontak';

  const cover = qs('[data-js="proker-cover"]');
  if (cover) cover.src = `assets/images/proker/${item.id}.jpg`;

  const goalsList = qs('[data-js="proker-goals"]');
  if (goalsList) goalsList.innerHTML = item.goals.map((g) => `<li><span>${g}</span></li>`).join('');

  const timelineEl = qs('[data-js="proker-timeline"]');
  if (timelineEl) renderTimeline(timelineEl, item.steps);

  const galleryEl = qs('[data-js="proker-gallery"]');
  if (galleryEl) renderGallery(galleryEl, item.id);

  initOtherProker(item.id);
  initReveal();
}

function initOtherProker(currentId) {
  const grid = qs('[data-js="proker-list"]');
  const countEl = qs('[data-js="proker-count"]');
  const emptyEl = qs('[data-js="proker-empty"]');
  const statusFilterEl = qs('[data-js="filter-status"]');
  const depFilterEl = qs('[data-js="filter-dep"]');
  if (!grid) return;

  const all = getOtherProker(currentId);
  const depOptions = ['Semua', ...getProkerDepartments()];
  const state = { status: 'Semua', dep: 'Semua' };

  function apply() {
    const filtered = all.filter(
      (p) =>
        (state.status === 'Semua' || p.status === state.status) &&
        (state.dep === 'Semua' || p.dep === state.dep)
    );
    renderProkerGrid(grid, filtered);
    if (countEl) countEl.textContent = `Menampilkan ${filtered.length} program kerja`;
    if (emptyEl) emptyEl.hidden = filtered.length > 0;
    grid.hidden = filtered.length === 0;
    initReveal(); // kartu hasil filter baru juga ikut animasi reveal
  }

  if (statusFilterEl) {
    createFilterGroup(statusFilterEl, STATUS_OPTIONS, (value) => { state.status = value; apply(); }, 'segmented');
  }
  if (depFilterEl) {
    createFilterGroup(depFilterEl, depOptions, (value) => { state.dep = value; apply(); }, 'chip');
  }

  apply();
}

document.addEventListener('DOMContentLoaded', init);