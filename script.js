const openBtn = document.getElementById('openContact');
const contactModal = document.getElementById('contactModal');
const closeContactBtn = document.getElementById('closeContact');

function openContactModal() {
  contactModal.setAttribute('aria-hidden', 'false');
}

function closeContactModal() {
  contactModal.setAttribute('aria-hidden', 'true');
}

if (openBtn && contactModal && closeContactBtn) {
  openBtn.addEventListener('click', openContactModal);
  closeContactBtn.addEventListener('click', closeContactModal);

  window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      closeContactModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal.getAttribute('aria-hidden') === 'false') {
      closeContactModal();
    }
  });
}

const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}