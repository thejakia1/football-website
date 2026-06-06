function initMobileMenu() {
  const btn  = document.getElementById('mobHam');
  const menu = document.getElementById('mobMenu');
  if (!btn || !menu) return;

  function openMenu() {
    menu.classList.add('is-open');
    btn.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => {
    btn.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  menu.querySelectorAll('.mob-menu-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

function initMobileAccordions() {
  if (window.innerWidth >= 640) return;

  document.querySelectorAll('.group-card').forEach(card => {
    const header = card.querySelector('.group-header');
    const chevron = document.createElement('span');
    chevron.className = 'group-chevron';
    chevron.textContent = '›';
    header.appendChild(chevron);

    header.addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });

  document.querySelectorAll('.format-phase-section').forEach(section => {
    const label = section.querySelector('.format-phase-label');
    const chevron = document.createElement('span');
    chevron.className = 'format-phase-chevron';
    chevron.textContent = '›';
    label.appendChild(chevron);

    label.addEventListener('click', () => {
      section.classList.toggle('open');
      if (section.classList.contains('open')) {
        section.querySelectorAll('.format-card').forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      }
    });
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.group-card, .format-card, .city-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

document.addEventListener('app:ready', () => {
  initMobileMenu();
  initMobileAccordions();
  initScrollReveal();
});
