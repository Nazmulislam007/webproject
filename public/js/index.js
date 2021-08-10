const navItems = document.querySelector(".nav-items");
const hamburger = document.querySelector(".hamburger");
const span = document.querySelectorAll("span");
// console.log(span);

hamburger.addEventListener("click", () => {
  if (navItems.style.maxHeight) {
    navItems.style.maxHeight = null;
  } else {
    navItems.style.maxHeight = navItems.scrollHeight + "px";
  }
  span.forEach((e) => {
    e.classList.toggle("active");
  });
});
