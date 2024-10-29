const phrases = ["Web Designer", "Video Editor", "Database Administrator"];
let currentPhrase = 0;
let currentLetter = 0;
const textElement = document.querySelector(".text");

function type() {
  const currentText = phrases[currentPhrase];
  textElement.textContent = currentText.slice(0, currentLetter);

  if (currentLetter < currentText.length) {
    currentLetter++;
    setTimeout(type, 150); // Speed of typing each letter
  } else {
    setTimeout(erase, 1500); // Pause before erasing
  }
}

function erase() {
  const currentText = phrases[currentPhrase];
  textElement.textContent = currentText.slice(0, currentLetter);

  if (currentLetter > 0) {
    currentLetter--;
    setTimeout(erase, 100); // Speed of erasing each letter
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 500); // Pause before typing the next phrase
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // Optional: remove to keep sections visible once scrolled past
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the section is visible
    }
  );

  sections.forEach((section) => observer.observe(section));
});
