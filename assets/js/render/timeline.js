// Render "Rangkaian Kegiatan" di halaman Detail Program Kerja: garis
// vertikal + titik status per tahap (selesai/berjalan/akan datang).

const MARKER = {
  done: { cls: 'timeline__marker--done', badge: 'chip--selesai', label: 'Selesai' },
  now: { cls: 'timeline__marker--now', badge: 'chip--berjalan', label: 'Berlangsung' },
  upcoming: { cls: 'timeline__marker--upcoming', badge: 'chip--rencana', label: 'Akan datang' },
};

function markerIcon(status) {
  if (status === 'done') {
    return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg>';
  }
  return '';
}

function stepHtml(step) {
  const m = MARKER[step.status] || MARKER.upcoming;
  return `
    <li class="timeline__item">
      <span class="timeline__marker ${m.cls}">${markerIcon(step.status)}</span>
      <div class="timeline__body">
        <div class="timeline__head">
          <span class="timeline__title">${step.title}</span>
          <span class="chip ${m.badge}">${m.label}</span>
        </div>
        <span class="timeline__date">${step.date}</span>
        <p class="timeline__desc">${step.desc}</p>
      </div>
    </li>
  `;
}

// container: elemen <ol data-js="proker-timeline">
export function renderTimeline(container, steps) {
  container.innerHTML = steps.map(stepHtml).join('');

  // Garis cyan terisi mengikuti proporsi tahap yang sudah selesai —
  // tahap "berlangsung" dihitung setengah supaya progresnya terasa nyambung.
  const done = steps.filter((s) => s.status === 'done').length;
  const now = steps.filter((s) => s.status === 'now').length ? 0.5 : 0;
  const progress = ((done + now) / steps.length) * 100;
  container.style.setProperty('--progress', `${progress}%`);
}