// Render kartu berita untuk grid "Berita Lainnya" di halaman Detail Berita.
// (Beranda tidak memakai file ini — beranda pakai carousel.js.)

function cardHtml(item) {
  return `
    <li>
      <a href="berita.html?id=${item.id}" class="card-news reveal">
        <div class="media card-news__media media--hover-zoom">
          <img src="assets/images/berita/${item.id}.jpg" alt="" loading="lazy">
        </div>
        <div class="card-news__body">
          <div class="card-news__meta">
            <span class="chip chip--blue">${item.category}</span>
            <span class="card-news__date">${item.date}</span>
          </div>
          <span class="card-news__title">${item.title}</span>
          <span class="card-news__excerpt">${item.excerpt}</span>
          <span class="card-news__cta">Baca selengkapnya</span>
        </div>
      </a>
    </li>
  `;
}

// container: elemen <ul data-js="news-list">
export function renderNewsGrid(container, list) {
  if (!list.length) {
    container.innerHTML = '';
    return;
  }
  container.innerHTML = list.map(cardHtml).join('');
}