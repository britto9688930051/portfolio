// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Any element with data-nav scrolls to the matching section — no anchor navigation involved
document.querySelectorAll('[data-nav]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById(el.dataset.nav);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu after tapping a link
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-spy: highlight the nav link for the section in view
const navAnchors = document.querySelectorAll('.nav-links a[data-nav]');

const setActive = (id) => {
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.dataset.nav === id);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActive(entry.target.id);
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

document.querySelectorAll('section[id]').forEach(sec => observer.observe(sec));

// EmailJS init
emailjs.init("S4i9K4B5rWo1D3Jf_");