let hambuga = document.querySelector('.hambuger');
let mobile = document.querySelector('.mobile-menu');
let close = document.querySelector('.close');
let body = document.querySelector('body');
let live = document.querySelector('.list-item');
let live2 = document.querySelector('.list-item2');
let live3 = document.querySelector('.list-item3');

hambuga.addEventListener('click', ()=>{
  mobile.classList.add('show');
  body.classList.add('hide');
});
close.addEventListener('click', ()=>{
mobile.classList.remove('show');
body.classList.remove('hide');
});
/*live.forEach(('item')=> {*/

  live.addEventListener('click', () =>{
  mobile.classList.remove('show');
  body.classList.remove('hide');
  });

  live2.addEventListener('click', () =>{
    mobile.classList.remove('show');
    body.classList.remove('hide');
  });

  live3.addEventListener('click', () =>{
    mobile.classList.remove('show');
    body.classList.remove('hide');
    });