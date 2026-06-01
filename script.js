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

    formStatus.textContent = 'Sending message...';

    fetch(contactForm.action.replace('formsubmit.co', 'formsubmit.co/ajax'), {
      method: 'POST',
      body: new FormData(contactForm),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        formStatus.textContent = 'Thanks! Your message has been sent successfully.';
        contactForm.reset();
      } else {
        formStatus.textContent = 'Oops! Something went wrong. Please try again.';
      }
    })
    .catch(error => {
      formStatus.textContent = 'Oops! There was a problem sending your message.';
    });
  });
}
