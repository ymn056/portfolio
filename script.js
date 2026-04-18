// Contact modal
const openBtn  = document.getElementById('openContact');
const contactModal = document.getElementById('contactModal');
const closeContactBtn = document.getElementById('closeContact');

if (openBtn && contactModal && closeContactBtn) {
  openBtn.addEventListener('click', () => {
    contactModal.setAttribute('aria-hidden', 'false');
  });
  closeContactBtn.addEventListener('click', () => {
    contactModal.setAttribute('aria-hidden', 'true');
  });
  window.addEventListener('click', (e) => {
    if (e.target === contactModal) contactModal.setAttribute('aria-hidden', 'true');
  });
}

// Section reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
reveals.forEach(el => io.observe(el));

// Project modal (Wordle)
function openModal(id){ document.getElementById(id).setAttribute('aria-hidden', 'false'); }
function closeModal(id){ document.getElementById(id).setAttribute('aria-hidden', 'true'); }

document.querySelectorAll('[data-open]').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.getAttribute('data-open')));
});
document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close')));
});
window.addEventListener('click', (e) => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(m => { if (e.target === m) m.setAttribute('aria-hidden', 'true'); });
});