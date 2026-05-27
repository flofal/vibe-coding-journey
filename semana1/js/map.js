// Mapa interactivo de Sofía — Leaflet sobre OpenStreetMap.
// Nombres y detalles de cada faro se leen de translations.js (vía t()).

let mapInstance = null;
const markers = {};

const FARO_SVG = `
  <svg viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg">
    <circle class="faro-glow" cx="12" cy="6" r="6" fill="#017361" opacity="0"/>
    <path d="M8.5 4 L12 1 L15.5 4 Z" fill="currentColor"/>
    <rect x="9" y="4" width="6" height="4" fill="currentColor"/>
    <rect x="8" y="8" width="8" height="1.2" fill="currentColor"/>
    <path d="M9 9.2 L15 9.2 L13.8 24.5 L10.2 24.5 Z" fill="currentColor"/>
    <rect x="9.5" y="14" width="5" height="2.5" fill="white" opacity="0.5"/>
    <rect x="7.5" y="24.5" width="9" height="2.5" fill="currentColor"/>
    <rect x="5.5" y="27" width="13" height="1.5" rx="0.5" fill="currentColor"/>
  </svg>
`;

function initFarosMap() {
  if (mapInstance) return;

  mapInstance = L.map('sofia-map', {
    center: [-34.55, -55.7],
    zoom: 7,
    minZoom: 6,
    maxZoom: 13,
    scrollWheelZoom: false,
    zoomControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
    maxZoom: 19
  }).addTo(mapInstance);

  Object.entries(FAROS).forEach(([id, faro]) => {
    const icon = L.divIcon({
      className: 'faro-marker-wrap',
      html: `<div class="faro-marker" data-id="${id}">${FARO_SVG}</div>`,
      iconSize: [24, 32],
      iconAnchor: [12, 32]
    });
    const marker = L.marker(faro.coords, { icon, title: t('faro.' + id + '.name') })
      .addTo(mapInstance)
      .on('click', () => showFaro(id));
    markers[id] = marker;
  });
}

function refreshMapSize() {
  if (mapInstance) {
    setTimeout(() => mapInstance.invalidateSize(), 80);
  }
}

function renderFaroPanel(id) {
  const data = FAROS[id];
  if (!data) return;
  const panel = document.getElementById('faro-panel');
  if (!panel) return;
  panel.innerHTML = `
    <div class="faro-year">${data.year}</div>
    <div class="faro-name">${t('faro.' + id + '.name')}</div>
    <div class="faro-detail">${t('faro.' + id + '.detail')}</div>
  `;
}

function showFaro(id) {
  document.querySelectorAll('.faro-marker').forEach(el => el.classList.remove('active'));
  const activeEl = document.querySelector(`.faro-marker[data-id="${id}"]`);
  if (activeEl) activeEl.classList.add('active');
  renderFaroPanel(id);
}
