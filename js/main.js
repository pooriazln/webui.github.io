// navbar
const burger = document.querySelector(".navbar__burger");
const navBar = document.querySelector(".navbar");
const items = document.querySelectorAll(".navbar__menu__item");
burger.addEventListener("click", () => {
  navBar.classList.toggle("expand");
  burger.classList.toggle("times");
  items.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `navItems 0.5s forwards ${index / 5 + 0.3}s`;
    }
  });
});
// Protfolio
const tabItems = document.querySelectorAll(".main__portfolio__tabs__item");
const tabContentItems = document.querySelectorAll(
  ".main__portfolio__tab-content"
);
tabItems.forEach((item) => item.addEventListener("click", selectContent));
function selectContent(e) {
  removeActive();
  e.target.classList.add("main__portfolio__tabs__item--active");
  removeShow();
  const content = document.querySelector(`#${e.target.id}-content`);
  content.classList.add("show");
}
function removeActive() {
  tabItems.forEach((item) =>
    item.classList.remove("main__portfolio__tabs__item--active")
  );
}
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
AOS.init();