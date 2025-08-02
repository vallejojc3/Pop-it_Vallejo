// Menú desplegable de navegación
document.querySelectorAll(".menu-toggle").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("data-target");
    const dropdown = document.getElementById(targetId);

    // Cierra otros desplegables
    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== dropdown) d.classList.remove("dropdown--visible");
    });

    // Alternar visibilidad
    dropdown.classList.toggle("dropdown--visible");
  });
});

// Menú responsive burger
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
});

// Animaciones al hacer scroll (para elementos con clase "aparecer")
const observador = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll(".aparecer").forEach(el => {
  observador.observe(el);
});
