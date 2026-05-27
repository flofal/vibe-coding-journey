// Navegación entre escenas + widget de pensamientos de Sofía.

function goTo(name) {
  document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('scene-' + name);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (name === 'sofia-2') {
    if (typeof initFarosMap === 'function') {
      if (!mapInstance) initFarosMap();
      refreshMapSize();
    }
  }
}

function goHome() {
  goTo('home');
}

function renderThoughtPanel(id) {
  const text = t('sofia1.thought.' + id);
  if (!text) return;
  const output = document.getElementById('thought-output');
  if (output) output.innerHTML = `<div class="thought-content">${text}</div>`;
}

function showThought(id) {
  document.querySelectorAll('#scene-sofia-1 .widget-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.id === id);
  });
  renderThoughtPanel(id);
}
