document.addEventListener("DOMContentLoaded", function() {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const iconOpen = hamburgerBtn.querySelector("img:first-child");
    const iconClose = hamburgerBtn.querySelector("img:last-child");
    const navbarToggle = document.querySelector("#navbar-toggle");
  
    hamburgerBtn.addEventListener("click", function() {
      iconOpen.classList.toggle("d-none");
      iconClose.classList.toggle("d-none");
    });
  });