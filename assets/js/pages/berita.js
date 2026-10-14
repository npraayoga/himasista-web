// Entry point berita.html (Detail Berita). Baca ?id=, tampilkan artikelnya,
// pasang tombol bagikan/salin tautan, lalu render grid "Berita Lainnya"
// yang bisa difilter kategori.

import { qs, getParam, fillFields } from '../utils/dom.js';
import { initMobileMenu } from '../components/mobile-menu.js';
import { initReveal } from '../utils/reveal.js';
import { getBeritaById, getOtherBerita, getBeritaCategories } from '../data/berita.js';
import { renderNewsGrid } from '../render/news-card.js';
import { createFilterGroup } from '../render/filter.js';

function articleBodyHtml(item) {
  const paragraphs = [`<p>${item.lead}</p>`, ...item.body.map((p) => `<p>${p}</p>`)];

  // Dokumentasi tambahan — nama file generik, tinggal diganti foto asli.
  paragraphs.push(`
    <div class="article__doc-grid">
      <figure class="media"><img src="assets/images/berita/${item.id}-doc-1.jpg" alt="" loading="lazy"></figure>
      <figure class="media"><img src="assets/images/berita/${item.id}-doc-2.jpg" alt="" loading="lazy"></figure>
    </div>
  `);

  if (item.quote) {
    paragraphs.push(`
      <blockquote>
        "${item.quote}"
        <cite>— ${item.quoteName}, ${item.quoteRole}</cite>
      </blockquote>
    `);
  }
  if (item.closing) paragraphs.push(`<p>${item.closing}</p>`);

  return paragraphs.join('\n');
}

function init() {
  initMobileMenu();

  const item = getBeritaById(getParam('id'));
  const content = qs('[data-js="news-content"]');
  const listSection = qs('.news-list');
  const notFound = qs('[data-js="not-found"]');

  if (!item) {
    if (content) content.hidden = true;
    if (listSection) listSection.hidden = true;
    if (notFound) notFound.hidden = false;
    initReveal();
    return;
  }

  document.title = `${item.title} — HIMASISTA Untag Surabaya`;

  fillFields(document, {
    'news-category': item.category,
    'news-title': item.title,
    'news-author': item.author,
    'news-location': item.location,
    'news-event': item.event,
    'news-organizer': item.organizer,
    'news-event-date': item.eventDate,
  });

  const dateEl = qs('[data-js="news-date"]');
  if (dateEl) dateEl.textContent = item.date;

  const cover = qs('[data-js="news-cover"]');
  if (cover) cover.src = `assets/images/berita/${item.id}.jpg`;

  const bodyEl = qs('[data-js="news-body"]');
  if (bodyEl) bodyEl.innerHTML = articleBodyHtml(item);

  const prokerLink = qs('[data-js="news-proker-link"]');
  if (prokerLink) {
    if (item.prokerId) {
      prokerLink.href = `program-kerja.html?id=${item.prokerId}`;
      prokerLink.hidden = false;
    } else {
      prokerLink.hidden = true;
    }
  }

  initShareButtons(item);
  initOtherBerita(item.id);
  initReveal();
}

function initShareButtons(item) {
  const shareBtn = qs('[data-js="share"]');
  const copyBtn = qs('[data-js="copy-link"]');
  const url = window.location.href;

  shareBtn?.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: item.title, url });
      } catch {
        /* dibatalkan pengguna — tidak perlu ditangani */
      }
    } else {
      copyLink(url, copyBtn);
    }
  });

  copyBtn?.addEventListener('click', () => copyLink(url, copyBtn));
}

async function copyLink(url, btn) {
  try {
    await navigator.clipboard.writeText(url);
    if (btn) {
      const original = btn.getAttribute('aria-label');
      btn.setAttribute('aria-label', 'Tautan tersalin');
      setTimeout(() => btn.setAttribute('aria-label', original), 2000);
    }
  } catch {
    /* browser tanpa izin clipboard — tautan tetap bisa disalin manual dari address bar */
  }
}

function initOtherBerita(currentId) {
  const grid = qs('[data-js="news-list"]');
  const emptyEl = qs('[data-js="news-empty"]');
  const categoryFilterEl = qs('[data-js="filter-category"]');
  if (!grid) return;

  const all = getOtherBerita(currentId);
  const categoryOptions = ['Semua', ...getBeritaCategories()];

  function apply(category) {
    const filtered = category === 'Semua' ? all : all.filter((b) => b.category === category);
    renderNewsGrid(grid, filtered);
    if (emptyEl) emptyEl.hidden = filtered.length > 0;
    grid.hidden = filtered.length === 0;
    initReveal();
  }

  if (categoryFilterEl) {
    createFilterGroup(categoryFilterEl, categoryOptions, apply, 'chip');
  }
  apply('Semua');
}

document.addEventListener('DOMContentLoaded', init);