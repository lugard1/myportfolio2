const hambuga = document.querySelector('.hambuger');
const mobile = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');
const body = document.querySelector('body');
const live = document.querySelector('.list-item');
const live2 = document.querySelector('.list-item2');
const live3 = document.querySelector('.list-item3');

hambuga.addEventListener('click', () => {
  mobile.classList.add('show');
  body.classList.add('hide');
});
close.addEventListener('click', () => {
  mobile.classList.remove('show');
  body.classList.remove('hide');
});

live.addEventListener('click', () => {
  mobile.classList.remove('show');
  body.classList.remove('hide');
});

live2.addEventListener('click', () => {
  mobile.classList.remove('show');
  body.classList.remove('hide');
});

live3.addEventListener('click', () => {
  mobile.classList.remove('show');
  body.classList.remove('hide');
});