import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initMap, mapContainer} from './vendor/yandex-map';
// ---------------------------------

const burgerContainer = document.querySelector('.burger');
const burgerWrapper = document.querySelector('.burger__wrapper');
const burgerBtn = document.querySelector('.burger__button');
const header = document.querySelector('.header__container');
const mainBlock = document.querySelector('.main-block');

window.addEventListener('DOMContentLoaded', () => {
  if (burgerBtn) {
    initBurger();
    checkBreakpointBurger();
  }

  if (mainBlock) {
    setHeaderHeight();
  }

  if (mapContainer) {
    initMap();
  }

  window.addEventListener('resize', () => setHeaderHeight());


  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    if (burgerContainer) {
      burgerContainer.classList.remove('burger--no-js');
    }
  });
});


const initBurger = () => {
  burgerContainer.classList.add('burger--close');
  burgerBtn.addEventListener('click', toggleBurger);
};

const toggleBurger = () => {
  burgerContainer.classList.toggle('burger--close');
  burgerContainer.classList.toggle('burger--open');
  document.body.classList.toggle('scroll-lock');
};

const burgerClickHandler = (e) => {
  if (e.target.classList.contains('burger__wrapper')) {
    toggleBurger();
  }
  if (e.target.classList.contains('navigation__link')) {
    toggleBurger();
  }
};

const setHeaderHeight = () => {
  let headerHeight = header.offsetHeight;
  mainBlock.style.setProperty('--headerHeight', (headerHeight + 38) + 'px');
  mainBlock.style.setProperty('--padding-top', (headerHeight + 194) + 'px');
};

const breakpoint = window.matchMedia('(min-width:768px)');
const checkBreakpointBurger = () => {
  if (breakpoint.matches) {
    burgerBtn.removeEventListener('click', toggleBurger);
  } else {
    burgerWrapper.addEventListener('click', (e) => burgerClickHandler(e));
  }
};

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
