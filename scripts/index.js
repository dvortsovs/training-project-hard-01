const bullets = ['Шоссе', 'Грэвел', 'ТТ'];

const page = document.querySelector('.page');
const roadsButton = page.querySelector('.header__nav-button_link_roads');
const bicyclesButton = page.querySelector('.header__nav-button_link_bicycles');
const traningButton = page.querySelector('.header__nav-button_link_traning');
const moreButton = page.querySelector('.first-screen__button');
const roads = page.querySelector('.road-slider');
const bicycles = page.querySelector('.bicycles');
const traning = page.querySelector('.traning');
const note = page.querySelector('.note');

const mySwiperRoad = new Swiper('.road-slider', {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
})

const mySwiperBicycles = new Swiper('.bicycles', {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + bullets[index] + "</span>";
    },
  },
})

function headerButtonLink(href) {
  const target = href.getBoundingClientRect().top + window.pageYOffset - 94;
  window.scrollTo({ top: target, behavior: "smooth"});
}

roadsButton.addEventListener('click', () => headerButtonLink(roads));
bicyclesButton.addEventListener('click', () => headerButtonLink(bicycles));
traningButton.addEventListener('click', () => headerButtonLink(traning));
moreButton.addEventListener('click', () => headerButtonLink(note));
