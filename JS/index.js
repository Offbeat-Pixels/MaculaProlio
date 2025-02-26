document.addEventListener("DOMContentLoaded", () => {
  let upto = 0;
  let counting = false; // Prevents restarting the counter

  function updated() {
    let count = document.getElementById("counter");
    if (!count || counting) return;

    counting = true; // Ensure it runs only once
    let counts = setInterval(() => {
      count.innerHTML = ++upto;
      if (upto === 25) {
        clearInterval(counts);
      }
    }, 100);
  }

  function checkVisibility() {
    let counter = document.getElementById("counter");
    if (!counter) return;

    let position = counter.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      updated();
      window.removeEventListener("scroll", checkVisibility); // Remove event to prevent multiple runs
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Check if already in view on load
});

function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => (document.getElementById(id).innerHTML = data));
}
