// Smooth scroll button effect (opsional)
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-emerald-700/95", "shadow-lg");
    } else {
      navbar.classList.remove("bg-emerald-700/95", "shadow-lg");
    }
  });

