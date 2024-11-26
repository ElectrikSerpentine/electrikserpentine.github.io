function toggleDarkMode() {
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
});