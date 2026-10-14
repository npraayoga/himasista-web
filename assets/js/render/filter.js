// Builder generik untuk 2 gaya filter yang dipakai berulang:
// - segmented control (tab pill, mis. filter status proker)
// - chip filter yang bisa digeser ke samping (mis. filter departemen/kategori)
// Keduanya sama-sama: render tombol dari daftar opsi, lalu panggil onChange
// tiap kali pengunjung klik salah satu opsi.

// container: elemen wadah (.segmented atau .chip-scroll)
// options: array string, opsi pertama otomatis aktif ("Semua" dsb.)
// onChange(value): dipanggil dengan opsi yang baru dipilih
export function createFilterGroup(container, options, onChange, style = 'chip') {
  const btnClass = style === 'segmented' ? 'segmented__btn' : 'chip-filter';

  container.innerHTML = options
    .map((label, i) => `<button type="button" class="${btnClass}${i === 0 ? ' is-active' : ''}" data-value="${label}">${label}</button>`)
    .join('');

  const buttons = Array.from(container.querySelectorAll(`.${btnClass}`));
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      onChange(btn.dataset.value);
    });
  });

  return {
    // Dipakai kalau perlu reset filter ke opsi pertama lewat kode (tidak
    // dipakai di halaman saat ini, disediakan untuk pengembangan lanjutan)
    reset() {
      buttons.forEach((b, i) => b.classList.toggle('is-active', i === 0));
    },
  };
}