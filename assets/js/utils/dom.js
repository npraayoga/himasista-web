// Kumpulan helper DOM kecil dipakai di banyak file, supaya tidak menulis
// document.querySelector berulang-ulang dengan gaya berbeda-beda.

// Ambil satu elemen. root opsional (default: seluruh dokumen).
export function qs(selector, root = document) {
  return root.querySelector(selector);
}

// Ambil banyak elemen sebagai array asli (bukan NodeList) supaya bisa
// langsung pakai .map/.filter/.forEach.
export function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

// Baca satu parameter dari URL, mis. getParam('id') untuk "?id=slug".
export function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// Isi elemen [data-js="key"] di dalam root dengan teks/HTML dari sebuah
// object { key: value }. Dipakai untuk mengisi konten halaman detail
// (judul, tanggal, dsb.) tanpa menulis qs() satu-satu untuk tiap field.
export function fillFields(root, values) {
  Object.entries(values).forEach(([key, value]) => {
    const el = qs(`[data-js="${key}"]`, root);
    if (!el) return;
    if (value == null) return;
    el.textContent = value;
  });
}