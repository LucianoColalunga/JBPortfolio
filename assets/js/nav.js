// Handles the mobile menu toggle and scrollspy highlighting for the main nav.
// Single responsibility: DOM wiring for navigation only.
export function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  const setOpen = (isOpen) => {
    mobileNav.classList.toggle("hidden", !isOpen);
    mobileNav.classList.toggle("flex", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.querySelector(".material-symbols-outlined").textContent = isOpen ? "close" : "menu";
  };

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      setOpen(mobileNav.classList.contains("hidden"));
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });
  }

  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

  const linkBySectionId = new Map(navLinks.map((link) => [link.dataset.path, link]));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkBySectionId.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
