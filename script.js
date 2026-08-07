document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('site-menu');

  if (!nav || !toggle || !menu) return;

  function setMenu(open) {
    nav.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', () => {
    setMenu(!nav.classList.contains('nav-open'));
  });

  menu.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) setMenu(false);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenu(false);
  });
});
