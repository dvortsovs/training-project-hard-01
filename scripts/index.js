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
const themeSwitch = page.querySelector('.switcher__checkbox');
const mediaDark = window.matchMedia('(prefers-color-scheme: dark)');
const lightStyles = document.querySelector('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
const darkStyles = document.querySelector('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');


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

function switchTheme() {

  if (themeSwitch.checked) {
    darkStyles.media = 'all'
    lightStyles.media = 'not all'
  }else{
    darkStyles.media = 'not all'
    lightStyles.media = 'all'
  }
}

if (mediaDark.matches) {
  themeSwitch.checked = true;
}
else {
  themeSwitch.checked = false;
}

moreButton.addEventListener('click', () => headerButtonLink(note));
themeSwitch.addEventListener('change', switchTheme, false);


