const body = document.body;
const toggleBtn = document.getElementById('modoToggle');

// Aplica modo oscuro si está guardado
if (localStorage.getItem('modoOscuro') === 'true') {
  body.classList.add('dark-mode');
  toggleBtn.innerHTML = '☀️ Modo claro';
}

// Alterna modo y actualiza ícono + estado
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  const activo = body.classList.contains('dark-mode');
  localStorage.setItem('modoOscuro', activo.toString());
  toggleBtn.innerHTML = activo ? '☀️ Modo claro' : '🌙 Modo oscuro';
}

toggleBtn.addEventListener('click', toggleDarkMode);