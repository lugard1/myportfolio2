const hamburger = document.querySelector('#hamburger');
const navBar = document.querySelector('#mobile-navbar');
const headline = document.querySelector('#headline');
const body = document.querySelector('body');
const projectsDiv = document.getElementById('works');
const popupOverlay = document.querySelector('#popup-overlay');
const projectCards = [
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/SnapshootPortfolio1.svg',
    technologies: ['html', 'css', 'javaScript', 'github'],
    'live link': 'https://lugard1.github.io/myportfolio2/',
    'source link': 'https://github.com/lugard1/myportfolio2',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/SnapshootPortfolio2.svg',
    technologies: ['html', 'css', 'javaScript', 'ruby'],
    'live link': 'https://lugard1.github.io/myportfolio2/',
    'source link': 'https://github.com/lugard1/myportfolio2',
  },
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/SnapshootPortfolio3.svg',
    technologies: ['html', 'css', 'javaScript'],
    'live link': 'https://lugard1.github.io/myportfolio2/',
    'source link': 'https://github.com/lugard1/myportfolio2',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
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
  projectCard.innerHTML = `<img class='project-screenshot' src='${
    project.image
  }' alt='screenshot of Tonic project'> <div class='project-div'> <h2 class='project-title'>${
    project.name
  }</h2> <p class='project-info'> <span class='project-company'>CANOPY</span> <span><img src='./images/Counter.png' alt=' '></span> <span class='project-type'>Back End Dev</span> <span><img src='./images/Counter.png' alt=' '></span> <span class='project-year'>2015</span> </p> <p class='project-description'>${
    project.description
  }</p> <ul class='project-languages'>${project.technologies
    .map((tech) => `<li class='language'>${tech}</li>`)
    .join('')}</ul> <button class='enabled-btn'>See Project</button> </div>`;
  projectsDiv.appendChild(projectCard);
});
// eslint-disable-next-line no-unused-vars
const closeModal = () => {
  popupOverlay.style.display = 'none';
};

window.onclick = function modal(e) {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
};

// Add popup modal dynamically
function populatePopupWindow(index) {
  const myPopup = projectCards[index];
  popupOverlay.innerHTML = ` <div id="popup-content">
  <div id="popup-title">
    <h2>${myPopup.name}</h2>
    <div class="close-btn" onclick="closeModal()">&times;</div>
  </div>
  <p class="project-info">
    <span class="project-company">CANOPY</span>
    <span><img src="./images/Counter.png" alt="counter"></span>
    <span class="project-type">Back End Dev</span>
    <span><img src="./images/Counter.png" alt="counter"></span>
    <span class="project-year">2015</span>
  </p>
  <img id="popup-img" src="${myPopup.image}" alt="project screenshot">
  <div id="popup-details">
    <p id="popup-description">${myPopup.description}</p>
    
      <div id="btn-container">
      <button class="btn-main"> <span class="btn-popup">See Live</span>
      <a  target="_blank" rel="noopener" href="${myPopup['live link']}">

      <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
        <button class="btn-main"><span class="btn-popup">See Source</span>
        <a target="_blank" rel="noopener" href="${myPopup['source link']}"><i class="fa-brands fa-github"></i></a> </button>
      </div>
     
    
  </div>
</div>`;
  popupOverlay.style.display = 'block';
}

const projectBtn = document.querySelectorAll('.project .enabled-btn');
projectBtn.forEach((btn) => btn.addEventListener('click', () => {
  popupOverlay.classList.add('active');
  body.classList.add('active');
  populatePopupWindow(Array.prototype.indexOf.call(projectBtn, btn));
}));

function showMessage(input, message) {
  const msg = input.parentNode.querySelector('small');
  const emailInput = document.getElementById('email');
  msg.innerText = message;

  // modify the class for the input

  msg.className = 'error';
  emailInput.className = 'error-box';
}
// Function to show error

function showError(input, message) {
  return showMessage(input, message, false);
}

// Check if email is in lowercase

function validateEmail(input, invalidMsg) {
  const email = input.value.trim();
  if (!(email === String(email).toLowerCase())) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#contact-form');

const EMAIL_INVALID = 'Enter email in lowercase';

form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // validate the form

  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);

  // if valid, submit the form.

  if (emailValid) {
    form.submit();
  }
});

const formData = {
  name: '',
  email: '',
  message: '',
};

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msgInput = document.getElementById('message');

nameInput.addEventListener('input', () => {
  formData.name = nameInput.value;
  localStorage.setItem('data', JSON.stringify(formData));
});

emailInput.addEventListener('input', () => {
  formData.email = emailInput.value;
  localStorage.setItem('data', JSON.stringify(formData));
});

msgInput.addEventListener('input', () => {
  formData.message = msgInput.value;
  localStorage.setItem('data', JSON.stringify(formData));
});

if (localStorage.getItem('data')) {
  let formObject = localStorage.getItem('data');
  formObject = JSON.parse(formObject);

  document.getElementById('name').value = formObject.name;
  document.getElementById('email').value = formObject.email;
  document.getElementById('message').value = formObject.message;
}