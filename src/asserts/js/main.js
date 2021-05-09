const seed = [
  {
    name: "Li Ca Hành (Đại Đường Nữ Nhi Hành)",
    subName: "Court Lady (2021)",
    thumb: "https://media.voocdn.com/media/image/id/5d6b3b700df9384433ae24dc",
    tag: "Full Vietsub",
  },
  {
    name: "Mouse (Kẻ Săn Người)",
    subName: "Mouse (2021)",
    thumb: "https://media.voocdn.com/media/image/id/605aa43cacc39972078b456b",
    tag: "Full Vietsub",
  },
  {
    name: "Cố Tiên Sinh, Hóa Ra Anh Là Như Vậy",
    subName: "Hello Mr. Gu (2021)",
    thumb: "https://media.voocdn.com/media/image/id/6065301bacc3990bbb8b45d1",
    tag: "Full Vietsub",
  },
  {
    name: "Đấu La Đại Lục",
    subName: "Soul Land 2018",
    thumb: "https://media.voocdn.com/media/image/id/5ed470ecacc3997cb78b45c8",
    tag: "Full Vietsub",
  },

  {
    name: "Thanh Xuân Có Bạn Mùa 3",
    subName: "Youth With You Season 3",
    thumb: "https://media.voocdn.com/media/image/id/602dd331acc3992a1d8b4588",
    tag: "Full Vietsub",
  },

  {
    name: "Thời Gian Lương Thần Mỹ Cảnh",
    subName: "Love Scenery (Lương Thần Mỹ Cảnh Hảo Thời Quang)",
    thumb: "https://media.voocdn.com/media/image/id/5ee9a3a9acc39970608b4597",
    tag: "Full Vietsub",
  },

  {
    name: "Trường Luật",
    subName: "Law School (2021)",
    thumb: "https://media.voocdn.com/media/image/id/6089fd51acc399cc8f8b4579",
    tag: "Full Vietsub",
  },

  {
    name: "Hướng Dương Ngược Nắng Phần 2",
    subName: "Hướng Dương Ngược Nắng Phần 2",
    thumb: "https://media.voocdn.com/media/image/id/603476ddacc399668b8b463d",
    tag: "Full Vietsub",
  },

  {
    name: "Vincenzo",
    subName: "Vincenzo (2021)",
    thumb: "https://media.voocdn.com/media/image/id/60326e9aacc399337f8b4582",
    tag: "Full Vietsub",
  },
];

const filmsRecomend = document.querySelectorAll(".films__recomend");
filmsRecomend.forEach((filmRecomend) => {
  const listFilmItem = filmRecomend.querySelectorAll(
    ".films__recomend-film-item"
  );

  listFilmItem.forEach((item, index) => {
    item.querySelector(
      ".film__recomend-film-item-thumbnail"
    ).style.backgroundImage = `url(${seed[index].thumb})`;

    item.querySelector(".film__recomend-film-item-tag").innerText =
      seed[index].tag;

    item.querySelector(".film__recommend-film-item-info-name").innerText =
      seed[index].name;

    item.querySelector(".film__recommend-film-item-info-sub-name").innerText =
      seed[index].subName;
  });
});

document.querySelectorAll(".ranking__list").forEach((tab) => {
  const rankingListItem = tab.querySelectorAll(".ranking__list-item");
  rankingListItem.forEach((item, index) => {
    item.querySelector(
      ".ranking__list-item-thumb"
    ).style.backgroundImage = `url(${seed[index].thumb})`;
    item.querySelector(".ranking__list-item-rank").innerText = index + 1;
    item.querySelector(".ranking__list-item-name").innerText = seed[index].name;
    item.querySelector(".ranking__list-item-subname").innerText =
      seed[index].subName;
    item.querySelector(".ranking__list-item-tag").innerText = seed[index].tag;
  });
});

const sliderItem = document.querySelectorAll(".slider__list-item");
const sliderControl = document.querySelectorAll(".slider__control");
const sliderThumb = document.querySelectorAll(".slider__list-thumb-item");
const sliderItemTitle = document.querySelectorAll(".slider__list-item-title");

sliderItem.forEach((slide, index) => {
  slide.style.backgroundImage = `url(${seed[index].thumb})`;
  sliderThumb[index].style.backgroundImage = `url(${seed[index].thumb})`;
  sliderItemTitle[index].getElementsByTagName("b")[0].innerText =
    seed[index].name;

  sliderItemTitle[index].getElementsByTagName("span")[0].innerText =
    seed[index].name;
});

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

// Scroll custom drag useing mouse
const createDefaultValue = (total, defaultValue) => {
  const arr = [];
  for (let i = 0; i < total; i++) arr.push(defaultValue);
  return arr;
};
const sliders = document.querySelectorAll(".films__recomend-list-film");
console.log(sliders.length);

const isDownArr = createDefaultValue(sliders.length, false);
const startXArr = createDefaultValue(sliders.length, 0);
const scrollLeftArr = createDefaultValue(sliders.length, 0);

sliders.forEach((slider, index) => {
  slider.addEventListener("mousedown", (e) => {
    isDownArr[index] = true;
    startXArr[index] = e.pageX - slider.offsetLeft;
    scrollLeftArr[index] = slider.scrollLeft;
  });
  slider.addEventListener("mouseup", (e) => {
    isDownArr[index] = false;
  });
  slider.addEventListener("mouseleave", (e) => {
    isDownArr[index] = false;
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDownArr[index]) return;
    e.preventDefault();
    const currX = e.pageX;
    const deltaX = currX - startXArr[index];
    slider.scrollLeft = scrollLeftArr[index] - deltaX;
  });
});

// Ranking
const rankingElement = document.querySelector(".ranking");
const rakingItems = rankingElement.querySelectorAll(".ranking__tab-item");
const rankingTab = rankingElement.querySelectorAll(".ranking__list");

let rakingTabActive = 0;
rankingTab[0].style.display = "block";
rankingTab[0].style.opacity = 1;

rakingItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    rakingTabActive = index;

    rankingTab.forEach((tab) => {
      tab.style.display = "none";
      tab.style.opacity = 0;
    });

    rakingItems.forEach((tab) =>
      tab.classList.remove("ranking__tab-item-active")
    );

    item.classList.add("ranking__tab-item-active");
    rankingTab[rakingTabActive].style.display = "block";
    rankingTab[rakingTabActive].style.opacity = 1;
  });
});
