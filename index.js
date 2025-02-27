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





(() => {
  const state = {};
  let nodesToDestroy = [];
  let pendingUpdate = false;

  function destroyAnyNodes() {
    nodesToDestroy.forEach((el) => el.remove());
    nodesToDestroy = [];
  }

  function update() {
    if (pendingUpdate === true) {
      return;
    }
    pendingUpdate = true;

    document.querySelectorAll("main").forEach((el) => {
      el.setAttribute("space", "60");
    });

    destroyAnyNodes();
    pendingUpdate = false;
  }

  // Initialize on load
  document.addEventListener("DOMContentLoaded", update);
})();

 document.addEventListener("DOMContentLoaded", () => {
   const menuBtn = document.getElementById("menu-btn");
   const mobileMenu = document.getElementById("mobile-menu");
   const mobileServiceBtn = document.getElementById("mobile-service-btn");
   const mobileDropdown = document.getElementById("mobile-dropdown");
   const arrow = document.getElementById("arrow");

   if (menuBtn && mobileMenu) {
     menuBtn.addEventListener("click", () => {
       mobileMenu.classList.toggle("hidden");
     });
   }

   if (mobileServiceBtn && mobileDropdown && arrow) {
     mobileServiceBtn.addEventListener("click", () => {
       mobileDropdown.classList.toggle("hidden");
       arrow.classList.toggle("rotate-180");
     });
   }
 });