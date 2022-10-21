const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('#mobile-navbar');
const headline = document.querySelector('#headline');

const body = document.querySelector('body');

const projectsDiv = document.getElementById('works');
const popupOverlay = document.querySelector('#popup-overlay');
const closeBtn = document.querySelector('.close-btn');
const popupHeader = document.querySelector('#popup-content h2');
const popupImg = document.querySelector('#popup-img');
const popupDescription = document.querySelector('#popup-description');
const liveLink = document.querySelector('.live-link');
const sourceLink = document.querySelector('.source-link');
const skillsList = document.querySelector('#popup-skills-buttons');
const popupBg = document.querySelector('#popup-bg');

const projectCards = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/SnapshootPortfolio1.svg',
    technologies: ['html', 'css', 'javaScript', 'github'],
    'live link': 'https://lugard1.github.io/myportfolio2/',
    'source link': 'https://github.com/lugard1/myportfolio2',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/SnapshootPortfolio2.svg',
    technologies: ['html', 'css', 'javaScript', 'ruby'],
    'live link': 'https://lugard1.github.io/myportfolio2/',
    'source link': 'https://github.com/lugard1/myportfolio2',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/SnapshootPortfolio3.svg',
    technologies: ['html', 'css', 'javaScript'],
    'live link': 'https://lugard1.github.io/myportfolio2/',
    'source link': 'https://github.com/lugard1/myportfolio2',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/SnapshootPortfolio4.svg',
    technologies: ['html', 'css', 'javaScript', 'bootstrap'],
    'live link': 'https://lugard1.github.io/myportfolio2/',
    'source link': 'https://github.com/lugard1/myportfolio2',
  },
];


hamburger.addEventListener('click', () => {
  headline.classList.toggle('active');
  hamburger.classList.toggle('active');
  navBar.classList.toggle('active');
  body.classList.toggle('active');
});

document.querySelectorAll('.mobile-nav-link').forEach((link) => link.addEventListener('click', () => {
  headline.classList.remove('active');
  hamburger.classList.remove('active');
  navBar.classList.remove('active');
  body.classList.remove('active');
}));

projectCards.forEach((project) => {
  const projectCard = document.createElement('div');
  projectCard.className = 'project';
  projectCard.innerHTML = `<img class="project-screenshot" src="${project.image}" alt="screenshot of Tonic project"> <div class="project-div"> <h2 class="project-title">${project.name}</h2> <p class="project-info"> <span class="project-company">CANOPY</span> <span><img src="./images/Counter.png" alt=" "></span> <span class="project-type">Back End Dev</span> <span><img src="./images/Counter.png" alt=" "></span> <span class="project-year">2015</span> </p> <p class="project-description">${project.description}</p> <ul class="project-languages">${project.technologies.map((tech) => `<li class='language'>${tech}</li>`).join('')}</ul> <button class="enabled-btn">See Project</button> </div>`;
  projectsDiv.appendChild(projectCard);
});

const ul = document.createElement('ul');
ul.className = 'project-languages';
skillsList.prepend(ul);

function populatePopupWindow(index) {
  ul.innerHTML = '';
  popupHeader.innerText = projectCards[index].name;
  popupImg.src = projectCards[index].image;
  popupDescription.innerText = projectCards[index].description;
  projectCards[index].technologies.forEach((skill) => {
    const li = document.createElement('li');
    li.className = 'language';
    li.innerText = skill;
    ul.appendChild(li);
  });
  liveLink.href = projectCards[index]['live link'];
  sourceLink.href = projectCards[index]['source link'];
}

const projectBtn = document.querySelectorAll('.project .enabled-btn');
projectBtn.forEach((btn) => btn.addEventListener('click', () => {
  popupOverlay.classList.add('active');
  body.classList.add('active');
  popupBg.classList.add('active');
  populatePopupWindow(Array.prototype.indexOf.call(projectBtn, btn));
}));

closeBtn.addEventListener('click', () => {
  popupOverlay.classList.remove('active');
  body.classList.remove('active');
  popupBg.classList.remove('active');
});
