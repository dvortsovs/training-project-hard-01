const bullets = ['Шоссе', 'Грэвел', 'ТТ'];

const page = document.querySelector('.page');
const roadsButton = page.querySelector('.header__nav-button_link_roads');
const bicyclesButton = page.querySelector('.header__nav-button_link_bicycles');
const traningButton = page.querySelector('.header__nav-button_link_traning');
const moreButton = page.querySelector('.first-screen__button');
const roads = page.querySelector('.road-slider');
const bicycles = page.querySelector('.bicycles');
const bicyclesSlider = page.querySelector('.bicycles__slider');
const bicyclesSlide = page.querySelector('.bicycles__slide');
const bicyclesPagination = page.querySelector('.bicycles__road');
const traning = page.querySelector('.traning');
const note = page.querySelector('.note');
const themeSwitch = page.querySelectorAll('.switcher__checkbox');
const mediaDark = window.matchMedia('(prefers-color-scheme: dark)');
const lightStyles = document.querySelector('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
const darkStyles = document.querySelector('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
const windowWidth = window.matchMedia("(max-width: 720px)");
const select = page.querySelector('.bicycles__select');
const options = page.querySelectorAll('.bicycles__option');

const mySwiperRoad = new Swiper('.road-slider', {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
})

function switchTheme() {
  if (windowWidth.matches) {
    if (themeSwitch[0].checked) {
      darkStyles.media = 'all'
      lightStyles.media = 'not all'
    } else {
      darkStyles.media = 'not all'
      lightStyles.media = 'all'
    }
  } else {
    if (themeSwitch[1].checked) {
      darkStyles.media = 'all'
      lightStyles.media = 'not all'
    } else {
      darkStyles.media = 'not all'
      lightStyles.media = 'all'
    }
  }
}

function defineBicyclesClass() {
  if (windowWidth.matches) {
    for (let i = 0; i < bicyclesSlider.children.length; i++) {
      bicyclesSlider.children[i].classList.add('swiper');
      for (let j = 0; j < bicyclesSlider.children[i].children.length; j++) {
        bicyclesSlider.children[i].children[j].classList.add('swiper-wrapper');
        for (let l = 0; l < bicyclesSlider.children[i].children[j].children.length; l++) {
          bicyclesSlider.children[i].children[j].children[l].classList.add('swiper-slide');
        }

      }
    }
  }
  else {
    bicycles.classList.add('swiper');
    bicyclesPagination.classList.add('swiper-pagination');
    bicyclesSlider.classList.add('swiper-wrapper');
    for (let i = 0; i < bicycles.children[2].children.length; i++) {
      bicyclesSlider.children[i].classList.add('swiper-slide')
    }
  }
}

function changeBicycleSection() {
  if (windowWidth.matches) {
    const mySwiperBicycles = new Swiper('.bicycles__slide_highway', {
      loop: true,
      spaceBetween: 30,
    });
    const mySwiperBicyclesTwo = new Swiper('.bicycles__slide_graval', {
      loop: true,
      spaceBetween: 30,
    });
    const mySwiperBicyclesThree = new Swiper('.bicycles__slide_tt', {
      loop: true,
      spaceBetween: 30,
    });
  }
  else {
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
    });
  }
}


if (windowWidth.matches) {
  if (mediaDark.matches) {
    themeSwitch[0].checked = true;
  }
  else {
    themeSwitch[0].checked = false;
  }

} else {
  if (mediaDark.matches) {
    themeSwitch[1].checked = true;
  }
  else {
    themeSwitch[1].checked = false;
  }

}


defineBicyclesClass();
changeBicycleSection();
moreButton.addEventListener('click', () => headerButtonLink(note));
themeSwitch[0].addEventListener('change', switchTheme, false);
themeSwitch[1].addEventListener('change', switchTheme, false);
