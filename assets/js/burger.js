const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-container");
hamburger.addEventListener("click", function () {
    this.classList.toggle("is-active");
    nav.classList.toggle("active");
}, false);