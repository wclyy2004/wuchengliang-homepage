const header = document.querySelector(".site-header");
const year = document.querySelector("#year");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

year.textContent = new Date().getFullYear();
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
