const page = document.querySelector('.page');
const roadsButton = page.querySelector('.header__nav-button_link_roads');
const bicyclesButton = page.querySelector('.header__nav-button_link_bicycles');
const traningButton = page.querySelector('.header__nav-button_link_traning');
const roads = page.querySelector('.road-slider');
const bicycles = page.querySelector('.bicycles');
const traning = page.querySelector('.traning');

const mySwiper = new Swiper('.road-slider', {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
})


function headerButtonLink(href) {
  href.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

roadsButton.addEventListener('click', () => headerButtonLink(roads));
bicyclesButton.addEventListener('click', () => headerButtonLink(bicycles));
traningButton.addEventListener('click', () => headerButtonLink(traning));

