// Entry point departemen.html (Detail Departemen). Baca ?id= dari URL,
// cari datanya, lalu isi header + grid staff. Kalau id tidak ditemukan,
// tampilkan section "not-found" dan sembunyikan konten departemen.

import { qs, getParam, fillFields } from '../utils/dom.js';
import { initMobileMenu } from '../components/mobile-menu.js';
import { initReveal } from '../utils/reveal.js';
import { getDepartemenById } from '../data/departemen.js';
import { renderStaffGrid } from '../render/staff-card.js';

function renderChipList(container, items) {
  container.innerHTML = items.map((label) => `<li>${label}</li>`).join('');
}

function init() {
  initMobileMenu();

  const dept = getDepartemenById(getParam('id'));
  const content = qs('[data-js="dept-content"]');
  const staffSection = qs('[data-js="staff-section"]');
  const notFound = qs('[data-js="not-found"]');

  if (!dept) {
    if (content) content.hidden = true;
    if (staffSection) staffSection.hidden = true;
    if (notFound) notFound.hidden = false;
    initReveal();
    return;
  }

  document.title = `${dept.name} — HIMASISTA Untag Surabaya`;

  fillFields(document, {
    'dept-name': dept.name,
    'dept-desc': dept.desc,
  });

  const iconEl = qs('[data-js="dept-icon"]');
  if (iconEl) {
    iconEl.innerHTML = `<svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${dept.icon}</svg>`;
  }

  const prokerChips = qs('[data-js="dept-proker"]');
  if (prokerChips) renderChipList(prokerChips, dept.prokerNames);

  const staffList = qs('[data-js="staff-list"]');
  if (staffList) renderStaffGrid(staffList, dept.staff, dept.id);

  initReveal();
}

document.addEventListener('DOMContentLoaded', init);