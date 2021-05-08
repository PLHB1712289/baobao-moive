const seed = [
  "https://media.voocdn.com/media/image/id/602dd331acc3992a1d8b4588",
  "https://media.voocdn.com/media/image/id/5d6b3b700df9384433ae24dc",
];

const sliderItem = document.querySelectorAll(".slider__list-item");
const sliderControl = document.querySelectorAll(".slider__control");
const sliderThumb = document.querySelectorAll(".slider__list-thumb-item");

function updateThumbActive() {
  sliderThumb.forEach(function (thumb, i) {
    if (sliderControl[i].checked) {
      thumb.classList.add("slider__list-thumb-item-active");
    } else {
      thumb.classList.remove("slider__list-thumb-item-active");
    }
  });
}

const pickSlide = (index) => {
  if (index >= sliderControl.length) return;

  sliderControl[index].checked = true;
  updateThumbActive();
};

// Set up event click for thumb
sliderThumb.forEach(function (thumb, index) {
  thumb.addEventListener("click", () => {
    sliderControl[index].checked = true;
    updateThumbActive();
    i = index;
  });
});

pickSlide(0);

let i = 1;
let count = 2;
const autoSlide = setInterval(() => {
  pickSlide(i);
  i++;

  if (count <= 0) {
    clearInterval(autoSlide);
    pickSlide(0);
  }

  if (i >= sliderControl.length) {
    i = 0;
    count--;
  }
}, 3000);

// Menu on mobile
let openMenu = false;
const btnMenu = document.querySelector(".header__navbar-menu-mobile");
const iconBtnMenu = btnMenu.querySelector(".header__navbar-icon-mobile");
const menu = document.querySelector(".header__navbar-menu-mobile-list");

btnMenu.addEventListener("click", () => {
  openMenu = !openMenu;
  const currIcon = !openMenu ? "ti-close" : "ti-menu";
  const newIcon = openMenu ? "ti-close" : "ti-menu";
  const isDisplay = openMenu ? "0" : "-100%";

  iconBtnMenu.classList.remove(currIcon);
  iconBtnMenu.classList.add(newIcon);
  menu.style.right = isDisplay;
});
