// href = "https://wa.me/+6289519510955?text=Order%20Makanan%20STUP%20ROTI%20";

const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hammenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const menu = document.querySelector("#hammenu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
