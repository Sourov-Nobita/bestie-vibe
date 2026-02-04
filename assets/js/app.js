const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0)";
        entry.target.style.opacity = "1";
        entry.target.style.transition =
          "0.6s cubic-bezier(.2,.8,.2,1)";
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach(card => observer.observe(card));
