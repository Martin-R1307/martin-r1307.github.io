document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-content");
  heroText.style.opacity = 0;
  heroText.style.transform = "translateY(40px)";
  
  setTimeout(() => {
    heroText.style.transition = "all 1s ease";
    heroText.style.opacity = 1;
    heroText.style.transform = "translateY(0)";
  }, 200);
});

// --- Transición suave entre páginas ---
document.addEventListener("DOMContentLoaded", () => {
  // Hace aparecer la página suavemente al cargar
  document.body.classList.add("fade-in");

  // Intercepta clics en los enlaces de navegación
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const target = link.getAttribute("href");

    // Evita aplicar a enlaces externos o anclas
    if (target.startsWith("http") || target.startsWith("#")) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.add("fade-out");

      // Espera la animación y luego cambia de página
      setTimeout(() => {
        window.location.href = target;
      }, 400);
    });
  });
});

// --- Animaciones suaves al hacer scroll ---
const elements = document.querySelectorAll('.container, .project-card, .edu-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.8s ease';
  observer.observe(el);
});

// --- Menú hamburguesa ---
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle') || document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });
    // Cierra el menú al hacer click en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });
  }
});
