// Toggle Tema Dark/Light
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load tema dari localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Update ikon tema
updateIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
});

function updateIcon(theme) {
  const icon = themeToggle.querySelector('img');
  icon.style.filter = theme === 'dark' ? 'invert(1)' : 'none';
}