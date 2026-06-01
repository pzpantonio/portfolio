const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const links = document.querySelectorAll('.site-nav a');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

links.forEach((link) => {
  if (link.href === window.location.href || link.href === `${window.location.origin}${window.location.pathname}`) {
    link.classList.add('active');
  }
});

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    formStatus.textContent = 'Thanks! Your message is ready to send.';
    contactForm.reset();
  });
}
