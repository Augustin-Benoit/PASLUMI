// Navigation mobile
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Année dynamique dans le footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}

// Filtre galerie
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');

    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    galleryItems.forEach((item) => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Animation au scroll (reveal)
const revealElements = document.querySelectorAll('.reveal');

const onScrollReveal = () => {
  const triggerBottom = window.innerHeight * 0.9;

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', onScrollReveal);
window.addEventListener('load', onScrollReveal);


