document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target); // run once
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
